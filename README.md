# Portfolio Site

Static portfolio site built with Astro and Tailwind. Deployed via Cloudflare Pages from GitHub.

## Local development

```bash
npm install        # first time only
npm run dev        # starts dev server at http://localhost:4321
npm run build      # production build (outputs to ./dist)
npm run preview    # preview production build locally
```

## Project structure

```
src/
  content/projects/       — case studies (one .md or .mdx per case)
  pages/
    index.astro           — homepage
    work/index.astro      — full work archive page
    work/[slug].astro     — individual case study template
    about.astro
    resume.astro
  components/             — reusable Astro components
  layouts/Base.astro      — site-wide layout (nav, footer, meta tags)
  styles/global.css       — Tailwind theme + Markdown prose styles
public/
  cv.pdf                  — downloadable resume (replace this file to update)
  llms.txt                — LLM-readable site summary
  robots.txt              — crawler permissions
```

## Common tasks

### Add a new case study

1. Create `src/content/projects/your-slug.md` (or `.mdx` if you need components)
2. Fill in the frontmatter (title, summary, company, role, period, order, tags, featured)
3. Write the body in Markdown
4. `git add . && git commit -m "Add case: your title" && git push`
5. Cloudflare Pages rebuilds automatically (~30s)

The URL will be `/work/your-slug` based on the filename.

### Edit an existing case study

1. Open `src/content/projects/whatever.md`
2. Edit
3. `git add . && git commit -m "Update case: whatever" && git push`

### Replace the resume PDF

1. Replace `public/cv.pdf` with the new file (keep the same filename)
2. `git add . && git commit -m "Update resume" && git push`

### Edit the homepage hero or about copy

Open `src/pages/index.astro` or `src/pages/about.astro` and edit directly.

## Frontmatter schema

```yaml
---
title: "Case study title"
summary: "1-2 sentence summary shown on home + case header"
company: "Company name"
role: "Your role"
period: "2024 – 2025"
order: 1                 # lower = appears first
tags: ["Growth", "AI"]
featured: true           # set false to hide from homepage but keep at /work/slug
---
```

## Replace before going live

Search and replace these placeholders:

- `G-XXXXXXXXXX` in `src/layouts/Base.astro` — your GA4 measurement ID
- `https://example.com` in `astro.config.mjs` and `public/llms.txt` — your real domain
- `REPLACE` in `src/components/Footer.astro` — your LinkedIn and GitHub handles
- `REPLACE_WITH_YOUR_HANDLE` in `src/layouts/Base.astro` — same
- Cloudflare Web Analytics token (commented out in Base.astro) — after deploy
