export default function Footer() {
  return (
    <footer className="w-full border-t border-border mt-auto bg-bg-surface/50 text-xs text-fg-muted">
      <div className="max-w-container mx-auto px-5 sm:px-8 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-medium text-fg">Ayoub Elmohamedi</p>
          <p className="text-fg-dim mt-0.5">
            Based in Morocco. Web applications &amp; systems underneath.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <a
            href="mailto:ayoubprog61@gmail.com"
            className="hover:text-accent transition-colors flex items-center gap-1"
          >
            <span className="text-accent/60">email:</span>
            <span>ayoubprog61@gmail.com</span>
          </a>

          <a
            href="https://github.com/ayoubelmohamedi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors flex items-center gap-1"
          >
            <span>GitHub</span>
            <span className="text-accent/60" aria-hidden="true">
              ↗
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/ayoub-elmohamedi-62377419a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors flex items-center gap-1"
          >
            <span>LinkedIn</span>
            <span className="text-accent/60" aria-hidden="true">
              ↗
            </span>
          </a>
        </div>
      </div>
      <div className="max-w-container mx-auto px-5 sm:px-8 pb-6 pt-2 border-t border-border/40 text-[11px] text-fg-dim flex flex-col sm:flex-row justify-between gap-2">
        <span>No tracking · No third-party analytics · Clean static HTML</span>
        <span>Palette: #111310 / #181B16 / #B6CF83</span>
      </div>
    </footer>
  );
}
