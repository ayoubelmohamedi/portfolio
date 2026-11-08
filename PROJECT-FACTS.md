# Project facts and editorial boundaries

## Profile

Email: ayoubprog61@gmail.com

LinkedIn: https://www.linkedin.com/in/ayoub-elmohamedi-62377419a/

Name: Ayoub Elmohamedi. Based in Morocco. Studied at 1337, part of the 42 network. Builds web applications and explores systems programming. Do not invent graduation dates, degrees, seniority, employer titles, years of experience or availability dates.

Draft introduction, editable for voice:

> I'm Ayoub, a developer based in Morocco. I build web applications and spend time understanding what sits underneath them: servers, databases, and operating systems. Some of my work is practical, some is for learning. I try to be clear about what works, what is unfinished, and what I learned along the way.

Short hero: “Web applications. Systems underneath.”

Languages supplied by the user: JavaScript, TypeScript, Python, C, C++.
Other technologies from prior work: React, Next.js, Tailwind CSS, Node.js, Fastify, Prisma, PostgreSQL, Socket.IO, Kafka, Docker, Docker Compose, Nginx, Git, Linux; also FastAPI and Supabase in other work. This is experience context, not proof that each belongs to a particular project. Avoid skill percentages and exaggerated proficiency claims.

## Featured product projects — exactly three

### Darway

- Full-stack rental platform website.
- Repository: https://github.com/ayoubelmohamedi/darway
- Prior discussion covered Fastify, Prisma, PostgreSQL, auth/profile/housing/bookings services, Socket.IO chat, Kafka events, JWT/Google OAuth, Nginx and Docker Compose. An alternative NestJS design was also discussed. Inspect the actual repository; do not combine competing designs or present every discussed feature as shipped.
- Personal contribution confirmed: built the Socket.IO chat service; handled WAF/ModSecurity security, protection logic, testing and GitHub Actions management. Describe Darway as collaborative work and do not claim ownership of the entire application. Publication status remains unconfirmed.
- Cover the rental workflow, actual architecture, a verified engineering challenge, contribution and tradeoffs.

### VisionPro

- Work in progress. An AI-assisted surveillance platform that compares goods served with cashier records and gives an overview of total goods served by the end of the day.
- Proposed technologies: RTSP camera streams, a mini PC running Frigate, MQTT events, SQLite and a possible web dashboard for data and summaries.
- Public copy should stay concise and product-focused. Present these under “Technical direction” rather than as a verified deployed stack. No need for an “initial phase” disclaimer; a normal work-in-progress label is enough.
- Do not invent accuracy, theft detection, face recognition, model names, completed integrations, customers or performance results. Repository/demo URLs are not yet supplied.
- Collaboration with a business owner based in Morocco. Ayoub participated in shaping and brainstorming the solution before development, then handled technical setup and core functionality, including fetching data. Describe this as technical implementation ownership in a business collaboration; do not imply the proposed entire stack is already deployed.

### Stride

