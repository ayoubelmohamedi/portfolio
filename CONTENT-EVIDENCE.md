# Content Evidence & Provenance

This document records the provenance and verification status of claims, links, and technical details across the portfolio, as required by `honest-project-writing`.

## Profile & Personal Background

- **Name**: Ayoub Elmohamedi
- **Location**: Morocco (source: `PROJECT-FACTS.md`)
- **Education**: 1337 Coding School (part of the 42 Network) (source: `PROJECT-FACTS.md`)
- **Focus**: Web applications and systems programming underneath (servers, databases, operating systems)
- **Contact**:
  - Email: `ayoubprog61@gmail.com` (verified from `PROJECT-FACTS.md`)
  - LinkedIn: `https://www.linkedin.com/in/ayoub-elmohamedi-62377419a/` (verified from `PROJECT-FACTS.md`)
  - GitHub: `https://github.com/ayoubelmohamedi` (verified from `PORTFOLIO-PROMPT.md` / `PROJECT-FACTS.md`)
- **CV**: Not yet supplied; no placeholder download button rendered.

## Featured Product Projects

### 1. Darway
- **Summary**: Full-stack rental platform website. Collaborative project.
- **Repository**: `https://github.com/ayoubelmohamedi/darway` (public GitHub link provided).
- **Verified Personal Contributions**:
  - Socket.IO chat service.
  - WAF/ModSecurity protection logic.
  - Testing and GitHub Actions CI/CD workflows.
- **Architecture Context**: Fastify, Prisma, PostgreSQL, Docker Compose, Nginx reverse proxy.
- **Publication Status**: Unconfirmed / collaborative development. Not represented as an active commercial production deployment.

### 2. VisionPro
- **Summary**: AI-assisted surveillance platform comparing goods served with cashier records and generating end-of-day reconciliation summaries.
- **Status**: Work in progress.
- **Verified Personal Contributions**:
  - Solution ideation and architecture brainstorming with a Morocco-based business owner.
  - Technical setup and core data-fetching pipeline.
- **Technical Direction (Exploratory / Proposed)**: RTSP cameras, mini PC running Frigate, MQTT event bus, SQLite local storage, lightweight web dashboard.
- **Boundaries**: No claims of facial recognition, automated theft prosecution, or proprietary computer vision models. No fake live demo link.

### 3. Stride
- **Summary**: Multi-certification HR preparation platform (SHRM-CP/SCP & HRCI / PHR study prep).
- **Status**: Self-contained full-stack application; production deployment status unconfirmed.
- **Verified Personal Contributions**:
  - Full-stack application ownership: study interface, backend handlers, authentication, data persistence, and AI features.
- **Verified Stack Context**:
  - Frontend: Next.js App Router, React, TypeScript, Tailwind CSS, Radix UI primitives.
  - Backend / Data: Node.js route handlers, Supabase (PostgreSQL with Row-Level Security, JSONB state storage, revision tracking), Cloudflare Workers / Wrangler tooling.
  - AI: Google Gemini API integration for Pip (learning coach), document synthesis, question generation, and procedural SVG visual explanations.
  - Testing: Playwright end-to-end tests, Python API security smoke tests.
- **Boundaries**: Independent prep platform; no official accreditation or endorsement by SHRM or HRCI.

## Systems Projects

### 4. sqly
- **Summary**: Tiny relational SQL database written from scratch.
- **Status**: Work in progress (educational/exploratory). Repository URL pending.
- **Concepts Explored**:
  - Lexing & Pratt / recursive-descent parsing.
  - Fixed-size storage pages (e.g. 4096-byte pages) and row serialization.
  - Slotted-page layout and cursor iteration.
  - B-tree and B+ tree indexing principles (node splitting, key promotion).
  - Table scans vs. indexed index lookups.
  - Durability primitives (`fsync`).
- **Boundaries**: Conceptual engineering and learning goals. Explicitly not claimed to be production ACID compliant, crash-recoverable, or multi-threaded concurrent at this stage.

### 5. Webserv
- **Summary**: Nonblocking HTTP/1.1 web server implemented in C++ (42 school project).
- **Repository**: `https://github.com/ayoubelmohamedi/webserv` (provided).
- **Architecture**:
  - Nonblocking POSIX sockets with multiplexed I/O (`poll()` / `select()`).
  - Deterministic state machine parser for HTTP requests.
  - CGI execution child process handler with environment passing and pipe management.
  - Static file delivery, custom error pages, and chunked transfer decoding.

### 6. Compact Systems Repositories
- **Inception**: `https://github.com/ayoubelmohamedi/inception` — Multi-container infrastructure with Docker Compose, Alpine Linux, Nginx (TLSv1.2/1.3), WordPress/PHP-FPM, and MariaDB on dedicated Docker networks with persistent volumes.
- **cube3D**: `https://github.com/ayoubelmohamedi/cube3D` — 42 raycasting 3D maze engine inspired by Wolfenstein 3D, implementing DDA line casting, texture mapping, and wall collisions.
- **Minishell**: `https://github.com/ayoubelmohamedi/minishell` — Unix shell implementation with command line lexical parsing, environment variable expansion, pipes, redirections, builtins (`cd`, `echo`, `env`, `exit`, `export`, `pwd`, `unset`), and signal handling.

## Editorial Boundaries Observed

1. No fake metrics, active user statistics, or inflated revenue claims.
2. Unfinished or exploratory work is explicitly labeled as `Work in Progress`.
3. All repository links match exactly what was provided.
4. Blog contains only honest empty state with clear unpublished draft template.
