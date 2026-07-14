# Michael Emmanuel Inalegwu — Portfolio

A premium, agency-grade personal portfolio built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

> Digital problem solver — Web Developer · Frontend Developer · UI/UX Designer · Data Analyst · Graphic Designer · SEO Specialist · Digital Strategist. Based in Lafia, Nasarawa State, Nigeria.

## Features

- Dark mode by default (OLED-optimized) with a light theme toggle
- Custom cursor, animated loading screen, smooth scrolling (Lenis), page transitions
- Command palette (⌘K) + keyboard shortcuts, scroll progress, back-to-top, floating contact, cookie consent
- Scroll-triggered reveals, parallax, magnetic buttons, 3D tilt cards, particle field, aurora backgrounds
- 12+ pages: Home, About, Services, Portfolio, Case Studies, Experience, Skills, Testimonials, Blog, Contact, Privacy, Terms, 404
- 10 in-depth case studies + galleries for graphic design, data analytics, copywriting, SEO, and IT support
- Fully responsive, accessible (semantic landmarks, focus states, reduced-motion), and SEO-optimized (metadata, Open Graph, JSON-LD, sitemap, robots, dynamic OG image)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Swapping in your real content

All content is data-driven and lives in `content/`:

| File | Contents |
|------|----------|
| `content/projects.ts` | 10 case studies (overview, problem, research, solution, process, tech, results, gallery, feedback, links) |
| `content/services.ts` | 14 services |
| `content/skills.ts` | Skill groups + toolbox |
| `content/testimonials.ts` | Client testimonials |
| `content/blog.ts` | 15 blog posts |
| `content/experience.ts` | Timeline, certifications, values |
| `content/galleries.ts` | Graphic design, analytics, copywriting, SEO, IT support galleries |
| `lib/site.ts` | Name, role, socials, stats, contact details, `url` (set your deployed domain) |

**Photos:** replace `public/assets/headshot.webp` (hero) and `public/assets/portrait-alt.jpg` (about). Layout is unchanged when you swap them.

**Project media:** the mock visuals in `components/mock/` render device frames, dashboards, browser mockups, and brand boards from code. To use real screenshots, drop images in `public/assets/` and reference them from the relevant `content/` entry.

**Links:** each case study has `links.live` and `links.github` — set them to your real URLs. Placeholder PDFs/videos can be linked the same way.

## Deployment

Optimized for **Vercel**. Push to a Git repo and import, or run `vercel`. Set the production domain in `lib/site.ts` (`site.url`) so canonical URLs, sitemap, and Open Graph resolve correctly.

## Tech

Next.js · React 19 · TypeScript · Tailwind CSS · Framer Motion · Lenis · next-themes
