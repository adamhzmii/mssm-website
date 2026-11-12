# MSSM design system

The visual rules for this site. Read this before changing how anything looks.

## The idea

MSSM's logo is three linked hexagons: Manchester's honeycomb, drawn in the colours of
the Malaysian flag. The site opens that logo up. The hexagon is the one signature
shape, and it is reserved for people: the three photographs in the home-page hero and
every committee portrait. Everything else is rectangles with a 16–24px radius.

Photographs lead. Every page that can show real MSSM people does so, and nothing on
the site is stock or illustrated.

## Colour

All colours are sampled from the logo and defined as tokens in `src/app/globals.css`.

| Token | Value | Job |
|---|---|---|
| `indigo-900` | `#1b1749` | The dark field: header, page heads, hero, freshers band |
| `indigo-950` | `#131033` | Footer, scrolled header, lightbox |
| `indigo-800` | `#28235e` | Logo indigo: dark buttons, big numerals |
| `indigo-700` | `#3b3585` | Links on white |
| `indigo-50` / `100` / `200` | tints | Quiet surfaces and hairlines |
| `yellow` | `#fecc08` | The action colour: primary buttons, one membership band per page |
| `red` | `#cf2129` | Category labels and the partner discounts. Never a background |
| `ink` | `#17143d` | Body text |
| `muted` | `#55527c` | Secondary text (indigo-tinted, never grey) |

Orange and plum appear only inside the three hexagon-outline gradients (`HexRing`).
A page gets at most one yellow field. There is no dark mode.

## Type

- **Gabarito** (800 for headings, 700 for sub-headings): display. Tracking −0.012 to −0.028em.
- **Hanken Grotesk**: everything else, 17px / 1.6.

Both are self-hosted variable fonts in `src/app/fonts`. Use the classes `.display`,
`.h1`, `.h2`, `.h3`, `.lead` and `.meta` rather than ad-hoc sizes. Headings end with a
full stop when they are a statement ("Latest events.").

## Layout

- One content edge: `.wrap` (max 78rem, fluid gutters). Nothing sits outside it except
  full-bleed colour fields.
- Sections are separated by space (py-20 to py-28) and by changes of ground, not by
  rules or boxes. Lists use hairlines (`border-indigo-100`), not cards.
- Every inner page opens with `PageHead`: an indigo band with the title, one line of
  introduction, and the outlined hexagons bleeding off the right edge.

## Motion

- Entrances: the hero and page heads rise once on load (`animate-rise`); the hero's
  hexagon outlines draw themselves in. Nothing fades in on scroll.
- Hover: photographs inside links scale to 1.035; arrows nudge 3px; buttons press to
  0.97 on click. Hover effects are gated behind `(hover: hover)`.
- Easing is `--ease-out` (`cubic-bezier(0.23, 1, 0.32, 1)`); UI transitions stay under 300ms.
- `prefers-reduced-motion` switches all of it off.

## Don't

- No eyebrow labels above headings, no numbered section markers, no gradient text.
- No emoji as icons (they stay only inside the society's own event write-ups). Icons
  are Lucide; brand marks are Font Awesome brands via `react-icons`.
- No hexagons as decoration on photographs of things; no hexagon cards or buttons.
- No drop shadows on cards. Depth comes from colour fields.
- Don't recolour sponsor, partner or affiliate logos. They sit whole on white tiles (`LogoTile`).
