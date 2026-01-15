# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed
- Fixed `libs/ui/package.json` configuration with proper exports, types, and peer dependencies
- Added npm version requirement (>=10) to package.json engines
- Fixed `test-storybook` script to run Storybook interaction tests instead of unit tests
- Initialized Husky git hooks with pre-commit hook for lint-staged

## [1.0.0] - 2026-01-07

### Changed
- **BREAKING**: Migrated from pnpm to npm package manager
- **BREAKING**: Changed `libs/ui` from CommonJS to ES Modules (`"type": "module"`)
- Updated all GitHub workflows to use npm/npx instead of pnpm/pnpx
- Added `.nvmrc` file specifying Node.js version 20
- Added `vercel.json` for deployment configuration
- Refactored Vitest configuration for ES module compatibility
- Updated all TypeScript configurations for ES module support

### Added
- Initial Nx monorepo setup with:
  - React 18 + Vite web application
  - UI component library with Storybook
  - Theme library with Chakra UI
  - E2E testing with Playwright
  - CI/CD workflows (Chromatic, tests, deployment)
- AGENTS.md with Nx workflow guidelines
- Comprehensive component library (Button, Badge, GradientText, FeatureCard, etc.)
- Visual regression testing with Chromatic
- ESLint, Prettier, and TypeScript configurations

### Migration Notes

#### pnpm to npm Migration

**Why**: To improve compatibility with certain CI/CD environments and simplify tooling requirements.

**Changes made**:
1. All workflow files now use `npm install` and `npx` commands
2. Engine requirements set to Node.js >=20 and npm >=10
3. All project scripts updated to use npm/npx
4. No functional changes to the codebase itself

**Developer Impact**:
- Use `npm install` instead of `pnpm install`
- Use `npm run <script>` instead of `pnpm <script>`
- Use `npx <command>` instead of `pnpx <command>`
- Delete `pnpm-lock.yaml` if it exists
- Use `package-lock.json` for dependency locking

**No changes required** for:
- Component code
- Test files
- Configuration files (beyond package manager commands)
- Import statements

#### ES Modules Migration

**Why**: Modern JavaScript standard, better tree-shaking, improved bundler compatibility.

**Changes made**:
1. Set `"type": "module"` in `libs/ui/package.json`
2. Updated TypeScript configs to use `"module": "esnext"` and `"moduleResolution": "bundler"`
3. Configured Vite to output ES modules only
4. Updated test configurations for ES module support

**Developer Impact**:
- All imports must use `.js` extensions in certain contexts (handled by bundler)
- No `require()` statements allowed; use `import` instead
- Tests and Storybook configurations updated to support ES modules
- No changes required to component code or exports
