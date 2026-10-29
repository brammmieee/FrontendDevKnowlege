# Frontend Story

A single-page website that tells the story of frontend development — from static HTML
to a live Vue web UI that drives a ROS robot over WebSockets and JSON.

Built with **Vue 3 + Vite + Tailwind**, using the very stack the story teaches.

## Run

```bash
npm install
npm run dev       # local dev server
npm run build     # production build into dist/
npm run preview   # preview the production build
```

## Structure

- `src/App.vue` — layout, sidebar nav, scroll-spy.
- `src/components/` — reusable pieces: `CodeBlock`, `MermaidDiagram`, `SectionShell`, `DemoBox`.
- `src/sections/` — one file per chapter (16 chapters).

## Chapters

01 HTML & CSS · 02 jQuery era · 03 Components · 04 SSR vs SPA · 05 Vue vs React ·
06 Tailwind · 07 AI tooling · 08 Runtimes · 09 Full stack · 10 rosbridge ·
11 Why JSON · 12 WebSockets · 13 Pinia · 14 Camera · 15 CORS · 16 The moral
