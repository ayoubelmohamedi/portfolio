import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Conferences, Events & Blog // Ayoub Elmohamedi",
  description:
    "Notes from conferences, developer events, and technical articles on web applications, database internals, and systems programming.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-container mx-auto px-5 sm:px-8 py-10 sm:py-16 space-y-12">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs font-mono text-fg-dim flex items-center gap-2">
        <Link href="/" className="hover:text-accent transition-colors">
          root
        </Link>
        <span>/</span>
        <span className="text-fg">blog</span>
      </nav>

      {/* Header */}
      <header className="space-y-4 border-b border-border pb-8">
        <div className="flex items-center gap-3">
          <span className="text-accent font-mono text-xs font-semibold">04 / ARCHIVE</span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-fg">
            Conferences, Events &amp; Blog
          </h1>
        </div>
        <p className="text-fg-muted max-w-prose text-base">
          Conference takeaways, community events, and technical writing (including published articles, systems deep-dives, and engineering notes).
        </p>
      </header>

      {/* Content */}
      <div className="space-y-8">
        {posts.length > 0 ? (
          <div className="divide-y divide-border border border-border bg-bg-surface/40 rounded-sm">
            {posts.map((post) => (
              <article key={post.slug} className="p-6 hover:bg-bg-surface transition-colors">
                <Link href={`/blog/${post.slug}`} className="group block space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <h2 className="text-lg font-bold text-fg group-hover:text-accent transition-colors">
                      {post.title}
                    </h2>
                    <time className="text-xs text-fg-dim font-mono">{post.date}</time>
                  </div>
                  <p className="text-sm text-fg-muted leading-relaxed">{post.description}</p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono text-accent/80 bg-bg px-2 py-0.5 rounded border border-border"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="border border-border bg-bg-surface p-6 sm:p-10 rounded-sm space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-accent">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>status::active</span>
              </div>
              <h2 className="text-xl font-bold text-fg">
                Status
              </h2>
              <p className="text-sm text-fg-muted leading-relaxed max-w-prose">
                This space documents conferences, tech events, and blog publications (including technical articles, systems post-mortems, and community notes).
              </p>
            </div>

            <div className="border-t border-border/60 pt-6 space-y-4 text-xs font-mono">
              <p className="text-accent font-semibold uppercase tracking-wider text-[11px]">
                Upcoming &amp; In Preparation:
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-bg border border-border/80 rounded space-y-1">
                  <div className="flex items-center justify-between text-accent">
                    <span className="font-semibold uppercase tracking-wider text-[10px]">Conferences &amp; Events</span>
                    <span className="text-[10px] text-fg-dim">Morocco / 42 Network</span>
                  </div>
                  <p className="text-fg font-medium">Community Gatherings &amp; Tech Meetups</p>
                  <p className="text-fg-dim">
                    Takeaways from student initiatives and regional technology forums on distributed infrastructure, developer tooling, and modern web architectures.
                  </p>
                </div>

                <div className="p-3 bg-bg border border-border/80 rounded space-y-1">
                  <div className="flex items-center justify-between text-accent">
                    <span className="font-semibold uppercase tracking-wider text-[10px]">Technical Article</span>
                    <span className="text-[10px] text-fg-dim">Systems</span>
                  </div>
                  <p className="text-fg font-medium">1. Nonblocking Socket Loops in C++98</p>
                  <p className="text-fg-dim">
                    Analyzing poll() event loops, partial buffer fragmentation, and why edge-triggered systems behave differently than level-triggered systems.
                  </p>
                </div>

                <div className="p-3 bg-bg border border-border/80 rounded space-y-1">
                  <div className="flex items-center justify-between text-accent">
                    <span className="font-semibold uppercase tracking-wider text-[10px]">Technical Article</span>
                    <span className="text-[10px] text-fg-dim">Databases</span>
                  </div>
                  <p className="text-fg font-medium">2. Slotted Pages &amp; Disk Serialization in sqly</p>
                  <p className="text-fg-dim">
                    Why relational storage engines append variable-length row records backward from the page ceiling while pointer slots grow forward from the header.
                  </p>
                </div>

                <div className="p-3 bg-bg border border-border/80 rounded space-y-1">
                  <div className="flex items-center justify-between text-accent">
                    <span className="font-semibold uppercase tracking-wider text-[10px]">Technical Article</span>
                    <span className="text-[10px] text-fg-dim">Web &amp; Security</span>
                  </div>
                  <p className="text-fg font-medium">3. ModSecurity &amp; WAF Defense in Node.js Stacks</p>
                  <p className="text-fg-dim">
                    Practical lessons from Darway: tuning CRS regex pipelines to mitigate OWASP Top 10 vulnerabilities without introducing latency penalties.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-border/60 pt-4 flex items-center justify-between text-xs text-fg-dim font-mono">
              <span>Editorial Template: content/blog/template.md</span>
              <span className="text-accent/60">drafts published after author verification</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
