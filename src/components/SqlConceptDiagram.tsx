export default function SqlConceptDiagram() {
  return (
    <div className="my-8 border border-border bg-bg-surface p-4 sm:p-6 rounded-sm font-mono text-xs overflow-x-auto">
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-border/80 text-[11px] text-fg-dim">
        <span className="text-accent font-semibold">FIGURE 01 // SQLY INTERNAL STORAGE ENGINE CONCEPT</span>
        <span className="text-accent/70 border border-border px-1.5 py-0.5 rounded text-[10px]">
          work-in-progress :: conceptual
        </span>
      </div>

      <pre className="text-fg-muted leading-tight whitespace-pre text-[11px] sm:text-xs">
{`+-------------------------------------------------------------------------+
|                          SQL PARSER & EXECUTION                         |
|   "SELECT id, title FROM posts WHERE id = 42;"                          |
|         │                                                               |
|         ▼                                                               |
|   [Lexer / Tokenizer] ──► [Pratt Parser] ──► [Query Execution Plan]     |
+────────────────────────────────────────────────────────┬────────────────+
                                                         │
                                                         ▼
+-------------------------------------------------------------------------+
|                  STORAGE ENGINE & PAGE BUFFER (4096 BYTES)              |
|                                                                         |
|   Page Header (Fixed 64-byte metadata)                                  |
|   [page_id: 12] [page_type: LEAF] [free_space_offset: 0x07B0]           |
|                                                                         |
|   Slotted-Page Record Layout:                                           |
|   ├── Slot Array (grows forward from header):                           |
|   │     [slot 0: offset 4016] [slot 1: offset 3920] [slot 2: ...]       |
|   │                                                                     |
|   │     ░░░░░░░░░░░░░░░░ Free Contiguous Space ░░░░░░░░░░░░░░░░        |
|   │                                                                     |
|   └── Record Payloads (grow backward from end of page):                 |
|         [...record 2] [record 1: id=42, title="..."] [record 0]        |
+────────────────────────────────────────────────────────┬────────────────+
                                                         │
                                                         ▼
+-------------------------------------------------------------------------+
|                    B+ TREE INDEXING & PERSISTENCE                       |
|                                                                         |
|             [ Root Internal Node: Keys {20, 50} ]                       |
|                   /             |             \\                        |
|                  ▼              ▼              ▼                        |
|             [Leaf 0-19] ──► [Leaf 20-49] ──► [Leaf 50+] (doubly linked) |
|                                 │                                       |
|                     Exact match found: Key 42                           |
|                     Returns Record Pointer {Page 12, Slot 1}            |
|                                 │                                       |
|                                 ▼                                       |
|                     [POSIX File Write & fsync]                          |
+-------------------------------------------------------------------------+`}
      </pre>

      <p className="mt-4 text-[11px] text-fg-dim border-t border-border/40 pt-3">
        * Note: This diagram illustrates the architectural principles and learning goals explored in sqly. It represents educational systems design, not a claim of production ACID compliance or concurrency.
      </p>
    </div>
  );
}