- Title: Stride — Multi-Certification HR Prep Platform (SHRM & HRCI / PHR).
- Personal contribution: Ayoub built the full-stack application.
- HR certification preparation platform with lessons, quizzes, AI chatbot/learning coach Pip, summaries, visual graph/infographic generation, study analytics and exam practice. Subscription model with a free trial; no pricing or paid-customer counts supplied.
- User-supplied implementation details include spaced-repetition reviews/flashcards, timed exam simulations with persistent state and section locking, and private document upload/extraction for PDF, image and text formats.
- Frontend: Next.js 16 App Router (Server and Client Components), React 19, TypeScript, Tailwind CSS v4, Radix UI/shadcn UI, Recharts and Lucide React.
- Backend/deployment tooling: Node.js, Next.js Route Handlers, Cloudflare Workers, Wrangler and Vinext. Deployment tooling does not establish production deployment status.
- Data: Supabase/PostgreSQL, Drizzle ORM, JSONB state storage, optimistic concurrency control through revision tracking, and Row-Level Security policies for user data isolation.
- Authentication/storage: Supabase Auth with HTTP-only session cookies and private Supabase Storage with per-user access controls. Avoid broader claims about encryption or guarantees without implementation evidence.
- AI: Google Gemini API for document synthesis, contextual coaching through Pip, study guides, generated questions and procedural SVG infographics. The supplied visual-engine.ts reference may be discussed as implementation context, not linked unless code is provided.
- Testing/tooling: Playwright end-to-end tests, Python integration/API security smoke tests (api-smoke.py), ESLint 9 and strict TypeScript checks.
- Suitable concise copy: “I built Stride end to end: the study interface, backend, authentication, data storage and AI learning features. It combines lessons and exam practice with Pip, an AI study coach, document summaries and visual explanations.”
- The supplied material mixes implemented-feature descriptions with suggested future expansion. Treat specific additional tracks (aPHR/SPHR and others), modular taxonomy claims and cross-track exam blueprint configuration as proposed unless confirmed. Do not turn suggested resume bullets into verified achievements.
- Do not publish “100% route authorization coverage” without a defined denominator and test results. Avoid “real-time” analytics unless verified. No invented performance, learning-outcome or usage metrics.
- Do not repeat the supplied exact exam counts/timings or certification-framework terminology as authoritative facts. These are unnecessary to this portfolio; say “timed exam simulations.” If later needed, verify against the relevant certification body's current official documentation.
- SHRM and HRCI are certification bodies/brands; PHR is an HRCI credential. Do not imply affiliation, accreditation or official exam equivalence.
- No repository/demo URL or publication status supplied. Keep status unconfirmed rather than labeling it live.

## Systems work

### sqly

- Tiny SQL database from scratch; work in progress. GitHub repository will be supplied later. The user wants engineering concepts described now, without an implemented-feature checklist. Implementation language remains unconfirmed.
- Discussed learning path: tables/rows/schema → simple inserts and scans → parsing/execution → serialization/persistence → fixed-size pages → B-tree/B+ tree indexing → cursors and indexed lookups.
- Concepts to explain as goals unless verified: parsing and execution, row layout, storage pages, table scan versus index lookup, B-tree node splitting and key promotion, B+ tree leaves, cursor iteration, persistence and fsync.
- WAL/journaling, transactions, locking, crash recovery, joins and query optimization are later exploration topics, not completed claims. Do not imply ACID compliance.
- A conceptual B-tree explainer can illustrate learning goals but must be labeled as conceptual rather than sqly's implemented storage engine.

### Webserv

- HTTP web server from scratch for the 42 curriculum.
- Repository: https://github.com/ayoubelmohamedi/webserv
- Prior work covered C++, nonblocking sockets, multiplexed I/O, HTTP parsing, configuration, CGI, uploads, redirects and timeouts. Verify exact implementation and portability before claiming support. Do not claim poll, epoll and kqueue are all implemented just because they were discussed.
- Cover request lifecycle and a verified systems challenge. Do not invent benchmarks or RFC-complete compliance.

## Smaller systems projects

- Inception: Docker infrastructure project. https://github.com/ayoubelmohamedi/inception . Prior context includes Nginx, WordPress/PHP-FPM, MariaDB, Compose and volumes; verify repository details.
- cube3D: https://github.com/ayoubelmohamedi/cube3D . Describe as a 42 raycasting project only after checking repository evidence; verify language, graphics library and personal contribution.
- Minishell: https://github.com/ayoubelmohamedi/minishell . Verify parsing, pipes, redirections, builtins, process execution and signals individually; do not claim full Bash/POSIX compatibility.

## Publication policy

Use exact supplied links. Never guess links from project names. Use the supplied email as mailto:ayoubprog61@gmail.com and include the supplied LinkedIn URL. Missing CV, screenshots and demos must not become fake buttons. Never generate finished blog posts under Ayoub's name without his editorial review. Unknown status is not “live” or “completed.” Keep uncertainty in a local CONTENT-NEEDED.md and keep public copy limited to supported statements.
