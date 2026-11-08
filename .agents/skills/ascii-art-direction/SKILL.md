---
name: ascii-art-direction
description: Designs and refines minimalist ASCII and systems-inspired portfolio interfaces. Use for typography, composition, character artwork, motion and responsive visual polish.
---

# ASCII art direction

Read the project brief before changing visual design. Establish a small token set and design one coherent page before spreading components across routes.

1. Create hierarchy through typography, spacing, alignment and thin borders. Use warm dark neutrals and one muted accent. Keep body copy comfortably readable; system labels are secondary.
2. Build ordinary semantic navigation and project links. Terminal influence is visual; never require commands or make visitors wait for simulated typing.
3. Give the page one recognizable character-grid motif. Prefer static text/CSS first. Use FIGlet at build time for compact lettering only. If actual 3D earns its cost, lazy-load React Three Fiber/Drei AsciiRenderer in a small isolated region.
4. Make ASCII a separate decorative layer with preserved whitespace and a monospaced font without ligatures. Keep real identity and content in semantic HTML. Supply a static fallback for WebGL/loading failure.
5. Honor reduced motion. Offer a pause/off control for continuous animation, suspend hidden/offscreen work, cap rendering cost and clean up animation loops and graphics resources.
6. Avoid neon overload, CRT distortion, fake boot sequences, excessive scrambling, custom cursors, scroll hijacking, uniform dashboard cards and tiny text.
7. Check mobile, tablet and desktop composition. Reflow artwork instead of shrinking all typography. No page-wide horizontal overflow. Keep touch targets comfortable and hover details available on focus/touch.

Before finishing, inspect the actual page. Explain specific visual refinements and any rendering limitation; do not claim successful browser verification without running it.
