import { SITE_ORIGIN } from '../seo/site'

const NPM_MCP = 'https://www.npmjs.com/package/forgekit-storybook-mcp'
const GH_MCP = 'https://github.com/effinrich/storybook-mcp'

export const siteNavLinks = [
  { label: 'Home', href: '/' },
  { label: 'Packages', href: '/packages' },
  { label: 'Docs', href: '/docs' },
  { label: 'Features', href: '/#features' },
]

export const siteFooterColumns = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '/#features' },
      { label: 'Changelog', href: '/changelog' },
      { label: 'Roadmap', href: '/roadmap' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '/docs' },
      { label: 'Packages', href: '/packages' },
      { label: 'Storybook MCP repo', href: GH_MCP },
      { label: 'npm', href: NPM_MCP },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'X', href: 'https://x.com/forgekitdev' },
      { label: 'GitHub', href: GH_MCP },
    ],
  },
]

export const siteSocialLinksMeta = [
  { href: 'https://x.com/forgekitdev', label: 'X' },
  { href: GH_MCP, label: 'GitHub' },
  { href: 'https://discord.gg/jqt9EhYe', label: 'Discord' },
]

export const SITE_SITEMAP_URL = `${SITE_ORIGIN}/sitemap.xml`
