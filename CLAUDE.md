# CLAUDE.md — Trip Command Center

This file provides context and conventions for AI assistants (Claude and others) working in this repository.

---

## Project Overview

**Name:** command-center (trip-command-center)
**Purpose:** A React-based trip/travel command center application.
**Status:** Early-stage initialization — source code structure has not yet been scaffolded.

---

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| UI Framework | React | ^19.2.4 |
| DOM Rendering | react-dom | ^19.2.4 |
| Build Tool | Vite | ^7.3.1 |
| Vite Plugin | @vitejs/plugin-react | ^5.1.4 |
| Module System | CommonJS | — |

### Not yet configured (to be set up)
- TypeScript / `tsconfig.json`
- ESLint / Prettier
- Test framework (Vitest recommended for Vite projects)
- CI/CD pipeline
- Environment variable management (`.env`)

---

## Repository Structure

```
trip-command-center/
├── CLAUDE.md             # This file
├── package.json          # Project manifest and scripts
├── package-lock.json     # Pinned dependency versions
└── node_modules/         # Installed dependencies (do not edit)
```

### Expected structure once scaffolded

```
trip-command-center/
├── CLAUDE.md
├── index.html            # Vite HTML entry point
├── vite.config.js        # Vite configuration
├── package.json
├── package-lock.json
├── .env.example          # Environment variable template
├── .gitignore
├── src/
│   ├── main.jsx          # React app bootstrap
│   ├── App.jsx           # Root component
│   ├── components/       # Reusable UI components
│   ├── pages/            # Route-level page components
│   ├── hooks/            # Custom React hooks
│   ├── utils/            # Pure utility functions
│   └── assets/           # Static assets (images, fonts, etc.)
└── tests/                # Test files (mirrors src/ structure)
```

---

## Development Workflow

### Install dependencies

```bash
npm install
```

### Start dev server (once vite.config.js is present)

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Run tests

```bash
npm test
```

> **Note:** The test script is currently a placeholder (`exit 1`). Set up [Vitest](https://vitest.dev/) or another framework before running tests.

---

## Git Conventions

- **Main branch:** `main` (tracked at `origin/main`)
- **Feature branches:** use `claude/<short-description>-<id>` for AI-generated work
- **Commit messages:** use imperative mood, e.g. `Add trip overview component`, `Fix date formatting bug`
- **Never push directly to `main`** — use a branch and PR

### Branching workflow

```bash
git checkout -b <branch-name>
# make changes
git add <files>
git commit -m "Short description of change"
git push -u origin <branch-name>
```

---

## Code Conventions (to follow when writing source code)

### React
- Prefer **functional components** with hooks over class components.
- One component per file; filename matches the component name (e.g., `TripCard.jsx`).
- Co-locate component-specific styles and tests next to the component file.
- Use `prop-types` or TypeScript interfaces to document component props.

### Naming
- **Components:** PascalCase (`TripOverview`, `DateRangePicker`)
- **Files/folders:** kebab-case for non-component files (`use-trip-data.js`, `format-date.js`)
- **Variables/functions:** camelCase
- **Constants:** UPPER_SNAKE_CASE

### Imports
- Group imports: (1) React/external libraries, (2) internal modules, (3) assets/styles.
- Use relative imports within `src/`; avoid deep `../../../` chains.

### State Management
- Start with React's built-in `useState` / `useReducer` / `useContext`.
- Introduce an external state library (Zustand, Jotai, Redux Toolkit) only when component-level state becomes genuinely inadequate.

---

## Environment Variables

Vite exposes env vars prefixed with `VITE_` to the client bundle.

```env
# .env.example
VITE_API_BASE_URL=https://api.example.com
```

Access in code:
```js
const baseUrl = import.meta.env.VITE_API_BASE_URL;
```

Never commit `.env` files containing secrets. Commit `.env.example` with placeholder values only.

---

## Testing Guidelines

- Use **Vitest** (compatible with Vite, Jest-like API) for unit and integration tests.
- Use **React Testing Library** for component tests.
- Test files live in `tests/` mirroring `src/` structure, or alongside source files as `*.test.jsx`.
- Aim for tests that verify behavior, not implementation details.

```bash
# Recommended setup (not yet installed)
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom
```

---

## Key Commands Reference

| Command | Purpose |
|---------|---------|
| `npm install` | Install all dependencies |
| `npm run dev` | Start Vite dev server |
| `npm run build` | Build production bundle to `dist/` |
| `npm run preview` | Locally preview the production build |
| `npm test` | Run test suite (configure first) |

---

## Notes for AI Assistants

1. **No source code exists yet.** When scaffolding files, follow the expected structure above.
2. **Prefer Vite conventions** (e.g., `index.html` at root, `import.meta.env` for env vars, `src/main.jsx` as entry).
3. **React 19** is installed — use modern APIs (hooks, Suspense, concurrent features) rather than legacy patterns.
4. **Do not modify `node_modules/` or `package-lock.json` manually.** Use `npm install` / `npm uninstall`.
5. **Keep dependencies minimal.** Only add packages that are genuinely needed for the task at hand.
6. **Always add new packages to the correct section** (`dependencies` for runtime, `devDependencies` for build/test tools).
7. When in doubt about conventions, follow [Vite's official React template](https://vitejs.dev/guide/) as a baseline.
