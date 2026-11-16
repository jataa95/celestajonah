# Celesta Jonah — portfolio

Portfolio website for Nigerian portrait artist **Celesta Jonah** (Jonah Abasiekeme).
Built with Next.js (App Router), fully static.

## Pages

- `/` — wordmark + parallax collage, scroll-lit statement, selected work, studio reel, journal
- `/works` and `/works/[slug]` — all works and a detail page per work (process images, studio film, enquiry button)
- `/journal` and `/journal/[slug]` — studio notes (underpainting, 480 hours, the red wall)
- `/about`, `/contact`

## Editing content

All text, titles, images and videos are in **`lib/content.ts`**.
Work titles are working titles. Replace them with the real ones, along with sizes and years.

Media lives in `public/`:

- `public/works/` — artworks (cropped from photos; replace with high-res scans when available)
- `public/stills/`, `public/scenes/` — process stills and exhibition photos
- `public/video/` — studio films (TikTok end-cards trimmed)

## Develop

```bash
npm install
npm run dev
```

Deploy on Vercel by importing this repository; no configuration needed.
