# Ayoub's ASCII portfolio — Antigravity starter kit

This is a build brief and three project-local skill templates for Antigravity CLI, not an implemented website. Nothing needs to be installed into ChatGPT.

## Use it

1. Extract this kit. Put `PORTFOLIO-PROMPT.md`, `PROJECT-FACTS.md`, and the `.agents` folder into your portfolio project's root. The `.agents` folder is hidden in Finder; press Command–Shift–Period to reveal hidden files. In an existing project, merge folders and review conflicts rather than replacing existing instructions.
2. In Terminal, enter that project folder and run `agy`. If unavailable, use Google's official installation instructions: https://antigravity.google/docs/getting-started?tab=cli
3. Paste this message into the interactive session:

```text
Read PORTFOLIO-PROMPT.md and PROJECT-FACTS.md. Read and apply the three project skills at .agents/skills/ascii-art-direction/SKILL.md, .agents/skills/honest-project-writing/SKILL.md, and .agents/skills/portfolio-quality/SKILL.md. Build the portfolio described in the prompt. Inspect the existing project first. Continue through implementation and browser verification; report missing content without inventing it. Do not publish it yet.
```

Antigravity discovers workspace skills in `.agents/skills/<name>/SKILL.md`. Each file has YAML metadata describing when to use it, followed by reusable instructions. Libraries are code dependencies; skills guide the agent's decisions. The build prompt describes this particular website.

Current CLI docs also describe skills becoming slash commands. You can invoke `/ascii-art-direction`, `/honest-project-writing`, or `/portfolio-quality` inside `agy`. If your installed version does not expose them, explicitly asking it to read the paths above works as ordinary file instructions. Restart `agy` after adding skills if discovery is stale. CLI-global skills use `~/.gemini/antigravity-cli/skills/`, but project-local skills are enough here.

Suggested refinement prompts:

```text
Apply ascii-art-direction. Refine the typography, spacing and ASCII hero so the site feels like a quiet systems notebook. Preserve readable project content and conventional navigation.
```

```text
Apply honest-project-writing. Audit every project claim against PROJECT-FACTS.md and repository evidence. Clearly distinguish built features, unknown details and planned work.
```

```text
Apply portfolio-quality. Inspect the actual site at mobile and desktop sizes, test keyboard navigation and reduced motion, and fix the issues you find. Report checks you actually ran.
```

## Library choices

| Dependency | Purpose | Decision |
| --- | --- | --- |
| Next.js + React + TypeScript | Pages, static content and metadata | Default for a new project; preserve an existing suitable stack |
| CSS / Tailwind | Grid, borders, typography and tokens | Use one coherent styling approach |
| `figlet` | Generate a compact ASCII wordmark | Build-time use; save output as text, ship no font collection |
| `motion` | Small entrance and focus/hover transitions | Optional; CSS is sufficient for simple effects |
| `three` + `@react-three/fiber` + `@react-three/drei` | A real 3D object rendered with Drei's `AsciiRenderer` | Optional enhancement only; lazy load, provide static fallback |
| `shiki` | Syntax highlighting for blog code | Run during build/server rendering |
| `react-markdown` + `remark-gfm` | Render local Markdown posts and case studies | Default content route; no raw HTML or executable MDX needed |

Start with static ASCII and CSS. Add the Three.js stack only if the hero actually benefits. Avoid installing several animation systems or a terminal emulator just for appearance. Keep browser libraries mutually compatible and use the project's package manager and lockfile.

LinkedIn is supplied and should appear in the footer: https://www.linkedin.com/in/ayoub-elmohamedi-62377419a/

Email is supplied: ayoubprog61@gmail.com. Include a working mailto link.

VisionPro compares served goods with cashier records and summarizes daily totals. Its technical direction is RTSP cameras, mini PC/Frigate, MQTT, SQLite and a possible web dashboard.

## Content still useful before publication

- Current delivery status and any additional verified stack details for Darway and VisionPro. Personal contributions for all three featured projects and Stride’s stack are now supplied in PROJECT-FACTS.md.
- VisionPro, Stride and sqly repository/demo URLs, if public; screenshots you are allowed to show.
- sqly implementation language, when ready; describe engineering concepts and work-in-progress status for now.
- A CV file and any finished blog posts.

These do not block the first build. Missing links should be omitted; missing publication content belongs in a private checklist. The public blog can start with an honest empty state.

## Sources checked on 8 November 2026

- Antigravity skills: https://antigravity.google/docs/skills
- Antigravity launch: https://antigravity.google/docs/getting-started?tab=cli
- FIGlet: https://github.com/patorjk/figlet.js
- Drei ASCII renderer: https://drei.docs.pmnd.rs/abstractions/ascii-renderer
- Three.js ASCII effect: https://threejs.org/docs/pages/AsciiEffect.html
- Motion: https://motion.dev/docs/react
- Shiki: https://shiki.style/
- React Markdown: https://github.com/remarkjs/react-markdown

Repository contents were not retrievable while preparing this kit. Links are user supplied; detailed repository claims must be checked during the build. Earlier sqly discussions established learning goals, not proof of completed implementations.
