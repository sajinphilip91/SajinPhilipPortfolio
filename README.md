# sajinphilip.com

Personal site of Sajin Philip. Next.js (App Router), plain CSS modules, self-hosted fonts.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Where things live

- `src/content/home.ts`: all homepage copy, links and build/case-study data. Edit text here.
- `src/components/home/`: homepage sections (Hero, Builds, CaseStudies, Approach) and the full-page scroll controller (`HomePage.tsx`).
- `public/media/`: hero video, poster and build images.
- `next.config.ts`: redirects from the old Wix URLs.

## Behaviour

- Desktop (at least 901px wide and 640px tall): one scroll = one screen. Wheel, trackpad, arrow keys, Page Up/Down, Space and the dots on the right all work.
- Smaller screens: normal scrolling.
- Reduced-motion users get a still hero and no slider auto-advance.

## To do

- Footer
- Inner pages: /work/*, /builds/*, /writing/*, /about, /for-agents (old Wix URLs already redirect to these)
- `public/resume.pdf`
- Real images for Breathe Easy, The New Designer and the case study covers
