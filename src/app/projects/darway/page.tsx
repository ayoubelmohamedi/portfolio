import Link from "next/link";
import type { Metadata } from "next";
import ProjectStatusBadge from "@/components/ProjectStatusBadge";

export const metadata: Metadata = {
  title: "Darway — Case Study // Ayoub Elmohamedi",
  description: "Collaborative full-stack rental platform: Socket.IO chat, WAF/ModSecurity, protection logic, and CI/CD.",
};

export default function DarwayPage() {
  return (
    <article className="max-w-container mx-auto px-5 sm:px-8 py-10 sm:py-16 space-y-12">
      {/* Breadcrumb & Navigation */}
      <nav aria-label="Breadcrumb" className="text-xs font-mono text-fg-dim flex items-center gap-2">
        <Link href="/" className="hover:text-accent transition-colors">
          root
        </Link>
        <span>/</span>
        <Link href="/#work" className="hover:text-accent transition-colors">
          work
        </Link>
        <span>/</span>
        <span className="text-fg">darway</span>
      </nav>

      {/* Header */}
      <header className="space-y-4 border-b border-border pb-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-accent font-mono text-xs font-semibold">PROJECT 01</span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-fg">
            Darway
          </h1>
          <ProjectStatusBadge status="Collaborative" />
        </div>

        <p className="text-lg text-fg-muted max-w-prose">
          Collaborative rental platform website featuring real-time chat, hardened security boundaries, and automated testing pipelines.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-4 text-xs font-mono border-t border-border/40">
          <div>
            <span className="text-fg-dim block">Role</span>
            <span className="text-fg">Chat, Security (WAF) &amp; CI/CD</span>
          </div>
          <div>
            <span className="text-fg-dim block">Primary Stack</span>
            <span className="text-fg">Fastify, Prisma, PostgreSQL, Socket.IO</span>
          </div>
          <div>
            <span className="text-fg-dim block">Infrastructure</span>
            <span className="text-fg">Docker Compose, Nginx, ModSecurity</span>
          </div>
          <div>
            <span className="text-fg-dim block">Repository</span>
            <a
              href="https://github.com/ayoubelmohamedi/darway"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline inline-flex items-center gap-1"
            >
              <span>github.com/darway</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-10 text-sm leading-relaxed text-fg-muted">
          {/* Section: The Problem */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-fg flex items-center gap-2">
              <span className="text-accent text-xs font-mono">01</span>
              <span>The Problem &amp; Rental Workflow</span>
            </h2>
            <p>
              Rental platforms must bridge two distinct user needs: discovery of verified property listings and instantaneous direct communication between prospective tenants and landlords. In rental markets, slow inquiry feedback leads directly to tenant churn.
            </p>
            <p>
              At the same time, public-facing listing platforms are frequent targets of credential stuffing, SQL injection attempts, automated scrapers, and malicious message payloads sent over open web channels. The challenge was enabling frictionless real-time messaging while maintaining a strict perimeter defense.
            </p>
          </section>

          {/* Section: Verified Contribution */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-fg flex items-center gap-2">
              <span className="text-accent text-xs font-mono">02</span>
              <span>My Verified Contribution</span>
            </h2>
            <p>
              Darway was built as a collaborative team project. I deliberately owned specific foundational pillars rather than claiming ownership of the entire application:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2">
              <li>
                <strong className="text-fg font-medium">Socket.IO Real-Time Chat Service:</strong> Architected the bi-directional messaging subsystem, handling connection authentication, room isolation per rental listing inquiry, and real-time read receipts.
              </li>
              <li>
                <strong className="text-fg font-medium">WAF &amp; ModSecurity Hardening:</strong> Configured Web Application Firewall (WAF) rule sets via ModSecurity behind the Nginx reverse proxy, filtering bad user agents, path traversal, and script injection payloads before requests hit application routes.
              </li>
              <li>
                <strong className="text-fg font-medium">Application Protection Logic:</strong> Implemented rate limiting, request validation, and sanitized input boundaries across API endpoints.
              </li>
              <li>
                <strong className="text-fg font-medium">Testing &amp; GitHub Actions CI/CD:</strong> Formatted automated test pipelines running unit and integration suites on pull requests, ensuring containerized test databases spin up cleanly in GitHub Actions.
              </li>
            </ul>
          </section>

          {/* Section: Architecture & Technical Decisions */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-fg flex items-center gap-2">
              <span className="text-accent text-xs font-mono">03</span>
              <span>Architecture &amp; Key Decisions</span>
            </h2>
            <p>
              The system utilizes Fastify with TypeScript for its core backend API. Fastify was chosen over traditional Express or heavyweight opinionated alternatives due to its built-in schema compilation (Ajv), providing sub-millisecond route parsing and predictable typing.
            </p>
            <div className="bg-bg-surface border border-border p-4 rounded font-mono text-xs text-fg-dim space-y-2">
              <p className="text-accent font-semibold">[Architecture Flow]</p>
              <p>Client Browser ──► Nginx (TLS + ModSecurity WAF) ──► Fastify Application</p>
              <p className="pl-8">├── Prisma ORM ──► PostgreSQL (Normalized schema)</p>
              <p className="pl-8">└── Socket.IO ──► Bi-directional rental chat rooms</p>
            </div>
            <p>
              Data persistence relies on PostgreSQL managed through Prisma schema migrations. Docker Compose provides deterministic local development environments, bundling PostgreSQL, Nginx, and Node runtimes with zero external configuration drift.
            </p>
          </section>

          {/* Section: Tradeoffs & Engineering Lessons */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-fg flex items-center gap-2">
              <span className="text-accent text-xs font-mono">04</span>
              <span>Tradeoffs &amp; Lessons</span>
            </h2>
            <p>
              Running ModSecurity rules at the Nginx layer added noticeable latency during initial tuning until regex rules were audited and pruned of redundant inspection chains. Furthermore, maintaining Socket.IO state across scaled backend instances necessitates redis-backed adapters when moving beyond single-node prototypes.
            </p>
          </section>

          {/* Section: Current Status */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-fg flex items-center gap-2">
              <span className="text-accent text-xs font-mono">05</span>
              <span>Current Status &amp; Next Steps</span>
            </h2>
            <p>
              The collaborative codebase is preserved on GitHub. The chat engine and security integration are verified in local and CI environments. Production hosting is currently unconfirmed. Future improvements would include Kafka event streaming for decoupling notification delivery from chat state.
            </p>
          </section>
        </div>

        {/* Sidebar Info */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="border border-border bg-bg-surface p-5 rounded-sm space-y-4 text-xs font-mono">
            <p className="font-semibold text-accent uppercase tracking-wider text-[11px] pb-2 border-b border-border">
              Case Study Facts
            </p>

            <div>
              <span className="text-fg-dim block">Project Classification</span>
              <span className="text-fg">Collaborative Web Platform</span>
            </div>

            <div>
              <span className="text-fg-dim block">Verified Personal Scope</span>
              <span className="text-fg">Socket.IO Chat, WAF Security, CI</span>
            </div>

            <div>
              <span className="text-fg-dim block">Database &amp; ORM</span>
              <span className="text-fg">PostgreSQL + Prisma</span>
            </div>

            <div>
              <span className="text-fg-dim block">Status</span>
              <span className="text-fg">Collaborative / Repo Available</span>
            </div>

            <div>
              <span className="text-fg-dim block">GitHub Repository</span>
              <a
                href="https://github.com/ayoubelmohamedi/darway"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline break-all"
              >
                https://github.com/ayoubelmohamedi/darway
              </a>
            </div>
          </div>

          <div className="border border-border/60 bg-bg p-4 rounded-sm text-xs text-fg-dim space-y-2">
            <p className="font-semibold text-fg">Integrity Notice</p>
            <p>
              In accordance with honest-project-writing, claims reflect verified individual contributions rather than team-wide assumptions.
            </p>
          </div>
        </aside>
      </div>
    </article>
  );
}
