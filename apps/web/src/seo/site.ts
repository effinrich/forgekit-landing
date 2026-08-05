/** Production origin — must match Vercel primary domain (include www if that is canonical). */
export const SITE_ORIGIN = 'https://www.forgekit.cloud'

/** Default Open Graph / Twitter card image (`apps/web/public/og.png`). */
export const SITE_OG_IMAGE = `${SITE_ORIGIN}/og.png`
export const SITE_OG_IMAGE_WIDTH = 1200
export const SITE_OG_IMAGE_HEIGHT = 630

/** Mintlify docs for Storybook MCP (see docs/DEPLOY_DOCS_FORGEKIT_CLOUD.md). */
export const DOCS_STORYBOOK_MCP = 'https://docs.forgekit.cloud'

export function absoluteUrl(path: string): string {
  if (path.startsWith('http')) return path
  const p = path.startsWith('/') ? path : `/${path}`
  return p === '/' ? SITE_ORIGIN : `${SITE_ORIGIN}${p}`
}
