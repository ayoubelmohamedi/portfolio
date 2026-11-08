interface ProjectStatusBadgeProps {
  status: "Work in Progress" | "Completed" | "Collaborative" | "Exploratory" | string;
  className?: string;
}

export default function ProjectStatusBadge({
  status,
  className = "",
}: ProjectStatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center text-[11px] font-mono border border-border/80 bg-bg px-2 py-0.5 rounded-sm text-fg-muted select-none ${className}`}
    >
      <span className="text-accent/60 mr-1 font-semibold" aria-hidden="true">
        [
      </span>
      <span className="lowercase tracking-tight">{status}</span>
      <span className="text-accent/60 ml-1 font-semibold" aria-hidden="true">
        ]
      </span>
    </span>
  );
}
