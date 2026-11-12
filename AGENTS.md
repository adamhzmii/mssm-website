<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# MSSM website

- Read `DESIGN.md` before changing anything visual. It holds the colour, type, layout and motion rules.
- Content is in `content/` (Markdown) and `src/data/` (TypeScript and JSON); see the table in `README.md`.
- Images are pre-optimised WebP listed in `src/data/media.json`. Add new ones with `npm run images` and render them with `src/components/Photo.tsx`, not `next/image`.
- The society's own words (event write-ups, FAQ answers, sponsor descriptions) are migrated from the old site. Don't rewrite them or invent facts about the society.
