import Link from "next/link";
import type { Metadata } from "next";
import SqlConceptDiagram from "@/components/SqlConceptDiagram";

export const metadata: Metadata = {
  title: "sqly — Systems Exploration // Ayoub Elmohamedi",
  description:
    "An educational SQL database engine built from scratch: exploring fixed-size pages, B+ tree indexing, and storage mechanics.",
};

export default function SqlyPage() {
  return (
    <article className="max-w-container mx-auto px-5 sm:px-8 py-10 sm:py-16 space-y-12">
      {/* Breadcrumb & Navigation */}
      <nav aria-label="Breadcrumb" className="text-xs font-mono text-fg-dim flex items-center gap-2">
        <Link href="/" className="hover:text-accent transition-colors">
          root
        </Link>
        <span>/</span>
        <Link href="/#systems" className="hover:text-accent transition-colors">
          systems
        </Link>
        <span>/</span>
        <span className="text-fg">sqly</span>
      </nav>

      {/* Header */}
      <header className="space-y-4 border-b border-border pb-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-accent font-mono text-xs font-semibold">SYSTEMS 04</span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-fg">
            sqly
          </h1>
          <span className="text-xs font-mono uppercase px-2 py-0.5 rounded border border-amber-600/60 text-amber-300 bg-amber-950/20">
            Work in Progress
          </span>
        </div>

        <p className="text-lg text-fg-muted max-w-prose">
          A tiny relational SQL database written from scratch to explore storage engine internals, fixed-size pages, and B+ tree indexing mechanics.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-4 text-xs font-mono border-t border-border/40">
          <div>
            <span className="text-fg-dim block">Focus</span>
            <span className="text-fg">Database Internals &amp; Storage</span>
          </div>
          <div>
            <span className="text-fg-dim block">Page Size</span>
            <span className="text-fg">4096 Bytes (POSIX Page Aligned)</span>
          </div>
          <div>
            <span className="text-fg-dim block">Indexing Design</span>
            <span className="text-fg">B+ Tree with Doubly-Linked Leaves</span>
          </div>
          <div>
            <span className="text-fg-dim block">Status</span>
            <span className="text-amber-300">Exploratory / Learning Goals</span>
          </div>
        </div>
      </header>

      {/* Main Content Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-10 text-sm leading-relaxed text-fg-muted">
          {/* Section: The Motivation */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-fg flex items-center gap-2">
              <span className="text-accent text-xs font-mono">01</span>
              <span>The Motivation: Beyond Abstract SQL</span>
            </h2>
            <p>
              In modern application development, databases are often treated as black boxes accessed through ORM abstractions. You execute a migration or write a query, and data magically persists. But what happens underneath the SQL driver?
            </p>
            <p>
              How are dynamic-length string records packed into fixed-size storage blocks without leaving fragmented holes? How do cursors iterate across records? How does a B+ tree split when a leaf node overflows, and why does that give us O(log N) lookups instead of O(N) full-table scans?
            </p>
            <p>
              I began building <strong className="text-fg">sqly</strong> as an educational deep dive to answer these questions from first principles, writing the storage primitives directly against POSIX file APIs.
            </p>
          </section>

          {/* Section: Conceptual Storage Diagram */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-fg flex items-center gap-2">
              <span className="text-accent text-xs font-mono">02</span>
              <span>Architectural Concepts Under Exploration</span>
            </h2>
            <p>
              The diagram below details the storage layout and query lifecycle being investigated in sqly.
            </p>
            <SqlConceptDiagram />
          </section>

          {/* Section: Core Concepts Explored */}
          <section className="space-y-4">
            <h2 className="text-lg font-bold text-fg flex items-center gap-2">
              <span className="text-accent text-xs font-mono">03</span>
              <span>Deep Dive into Engineering Concepts</span>
            </h2>

            <div className="space-y-4">
              <div className="border-l-2 border-accent/60 pl-4 space-y-1.5">
                <h3 className="font-semibold text-fg">1. Parsing &amp; Execution Boundaries</h3>
                <p>
                  Incoming SQL statements are first processed by a lexical analyzer into tokens (<code className="text-accent text-xs font-mono">SELECT</code>, <code className="text-accent text-xs font-mono">FROM</code>, identifiers, literals). A recursive-descent parser constructs an Abstract Syntax Tree (AST), verifying schema types before handing an execution plan to the virtual machine.
                </p>
              </div>

              <div className="border-l-2 border-accent/60 pl-4 space-y-1.5">
                <h3 className="font-semibold text-fg">2. Fixed-Size 4096-Byte Pages &amp; Slotted Layout</h3>
                <p>
                  Disks and operating system virtual memory operate in pages (traditionally 4KB). Sqly aligns all disk I/O to 4096-byte boundaries. Inside each page, a slotted layout is used:
                </p>
                <ul className="list-disc list-inside text-xs space-y-1 pl-2">
                  <li>A 64-byte header at the start tracks metadata and available space.</li>
                  <li>An array of slot pointers grows forward from the top of the page.</li>
                  <li>Actual serialized variable-length row bytes are appended from the bottom upward.</li>
                  <li>This prevents memory fragmentation when rows are modified or deleted.</li>
                </ul>
              </div>

              <div className="border-l-2 border-accent/60 pl-4 space-y-1.5">
                <h3 className="font-semibold text-fg">3. B-Tree vs. B+ Tree Indexing</h3>
                <p>
                  While standard B-trees store record keys and data pointers in internal nodes, a B+ tree restricts row pointers strictly to leaf nodes. Internal nodes hold only routing keys. This maximizes fan-out per 4KB node and enables efficient range scans by linking all leaf nodes in a doubly-linked chain.
                </p>
              </div>

              <div className="border-l-2 border-accent/60 pl-4 space-y-1.5">
                <h3 className="font-semibold text-fg">4. Table Scans vs. Indexed Cursor Traversal</h3>
                <p>
                  Without an index on a queried column, the engine initializes a cursor at Page 0, Slot 0 and performs a sequential scan across all pages. With a B+ tree index, the engine traverses tree depth in O(log N) page reads directly to the target leaf slot.
                </p>
              </div>

              <div className="border-l-2 border-accent/60 pl-4 space-y-1.5">
                <h3 className="font-semibold text-fg">5. Persistence &amp; `fsync` Boundaries</h3>
                <p>
                  Writing to a file descriptor only places data in the OS page cache. Sqly investigates explicit <code className="text-accent text-xs font-mono">fsync()</code> flush calls to guarantee physical hardware writes to persistent storage.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Honest Scope & Roadmap */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-fg flex items-center gap-2">
              <span className="text-accent text-xs font-mono">04</span>
              <span>Project Scope &amp; Honest Boundaries</span>
            </h2>
            <p>
              Sqly is an active learning exploration. In accordance with strict honest engineering documentation:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2">
              <li>
                <strong className="text-fg">No ACID Claims:</strong> Sqly does not claim production ACID compliance, crash recovery, multi-version concurrency control (MVCC), or distributed transactions.
              </li>
              <li>
                <strong className="text-fg">Future Topics:</strong> Write-ahead logging (WAL), multi-threaded locking, and complex nested join optimizations are designated as future exploration milestones.
              </li>
              <li>
                <strong className="text-fg">Repository:</strong> The codebase is currently being structured; public GitHub links will be released once core page-splitting routines stabilize.
              </li>
            </ul>
          </section>
        </div>

        {/* Sidebar Info */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="border border-border bg-bg-surface p-5 rounded-sm space-y-4 text-xs font-mono">
            <p className="font-semibold text-accent uppercase tracking-wider text-[11px] pb-2 border-b border-border">
              Engine Specifications
            </p>

            <div>
              <span className="text-fg-dim block">Project Classification</span>
              <span className="text-fg">Systems Exploration / R&amp;D</span>
            </div>

            <div>
              <span className="text-fg-dim block">Page Size</span>
              <span className="text-fg">4096 Bytes</span>
            </div>

            <div>
              <span className="text-fg-dim block">Page Layout</span>
              <span className="text-fg">Slotted-Page Header + Offset Array</span>
            </div>

            <div>
              <span className="text-fg-dim block">Index Structure</span>
              <span className="text-fg">B+ Tree (internal keys + linked leaves)</span>
            </div>

            <div>
              <span className="text-fg-dim block">Status</span>
              <span className="text-amber-300">In Active Development</span>
            </div>
          </div>

          <div className="border border-border/60 bg-bg p-4 rounded-sm text-xs text-fg-dim space-y-2">
            <p className="font-semibold text-fg">Conceptual Note</p>
            <p>
              The storage diagrams and mechanics describe verified systems learning goals. They are explicitly not presented as a finished enterprise database engine.
            </p>
          </div>
        </aside>
      </div>
    </article>
  );
}
