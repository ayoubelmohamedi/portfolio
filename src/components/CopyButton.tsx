"use client";

import { useState } from "react";

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback if clipboard API is restricted
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? "Copied code to clipboard" : "Copy code block"}
      className="text-[11px] font-mono border border-border px-2 py-1 rounded bg-bg text-fg-muted hover:text-accent hover:border-accent transition-colors"
    >
      {copied ? "[ copied ]" : "[ copy ]"}
    </button>
  );
}
