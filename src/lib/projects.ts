export interface Project {
  slug: string;
  number: string;
  title: string;
  category: "product" | "systems";
  tagline: string;
  status: "Work in Progress" | "Completed" | "Collaborative" | "Exploratory";
  repoUrl?: string;
  featured: boolean;
  role: string;
  summary: string;
  stack: {
    primary: string[];
    infrastructure?: string[];
    testing?: string[];
  };
  details: {
    problem: string;
    architecture: string;
    contribution: string;
    tradeoffs: string;
    currentStatus: string;
  };
}

export interface CompactProject {
  title: string;
  number: string;
  description: string;
  repoUrl: string;
  tags: string[];
  role: string;
}

export const FEATURED_PROJECTS: Project[] = [
  {
    slug: "darway",
    number: "01",
    title: "Darway",
    category: "product",
    tagline: "Collaborative full-stack rental platform with real-time chat and security layers.",
    status: "Collaborative",
    repoUrl: "https://github.com/ayoubelmohamedi/darway",
    featured: true,
    role: "Socket.IO Chat, WAF/ModSecurity, Protection Logic & CI/CD",
    summary:
      "A full-stack rental platform built collaboratively. My focus centered on developing the real-time communication service with Socket.IO, hardening the perimeter with WAF and ModSecurity rules, implementing request protection logic, and managing automated testing pipelines via GitHub Actions.",
    stack: {
      primary: ["Fastify", "Prisma", "PostgreSQL", "Socket.IO", "TypeScript"],
      infrastructure: ["Docker Compose", "Nginx", "GitHub Actions", "ModSecurity / WAF"],
      testing: ["Automated Integration Tests", "CI Workflows"],
    },
    details: {
      problem:
        "Rental platforms require both instant, reliable negotiation channels between hosts and tenants and strong defense mechanisms against malicious input, unauthorized tampering, and automated abuse.",
      architecture:
        "The system coordinates backend services fronted by an Nginx reverse proxy configured with WAF/ModSecurity rules. Persistent data resides in PostgreSQL accessed via Prisma ORM, while real-time messaging runs over a dedicated Socket.IO service.",
      contribution:
        "Implemented the real-time chat subsystem using Socket.IO, configured ModSecurity and custom application-level protection rules, established automated testing workflows in GitHub Actions, and ensured consistent environment reproducibility via Docker Compose.",
      tradeoffs:
        "Choosing Fastify provided low latency and clean schema validation at the expense of needing more bespoke service boundaries compared to an opinionated monolithic framework.",
      currentStatus:
        "Collaborative codebase available on GitHub; deployment and production hosting remain unconfirmed.",
    },
  },
  {
    slug: "visionpro",
    number: "02",
    title: "VisionPro",
    category: "product",
    tagline: "AI-assisted retail surveillance comparing served goods with cashier records.",
    status: "Work in Progress",
    featured: true,
    role: "Technical Setup, Core Data Fetching & Solution Brainstorming",
    summary:
      "An automated reconciliation system being developed in collaboration with a Morocco-based business owner. The goal is to compare food and goods served at counters against point-of-sale cashier records to calculate daily served totals and flag audit discrepancies.",
    stack: {
      primary: ["Python", "SQLite", "MQTT"],
      infrastructure: ["RTSP Camera Streams", "Mini PC with Frigate", "Web Dashboard (Planned)"],
      testing: ["Event pipeline test harnesses"],
    },
    details: {
      problem:
        "Brick-and-mortar retail and food-service operations frequently suffer discrepancies between what staff serve across the counter and what is entered into the register. Manual auditing is time-consuming and prone to human oversight.",
      architecture:
        "The proposed technical direction pairs RTSP camera feeds directed into a local mini PC running Frigate for vision event detection. Event messages are published over MQTT, persisted locally in SQLite, and aggregated for an end-of-day reconciliation dashboard.",
      contribution:
        "Partnered with the business owner during the problem definition phase, established the initial technical architecture, configured the camera streaming and event pipeline, and implemented the core data-fetching mechanisms.",
      tradeoffs:
        "Running processing locally on a mini PC avoids ongoing cloud bandwidth and compute fees while preserving privacy, but constrains processing power and requires careful event batching.",
      currentStatus:
        "Work in progress. Core data-fetching and surveillance pipeline are under development; hardware deployment across live locations is not yet finalized.",
    },
  },
  {
    slug: "stride",
    number: "03",
    title: "Stride",
    category: "product",
    tagline: "Multi-certification HR study platform with AI coaching, timed simulations, and visual guides.",
    status: "Completed",
    featured: true,
    role: "Full-Stack Application Ownership",
    summary:
      "A complete HR certification exam preparation platform (SHRM-CP/SCP & HRCI / PHR) featuring structured modules, timed exam simulations, spaced-repetition flashcards, private document synthesis, and Pip—an AI study coach powered by Google Gemini.",
    stack: {
      primary: ["Next.js (App Router)", "React", "TypeScript", "Tailwind CSS", "Radix UI", "Drizzle ORM", "Supabase (PostgreSQL)"],
      infrastructure: ["Cloudflare Workers", "Wrangler", "Node.js Route Handlers", "Supabase Storage"],
      testing: ["Playwright E2E", "Python API Security Smoke Tests", "ESLint", "TypeScript Strict Mode"],
    },
    details: {
      problem:
        "HR professionals preparing for demanding certification exams face dense textbooks and passive study materials that lack adaptive guidance, realistic testing conditions, and clear visual synthesis.",
      architecture:
        "Architected with Next.js App Router and React Server Components for fast initial loads, paired with Supabase PostgreSQL using Row-Level Security (RLS) for multi-tenant data isolation. State revisions use optimistic concurrency tracking in JSONB storage. AI synthesis utilizes Google Gemini API with structured prompting to generate explanations and procedural SVG visual diagrams.",
      contribution:
        "Designed and engineered the complete application end-to-end: UI design system, authentication flows with HTTP-only cookies, timed exam engines with persistent state, spaced-repetition algorithms, secure document ingestion, and AI coaching integration.",
      tradeoffs:
        "Using Row-Level Security directly in PostgreSQL pushes authorization checks into the database engine, minimizing application-layer leakage risks but requiring disciplined migration scripts and policy maintenance.",
      currentStatus:
        "Full application built and tested locally with Playwright and security smoke suites. Independent study platform; not officially affiliated with SHRM or HRCI.",
    },
  },
];

