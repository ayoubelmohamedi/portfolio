export default function WebservLifecycleDiagram() {
  return (
    <div className="my-8 border border-border bg-bg-surface p-4 sm:p-6 rounded-sm font-mono text-xs overflow-x-auto">
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-border/80 text-[11px] text-fg-dim">
        <span className="text-accent font-semibold">FIGURE 02 // WEBSERV EVENT LOOP &amp; REQUEST LIFECYCLE</span>
        <span className="text-fg-muted border border-border px-1.5 py-0.5 rounded text-[10px]">
          verified 42 implementation
        </span>
      </div>

      <pre className="text-fg-muted leading-tight whitespace-pre text-[11px] sm:text-xs">
{`  +───────────────────────────────────────────────────────────────+
  │                  NONBLOCKING EVENT MULTIPLEXER                │
  │                  POSIX poll() / select() loop                 │
  +───────────────────────────────┬───────────────────────────────+
                                  │
             ┌────────────────────┴───────────────────┐
             ▼                                        ▼
    [POLLIN on Listen Socket]               [POLLIN on Client Socket]
             │                                        │
    accept() nonblocking                     recv() nonblocking chunk
    create ClientContext                              │
                                                      ▼
                                       +─────────────────────────────+
                                       │   HTTP/1.1 STATE MACHINE    │
                                       │  - Parse Request Line       │
                                       │  - Parse Headers map        │
                                       │  - Handle chunked/transfer  │
                                       +──────────────┬──────────────+
                                                      │
                                                      ▼
                                       [Route & Virtual Host Match]
                                                      │
                       ┌──────────────────────────────┴──────────────────────────────┐
                       │                                                             │
                       ▼                                                             ▼
             [Static File Request]                                         [CGI Script Request]
                       │                                                             │
             Open file nonblocking                                         fork() child process
             Stream chunks to buffer                                       dup2() stdin/stdout pipes
                       │                                                   execve() script runner
                       │                                                             │
                       └──────────────────────────────┬──────────────────────────────┘
                                                      │
                                                      ▼
                                         [POLLOUT on Client Socket]
                                         send() buffered response
                                         close / keep-alive timeout`}
      </pre>

      <p className="mt-4 text-[11px] text-fg-dim border-t border-border/40 pt-3">
        * Every step in the connection lifecycle is strictly nonblocking. Socket readiness drives state transitions without worker threads or blocking I/O calls.
      </p>
    </div>
  );
}
