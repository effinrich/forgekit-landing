import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { colors, fonts, fontSizes, space, radii } from './tokens'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

export const theme = extendTheme({
  config,
  colors: {
    brand: colors.primary,
    accent: colors.accent,
    success: colors.success,
    slate: colors.slate,
  },
  fonts: {
    heading: '"Cal Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    body: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    mono: '"JetBrains Mono", "Fira Code", Consolas, monospace',
  },
  fontSizes,
  space,
  radii,
  styles: {
    global: {
      'html, body': {
        bg: 'slate.950',
        color: 'slate.100',
      },
      '::selection': {
        bg: 'brand.500',
        color: 'white',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: '600',
        borderRadius: 'lg',
      },
      variants: {
        solid: {
          bg: 'brand.500',
          color: 'white',
          _hover: {
            bg: 'brand.600',
            transform: 'translateY(-2px)',
            boxShadow: '0 10px 40px -10px rgba(139, 92, 246, 0.5)',
          },
          _active: {
            bg: 'brand.700',
            transform: 'translateY(0)',
          },
          transition: 'all 0.2s ease',
        },
        accent: {
          bg: 'accent.500',
          color: 'white',
          _hover: {
            bg: 'accent.600',
            transform: 'translateY(-2px)',
            boxShadow: '0 10px 40px -10px rgba(249, 115, 22, 0.5)',
          },
          _active: {
            bg: 'accent.700',
            transform: 'translateY(0)',
          },
          transition: 'all 0.2s ease',
        },
        outline: {
          borderColor: 'brand.500',
          color: 'brand.400',
          _hover: {
            bg: 'brand.500',
            color: 'white',
            transform: 'translateY(-2px)',
          },
          transition: 'all 0.2s ease',
        },
        ghost: {
          color: 'slate.300',
          _hover: {
            bg: 'slate.800',
            color: 'white',
          },
        },
      },
      defaultProps: {
        variant: 'solid',
      },
    },
    Heading: {
      baseStyle: {
        color: 'white',
        fontWeight: '700',
        letterSpacing: '-0.02em',
      },
    },
    Text: {
      baseStyle: {
        color: 'slate.300',
      },
    },
    Link: {
      baseStyle: {
        color: 'brand.400',
        _hover: {
          color: 'brand.300',
          textDecoration: 'none',
        },
      },
    },
    Card: {
      baseStyle: {
        container: {
          bg: 'slate.900',
          borderColor: 'slate.800',
          borderWidth: '1px',
          borderRadius: 'xl',
        },
      },
    },
  },
})
