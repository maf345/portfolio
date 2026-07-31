# Portfolio — Mehedi Afzal Farazi (maf345)

Personal portfolio and technical blog built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **MDX**.

## Stack

- Next.js App Router + `react-markdown` + `gray-matter`
- Tailwind CSS + dark/light mode
- Vercel Analytics
- Resend contact form · Giscus comments · RSS feed

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env.local` and configure:

| Variable | Purpose |
|----------|---------|
| `RESEND_API_KEY` | Contact form email delivery |
| `NEXT_PUBLIC_GISCUS_*` | Blog comments via GitHub Discussions |
| `NEXT_PUBLIC_OPEN_TO_WORK` | Show availability badge |
| `NEXT_PUBLIC_NEWSLETTER_URL` | Footer newsletter link |
| `NEXT_PUBLIC_CALENDLY_URL` | Contact page booking link |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for SEO/sitemap |

## Project structure

```
app/           Pages, sitemap, robots, RSS, OG images
components/    Layout, blog, projects, engagement
content/       Blog posts and project case studies (.mdx)
lib/           Site config, SEO helpers, content loaders
public/        Static assets (cv.pdf, images)
```

## SEO & discovery

- `/sitemap.xml` — auto-generated from pages and content
- `/robots.txt` — search engine rules
- `/feed.xml` — RSS for blog posts
- Open Graph images — dynamic per blog post and project
- JSON-LD structured data on home, blog, and project pages
