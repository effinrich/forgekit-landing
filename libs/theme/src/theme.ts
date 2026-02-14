import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'
import { colors, fonts } from './tokens'

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: colors.primary[50] },
          100: { value: colors.primary[100] },
          200: { value: colors.primary[200] },
          300: { value: colors.primary[300] },
          400: { value: colors.primary[400] },
          500: { value: colors.primary[500] },
          600: { value: colors.primary[600] },
          700: { value: colors.primary[700] },
          800: { value: colors.primary[800] },
          900: { value: colors.primary[900] },
          950: { value: colors.primary[950] },
        },
        accent: {
          50: { value: colors.accent[50] },
          100: { value: colors.accent[100] },
          200: { value: colors.accent[200] },
          300: { value: colors.accent[300] },
          400: { value: colors.accent[400] },
          500: { value: colors.accent[500] },
          600: { value: colors.accent[600] },
          700: { value: colors.accent[700] },
          800: { value: colors.accent[800] },
          900: { value: colors.accent[900] },
        },
        success: {
          50: { value: colors.success[50] },
          100: { value: colors.success[100] },
          200: { value: colors.success[200] },
          300: { value: colors.success[300] },
          400: { value: colors.success[400] },
          500: { value: colors.success[500] },
          600: { value: colors.success[600] },
          700: { value: colors.success[700] },
          800: { value: colors.success[800] },
          900: { value: colors.success[900] },
        },
        slate: {
          50: { value: colors.slate[50] },
          100: { value: colors.slate[100] },
          200: { value: colors.slate[200] },
          300: { value: colors.slate[300] },
          400: { value: colors.slate[400] },
          500: { value: colors.slate[500] },
          600: { value: colors.slate[600] },
          700: { value: colors.slate[700] },
          800: { value: colors.slate[800] },
          900: { value: colors.slate[900] },
          950: { value: colors.slate[950] },
        },
      },
      fonts: {
        heading: { value: fonts.heading },
        body: { value: fonts.body },
        mono: { value: fonts.mono },
      },
    },
    semanticTokens: {
      colors: {
        brand: {
          solid: { value: '{colors.brand.500}' },
          contrast: { value: '{colors.brand.100}' },
          fg: { value: '{colors.brand.700}' },
          muted: { value: '{colors.brand.100}' },
          subtle: { value: '{colors.brand.200}' },
          emphasized: { value: '{colors.brand.300}' },
          focusRing: { value: '{colors.brand.500}' },
        },
      },
    },
  },
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
})

export const system = createSystem(defaultConfig, config)

// Backward compat alias
export const theme = system
