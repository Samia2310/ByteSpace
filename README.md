# ByteSpace Frontend

A React + Vite + Tailwind CSS clone of the ByteSpace online course marketplace homepage.

## Pages / Routes set up
- `/` — Home (fully built)
- `/register` — Register (stub, send design next)
- `/search` — Search Page (stub)
- `/course/:id` — Course Details (stub)
- `/course/:id/lessons` — Course Lessons (stub)
- `/course/:id/reviews` — Course Reviews (stub)
- `/creator/:id` — Creator Profile (stub)
- `*` — 404 Not Found (fully built)

## Getting started

```bash
npm install
npm run dev
```

Then open the printed localhost URL. To build for production:

```bash
npm run build
npm run preview
```

## Structure
- `src/components/` — shared UI (Navbar, Footer, Layout) and decorative SVG shapes
- `src/components/home/` — all homepage sections (Hero, CourseGrid, Testimonials, etc.)
- `src/pages/` — one file per route

