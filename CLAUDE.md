# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev     # start dev server (Next.js, http://localhost:3000)
npm run build   # production build
npm run start   # serve production build
npm run lint    # eslint (flat config, eslint.config.mjs)
```

There is no test suite in this project.

> **Heed AGENTS.md:** This is Next.js 16 with breaking changes vs. older versions. Read the relevant guide in `node_modules/next/dist/docs/` before writing Next.js-specific code.

## Architecture

Single-page personal portfolio. Next.js 16 App Router with React Server Components (`rsc: true`), React 19, TypeScript, Tailwind CSS v4.

- **`app/`** — App Router root. `layout.tsx` wraps everything in `Provider` (theme) plus the persistent `ResponsiveNav`, `Footer`, and `WhatsApp` chrome. `page.tsx` renders a single `Home` component.
- **`components/Home/Home.tsx`** — The whole page body. It is a `'use client'` component that renders every section (`Hero`, `About`, `Skills`, `Project`, `Experience`, `Contact`) in order, each wrapped in a `<div id="...">` anchor, and initializes AOS scroll animations in a `useEffect`. Navigation is anchor-based (`#hero`, `#about`, etc.) — there are no routes beyond `/`.
- **`components/`** — Organized by feature area: `Home/<Section>/` for page sections, `Helper/` for shared widgets (`SectionHeading`, `ThemeToggler`, `Logo`, `WhatsApp`), `Hoc/Provider.tsx` for the theme provider, and `ui/` for shadcn/ui primitives.

## Content & data

All page content is centralized in two root-level data modules — edit these, not the components, to change copy/links:

- **`data.ts`** — `stats`, `highlights`, `contactInfo`, `socialLinks`, `experiences`, `projects`, `skillCategories`, `footerSocialLinks`. Icons are stored as component references (lucide-react / react-icons) and rendered as `<item.icon />`.
- **`Constant/Constant.ts`** — `NavLinks` (the nav menu, anchor hrefs into the section ids above).

## Key conventions

- **Path alias:** `@/*` maps to the repo root (`tsconfig.json`). Imports look like `@/components/...`, `@/data`, `@/Constant/Constant`, `@/lib/utils`.
- **Styling:** Tailwind v4 via `@tailwindcss/postcss` (no `tailwind.config`; theme lives in `app/globals.css`). Merge classes with `cn()` from `@/lib/utils`. Dark mode is class-based (`dark:` variants throughout).
- **Theming:** `next-themes` with `attribute="class"`, `enableSystem={false}`, `defaultTheme="light"` (see `Hoc/Provider.tsx`).
- **shadcn/ui:** style `radix-nova`, base color `neutral`, lucide icons (`components.json`). New primitives go in `components/ui`.
- **Server Actions:** The contact form posts to `app/actions.ts` (`'use server'`), which sends mail via Resend. Requires `RESEND_API_KEY` in the environment. The client component (`Contact.tsx`) manages pending/status state manually around the action call.
- **Animations:** AOS (`data-aos="..."` attributes on elements); initialized once in `Home.tsx`.
