# forgekit-landing

SPA with UI library, Storybook, and testing

Generated with [Forgekit](https://forgekit.cloud)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Start Storybook
npm run storybook

# Run tests
npm run test

# Run e2e tests
npm run e2e
```

## Project Structure

```
forgekit-landing/
├── apps/
│   └── web/              # React SPA
├── libs/
│   ├── ui/               # UI component library
│   └── theme/            # Design tokens
├── tests/
│   └── e2e/              # Playwright e2e tests
└── .github/
    └── workflows/        # CI/CD pipelines
```

## Tech Stack

- **Framework**: React 18 + Vite
- **UI**: Chakra UI
- **Build System**: Nx
- **Testing**: Vitest + Playwright + Storybook
- **Visual Testing**: Chromatic

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run test` | Run unit tests |
| `npm run e2e` | Run e2e tests |
| `npm run storybook` | Start Storybook |
| `npm run lint` | Lint code |
| `npm run typecheck` | TypeScript type checking |

## Configuration

Copy `.env.example` to `.env.local` and configure:

- `FIGMA_ACCESS_TOKEN` - For design sync
- `CHROMATIC_PROJECT_TOKEN` - For visual testing

Run `npx forgekit setup` to configure interactively.

## License

MIT
