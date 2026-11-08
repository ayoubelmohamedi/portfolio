---
name: portfolio-quality
description: Implements and verifies accessible, responsive, fast personal portfolios with static project and blog content. Use for portfolio architecture, integration, tests and final browser review.
---

# Portfolio quality

Inspect the existing project and preserve its conventions. Read the brief and content facts. Favor a small static/server-rendered site, typed local data and editable Markdown over unnecessary services.

1. Implement actual routes, project navigation, a blog index and article template. Empty published content gets an honest empty state. Missing URLs never become dead buttons.
2. Keep decorative interactive components isolated. Avoid loading graphics engines or code highlighters into every client route. Verify compatible dependency versions and retain the lockfile.
3. Use semantic landmarks, heading order, a skip link, visible keyboard focus, sensible link labels and adequate contrast. Ensure touch and keyboard users can access hover content.
4. Verify reduced motion, an animation-off control for continuous art, static fallbacks and cleanup of loops/listeners/graphics resources. Check server/static content remains readable without animation or client JavaScript.
5. Check 360px, 768px and 1440px layouts. Keep overflow contained within code/art regions; prevent page-wide scrolling. Inspect case-study and article pages, not just the hero.
6. Validate content metadata and keep drafts/private evidence/missing-content notes out of public routes, feeds and sitemaps. Do not enable arbitrary raw HTML or executable content for Markdown without a reason.
7. Add metadata and useful error/404 states. Configure canonical URLs only from a real supplied domain. Use actual contact values only.
8. Run relevant build/type/lint scripts, check routes and draft exclusion, inspect browser console and keyboard flows, and fix found issues. Measure performance where tools exist. Do not fabricate Lighthouse scores or checks.

Report the working run command, completed checks, material limitations and content still needed. Deployment is a separate action unless the user requests it.
