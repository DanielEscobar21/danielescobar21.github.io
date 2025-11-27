# danielescobar21.github.io

Personal portfolio for Daniel Escobar built with [Next.js](https://nextjs.org) (App Router / Next 14), TypeScript, and Tailwind CSS. The entire experience is data driven: `src/content/texts.ts` holds both English and Spanish copy for the hero, about, skills, education, experience, projects, and contact sections, which are orchestrated from `src/app/page.tsx`. The UI leans on `framer-motion` for motion, respects light/dark themes via `ThemeContext`, and keeps navigation smooth with the fixed `Navbar`.

## Key features

- **Data-first sections:** `src/content/texts.ts` defines every piece of copy (hero text, descriptions, titles, project cards, achievements) for both `es` and `en` so translations stay aligned and easy to edit.
- **Persistent theme & language:** `ThemeContext` stores the preferred theme and language in `localStorage` and exposes `toggleTheme`/`setLanguage` for the navbar controls and the bottom call-to-action.
- **Fully responsive layout:** `page.tsx` reuses `sectionClass`, `titleClass`, and `cardClass` helpers to keep spacing consistent while handling animated cards, skill accordions, and a paginated project carousel that adapts to mobile breakpoints.
- **Rich navigation:** `components/Navbar.tsx` highlights the active section while scrolling, offers a theme toggle, language selector, and a mobile drawer that mirrors the desktop links.
- **Interactive contact:** Contact info can be copied to clipboard with visual feedback, and the footer links to a downloadable resume plus LinkedIn/GitHub profiles for deeper exploration.

## Tech stack (selected dependencies)

- Next.js 14 + React 18 + TypeScript
- Tailwind CSS + PostCSS + modern CSS custom properties
- Framer Motion for smooth motion across sections
- FontAwesome packages included for future icon usage
- ESLint (via `next lint`) to keep TypeScript/React codebase consistent

## Getting started

### Prerequisites

- Node.js 20+
- Any package manager: npm / pnpm / yarn / bun

### Run locally

```bash
npm install            # or pnpm install / yarn install / bun install
npm run dev            # starts http://localhost:3000 with Fast Refresh
```

The dev server observes `src/app/page.tsx`, `src/components`, and `src/content/texts.ts`, so edits appear immediately thanks to Next.js Hot Reloading.

## Available scripts

| Command         | Description                                         |
| --------------- | --------------------------------------------------- |
| `npm run dev`   | Starts the development server with Fast Refresh.    |
| `npm run build` | Creates an optimized production build.              |
| `npm run start` | Serves the production build for local verification. |
| `npm run lint`  | Runs `next lint` over the project.                  |

Swap `npm` for `pnpm`, `yarn`, or `bun` as needed.

## Repository layout

- `src/app/page.tsx` – orchestrates every section (hero, about, skills, education, experience, projects, contact) plus automatic project carousel pagination, skill accordions, clipboard helper, and navigation helpers (`SectionNavigation`, `ScrollToTop`).
- `components/Navbar.tsx` – fixed navbar that tracks the active section, toggles the theme, switches language, and renders a mobile drawer.
- `src/context/ThemeContext.tsx` – `ThemeProvider` that persists theme/language preferences, exposes `useTheme`, and wraps the app in `src/app/layout.tsx`.
- `src/content/texts.ts` – bilingual structured data powering hero text, profile description, skills, education/experience timelines, project cards (with optional achievements and external URLs), and contact info.
- `src/app/layout.tsx` – sets global metadata, wraps children in `<ThemeProvider>`, and provides base `<body>` classes for dark/light backgrounds.
- `src/app/globals.css` – imports Tailwind layers, defines CSS custom properties, and enforces responsive font sizing and scroll behavior.
- `public/` – static assets (profile/resume, company logos, SVG icons, favicon, `CNAME` for the custom domain).
- Build tooling – `next.config.ts`/`js`, `tailwind.config.ts`/`js`, and `postcss.config.*` configure Next.js and Tailwind.

## Content & customization

- **Copy:** Update `src/content/texts.ts` to refresh hero messaging, about paragraphs, skill categories, timelines, or project data. Each project can define `title`, `type`, `company`, `description`, `longDescription`, `tech`, `achievements`, and an optional `url`.
- **Projects carousel:** The carousel shows two project cards per “page” on wider screens and one on mobile. Auto-play advances every 10 seconds but pauses on hover or manual navigation (`prev`, `next`, or pagination dots).
- **Skill cards:** Clicking a technical or soft skill expands details using Framer Motion states (`openTechSkill`, `openSoftSkill`, `openLanguageSkill`).
- **Theme + language:** Navbar buttons call into `ThemeContext` and store preferences in `localStorage`, keeping the last selection across visits.
- **Contact utilities:** Email button copies `danesc21@gmail.com` to the clipboard and displays a toast for three seconds; CV, LinkedIn, and GitHub links live in the contact section as well.

## Styling & behavior notes

- Shared Tailwind utility strings (`sectionClass`, `titleClass`, `cardClass`) keep backgrounds, spacing, and support for hover states consistent.
- Background gradients, noise textures, and motion come from inline Tailwind classes combined with `framer-motion` entry/hover effects.
- `globals.css` handles CSS resets, `@tailwind` layers, responsive font sizes, and a smooth scroll behavior.

## Deployment

1. Push changes to `main`; Vercel (linked to this repo) will run `npm run build` and deploy automatically.
2. For manual verification, run `npm run build` followed by `npm run start` to serve the production build locally.
3. Add secrets to `.env.local` (e.g., analytics keys) and reference them with `process.env` inside routes/components as needed.

## Learn more

- [Next.js Documentation](https://nextjs.org/docs) – guides on the App Router, layout/metadata, and deployment best practices.
- [Tailwind CSS](https://tailwindcss.com/docs) – utility-first styling powering the responsive sections.
- [Framer Motion](https://www.framer.com/motion/) – animation library used across the hero, cards, and navigation helpers.
