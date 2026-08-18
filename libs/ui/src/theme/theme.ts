import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'
import { colors, fontSizes, space, radii } from './tokens'

const toColorTokens = (palette: Record<string | number, string>) =>
  Object.fromEntries(
    Object.entries(palette).map(([shade, value]) => [shade, { value }])
  )

const toValueTokens = (obj: Record<string | number, string>) =>
  Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key, { value }])
  )

const config = defineConfig({
  globalCss: {
    'html, body': {
      bg: 'slate.950',
      color: 'slate.100',
    },
    '::selection': {
      bg: 'brand.500',
      color: 'white',
    },
  },
  theme: {
    tokens: {
      colors: {
        brand: toColorTokens(colors.primary),
        accent: toColorTokens(colors.accent),
        success: toColorTokens(colors.success),
        slate: toColorTokens(colors.slate),
      },
      fonts: {
        heading: {
          value:
            '"Cal Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        },
        body: {
          value:
            '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        },
        mono: {
          value: '"JetBrains Mono", "Fira Code", Consolas, monospace',
        },
      },
      fontSizes: toValueTokens(fontSizes),
      spacing: toValueTokens(space),
      radii: toValueTokens(radii),
    },
  },
})

/**
 * Chakra UI v3 system. Pass to `ChakraProvider` via the `value` prop.
 */
export const theme = createSystem(defaultConfig, config)