export const SYSTEMS_PROJECTS: Project[] = [
  {
    slug: "sqly",
    number: "04",
    title: "sqly",
    category: "systems",
    tagline: "Tiny relational SQL database written from scratch exploring internal storage engines.",
    status: "Work in Progress",
    featured: false,
    role: "Sole Creator & Systems Researcher",
    summary:
      "An educational SQL database engine built to demystify internals: parsing SQL syntax, serializing records into fixed-size storage pages, navigating slotted pages, and traversing B-tree / B+ tree index structures.",
    stack: {
      primary: ["Systems Programming (in progress)", "POSIX I/O", "Data Structures"],
      infrastructure: ["Fixed-size Page Allocator", "File System Sync (`fsync`)"],
      testing: ["Unit test harnesses for page boundaries and node splitting"],
    },
    details: {
      problem:
        "High-level database drivers hide how bytes physically hit the disk, how records are located without full scans, and how fixed-size pages prevent memory fragmentation under arbitrary record updates.",
      architecture:
        "Explores a classical storage layout: an upfront parser emitting an execution tree, a pager managing 4KB memory blocks backed by disk files, slotted-page record layout with pointer arrays, and B+ tree index nodes holding key/pointer pairs with leaf linked lists.",
      contribution:
        "Currently architecting the core storage and query concepts: token parsing, serialization formats, page-boundary management, node split logic, and cursor-based scan primitives.",
      tradeoffs:
        "Focusing strictly on single-threaded correctness and clear storage mechanics first, deferring complex write-ahead logging (WAL), concurrent transaction isolation, and query optimizers to later phases.",
      currentStatus:
        "Work in progress. Explores foundational database mechanics; durability and recovery concepts are study goals rather than production guarantees.",
    },
  },
  {
    slug: "webserv",
    number: "05",
    title: "Webserv",
    category: "systems",
    tagline: "Nonblocking HTTP/1.1 web server implemented in C++ from POSIX primitives.",
    status: "Completed",
    repoUrl: "https://github.com/ayoubelmohamedi/webserv",
    featured: false,
    role: "Co-developer (42 Curriculum)",
    summary:
      "A high-performance HTTP/1.1 server developed from scratch in C++ using nonblocking sockets and multiplexed I/O. Handles continuous client connections, HTTP request parsing, CGI execution pipelines, file uploads, and configurable virtual hosts without blocking the process.",
    stack: {
      primary: ["C++98", "POSIX Sockets", "I/O Multiplexing (`poll` / `select`)", "CGI"],
      infrastructure: ["Makefile", "Unix CLI"],
      testing: ["Custom RFC compliance tests", "Siege load tests"],
    },
    details: {
      problem:
        "Standard multi-threaded or prefork web servers incur thread-overhead bottlenecks under thousands of concurrent connections. Writing an event-driven server requires strict nonblocking state machines across every socket read and write.",
      architecture:
        "Built around a single event loop using multiplexed I/O. Incoming socket readiness triggers incremental chunk parsing through a deterministic state machine. Static files are streamed asynchronously, while dynamic requests fork child processes executing CGI scripts with redirected pipe file descriptors.",
      contribution:
        "Implemented the nonblocking socket polling engine, HTTP request parser handling chunked transfers and headers, URI route matching, and the child process CGI execution pipeline.",
      tradeoffs:
        "Adhering to C++98 without modern standard library smart pointers or threading forced strict manual resource tracking and file-descriptor lifecycle guards to prevent leaks across connection termination.",
      currentStatus:
        "Completed and evaluated as part of the 1337 / 42 school curriculum. Codebase accessible on GitHub.",
    },
  },
];

