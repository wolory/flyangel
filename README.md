# FlyAngel

A calm, modern flight-finder demo. FlyAngel ranks flights by a **Calm Score** so
every trip starts with a little more peace of mind.

Built with [Vite](https://vite.dev), [React](https://react.dev), and TypeScript.

## Requirements

- [Node.js](https://nodejs.org) 22+
- [pnpm](https://pnpm.io) 10+ (`corepack enable` or `npm i -g pnpm`)

## Getting started

```bash
pnpm install        # install dependencies
pnpm dev            # start the dev server at http://localhost:5173
```

## Scripts

| Command          | Description                                  |
| ---------------- | -------------------------------------------- |
| `pnpm dev`       | Start the Vite dev server (port 5173)        |
| `pnpm build`     | Type-check and build for production          |
| `pnpm preview`   | Preview the production build locally         |
| `pnpm lint`      | Run ESLint over the project                  |
| `pnpm typecheck` | Type-check without emitting output           |

## Project structure

```
.
├── index.html            # App entry HTML
├── public/angel.svg      # Brand mark / favicon
├── src/
│   ├── main.tsx          # React entry point
│   ├── App.tsx           # FlyAngel search + booking UI
│   ├── flights.ts        # Sample flight data + helpers
│   ├── App.css           # Component styles
│   └── index.css         # Global styles / theme
├── vite.config.ts        # Vite + React config
└── .cursor/environment.json  # Cloud Agent dev environment
```

## Cloud Agent environment

`.cursor/environment.json` configures the Cursor Cloud Agent environment:

- **install:** `pnpm install --frozen-lockfile`
- **terminals:** `dev` runs `pnpm dev`
- **ports:** `5173` (Vite dev server)
