# Build Ayoub Elmohamedi's personal portfolio

Implement a complete, locally runnable personal portfolio. Read PROJECT-FACTS.md and all three .agents/skills folders first. Work through implementation and verification without pausing after a plan. Do not publish or deploy yet.

## Objective

Make my web product work and interest in low-level programming visible in one minimalist, memorable site. It should feel like a carefully typeset Unix notebook: ASCII illustration, systems labels, plain language and excellent reading rhythm. Visitors should understand who I am and open a project within seconds.

Build a real website with conventional navigation. Terminal influence belongs in the typography, visual grammar and occasional labels. Visitors must never need to type commands to find projects, read the blog or contact me. Avoid fake boot screens, forced typing delays, glitch spam, full-screen CRT filters, rainbow syntax decoration, custom cursors, scroll hijacking, auto-playing sound, skill meters and generic marketing copy.

## Design specification

- Palette: background #111310, surface #181B16, primary text #E5E9DF, secondary text #A5AF9D, accent #B6CF83. Verify actual contrast for all used combinations. Keep accent mostly for links, focus and small details. Thin dividers can be subdued; important controls need adequate contrast.
- Use a locally hosted monospace such as IBM Plex Mono or Geist Mono with a system fallback. Body text 16–18px, line-height around 1.65–1.8 and a comfortable reading width. No tiny terminal text for body content.
- Centered desktop content around 1080px; article text around 68–74 characters. Intentional whitespace and left alignment. Mobile padding 20–24px. Use CSS tokens.
- Headers may use small labels such as `01 / work`, `02 / systems`, `03 / notes`; plain accessible titles stay visible.
- Prefer dividers, numbered project rows, narrow metadata columns and editorial layouts to a wall of identical dashboard cards.
- Hero: actual name as semantic HTML, short intro, “View projects” and GitHub links, and a compact ASCII object on the right. On phones it moves below the intro or becomes a small static motif.
- Signature artwork: a sparse wireframe cube slowly resolving into a page/tree motif, evoking raycasting and database pages. Choose one stable motif if morphing becomes busy. Use a true character-grid appearance, not a stock illustration covered by a terminal border. Keep it ornamental and modest in size.
- Generate a compact ASCII wordmark with FIGlet at build time only if it improves the composition. Large block text must never replace the readable name.
- Static ASCII/CSS is the baseline. A lazily loaded Drei AsciiRenderer scene is optional. Keep decorative art out of the accessibility tree, provide a static fallback and pause motion offscreen or when the document is hidden. Support reduced motion and a visible motion-off control if animation runs continuously. No animation may block content.
- Small transitions around 120–200ms; no repeated text scrambling. Use native scrolling.
- Project previews use real supplied screenshots where available. Otherwise use tasteful text diagrams or abstract patterns explicitly framed as illustrations, never invented screenshots or dashboards presented as real products.

## Information architecture

Home `/`:
1. Compact navigation: Ayoub / Work / Systems / About / Blog / GitHub.
2. Hero with concise identity and signature ASCII art.
3. Featured work: exactly three substantial entries, Darway, VisionPro, Stride, in that order. Each links to a dedicated case-study page.
4. Systems: sqly and Webserv as larger entries; Inception, cube3D and Minishell as compact rows with direct GitHub links.
5. About: use the draft in PROJECT-FACTS.md as a starting point. Straightforward and human, curious without self-promotion or self-deprecation. Group technology names into languages, applications/data and systems/tooling. No ratings, years or unsupported expertise claims.
6. Blog preview linking to `/blog`. If there are no finished articles, use a short honest empty state. Drafts must stay unpublished and excluded from feeds/indexes.
7. Footer: GitHub https://github.com/ayoubelmohamedi and LinkedIn https://www.linkedin.com/in/ayoub-elmohamedi-62377419a/ . Include both as visible, accessible footer links. Include an Email link to mailto:ayoubprog61@gmail.com. Omit the CV button until a real file exists. No fake contact form.

Pages:
- `/projects/darway`
- `/projects/visionpro`
- `/projects/stride`
- `/projects/sqly`
- `/projects/webserv`
- `/blog` and `/blog/[slug]` for published posts.

Use the confirmed contributions in PROJECT-FACTS.md: Darway — Socket.IO chat, WAF/ModSecurity, protection logic, testing and GitHub Actions; VisionPro — solution brainstorming with a Morocco-based business owner, technical setup and core data-fetching functionality; Stride — full-stack application ownership. Give Stride a readable grouped stack and describe its AI learning, private data and testing work without copying every resume bullet. Keep proposed certification expansion distinct from implemented features.