export const COMPACT_SYSTEMS_PROJECTS: CompactProject[] = [
  {
    number: "06",
    title: "Inception",
    description:
      "System administration project orchestrating a secure multi-service infrastructure. Configured Nginx with TLSv1.2/1.3, WordPress via PHP-FPM, and MariaDB on isolated Docker networks with dedicated volumes using Alpine Linux containers.",
    repoUrl: "https://github.com/ayoubelmohamedi/inception",
    tags: ["Docker", "Docker Compose", "Nginx", "MariaDB", "PHP-FPM", "Alpine Linux"],
    role: "Infrastructure setup & Docker containerization",
  },
  {
    number: "07",
    title: "cube3D",
    description:
      "3D raycasting maze engine inspired by Wolfenstein 3D, written in C. Implements Digital Differential Analysis (DDA) raycasting, wall texture projections, sprite positioning, and boundary collision physics.",
    repoUrl: "https://github.com/ayoubelmohamedi/cube3D",
    tags: ["C", "Raycasting", "MiniLibX", "Linear Algebra", "Game Loop"],
    role: "Raycaster mathematical engine & rendering loop",
  },
  {
    number: "08",
    title: "Minishell",
    description:
      "Unix shell written in C replicating Bash behavior. Features lexical command tokenization, syntax validation, pipeline orchestration (`|`), file redirections (`<`, `>`, `>>`, `<<`), environment variable expansion, and built-in commands.",
    repoUrl: "https://github.com/ayoubelmohamedi/minishell",
    tags: ["C", "POSIX API", "Process Control", "Signal Handling", "Parser"],
    role: "Parser, pipeline execution & signal trapping",
  },
];

export const ALL_PROJECTS = [...FEATURED_PROJECTS, ...SYSTEMS_PROJECTS];

export function getProjectBySlug(slug: string): Project | undefined {
  return ALL_PROJECTS.find((p) => p.slug === slug);
}
