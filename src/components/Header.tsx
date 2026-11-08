"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <header className="w-full border-b border-border bg-bg/95 backdrop-blur sticky top-0 z-40 transition-colors">
        <div className="max-w-container mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="font-semibold tracking-tight text-fg hover:text-accent transition-colors flex items-center gap-2 group"
          >
            <span className="text-accent group-hover:translate-x-0.5 transition-transform font-mono">
              &gt;
            </span>
            <span>Ayoub Elmohamedi</span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-6 text-sm text-fg-muted"
          >
            <Link
              href="/#work"
              className="hover:text-fg hover:underline underline-offset-4 transition-colors"
            >
              <span className="text-accent/60 mr-1 text-xs">01</span>Work
            </Link>
            <Link
              href="/#systems"
              className="hover:text-fg hover:underline underline-offset-4 transition-colors"
            >
              <span className="text-accent/60 mr-1 text-xs">02</span>Systems
            </Link>
            <Link
              href="/#about"
              className="hover:text-fg hover:underline underline-offset-4 transition-colors"
            >
              <span className="text-accent/60 mr-1 text-xs">03</span>About
            </Link>
            <Link
              href="/blog"
              className="hover:text-fg hover:underline underline-offset-4 transition-colors"
            >
              <span className="text-accent/60 mr-1 text-xs">04</span>Blog
            </Link>
            <span className="text-border">|</span>
            <a
              href="https://github.com/ayoubelmohamedi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors flex items-center gap-1.5"
            >
              <span>GitHub</span>
              <span className="text-xs text-accent" aria-hidden="true">
                ↗
              </span>
            </a>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden px-3 py-1.5 text-xs border border-border text-fg-muted hover:text-fg hover:border-accent transition-colors rounded-sm"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? "[ close ]" : "[ menu ]"}
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <nav
            aria-label="Mobile Navigation"
            className="md:hidden border-t border-border bg-bg-surface px-6 py-4 flex flex-col gap-3 text-sm text-fg-muted"
          >
            <Link
              href="/#work"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-accent transition-colors"
            >
              <span className="text-accent/60 mr-2 text-xs">01</span>Work
            </Link>
            <Link
              href="/#systems"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-accent transition-colors"
            >
              <span className="text-accent/60 mr-2 text-xs">02</span>Systems
            </Link>
            <Link
              href="/#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-accent transition-colors"
            >
              <span className="text-accent/60 mr-2 text-xs">03</span>About
            </Link>
            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-accent transition-colors"
            >
              <span className="text-accent/60 mr-2 text-xs">04</span>Blog
            </Link>
            <a
              href="https://github.com/ayoubelmohamedi"
              target="_blank"
              rel="noopener noreferrer"
              className="py-1 text-accent flex items-center gap-1"
            >
              <span>GitHub</span>
              <span className="text-xs">↗</span>
            </a>
          </nav>
        )}
      </header>
    </>
  );
}
