# Ayoub Elmohamedi — Personal Portfolio

Minimalist, Unix/systems-inspired personal portfolio for Ayoub Elmohamedi, a developer based in Morocco building web applications and exploring systems programming (servers, storage engines, and operating systems).

Built according to `.agents/skills/ascii-art-direction`, `.agents/skills/honest-project-writing`, and `.agents/skills/portfolio-quality`.

## Visual & Systems Direction

- **Palette**: Deep dark `#111310` background, `#181B16` surface, `#282D24` subtle borders, `#E5E9DF` primary text, `#A5AF9D` secondary text, and `#B6CF83` muted accent.
- **Typography**: Local monospace stack (`Geist Mono`, `IBM Plex Mono`, `JetBrains Mono`, system monospace) with `font-variant-ligatures: none` to preserve ASCII art alignment.
- **ASCII Art**: Interactive, mathematical 3D wireframe cube projection (36x16 character grid) with play/pause controls, `prefers-reduced-motion` detection, offscreen observer pausing, and static SSR fallback.
- **Restrained Motion**: Subtle 120–200ms transitions, no glitch spam or simulated typing delays.
- **Reading Comfort**: Body copy set to 16px with 1.7 line height and a comfortable ~72-character reading column.

## Information Architecture

- **Home (`/`)**:
  - Semantic identity hero (`<h1>Ayoub Elmohamedi</h1>`) with interactive ASCII hero.
  - `01 / WORK`: Three featured product projects (Darway, VisionPro, Stride) in exact order.
  - `02 / SYSTEMS`: Deep-dive systems projects (sqly, Webserv) and compact 42 curriculum repositories (Inception, cube3D, Minishell).
  - `03 / ABOUT`: Factual, human background (1337 / 42 school) and grouped technologies.
  - `04 / NOTES`: Technical writing index and honest draft status.
  - Semantic, accessible navigation with skip-link, keyboard focus rings, and mobile menu.
- **Case Studies (`/projects/[slug]`)**:
  - `/projects/darway`: Socket.IO chat service, WAF/ModSecurity rules, protection logic, CI/CD.
  - `/projects/visionpro`: Cashier reconciliation, Frigate/MQTT/SQLite edge pipeline (work in progress).
  - `/projects/stride`: Next.js App Router, Supabase RLS, Gemini AI coaching, timed exam engine.
  - `/projects/sqly`: Database storage engine, 4KB slotted pages, B+ tree indexing concepts.
  - `/projects/webserv`: Nonblocking POSIX multiplexed I/O HTTP/1.1 server in C++98.
- **Blog (`/blog`, `/blog/[slug]`)**:
  - Markdown-based content with validated frontmatter.
  - Honest empty state when no posts have `published: true`.
  - Unpublished draft template at `content/blog/template.md`.

## Local Development

### Requirements
- Node.js 18.17+ or 20+
- npm (or pnpm / yarn / bun)

### Commands

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Open in browser
open http://localhost:3000

# 4. Production build & type check
npm run build

# 5. Start production server
npm start
```

## Evidence & Content Tracking

- `CONTENT-EVIDENCE.md`: Source records and provenance for every technical claim and project link.
- `CONTENT-NEEDED.md`: Pre-deployment checklist (CV file, custom domain, demo URLs, and publication review).
