import { Helmet } from 'react-helmet-async'
import {
  SITE_ORIGIN,
  SITE_OG_IMAGE,
  SITE_OG_IMAGE_HEIGHT,
  SITE_OG_IMAGE_WIDTH,
  absoluteUrl,
} from './site'

export interface SeoProps {
  /** Page title (brand suffix added unless it already contains ForgeKit). */
  title: string
  description: string
  /** Pathname only, e.g. `/packages` or `/` */
  path: string
  /** Set for thank-you / low-value pages you do not want indexed. */
  noindex?: boolean
  /** Absolute image URL for previews; defaults to `SITE_OG_IMAGE`. */
  ogImage?: string
  /** Short description of the preview image for accessibility. */
  ogImageAlt?: string
  /** Extra JSON-LD objects (e.g. Organization on home). */
  jsonLd?: Record<string, unknown>[]
}

function buildTitle(title: string): string {
  if (title.includes('· ForgeKit') || title.endsWith('ForgeKit')) return title
  return `${title} · ForgeKit`
}

export function Seo({
  title,
  description,
  path,
  noindex,
  ogImage = SITE_OG_IMAGE,
  ogImageAlt = 'ForgeKit — open-source Storybook MCP tooling',
  jsonLd,
}: SeoProps) {
  const canonical = absoluteUrl(path === '' ? '/' : path)
  const fullTitle = buildTitle(title)

  return (
    <Helmet prioritizeSeoTags>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="ForgeKit" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:locale" content="en_US" />
      {ogImage ? (
        <>
          <meta property="og:image" content={ogImage} />
          <meta property="og:image:width" content={String(SITE_OG_IMAGE_WIDTH)} />
          <meta property="og:image:height" content={String(SITE_OG_IMAGE_HEIGHT)} />
          <meta property="og:image:alt" content={ogImageAlt} />
        </>
      ) : null}

      <meta name="twitter:card" content={ogImage ? 'summary_large_image' : 'summary'} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {ogImage ? (
        <>
          <meta name="twitter:image" content={ogImage} />
          <meta name="twitter:image:alt" content={ogImageAlt} />
        </>
      ) : null}

      {jsonLd?.map((obj, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(obj)}
        </script>
      ))}
    </Helmet>
  )
}

export const homeJsonLd: Record<string, unknown>[] = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ForgeKit',
    url: SITE_ORIGIN,
    description:
      'Open-source ForgeKit tooling: Storybook MCP, Figma token MCP, and Nx/CLI plugins for design-system workflows.',
    sameAs: [
      'https://github.com/effinrich/storybook-mcp',
      'https://www.npmjs.com/package/forgekit-storybook-mcp',
      'https://x.com/forgekitdev',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name: 'forgekit-storybook-mcp',
    programmingLanguage: 'TypeScript',
    license: 'https://opensource.org/licenses/MIT',
    codeRepository: 'https://github.com/effinrich/storybook-mcp',
    url: 'https://www.npmjs.com/package/forgekit-storybook-mcp',
    description:
      'Model Context Protocol server for Storybook story generation, tests, docs, sync, and Figma Code Connect.',
  },
]