Each product case study should cover the problem, product workflow, my verified contribution, actual architecture/stack, technical decisions, tradeoffs, current status and next steps. Write detailed sections only where evidence exists. Never pad an unknown project with imagined engineering stories. Supplied VisionPro and sqly status is “in progress”; other status remains unconfirmed until checked.

sqly should communicate the interest in database internals: parser/executor boundaries, rows and serialization, pages, B-tree versus B+ tree structure, indexed lookup versus scanning, cursors and persistence. Describe these as engineering concepts being explored in a work-in-progress database. Do not demand a feature-by-feature implementation checklist for this version or imply all concepts are already implemented. Put advanced durability/concurrency ideas in later exploration only. A small accessible conceptual diagram is welcome; it must not masquerade as implemented behavior.

Webserv should explain its verified request lifecycle and I/O design. Smaller projects should get concise descriptions and honest scope, not invented compatibility or performance claims.

## Content and repository research

Use PROJECT-FACTS.md as the factual starting point. Inspect the provided GitHub repositories if accessible: README, source layout, manifests, Compose/configuration files and important implementation paths. A README or feature wishlist alone is not proof of a shipped feature. Record concise evidence and provenance in a local CONTENT-EVIDENCE.md. Distinguish a project's capabilities from my personal contribution on collaborative work.

Do not execute arbitrary repository scripts merely to read project context. If repositories are unavailable, continue with supplied descriptions and mark missing specifics in CONTENT-NEEDED.md. Do not treat inaccessible URLs as proof a repository does not exist. Keep private notes out of public routes/build output.

No invented metrics, customers, credentials, testimonials, pricing, project links, exact stacks, dates, milestones, production status or personal contribution. For VisionPro, describe comparing goods served with cashier records and daily served-goods totals. List RTSP cameras, mini PC, Frigate, MQTT, SQLite and a possible web dashboard as technical direction. Keep this concise; do not invent implementation details or call the proposed stack deployed. Do not imply Stride is affiliated with certification bodies. Do not turn sqly's roadmap into completed functionality.

Blog entries should be local Markdown files with validated metadata: title, date, description, tags and published flag. Build a reusable article layout with code blocks, copy buttons, reading rhythm and accessible headings. Add an unpublished editorial template. Possible future topics belong in private notes: nonblocking HTTP, pages/B-trees, container setup and practical AI integration. Do not invent already-published posts or backdate articles.

## Implementation

Inspect the existing workspace and instructions first. Preserve useful existing work. If starting empty, use Next.js App Router, React and TypeScript with CSS or Tailwind. Prefer static generation and local Markdown content; no database, auth, CMS or paid service is needed. Choose current stable compatible dependencies and retain a lockfile.

Suggested dependencies: figlet for build-time ASCII text; motion only for interactions that CSS cannot express cleanly; react-markdown and remark-gfm for content; Shiki/rehype integration for build-time code highlighting. Optional 3D enhancement: three, @react-three/fiber and @react-three/drei's AsciiRenderer. Do not load Three.js globally or ship Shiki's full grammar bundle to the browser. Verify APIs against installed versions.

Keep most pages server/static rendered; isolate interactive art and motion in small client components. Keep project facts in a typed local data file; case studies and blog content should be easy to edit independently. Add useful metadata, canonical URLs only when a real domain is configured, Open Graph defaults, sitemap and robots rules. Do not assume the previously considered domain has been purchased. Provide good 404 behavior. Preserve ASCII whitespace and avoid font ligatures that distort art.

## Acceptance criteria

- All five case studies work and all supplied GitHub links are preserved exactly.
- The three featured product projects are clearly distinguished from systems work.
- Real text, headings and links work independently of decorative art and animation.
- No invented content or dead placeholder buttons. Unfinished work is labeled.
- No page-wide horizontal scrolling at 360px; long code samples can scroll within their own regions. Check around 360, 768 and 1440px.
- Keyboard access, visible focus, skip link, meaningful heading order, sensible contrast and reduced motion work. Touch users get equivalent access to hover information.
- ASCII enhancement has a fallback, cleans up resources, and respects motion controls. Disable JS to confirm statically rendered content still reads correctly.
- Build, type check and lint pass using scripts available in the project. Test routing and draft exclusion. Use focused tests for logic where useful, not snapshots that merely mirror markup.
- Inspect rendered pages in a browser if available; fix layout and console errors. Measure performance if tools allow, and report actual measurements rather than promising perfect scores. If browser tooling is unavailable, state that limitation.

Finish with run instructions, files changed, checks performed and a concise missing-content list. Deliver a working local site, not only a mockup or plan.
