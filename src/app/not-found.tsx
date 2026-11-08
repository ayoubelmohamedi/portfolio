import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-container mx-auto px-5 sm:px-8 py-20 flex flex-col items-start justify-center min-h-[50vh] space-y-6">
      <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-300 border border-amber-600/40 bg-amber-950/20 px-2.5 py-1 rounded-sm">
        <span>ERR_404 // ENOENT</span>
      </div>

      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold font-mono text-fg">
          404: Page Not Found
        </h1>
        <p className="text-fg-muted font-mono text-sm max-w-prose">
          The requested path does not exist in the routing table or has not been published yet.
        </p>
      </div>

      <pre className="text-xs font-mono text-accent p-4 bg-bg-surface border border-border rounded max-w-md w-full">
{`+-----------------------------------+
|  [sysfs] stat: NO SUCH FILE       |
|  return code: 0x0404              |
+-----------------------------------+`}
      </pre>

      <div className="pt-2">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-bg font-semibold text-xs tracking-wide uppercase rounded-sm hover:bg-accent-hover transition-colors font-mono"
        >
          <span>&larr; Return to root</span>
        </Link>
      </div>
    </div>
  );
}
