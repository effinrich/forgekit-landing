/**
 * Canonical links for ForgeKit-related npm packages.
 * npm registry is source of truth for repository URLs when in doubt.
 *
 * Docs: see /docs/DEPLOY_DOCS_FORGEKIT_CLOUD.md and /docs/REPO_CONSOLIDATION_AND_NAMING.md
 */
import { DOCS_STORYBOOK_MCP } from '../seo/site'

export { DOCS_STORYBOOK_MCP }
export type PackageDocTier = 'mintlify-in-repo' | 'readme' | 'readme-only'

/** How the tool integrates — avoids mistaking packages for duplicates */
export type PackageIntegration =
  | 'mcp-server'
  | 'nx-plugin'
  | 'node-cli'

export interface ForgekitPackageMeta {
  npmName: string
  title: string
  integration: PackageIntegration
  /** Short label for UI */
  integrationLabel: string
  audience: string
  description: string
  npmUrl: string
  githubUrl: string
  docsUrl: string
  docsLabel: string
  docTier: PackageDocTier
  lastPublishedNote?: string
}

export const FORGEKIT_PACKAGES: ForgekitPackageMeta[] = [
  {
    npmName: 'forgekit-storybook-mcp',
    title: 'Storybook MCP',
    integration: 'mcp-server',
    integrationLabel: 'MCP server (stdio) · CLI: forgekit-storybook-mcp, storybook-mcp',
    audience: 'Cursor, Claude Desktop, Windsurf, any MCP-capable editor',
    description:
      'Model Context Protocol server for Storybook: generate and sync stories, tests, MDX, Figma Code Connect, health checks, and file watching. Uses stdio JSON-RPC with your IDE — not an Nx plugin. Full documentation is hosted separately from this marketing site (see Documentation link).',
    npmUrl: 'https://www.npmjs.com/package/forgekit-storybook-mcp',
    githubUrl: 'https://github.com/effinrich/storybook-mcp',
    docsUrl: DOCS_STORYBOOK_MCP,
    docsLabel: 'Documentation (docs.forgekit.cloud)',
    docTier: 'mintlify-in-repo',
    lastPublishedNote:
      'Deploy Mintlify to this URL per docs/DEPLOY_DOCS_FORGEKIT_CLOUD.md — until DNS is live, the link may not resolve.',
  },
  {
    npmName: 'forgekit-figma-mcp',
    title: 'Figma MCP (design tokens)',
    integration: 'mcp-server',
    integrationLabel: 'MCP server (stdio) · token sync into code',
    audience: 'Teams syncing Figma variables into Chakra, Tailwind, or doc pipelines',
    description:
      'Separate MCP: pulls Figma design tokens into your repo — not Storybook story generation. Pair with Storybook MCP when you want both token fidelity and component stories. Repository name should match npm (rename legacy chakra-figma-mcp → forgekit-figma-mcp per REPO_CONSOLIDATION_AND_NAMING.md).',
    npmUrl: 'https://www.npmjs.com/package/forgekit-figma-mcp',
    githubUrl: 'https://github.com/effinrich/forgekit-figma-mcp',
    docsUrl: 'https://github.com/effinrich/forgekit-figma-mcp#readme',
    docsLabel: 'README',
    docTier: 'readme',
  },
  {
    npmName: '@effinrich/forgekit-nx-storybook',
    title: 'ForgeKit Nx Storybook',
    integration: 'nx-plugin',
    integrationLabel: 'Nx plugin · generators & executors',
    audience: 'Nx workspaces with @nx/storybook',
    description:
      'Nx-native integration: generators and executors for stories, interaction tests, Playwright component tests, and a11y audits. Not an MCP — runs inside Nx graphs and `project.json`. npm points at effinrich/forgekit; consolidate duplicate sources into that repo before archiving other namespaces.',
    npmUrl: 'https://www.npmjs.com/package/@effinrich/forgekit-nx-storybook',
    githubUrl: 'https://github.com/effinrich/forgekit',
    docsUrl: 'https://github.com/effinrich/forgekit#readme',
    docsLabel: 'Monorepo README',
    docTier: 'readme',
  },
  {
    npmName: '@effinrich/forgekit-storybook-plugin',
    title: 'ForgeKit Storybook plugin',
    integration: 'node-cli',
    integrationLabel: 'Node CLI · bin: forgekit-storybook-plugin',
    audience: 'Non-Nx repos or custom scripts (no Nx project graph)',
    description:
      'Standalone CLI for the same *class* of automation as the Nx plugin — story/tests/a11y generation from component analysis — but delivered as a Node binary, not Nx executors. Choose **this** or the Nx plugin for the same repo, not both as parallel sources of truth.',
    npmUrl: 'https://www.npmjs.com/package/@effinrich/forgekit-storybook-plugin',
    githubUrl: 'https://github.com/effinrich/forgekit-storybook-plugin',
    docsUrl: 'https://github.com/effinrich/forgekit-storybook-plugin#readme',
    docsLabel: 'README',
    docTier: 'readme-only',
  },
]
