import Link from "next/link";
import AsciiHeroArt from "@/components/AsciiHeroArt";
import { FEATURED_PROJECTS, SYSTEMS_PROJECTS, COMPACT_SYSTEMS_PROJECTS } from "@/lib/projects";
import { getAllPosts } from "@/lib/blog";

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-container mx-auto px-5 sm:px-8 py-10 sm:py-16 space-y-20 sm:space-y-28">
      {/* HERO SECTION */}
      <section className="flex flex-col-reverse lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-14 pt-4 sm:pt-8">
        <div className="flex-1 space-y-6 max-w-prose">
          <div className="inline-flex items-center gap-2 text-xs text-accent font-mono border border-border/80 px-2.5 py-1 rounded-sm bg-bg-surface">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>sys::morocco // 1337 network</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-fg">
              Ayoub Elmohamedi
            </h1>
            <p className="text-lg sm:text-xl text-accent font-medium">
              Web applications. Systems underneath.
            </p>
          </div>

          <p className="text-fg-muted text-base leading-relaxed">
            I&apos;m Ayoub, a developer based in Morocco. I build web applications and spend time
            understanding what sits underneath them: servers, databases, and operating systems.
            Some of my work is practical, some is for learning. I try to be clear about what works,
            what is unfinished, and what I learned along the way.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-bg font-semibold text-xs tracking-wide uppercase rounded-sm hover:bg-accent-hover transition-colors"
            >
              <span>View projects</span>
              <span aria-hidden="true">&darr;</span>
            </a>

            <a
              href="https://github.com/ayoubelmohamedi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-border text-fg-muted hover:text-fg hover:border-accent text-xs font-semibold rounded-sm transition-colors"
            >
              <span>GitHub</span>
              <span className="text-accent text-xs" aria-hidden="true">
                ↗
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/ayoub-elmohamedi-62377419a/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-border text-fg-muted hover:text-fg hover:border-accent text-xs font-semibold rounded-sm transition-colors"
            >
              <span>LinkedIn</span>
              <span className="text-accent text-xs" aria-hidden="true">
                ↗
              </span>
            </a>

            <a
              href="/ayoub_cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-border text-fg-muted hover:text-fg hover:border-accent text-xs font-semibold rounded-sm transition-colors"
            >
              <span>CV (PDF)</span>
              <span className="text-accent text-xs" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>
        </div>

        <div className="w-full lg:w-auto flex justify-center lg:justify-end">
          <AsciiHeroArt />
        </div>
      </section>

      {/* SECTION 01: FEATURED PRODUCT WORK */}
      <section id="work" className="space-y-8 scroll-mt-24">
        <div className="border-b border-border pb-3 flex items-baseline justify-between">
          <div className="flex items-center gap-3">
            <span className="text-accent text-xs font-semibold">01 / WORK</span>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-fg">
              Featured Product Projects
            </h2>
          </div>
          <span className="text-xs text-fg-dim hidden sm:inline">3 documented entries</span>
        </div>

        <p className="text-fg-muted text-sm max-w-prose">
          Web applications and business tools built end-to-end or in focused engineering collaborations.
          Click any entry for the complete technical case study.
        </p>

        <div className="space-y-6">
          {FEATURED_PROJECTS.map((proj) => (
            <article
              key={proj.slug}
              className="group border border-border bg-bg-surface/60 hover:bg-bg-surface hover:border-border-highlight transition-all p-5 sm:p-7 rounded-sm flex flex-col md:flex-row md:items-start justify-between gap-6"
            >
              <div className="space-y-3 flex-1">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="text-accent font-mono text-xs font-semibold">
                    {proj.number}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-fg group-hover:text-accent transition-colors">
                    <Link href={`/projects/${proj.slug}`} className="hover:underline">
                      {proj.title}
                    </Link>
                  </h3>
                  <span
                    className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded border ${
                      proj.status === "Work in Progress"
                        ? "border-amber-600/60 text-amber-300 bg-amber-950/20"
                        : proj.status === "Collaborative"
                        ? "border-sky-700/60 text-sky-300 bg-sky-950/20"
                        : "border-border text-fg-muted"
                    }`}
                  >
                    {proj.status}
                  </span>
                </div>

                <p className="text-xs text-accent/80 font-mono">
                  Role: {proj.role}
                </p>

                <p className="text-sm text-fg-muted leading-relaxed">
                  {proj.summary}
                </p>

                <div className="flex flex-wrap items-center gap-1.5 pt-2">
                  {proj.stack.primary.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono text-fg-dim bg-bg px-2 py-0.5 rounded border border-border/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex md:flex-col items-center md:items-end justify-between md:justify-start gap-3 border-t md:border-t-0 border-border/40 pt-4 md:pt-0 shrink-0">
                <Link
                  href={`/projects/${proj.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs text-accent hover:underline font-medium"
                >
                  <span>Read case study</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>

                {proj.repoUrl && (
                  <a
                    href={proj.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-fg-dim hover:text-fg transition-colors flex items-center gap-1"
                  >
                    <span>Source</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SECTION 02: SYSTEMS WORK */}
      <section id="systems" className="space-y-8 scroll-mt-24">
        <div className="border-b border-border pb-3 flex items-baseline justify-between">
          <div className="flex items-center gap-3">
            <span className="text-accent text-xs font-semibold">02 / SYSTEMS</span>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-fg">
              Systems &amp; Low-Level Projects
            </h2>
          </div>
          <span className="text-xs text-fg-dim hidden sm:inline">Servers, storage &amp; kernels</span>
        </div>

        <p className="text-fg-muted text-sm max-w-prose">
          Projects focused on POSIX primitives, event multiplexing, database storage layout, and Unix
          process lifecycles.
        </p>

        {/* Detailed Systems Entries */}
        <div className="space-y-6">
          {SYSTEMS_PROJECTS.map((proj) => (
            <article
              key={proj.slug}
              className="group border border-border bg-bg-surface/60 hover:bg-bg-surface hover:border-border-highlight transition-all p-5 sm:p-7 rounded-sm flex flex-col md:flex-row md:items-start justify-between gap-6"
            >
              <div className="space-y-3 flex-1">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="text-accent font-mono text-xs font-semibold">
                    {proj.number}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-fg group-hover:text-accent transition-colors">
                    <Link href={`/projects/${proj.slug}`} className="hover:underline">
                      {proj.title}
                    </Link>
                  </h3>
                  <span
                    className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded border ${
                      proj.status === "Work in Progress"
                        ? "border-amber-600/60 text-amber-300 bg-amber-950/20"
                        : "border-border text-fg-muted"
                    }`}
                  >
                    {proj.status}
                  </span>
                </div>

                <p className="text-xs text-accent/80 font-mono">
                  Role: {proj.role}
                </p>

                <p className="text-sm text-fg-muted leading-relaxed">
                  {proj.summary}
                </p>

                <div className="flex flex-wrap items-center gap-1.5 pt-2">
                  {proj.stack.primary.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono text-fg-dim bg-bg px-2 py-0.5 rounded border border-border/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex md:flex-col items-center md:items-end justify-between md:justify-start gap-3 border-t md:border-t-0 border-border/40 pt-4 md:pt-0 shrink-0">
                <Link
                  href={`/projects/${proj.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs text-accent hover:underline font-medium"
                >
                  <span>Explore internals</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>

                {proj.repoUrl && (
                  <a
                    href={proj.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-fg-dim hover:text-fg transition-colors flex items-center gap-1"
                  >
                    <span>Source</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Compact Systems Rows */}
        <div className="pt-4 space-y-4">
          <h3 className="text-sm font-semibold text-fg tracking-wide uppercase text-accent/90">
            Compact Systems Repositories (42 Curriculum &amp; Unix Tools)
          </h3>

          <div className="border border-border divide-y divide-border bg-bg-surface/30 rounded-sm">
            {COMPACT_SYSTEMS_PROJECTS.map((item) => (
              <div
                key={item.number}
                className="p-4 sm:p-5 flex flex-col md:flex-row md:items-baseline justify-between gap-4 hover:bg-bg-surface transition-colors"
              >
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-accent/70 font-mono text-xs">{item.number}</span>
                    <h4 className="font-bold text-fg text-base">{item.title}</h4>
                    <span className="text-xs text-fg-dim font-mono hidden sm:inline">
                      — {item.role}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-fg-muted leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono text-fg-dim bg-bg px-1.5 py-0.5 rounded border border-border/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="shrink-0 pt-2 md:pt-0">
                  <a
                    href={item.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-accent hover:underline font-mono"
                  >
                    <span>view repo</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 03: ABOUT */}
      <section id="about" className="space-y-8 scroll-mt-24">
        <div className="border-b border-border pb-3 flex items-baseline justify-between">
          <div className="flex items-center gap-3">
            <span className="text-accent text-xs font-semibold">03 / ABOUT</span>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-fg">
              Background &amp; Technologies
            </h2>
          </div>
          <span className="text-xs text-fg-dim hidden sm:inline">Morocco · 1337 / 42</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-sm">
          <div className="lg:col-span-2 space-y-4 text-fg-muted leading-relaxed">
            <p>
              I am a software developer based in Morocco. I studied at{" "}
              <strong className="text-fg font-semibold">1337</strong>, part of the international{" "}
              <strong className="text-fg font-semibold">42 Network</strong>. The peer-to-peer curriculum
              immersed me in C, Unix systems programming, POSIX network protocols, memory management, and
              building fundamental tools from scratch without third-party frameworks.
            </p>
            <p>
              Alongside systems programming, I build complete modern web applications. I care deeply
              about understanding the full path of an execution: how a user action in a browser translates
              into an HTTP packet, how a socket server polls for events without blocking, how storage
              engines lay out records into fixed-size pages on disk, and how to protect applications with
              sound security architecture.
            </p>
            <p>
              My goal is to write software that is honest, fast, and maintainable. When a project is
              in progress or experimental, I document its exact boundaries rather than claiming
              unsupported benchmarks or inflated production statistics.
            </p>
          </div>

          <div className="border border-border bg-bg-surface p-5 rounded-sm space-y-5 text-xs">
            <div>
              <p className="font-semibold text-accent uppercase tracking-wider mb-2 text-[11px]">
                01 // Languages
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["TypeScript", "JavaScript", "Python", "C", "C++"].map((item) => (
                  <span
                    key={item}
                    className="px-2 py-0.5 rounded bg-bg border border-border text-fg-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="font-semibold text-accent uppercase tracking-wider mb-2 text-[11px]">
                02 // Applications &amp; Data
              </p>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "React",
                  "Next.js",
                  "Tailwind CSS",
                  "Node.js",
                  "Fastify",
                  "Prisma",
                  "PostgreSQL",
                  "Supabase",
                  "FastAPI",
                  "Socket.IO",
                  "Kafka",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-2 py-0.5 rounded bg-bg border border-border text-fg-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="font-semibold text-accent uppercase tracking-wider mb-2 text-[11px]">
                03 // Systems &amp; Tooling
              </p>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Linux / Unix",
                  "Docker & Compose",
                  "Nginx",
                  "Git",
                  "ModSecurity / WAF",
                  "Playwright",
                  "ESLint",
                  "Make / Clang",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-2 py-0.5 rounded bg-bg border border-border text-fg-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04: CONFERENCES, EVENTS & BLOG */}
      <section id="blog" className="space-y-6 scroll-mt-24">
        <div className="border-b border-border pb-3 flex items-baseline justify-between">
          <div className="flex items-center gap-3">
            <span className="text-accent text-xs font-semibold">04 / EVENTS &amp; BLOG</span>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-fg">
              Conferences, Events &amp; Blog
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-xs text-accent hover:underline inline-flex items-center gap-1 font-mono"
          >
            <span>view index</span>
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        {posts.length > 0 ? (
          <div className="divide-y divide-border border border-border bg-bg-surface/40 rounded-sm">
            {posts.map((post) => (
              <article key={post.slug} className="p-5 hover:bg-bg-surface transition-colors">
                <Link href={`/blog/${post.slug}`} className="group block space-y-1.5">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-bold text-fg group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                    <time className="text-xs text-fg-dim font-mono">{post.date}</time>
                  </div>
                  <p className="text-xs text-fg-muted">{post.description}</p>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="border border-border/80 bg-bg-surface/50 p-6 sm:p-8 rounded-sm space-y-3 font-mono text-xs">
            <div className="flex items-center gap-2 text-fg-muted">
              <span className="text-accent">&gt;</span>
              <span className="font-semibold text-fg">Status</span>
            </div>
            <p className="text-fg-muted leading-relaxed">
              Updates covering conferences, developer events, and blog posts (including published articles and technical notes):
            </p>
            <ul className="list-disc list-inside text-fg-dim space-y-1.5 pl-2">
              <li>
                <span className="text-fg-muted font-medium">Conferences &amp; Events:</span> Tracking regional tech gatherings, developer community meetups, and student club initiatives (e.g. 1337 / 42 Network and UM6P).
              </li>
              <li>
                <span className="text-fg-muted font-medium">Systems &amp; Database Internals:</span> Upcoming articles on nonblocking socket loops in C++98 and slotted-page storage mechanics in <span className="text-accent">sqly</span>.
              </li>
              <li>
                <span className="text-fg-muted font-medium">Application Security:</span> WAF/ModSecurity protection strategies and LLM prompt/schema orchestration.
              </li>
            </ul>
            <p className="text-fg-dim pt-2 border-t border-border/40">
              New write-ups, event recaps, and notes will appear here as they are published. Check{" "}
              <Link href="/blog" className="text-accent hover:underline">
                /blog
              </Link>{" "}
              for the archive index.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
