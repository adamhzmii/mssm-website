# MSSM website

The website of the **Malaysian Students’ Society of Manchester**: who we are, the
committee, events, sponsors, partners, affiliates, freshers’ FAQs and links.

Built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS 4. Every
page is static: there is no database and nothing to log in to. Content lives in this
repository as Markdown and small data files.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run lint
```

## Updating the site

Most changes are a one-file edit. Commit, push, and the host redeploys.

| To change | Edit |
|---|---|
| An event write-up | `content/events/<slug>.md` |
| A freshers’ FAQ answer | `content/faqs/<topic>.md` |
| The committee (new year, new faces) | `src/data/committees.json`, then `currentCommitteeYear` in `src/data/site.ts` |
| Sponsors and their tiers | `src/data/sponsors.ts` |
| Partner discounts | `src/data/partners.ts` |
| Affiliates | `src/data/affiliates.ts` |
| The Links page (sign-up forms, documents, galleries) | `src/data/links.ts` |
| Membership form, price, email, socials, booklet link | `src/data/site.ts` |

### Adding an event

1. Put the photographs in `public/media/events/<slug>/`, named `01.jpg`, `02.jpg`, …
   (`.jpg` or `.png`, any size).
2. Run `npm run images`. It converts them to WebP, makes phone-sized copies, records
   them in `src/data/media.json` and removes the originals.
3. Create `content/events/<slug>.md`:

   ```md
   ---
   title: "Deepavali Dinner 2026"
   date: 2026-11-05
   sortDate: 2026-11-05
   season: "2026/27"
   category: Festivals
   cover: "/media/events/deepavali-dinner-2026/01"
   gallery:
     - /media/events/deepavali-dinner-2026/01
     - /media/events/deepavali-dinner-2026/02
   ---

   The write-up, in plain Markdown.
   ```

   `category` is one of Festivals, Freshers, Sports, MNight, Careers, Socials or
   Meetings. `season` is the academic year. If you only know the year, set
   `date: null` and add `dateLabel: "2026"`; `sortDate` still decides the order.

The three newest events appear on the home page automatically.

### A new committee

Add the portraits to `public/media/committee/<year>/` (e.g. `2026-27`), run
`npm run images`, add a new entry at the top of `src/data/committees.json`, and set
`currentCommitteeYear` in `src/data/site.ts`. The previous committee then moves to
the Former committees page by itself.

## How it is put together

```
content/            Markdown: event write-ups and FAQ topics
public/media/       Optimised images (WebP) for events, committee, logos, links
scripts/images.mjs  The image converter behind `npm run images`
src/app/            Pages (one folder per route)
src/components/     Shared components
src/data/           Site facts, people, sponsors, partners, affiliates, links
src/lib/            Markdown and image-manifest loaders
DESIGN.md           The visual rules: colour, type, layout, motion
```

Old addresses from the previous WordPress site (`/about-us-2`, `/2026/11/10/mkita/`,
and so on) redirect to their new pages; the map is in `next.config.ts`.

The contact form has no server behind it: it opens the visitor’s mail app with the
message addressed to the committee.

## Hosting

Any host that runs Next.js works. On Vercel: import the repository and deploy, with no
settings to change. Then point `mssmanchester.co.uk` at it.

## Working on this with Claude Code

- `.claude/skills/` holds the design skills used to build the site:
  [emilkowalski/skills](https://github.com/emilkowalski/skills),
  [impeccable](https://github.com/pbakaus/impeccable) and
  [taste-skill](https://github.com/Leonxlnx/taste-skill). `skills-lock.json` pins
  them; `npx skills update` refreshes them.
- `.mcp.json` sets up the Playwright and Figma MCP servers. Figma asks you to sign in
  the first time (`/mcp` in Claude Code).
- To add Perplexity, get an API key and add this under `mcpServers` in `.mcp.json`:

  ```json
  "perplexity": {
    "command": "npx",
    "args": ["-y", "@perplexity-ai/mcp-server"],
    "env": { "PERPLEXITY_API_KEY": "${PERPLEXITY_API_KEY}" }
  }
  ```
