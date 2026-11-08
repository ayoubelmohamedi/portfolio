import Link from "next/link";
import type { Metadata } from "next";
import WebservLifecycleDiagram from "@/components/WebservLifecycleDiagram";

export const metadata: Metadata = {
  title: "Webserv — Systems Case Study // Ayoub Elmohamedi",
  description:
    "Nonblocking HTTP/1.1 server from scratch in C++: multiplexed I/O event loop, request state machine, and CGI execution.",
};

export default function WebservPage() {
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
        <span className="text-fg">webserv</span>
      </nav>

      {/* Header */}
      <header className="space-y-4 border-b border-border pb-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-accent font-mono text-xs font-semibold">SYSTEMS 05</span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-fg">
            Webserv
          </h1>
          <span className="text-xs font-mono uppercase px-2 py-0.5 rounded border border-border text-fg-muted">
            Completed (42 Curriculum)
          </span>
        </div>

        <p className="text-lg text-fg-muted max-w-prose">
          An RFC-compliant HTTP/1.1 web server engineered from scratch in C++ using nonblocking POSIX sockets and multiplexed I/O.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-4 text-xs font-mono border-t border-border/40">
          <div>
            <span className="text-fg-dim block">Language</span>
            <span className="text-fg">C++98 (Strict Standard)</span>
          </div>
          <div>
            <span className="text-fg-dim block">I/O Multiplexing</span>
            <span className="text-fg">POSIX poll() / select()</span>
          </div>
          <div>
            <span className="text-fg-dim block">Execution Model</span>
            <span className="text-fg">Single-Threaded Event Loop</span>
          </div>
          <div>
            <span className="text-fg-dim block">Repository</span>
            <a
              href="https://github.com/ayoubelmohamedi/webserv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline inline-flex items-center gap-1"
            >
              <span>github.com/webserv</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-10 text-sm leading-relaxed text-fg-muted">
          {/* Section: The Challenge */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-fg flex items-center gap-2">
              <span className="text-accent text-xs font-mono">01</span>
              <span>The Systems Challenge</span>
            </h2>
            <p>
              As part of the 1337 / 42 school curriculum, Webserv required building a fully functional HTTP/1.1 server from the ground up without using any external web libraries, frameworks, or modern C++ convenience abstractions.
            </p>
            <p>
              The primary architectural challenge was ensuring the entire server process never blocked on any socket or file descriptor. A slow or malicious client transmitting one byte every few seconds must never stall other concurrent connections, degrade throughput, or exhaust server resources.
            </p>
          </section>

          {/* Section: Request Lifecycle Diagram */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-fg flex items-center gap-2">
              <span className="text-accent text-xs font-mono">02</span>
              <span>Request Lifecycle &amp; State Machine</span>
            </h2>
            <p>
              The diagram below illustrates how connections flow through the single-threaded multiplexer.
            </p>
            <WebservLifecycleDiagram />
          </section>

          {/* Section: Technical Architecture */}
          <section className="space-y-4">
            <h2 className="text-lg font-bold text-fg flex items-center gap-2">
              <span className="text-accent text-xs font-mono">03</span>
              <span>Architecture &amp; Core Components</span>
            </h2>

            <div className="space-y-4">
              <div className="border-l-2 border-accent/60 pl-4 space-y-1.5">
                <h3 className="font-semibold text-fg">1. Multiplexed Event Loop</h3>
                <p>
                  The server maintains an array of monitored file descriptors passed to <code className="text-accent text-xs font-mono">poll()</code>. Sockets are flagged with <code className="text-accent text-xs font-mono">O_NONBLOCK</code> via <code className="text-accent text-xs font-mono">fcntl()</code>. When an event fires, the loop dispatches to the corresponding socket context without spawning worker threads.
                </p>
              </div>

              <div className="border-l-2 border-accent/60 pl-4 space-y-1.5">
                <h3 className="font-semibold text-fg">2. Deterministic State Machine Parser</h3>
                <p>
                  Because network data arrives in arbitrary fragmentation, the HTTP parser operates as a resumable state machine:
                </p>
                <ul className="list-disc list-inside text-xs space-y-1 pl-2">
                  <li><strong className="text-fg">REQUEST_LINE:</strong> Extracts HTTP method (GET, POST, DELETE), URI, and protocol version.</li>
                  <li><strong className="text-fg">HEADERS:</strong> Parses key-value header mappings, validating Host headers and Content-Length.</li>
                  <li><strong className="text-fg">BODY / CHUNKED:</strong> Handles chunked transfer encoding (<code className="text-accent text-xs font-mono">Transfer-Encoding: chunked</code>) by parsing hex chunk lengths until the terminating 0-chunk.</li>
                </ul>
              </div>

              <div className="border-l-2 border-accent/60 pl-4 space-y-1.5">
                <h3 className="font-semibold text-fg">3. CGI Execution Pipeline</h3>
                <p>
                  Dynamic content (e.g., Python or PHP scripts) is executed by creating child processes using <code className="text-accent text-xs font-mono">fork()</code> and <code className="text-accent text-xs font-mono">execve()</code>. File descriptors are remapped with <code className="text-accent text-xs font-mono">dup2()</code> to unidirectional POSIX pipes, allowing the parent server to stream request bodies to CGI stdin and nonblockingly read generated HTML from CGI stdout.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Tradeoffs & C++98 Constraints */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-fg flex items-center gap-2">
              <span className="text-accent text-xs font-mono">04</span>
              <span>Tradeoffs &amp; Constraints</span>
            </h2>
            <p>
              Writing in C++98 meant no <code className="text-accent text-xs font-mono">std::unique_ptr</code>, no move semantics, and no standard threading library. Resource management relied on strict RAII patterns to guarantee that open file descriptors, dynamically allocated connection buffers, and child processes were properly closed and waited on during timeout or disconnect events.
            </p>
          </section>

          {/* Section: Verified Status */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-fg flex items-center gap-2">
              <span className="text-accent text-xs font-mono">05</span>
              <span>Verification &amp; Delivery Status</span>
            </h2>
            <p>
              Webserv was thoroughly evaluated under peer review and automated stress-testing using tools like Siege to verify that the server does not leak memory or hang under sustained load. The full source code and configuration syntax are available on GitHub.
            </p>
          </section>
        </div>

        {/* Sidebar Info */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="border border-border bg-bg-surface p-5 rounded-sm space-y-4 text-xs font-mono">
            <p className="font-semibold text-accent uppercase tracking-wider text-[11px] pb-2 border-b border-border">
              Server Specifications
            </p>

            <div>
              <span className="text-fg-dim block">Language Standard</span>
              <span className="text-fg">C++98 (no external libraries)</span>
            </div>

            <div>
              <span className="text-fg-dim block">Supported Methods</span>
              <span className="text-fg">GET, POST, DELETE</span>
            </div>

            <div>
              <span className="text-fg-dim block">Features</span>
              <span className="text-fg">Chunked Encoding, CGI, File Uploads, Custom Error Pages</span>
            </div>

            <div>
              <span className="text-fg-dim block">Event Model</span>
              <span className="text-fg">Nonblocking Sockets via poll()</span>
            </div>

            <div>
              <span className="text-fg-dim block">Evaluation</span>
              <span className="text-fg">Evaluated &amp; Passed (1337 / 42)</span>
            </div>

            <div>
              <span className="text-fg-dim block">Repository</span>
              <a
                href="https://github.com/ayoubelmohamedi/webserv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline break-all"
              >
                https://github.com/ayoubelmohamedi/webserv
              </a>
            </div>
          </div>

          <div className="border border-border/60 bg-bg p-4 rounded-sm text-xs text-fg-dim space-y-2">
            <p className="font-semibold text-fg">Systems Evidence</p>
            <p>
              All claims reflect code verified in the repository and tested against the 42 curriculum evaluation suite.
            </p>
          </div>
        </aside>
      </div>
    </article>
  );
}
