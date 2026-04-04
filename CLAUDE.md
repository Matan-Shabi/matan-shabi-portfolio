
Read ai-docs/seo-llmo-guide.md for SEO/LLMO practices.

Read ai-docs/aws-spa-deployment-guide.md for AWS SPA deployment.

Read ai-docs/google-analytics-guide.md for Google Analytics 4 implementation.

Read ai-docs/web-accessibility-guide.md for web accessibility (WCAG 2.2).

Read ai-docs/web-performance-guide.md for web performance and Core Web Vitals.

---

## Site context

**Framework:** Next.js 15 (App Router) — server-rendered, not a Vite SPA.
**Deployment:** Vercel (uses `@vercel/analytics` and `@vercel/speed-insights`). AWS guide does not apply.
**Domain:** https://matan-shabi.com
**Owner:** Matan Shabi (מתן שאבי) — DevOps & Cloud-Security Engineer, available for hire.
**Analytics:** Vercel Analytics only. No GA4 implemented.

## Key files

- `app/layout.tsx` — root layout: metadata (OG, Twitter, title, description), JSON-LD structured data, fonts.
- `app/page.tsx` — single-page portfolio (Hero, About, Experience, Education, Tech Stack, Projects, Contact).
- `app/sitemap.ts` — Next.js sitemap route → served at `/sitemap.xml`.
- `public/robots.txt` — crawler directives including AI bots.
- `public/llms.txt` — structured Markdown index for AI tools (ChatGPT Search, Perplexity, etc.).
- `styles/globals.css` — global CSS including animation keyframes and `prefers-reduced-motion` overrides.
- `next.config.mjs` — Next.js config; uses `remotePatterns` for external image domains (no `unoptimized`).

## SEO / LLMO status

- robots.txt ✅ — includes AI retrieval bots (GPTBot, ClaudeBot, PerplexityBot) and blocks training-only bots (CCBot, Bytespider).
- sitemap.xml ✅ — generated via `app/sitemap.ts`.
- llms.txt ✅ — at `public/llms.txt`, served at `/llms.txt`.
- JSON-LD ✅ — `@graph` pattern with `Person` + `WebSite` entities cross-referenced via `@id`, placed in `<head>`.
- Open Graph ✅ — `og:type`, `og:url`, `og:title`, `og:description`, `og:image` with width/height set.
- Twitter card ✅ — `summary_large_image`.
- **OG image** ⚠️ — currently uses `/profile-photo.jpeg` as a placeholder. A proper 1200×630px branded image should be created and placed at `public/og-image.jpg`, then update `openGraph.images` and `twitter.images` in `app/layout.tsx`.

## Accessibility status (WCAG 2.2 AA)

- Skip navigation link ✅ — first focusable element, links to `#main-content`.
- `<main id="main-content">` ✅ — wraps all page sections between nav and footer.
- `<nav aria-label="Main">` ✅.
- Mobile menu button ✅ — has `aria-label`, `aria-expanded`, `aria-controls="mobile-menu"`.
- Footer icon links ✅ — all have `aria-label`.
- `prefers-reduced-motion` ✅ — all custom animation classes disabled when user prefers reduced motion.
- Icon-only buttons (`WhatsAppButton`, `ContactDownloadButton`) ✅ — both have `aria-label`.
- **Focus indicators** ⚠️ — some interactive elements still use `focus:outline-none` without replacement. Audit and replace with `focus-visible:ring-2` pattern throughout.
- **Canvas animations** ⚠️ — `AnimatedBackground` and `PipelineBackground` use canvas; they do not yet check `prefers-reduced-motion` in their JS. Should add `window.matchMedia('(prefers-reduced-motion: reduce)')` check to skip animation loop.

## Performance

- Image optimisation ✅ — Next.js image optimisation enabled; external domains whitelisted via `remotePatterns`.
- Fonts ✅ — loaded via `next/font/google` (Inter, Fira Code); no `@import` in CSS.
- **OG image size** ⚠️ — `profile-photo.jpeg` is not 1200×630. Replace with a proper OG image to avoid platform-side fetching delays.
