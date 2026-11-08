import Link from "next/link";
import type { Metadata } from "next";
import ProjectStatusBadge from "@/components/ProjectStatusBadge";

export const metadata: Metadata = {
  title: "VisionPro — Case Study // Ayoub Elmohamedi",
  description:
    "AI-assisted retail surveillance platform comparing goods served with cashier records and providing daily reconciliation totals.",
};

export default function VisionProPage() {
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
        <span className="text-fg">visionpro</span>
      </nav>

      {/* Header */}
      <header className="space-y-4 border-b border-border pb-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-accent font-mono text-xs font-semibold">PROJECT 02</span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-fg">
            VisionPro
          </h1>
          <ProjectStatusBadge status="Work in Progress" />
        </div>

        <p className="text-lg text-fg-muted max-w-prose">
          AI-assisted retail surveillance platform comparing goods served with cashier records and summarizing end-of-day reconciliation totals.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-4 text-xs font-mono border-t border-border/40">
          <div>
            <span className="text-fg-dim block">Collaboration</span>
            <span className="text-fg">Morocco Retail Business Owner</span>
          </div>
          <div>
            <span className="text-fg-dim block">Personal Ownership</span>
            <span className="text-fg">Technical Setup &amp; Data Pipeline</span>
          </div>
          <div>
            <span className="text-fg-dim block">Technical Direction</span>
            <span className="text-fg">RTSP, Frigate, MQTT, SQLite</span>
          </div>
          <div>
            <span className="text-fg-dim block">Status</span>
            <span className="text-accent">In Active Development</span>
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
              <span>The Problem &amp; Business Context</span>
            </h2>
            <p>
              In retail and quick-service operations, reconciling food and goods handed across the counter with registered transactions in the cashier system is an ongoing operational challenge. Discrepancies often go unnoticed until late inventory audits, making it difficult to distinguish cashier input errors from unrecorded goods.
            </p>
            <p>
              Working directly with a business owner based in Morocco, we sought to automate the daily verification process: capturing physical items passed across the service area and comparing those events with time-stamped register receipts to generate an end-of-day summary of total goods served.
            </p>
          </section>

          {/* Section: Product Workflow */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-fg flex items-center gap-2">
              <span className="text-accent text-xs font-mono">02</span>
              <span>Product Workflow</span>
            </h2>
            <ol className="list-decimal list-inside space-y-2 pl-2">
              <li>
                <strong className="text-fg font-medium">Counter Video Capture:</strong> RTSP network camera streams capture the handover zone at the counter.
              </li>
              <li>
                <strong className="text-fg font-medium">Local Event Detection:</strong> Frame streams are ingested on-premises by an edge mini PC running Frigate, triggering object presence events.
              </li>
              <li>
                <strong className="text-fg font-medium">Event Publishing via MQTT:</strong> Detection events are published over a lightweight MQTT message broker.
              </li>
              <li>
                <strong className="text-fg font-medium">Data Fetching &amp; Cashier Reconciliation:</strong> Core ingestion scripts correlate event timestamps with point-of-sale receipt logs, storing matched records in SQLite.
              </li>
              <li>
                <strong className="text-fg font-medium">Daily Summary:</strong> Provides managers with an end-of-day overview of total items served versus total items billed.
              </li>
            </ol>
          </section>

          {/* Section: My Verified Contribution */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-fg flex items-center gap-2">
              <span className="text-accent text-xs font-mono">03</span>
              <span>My Contribution in Collaboration</span>
            </h2>
            <p>
              I worked directly with the business partner from the initial problem breakdown:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2">
              <li>
                <strong className="text-fg font-medium">Solution Brainstorming &amp; Architecture:</strong> Defined the system boundaries, avoiding expensive cloud AI subscriptions in favor of an on-premises edge computing approach.
              </li>
              <li>
                <strong className="text-fg font-medium">Technical Setup:</strong> Configured the RTSP camera streaming pipeline and local network topology for edge hardware.
              </li>
              <li>
                <strong className="text-fg font-medium">Core Data-Fetching Functionality:</strong> Authored the core data ingestion logic that listens to incoming event streams, queries local SQLite databases, and prepares reconciliation sets.
              </li>
            </ul>
          </section>

          {/* Section: Technical Direction */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-fg flex items-center gap-2">
              <span className="text-accent text-xs font-mono">04</span>
              <span>Technical Direction</span>
            </h2>
            <div className="bg-bg-surface border border-border p-4 rounded font-mono text-xs text-fg-dim space-y-2">
              <p className="text-accent font-semibold">[Planned System Pipeline]</p>
              <p>RTSP Cameras ──► Mini PC (Frigate NVR) ──► MQTT Broker ──► Data Ingestion Worker</p>
              <p className="pl-64">│</p>
              <p className="pl-56">▼</p>
              <p className="pl-48">SQLite Storage ──► Daily Summary Dashboard</p>
            </div>
            <p>
              We selected an on-premises mini PC rather than uploading continuous video to the cloud. This avoids high bandwidth costs, reduces external latency, and preserves customer privacy by keeping raw camera streams strictly inside the physical location network.
            </p>
          </section>

          {/* Section: Honest Boundaries & Current Status */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-fg flex items-center gap-2">
              <span className="text-accent text-xs font-mono">05</span>
              <span>Current Status &amp; Scope Boundaries</span>
            </h2>
            <p>
              VisionPro is an active work in progress. In keeping with honest portfolio standards:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2">
              <li>We do not claim automated theft conviction or facial recognition capabilities.</li>
              <li>The system is an auditing tool designed to assist managers in comparing totals, not an autonomous enforcement agent.</li>
              <li>The pipeline architecture is currently in local staging; full commercial multi-store deployment remains in development.</li>
            </ul>
          </section>
        </div>

        {/* Sidebar Info */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="border border-border bg-bg-surface p-5 rounded-sm space-y-4 text-xs font-mono">
            <p className="font-semibold text-accent uppercase tracking-wider text-[11px] pb-2 border-b border-border">
              Project Parameters
            </p>

            <div>
              <span className="text-fg-dim block">Status</span>
              <span className="text-accent">Work in Progress</span>
            </div>

            <div>
              <span className="text-fg-dim block">Business Context</span>
              <span className="text-fg">Direct partnership with Morocco retail business</span>
            </div>

            <div>
              <span className="text-fg-dim block">Personal Role</span>
              <span className="text-fg">Technical Setup &amp; Core Data Fetching</span>
            </div>

            <div>
              <span className="text-fg-dim block">Hardware &amp; Protocols</span>
              <span className="text-fg">Mini PC, RTSP, MQTT, SQLite</span>
            </div>

            <div>
              <span className="text-fg-dim block">Repository &amp; Demos</span>
              <span className="text-fg-dim">Private client collaboration (URL pending)</span>
            </div>
          </div>

          <div className="border border-border/60 bg-bg p-4 rounded-sm text-xs text-fg-dim space-y-2">
            <p className="font-semibold text-fg">Verification Boundary</p>
            <p>
              Stack items are documented under technical direction. Features are not marked as shipped until verified in production.
            </p>
          </div>
        </aside>
      </div>
    </article>
  );
}
