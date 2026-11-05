@AGENTS.md

# sajinphilip.com — project context

Sajin Philip's personal site, rebuilt from Wix (www.sajinphilip.com) as a Next.js site. Design leader (15+ yrs, 120M+ users, 3 teams built) who also ships AI-built products. Primary audience: hiring managers for Head of Design / Director roles, plus peers and mentees.

Design prototype (reference for layout and interaction): https://claude.ai/artifact/DjnjDQHK9VcNQy5EcMQmWr — the "Homepage prototype — full-page scroll" board is the source of truth for the homepage.

## Working with Sajin

- He is a senior designer: keep replies short and direct, proceed on reasonable assumptions, say plainly what you could not do.
- Change only what he asks. Do not add sections, links or items he didn't ask for (e.g. don't invent extra buttons or chips).
- Copy in `src/content/home.ts` is a draft he edits; keep his own wording when he supplies it.

## Homepage decisions (all built)

Desktop (≥901px wide, ≥640px tall) is full-page: one wheel/swipe/key = one screen, dots on the right. Smaller screens scroll normally. Steps:

1. **Hero** — full-bleed looping muted video (`public/media/hero-loop.mp4`, Gemini watermark removed, 720p — a 1080p export is wanted). Serif headline bottom-left, stats bottom-right. Static, no slider.
2. **Built with AI intro** — overlay on the builds screen, centred, Inter Tight display type: "I design, build and ship live products with AI." Next scroll lifts the overlay.
3. **AI builds showcase** — full-bleed image per build, text pinned bottom-left, tabs along the bottom, auto-advance 8s (only when on screen; pauses over the tabs only, because the section fills the screen; stops after a tab click). Builds: MatchBrain (real store links), GlassScore, StayAlt, The New Designer, Breathe Easy.
   **A/B test, paused** (`src/lib/buildsTest.ts`): everyone now gets version 2; `?builds=1` shows version 1 for that visit only. When it ran, desktop visitors got version 1 (the slider above) or version 2 (`BuildsBento`: full-bleed bento on a 12×6 grid, 1px lines, sharp corners, every build visible, each tile a different size but all landscape or near-square, because the build images are 16:9; each build's `focus` in `home.ts` sets what a crop keeps). The large tile starts on StayAlt; every homepage visit shifts all builds one slot, so the placement changes each time. Clarity tag `builds_version`, events `builds_v1_click` / `builds_v2_click` / `builds_phone_click`. Phones are not in the test: every phone visitor gets the builds as a plain list: 16:9 picture edge to edge, text underneath, a 1px line between builds, no boxes; the order rotates the same way.
4. **Case studies** — white section, one screen: list of 5 on the left, selected case on the right with a 16:9 cover. Max width 1440px.
5. **How I work** — dark, "How AI fits into my workflow" with the line below it: one box of three columns split by lines, one per phase (Discover & Define, Create & Design, Validate & Evolve), each with a large number at the top, then name, line, steps and one AI line; a full-width black Trust, Safety and AI Governance bar below. Phones stack the columns.
6. **My writing** — white, the AI building and Product thinking link lists from the old How I work cards.
7. **Closing** — dark, 70% Leader / 30% Designer bar, leadership copy and links, then the footer. `Footer` shows on every page through `SiteFooter` in the layout; the homepage carries it inside this screen.

Desktop wheel handling: one swipe = one move. A swipe ramps up, peaks and fades; a new push inside the fade counts only if it is at least `PUSH_MIN` (30) and three times the fade's lowest point, because trackpad momentum jitters (3, 6, 2, 5…) and that jitter once fired two or three extra moves.

The hero's robot "Coming Soon" poster links to Sajin's LinkedIn post about the robot (`hero.comingSoon.href`).

External links: `ExternalLinks` (in the root layout) opens every off-site link in a new tab, including links inside Markdown posts.

Only the hero and builds are full width; content sections cap at 1440px.

Navigation: fixed logo + menu icon on every page; the icon opens a full-screen menu with the old site's items (`menu` in `src/content/home.ts`). `/leadership` is built and also holds the old About content (`/about` redirects to it). `/writing` lists every Markdown file in `src/content/posts` (39 posts copied from Wix; add a file to publish, no database) and replaces UX + AI. Resume and For agents sit small at the bottom of the menu; inner pages scroll normally and white sections carry `data-light` so the header follows them.

## Design system

- Type: Source Serif 4 (headlines), Source Sans 3 (UI/body), Inter Tight (builds intro only), Caveat (menu quote only). Self-hosted via @fontsource — no Google Fonts network calls.
- Colour: night `#0E1316`, paper `#FFFFFF`, ink `#111111`, muted `#5C5C5C`, line `#E6E6E6`. No grey section backgrounds, except `--night-soft` `#1A2227` for the Leadership team band.
- Tokens live in `src/app/globals.css`.
- Logo: `src/components/Logo.tsx` is a vector trace of a 32px file — replace with the master when Sajin sends it.

## Open items

- `/work` is the case study index, then the Built with AI intro pinned while a one-screen bento grid of six builds slides over it. Better Word copy is placeholder; Sajin will supply its image.
- `/work/*` shows the Markdown files in `src/content/work`, each an end-to-end case study in six chapters: Understand, Define, Ideate, Design, Validate, Outcome. Generated artefacts must come from real project data and say so; proposed measures are labelled as proposed.
- `public/resume.pdf` is the current Wix resume; an ATS/agentic-focused rewrite comes later.
- Images: case study covers, app screenshots.
- Content gaps: measured results for most case studies, WhatsApp Poll problem line.
- GlassScore image shows Premier League, Arsenal, Man City and Meta marks — flagged as a trademark risk; consider fictional teams.
- Deploy: Vercel (Sajin will import the repo), then move the domain off Wix.
