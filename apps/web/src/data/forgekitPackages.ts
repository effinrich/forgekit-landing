/**
 * Canonical links for ForgeKit-related npm packages.
 * npm registry is source of truth for repository URLs when in doubt.
 */
export type PackageDocTier = 'mintlify-in-repo' | 'readme' | 'readme-only'

export interface ForgekitPackageMeta {
  /** npm package name (for display) */
  npmName: string
  /** Short product title */
  title: string
  /** Who should use it */
  audience: string
  /** One paragraph */
  description: string
  npmUrl: string
  githubUrl: string
  /** Primary docs: README on GitHub until a public Mintlify URL exists */
  docsUrl: string
  docsLabel: string
  docTier: PackageDocTier
  /** npm time.modified at time of last catalog refresh (informational) */
  lastPublishedNote?: string
}

export const FORGEKIT_PACKAGES: ForgekitPackageMeta[] = [
  {
    npmName: 'forgekit-storybook-mcp',
    title: 'Storybook MCP',
    audience: 'Cursor, Claude Desktop, any MCP client',
    description:
      'Model Context Protocol server for Storybook: generate and sync stories, tests, MDX, Figma Code Connect, health checks, and more. This is the flagship package — Mintlify docs live in the repo (`docs/` + `mintlify dev`).',
    npmUrl: 'https://www.npmjs.com/package/forgekit-storybook-mcp',
    githubUrl: 'https://github.com/effinrich/storybook-mcp',
    docsUrl: 'https://github.com/effinrich/storybook-mcp#readme',
    docsLabel: 'README & repo docs',
    docTier: 'mintlify-in-repo',
    lastPublishedNote: 'Actively maintained (check npm for latest).',
  },
  {
    npmName: 'forgekit-figma-mcp',
    title: 'Figma MCP (tokens)',
    audience: 'Design-token sync into Chakra, Tailwind, and docs',
    description:
      'MCP server focused on pulling Figma design tokens into your codebase. Different problem than the Storybook MCP — pair them when you want both Figma structure and Storybook coverage.',
    npmUrl: 'https://www.npmjs.com/package/forgekit-figma-mcp',
    // npm registry lists this repository for the published package
    githubUrl: 'https://github.com/effinrich/chakra-figma-mcp',
    docsUrl: 'https://github.com/effinrich/chakra-figma-mcp#readme',
    docsLabel: 'README',
    docTier: 'readme',
  },
  {
    npmName: '@effinrich/forgekit-nx-storybook',
    title: 'ForgeKit Nx Storybook',
    audience: 'Nx monorepos using @nx/storybook',
    description:
      'Nx plugin: generators and executors for stories, interaction tests, Playwright component tests, and a11y audits. Same *theme* as the CLI plugin below, but wired through Nx — use one path, not both for the same concern.',
    npmUrl: 'https://www.npmjs.com/package/@effinrich/forgekit-nx-storybook',
    githubUrl: 'https://github.com/effinrich/forgekit',
    docsUrl: 'https://github.com/effinrich/forgekit#readme',
    docsLabel: 'Monorepo README',
    docTier: 'readme',
  },
  {
    npmName: '@effinrich/forgekit-storybook-plugin',
    title: 'ForgeKit Storybook plugin (CLI)',
    audience: 'Non-Nx or script-driven workflows',
    description:
      'CLI / Node package (`forgekit-storybook-plugin`) for generating stories, tests, and audits from component analysis. Overlaps in *goals* with the Nx plugin, but this is the **non-Nx** entry point.',
    npmUrl: 'https://www.npmjs.com/package/@effinrich/forgekit-storybook-plugin',
    githubUrl: 'https://github.com/effinrich/forgekit-storybook-plugin',
    docsUrl: 'https://github.com/effinrich/forgekit-storybook-plugin#readme',
    docsLabel: 'README',
    docTier: 'readme-only',
  },
]
