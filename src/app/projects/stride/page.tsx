import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stride — Case Study // Ayoub Elmohamedi",
  description:
    "Full-stack HR certification prep platform: Next.js App Router, Supabase RLS, Gemini AI coaching, timed simulations, and Playwright tests.",
};

export default function StridePage() {
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
        <span className="text-fg">stride</span>
      </nav>

      {/* Header */}
      <header className="space-y-4 border-b border-border pb-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-accent font-mono text-xs font-semibold">PROJECT 03</span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-fg">
            Stride
          </h1>
          <span className="text-xs font-mono uppercase px-2 py-0.5 rounded border border-border text-fg-muted">
            Full-Stack Application
          </span>
        </div>

        <p className="text-lg text-fg-muted max-w-prose">
          Multi-certification HR study platform featuring structured modules, timed exam simulations, spaced repetition, private document synthesis, and Pip—an AI study coach.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-4 text-xs font-mono border-t border-border/40">
          <div>
            <span className="text-fg-dim block">Ownership</span>
            <span className="text-fg">Full-Stack Application Built</span>
          </div>
          <div>
            <span className="text-fg-dim block">Frontend</span>
            <span className="text-fg">Next.js App Router, React, Tailwind</span>
          </div>
          <div>
            <span className="text-fg-dim block">Data &amp; Auth</span>
            <span className="text-fg">Supabase (PostgreSQL), Drizzle ORM</span>
          </div>
          <div>
            <span className="text-fg-dim block">AI &amp; Testing</span>
            <span className="text-fg">Google Gemini API, Playwright, Python</span>
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
              <span>The Problem &amp; Learner Experience</span>
            </h2>
            <p>
              Candidates preparing for professional HR certifications (such as SHRM-CP/SCP and HRCI PHR) are faced with hundreds of pages of legal compliance, workforce strategy, and organizational behavior textbooks. Traditional test-prep materials are predominantly static PDFs or non-adaptive multiple-choice banks that fail to mirror the cognitive stamina required for multi-hour timed exams.
            </p>
            <p>
              I set out to engineer a focused study environment that combines rigorous timed exam simulations, spaced-repetition flashcards for active recall, and an interactive AI study coach that breaks down complex situational judgment scenarios into procedural visual diagrams.
            </p>
          </section>

          {/* Section: Verified Contribution */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-fg flex items-center gap-2">
              <span className="text-accent text-xs font-mono">02</span>
              <span>What I Built End-to-End</span>
            </h2>
            <p>
              I designed and implemented the entire Stride platform from architecture to interface:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                <strong className="text-fg font-medium">Study Engine &amp; Timed Exam Simulator:</strong> Built an exam execution engine that maintains persistent state, supports section locking, tracks question flags, and scores results against modular certification competencies.
              </li>
              <li>
                <strong className="text-fg font-medium">Pip — AI Learning Coach:</strong> Integrated Google Gemini API to serve as an interactive tutor. Pip synthesizes complex case studies, generates tailored quiz questions, and outputs procedural SVG visual infographics for cognitive retention.
              </li>
              <li>
                <strong className="text-fg font-medium">Document Ingestion &amp; Synthesis:</strong> Engineered private file upload pipelines (PDF, images, text) using secure per-user storage buckets and prompt-grounded text extraction.
              </li>
              <li>
                <strong className="text-fg font-medium">Spaced Repetition &amp; Flashcards:</strong> Implemented review schedules based on cognitive interval algorithms to optimize retention curves for key employment law statutes and terminology.
              </li>
              <li>
                <strong className="text-fg font-medium">Comprehensive Test Coverage:</strong> Wrote automated end-to-end user journey tests with Playwright and authored Python integration smoke scripts (<code className="text-accent text-xs font-mono">api-smoke.py</code>) to verify authentication and permission boundaries.
              </li>
            </ul>
          </section>

          {/* Section: Architecture & Data Safety */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-fg flex items-center gap-2">
              <span className="text-accent text-xs font-mono">03</span>
              <span>Architecture &amp; Data Isolation</span>
            </h2>
            <p>
              Stride runs on Next.js App Router using React Server Components for minimal client-side JavaScript payloads. Data isolation is enforced at the database layer using PostgreSQL Row-Level Security (RLS) in Supabase.
            </p>

            <div className="bg-bg-surface border border-border p-4 rounded font-mono text-xs text-fg-dim space-y-2">
              <p className="text-accent font-semibold">[Data &amp; Security Pipeline]</p>
              <p>Next.js App Router ──► Route Handlers (HTTP-only session cookies)</p>
              <p className="pl-6">├── Drizzle ORM ──► PostgreSQL with Row-Level Security (RLS)</p>
              <p className="pl-6">├── JSONB State Storage ──► Optimistic concurrency via revision tags</p>
              <p className="pl-6">├── Private Supabase Storage ──► Per-user access-token verified assets</p>
              <p className="pl-6">└── Google Gemini API ──► Structured JSON coaching + procedural SVGs</p>
            </div>

            <p>
              To prevent conflicting exam state updates across multiple browser tabs, exam progression utilizes JSONB state containers with revision tracking, ensuring atomic updates without dirty writes.
            </p>
          </section>

          {/* Section: Tradeoffs */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-fg flex items-center gap-2">
              <span className="text-accent text-xs font-mono">04</span>
              <span>Tradeoffs &amp; Technical Choices</span>
            </h2>
            <p>
              Placing authorization logic into PostgreSQL Row-Level Security (RLS) ensures that even if an API route handler omits an explicit tenant check, unauthorized rows cannot be leaked. The tradeoff is greater complexity in database migration files and the need for rigorous integration test suites to catch policy regressions.
            </p>
          </section>

          {/* Section: Scope & Certification Independence */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-fg flex items-center gap-2">
              <span className="text-accent text-xs font-mono">05</span>
              <span>Integrity &amp; Certification Boundaries</span>
            </h2>
            <p>
              Stride is an independent learning platform designed to help professionals study. In keeping with factual clarity:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2">
              <li>
                Stride is not affiliated with, accredited by, or an official product of SHRM or HRCI.
              </li>
              <li>
                Phrasing focuses on &ldquo;timed exam simulations&rdquo; rather than official test replica claims.
              </li>
              <li>
                The full application has been built and tested locally; live commercial production deployment remains unconfirmed.
              </li>
            </ul>
          </section>
        </div>

        {/* Sidebar Info */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="border border-border bg-bg-surface p-5 rounded-sm space-y-4 text-xs font-mono">
            <p className="font-semibold text-accent uppercase tracking-wider text-[11px] pb-2 border-b border-border">
              Technical Stack Specs
            </p>

            <div>
              <span className="text-fg-dim block">Full-Stack Scope</span>
              <span className="text-fg">End-to-End Solo Implementation</span>
            </div>

            <div>
              <span className="text-fg-dim block">Frontend Framework</span>
              <span className="text-fg">Next.js 16 App Router, React 19, Tailwind CSS</span>
            </div>

            <div>
              <span className="text-fg-dim block">Database &amp; Schema</span>
              <span className="text-fg">PostgreSQL + Drizzle ORM + RLS</span>
            </div>

            <div>
              <span className="text-fg-dim block">AI Intelligence</span>
              <span className="text-fg">Google Gemini API (Pip Coach)</span>
            </div>

            <div>
              <span className="text-fg-dim block">Verification Suite</span>
              <span className="text-fg">Playwright E2E + Python Smoke Tests</span>
            </div>

            <div>
              <span className="text-fg-dim block">Repository &amp; Live URL</span>
              <span className="text-fg-dim">Private codebase (unconfirmed publication)</span>
            </div>
          </div>

          <div className="border border-border/60 bg-bg p-4 rounded-sm text-xs text-fg-dim space-y-2">
            <p className="font-semibold text-fg">Trademark &amp; Accuracy</p>
            <p>
              SHRM and HRCI are registered trademarks of their respective credentialing bodies. Stride is an independent study aid.
            </p>
          </div>
        </aside>
      </div>
    </article>
  );
}
