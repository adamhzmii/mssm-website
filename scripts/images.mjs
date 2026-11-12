#!/usr/bin/env node
/**
 * Prepares new photographs for the site.
 *
 *   npm run images
 *
 * Finds every .jpg, .jpeg or .png under public/media, converts it to WebP (a
 * large version and, for big pictures, a 640px one for phones), records its
 * size and placeholder colour in src/data/media.json, then removes the original.
 *
 * Folder decides treatment: /logos stays small and sharp, /committee is sized
 * for portraits, everything else is treated as a photograph.
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(import.meta.dirname, "..");
const mediaDir = path.join(root, "public", "media");
const manifestPath = path.join(root, "src", "data", "media.json");
const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));

const presets = [
  { test: /\/logos\//, max: 720, small: 0, quality: 86 },
  { test: /\/committee\//, max: 640, small: 0, quality: 78 },
  { test: /\/links\//, max: 900, small: 0, quality: 80 },
  { test: /./, max: 1600, small: 640, quality: 74 },
];

const walk = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const full = path.join(dir, e.name);
    return e.isDirectory() ? walk(full) : /\.(jpe?g|png)$/i.test(e.name) ? [full] : [];
  });

const hex = ({ r, g, b }) => "#" + [r, g, b].map((v) => Math.round(v).toString(16).padStart(2, "0")).join("");

const sources = walk(mediaDir);
if (sources.length === 0) {
  console.log("Nothing to do: no .jpg or .png files under public/media.");
  process.exit(0);
}

for (const file of sources) {
  const base = file.replace(/\.(jpe?g|png)$/i, "");
  const key = path.relative(path.join(root, "public"), base).split(path.sep).join("/");
  const { max, small, quality } = presets.find((p) => p.test.test(`/${key}`));
  const img = sharp(file, { failOn: "none" }).rotate();

  const large = await img
    .clone()
    .resize({ width: max, height: max, fit: "inside", withoutEnlargement: true })
    .webp({ quality, effort: 5 })
    .toBuffer({ resolveWithObject: true });
  fs.writeFileSync(`${base}.webp`, large.data);

  const entry = { w: large.info.width, h: large.info.height };
  if (small && large.info.width > small * 1.25) {
    await img.clone().resize({ width: small }).webp({ quality: quality - 4, effort: 5 }).toFile(`${base}-sm.webp`);
    entry.sm = small;
  }
  const stats = await sharp(large.data).flatten({ background: "#ffffff" }).resize(8, 8, { fit: "fill" }).stats();
  entry.c = hex(stats.dominant);

  manifest[key] = entry;
  fs.rmSync(file);
  console.log(`${key}  ${entry.w}×${entry.h}`);
}

fs.writeFileSync(manifestPath, JSON.stringify(manifest));
console.log(`\n${sources.length} image${sources.length === 1 ? "" : "s"} ready. Use the paths above (no extension) in your content.`);
