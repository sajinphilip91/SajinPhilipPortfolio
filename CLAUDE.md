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
3. **AI builds showcase** — full-bleed image per build, text pinned bottom-left, tabs along the bottom, auto-advance 8s (only when on screen; pause on hover; stops after a tab click). Builds: MatchBrain (real store links), GlassScore, StayAlt, The New Designer, Breathe Easy.
4. **Case studies** — white section, one screen: list of 5 on the left, selected case on the right with a 16:9 cover. Max width 1440px.
5. **How I work** — dark section, max width 1440px. Header "How I am building digital products and services with AI and agents". Three equal cards; links bottom-aligned; no top/bottom rule on link lists. AI building + Product thinking cards carry the links from the old homepage. Leadership card is white, shows a static 70% Leadership / 30% Designer figure (not clickable) with one paragraph and three links (Leadership profile, Mentoring on ADPList, Invite me to speak).

Only the hero and builds are full width; content sections cap at 1440px.

Navigation: fixed logo + menu icon on every page; the icon opens a full-screen menu with the old site's items (`menu` in `src/content/home.ts`). `/leadership` is built and also holds the old About content (`/about` redirects to it); inner pages scroll normally and white sections carry `data-light` so the header follows them.

## Design system

- Type: Source Serif 4 (headlines), Source Sans 3 (UI/body), Inter Tight (builds intro only), Caveat (menu quote only). Self-hosted via @fontsource — no Google Fonts network calls.
- Colour: night `#0E1316`, paper `#FFFFFF`, ink `#111111`, muted `#5C5C5C`, line `#E6E6E6`. No grey section backgrounds.
- Tokens live in `src/app/globals.css`.
- Logo: `src/components/Logo.tsx` is a vector trace of a 32px file — replace with the master when Sajin sends it.

## Open items

- Footer (next task).
- Inner pages: `/work/*`, `/writing/*`, `/for-agents` (+ `llms.txt`). Old Wix URLs already redirect to these in `next.config.ts`.
- `public/resume.pdf` is the current Wix resume; an ATS/agentic-focused rewrite comes later.
- Images: case study covers, app screenshots.
- Content gaps: measured results for most case studies, WhatsApp Poll problem line, Dropshipping details (password-protected on Wix).
- GlassScore image shows Premier League, Arsenal, Man City and Meta marks — flagged as a trademark risk; consider fictional teams.
- Deploy: Vercel (Sajin will import the repo), then move the domain off Wix.
