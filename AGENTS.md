# Repository Guidelines

## Project Structure & Module Organization

Astro routes live in `src/pages/`; `index.astro` composes UI from `src/components/` and the shared shell in `src/layouts/`. Browser TypeScript is in `src/scripts/`; global CSS is `src/styles/style.css`.

Place served static files in `public/`. Design references live in `docs/`, `design/`, `style-guide.md`, and `preview.jpg`. Never edit generated `dist/` or `node_modules/` content.

## Build, Test, and Development Commands

The toolchain is managed with NVM and Corepack. Use Node.js 24 or newer and the pnpm 11.21.0 version pinned in `package.json`.

- `pnpm install` installs the locked dependencies from `pnpm-lock.yaml`.
- `pnpm dev` starts Astro's local development server with hot reload.
- `pnpm build` creates the production site in `dist/` and catches Astro or TypeScript build errors.
- `pnpm preview` serves the production build for final browser checks.

There is currently no dedicated lint or automated test command. Always run `pnpm build` before submitting changes.

## Coding Style & Naming Conventions

Follow the existing Astro and strict TypeScript patterns. Use two-space indentation, semicolons, double quotes in TypeScript, single quotes in Astro frontmatter, and small modules with one clear responsibility. Name Astro components in PascalCase (`Advice.astro`), TypeScript files and functions in snake_case/camelCase respectively (`get_new_advice.ts`, `getNewAdvice`), and CSS classes with BEM-style names (`advice__button`). Prefer CSS custom properties for shared colors and mobile-first media rules.

## Testing Guidelines

For every change, verify the production build and manually test the page at mobile and desktop widths. Confirm the dice button's hover/focus behavior, successful advice refreshes from the Advice Slip API, and that failures are handled without uncaught errors. If adding tests, place them beside the relevant module as `*.test.ts` and add the corresponding script to `package.json`.

## Commit & Pull Request Guidelines

Recent commits use brief, imperative summaries such as `Update README` or `Add workspace file`; scoped Conventional Commit prefixes such as `chore:` are also accepted. Keep each commit focused and explain the user-visible outcome.

Pull requests should include a concise description, validation commands, and a linked issue when applicable. Include before/after screenshots for visual changes, covering both mobile and desktop layouts.

## Agent Workflow

Work in WSL 2's Bash shell using Linux paths; the repository is under `/home`, not `/mnt/c`. Use `rg` or `rg --files` for discovery and Git for diff/history checks. If a runner misses NVM tools or Corepack's cache is read-only, use `COREPACK_HOME=/tmp/advice-generator-corepack bash -lic 'nvm use 24 && pnpm build'` before reporting Node or pnpm unavailable.
