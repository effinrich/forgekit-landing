import {
  createSystem,
  defaultConfig,
  defineConfig,
  defineRecipe,
  defineSlotRecipe,
} from '@chakra-ui/react'
import {
  colorTokens,
  durationTokens,
  easingTokens,
  fontSizeTokens,
  fontTokens,
  fontWeightTokens,
  letterSpacingTokens,
  lineHeightTokens,
  radiusTokens,
  shadowTokens,
  spacingTokens,
} from './tokens'

const buttonRecipe = defineRecipe({
  className: 'fk-button',
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2',
    height: '40px',
    px: '4',
    borderRadius: 'md',
    borderWidth: '1px',
    borderColor: 'transparent',
    fontFamily: 'body',
    fontSize: 'body-md',
    fontWeight: 'semibold',
    letterSpacing: 'wide',
    textTransform: 'uppercase',
    transitionProperty: 'background, border-color, color, box-shadow',
    transitionDuration: 'fast',
    _focusVisible: {
      outline: 'none',
      boxShadow: 'focus',
    },
    _disabled: {
      opacity: 0.45,
      cursor: 'not-allowed',
    },
  },
  variants: {
    variant: {
      solid: {
        bg: 'ember',
        color: 'ink',
        _hover: { bg: 'spark' },
      },
      outline: {
        bg: 'transparent',
        borderColor: 'border',
        color: 'fg',
        _hover: { borderColor: 'bone' },
      },
      ghost: {
        bg: 'transparent',
        color: 'fg.muted',
        _hover: { color: 'fg', bg: 'transparent' },
      },
      accent: {
        bg: 'ember',
        color: 'ink',
        _hover: { bg: 'spark' },
      },
    },
    size: {
      sm: { height: '32px', px: '3', fontSize: 'label-sm' },
      md: { height: '40px', px: '4', fontSize: 'body-md' },
      lg: { height: '48px', px: '6', fontSize: 'body-md' },
    },
  },
  defaultVariants: {
    variant: 'solid',
    size: 'md',
  },
})

const headingRecipe = defineRecipe({
  className: 'fk-heading',
  base: {
    fontFamily: 'heading',
    color: 'fg',
    letterSpacing: 'tight',
    margin: 0,
  },
})

const textRecipe = defineRecipe({
  className: 'fk-text',
  base: {
    fontFamily: 'body',
    color: 'fg',
  },
})

const linkRecipe = defineRecipe({
  className: 'fk-link',
  base: {
    color: 'accent',
    textDecoration: 'none',
    transitionProperty: 'color',
    transitionDuration: 'fast',
    _hover: {
      color: 'accent.hover',
      textDecoration: 'none',
    },
  },
})

const badgeRecipe = defineRecipe({
  className: 'fk-badge',
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '1',
    height: '22px',
    px: '2',
    borderRadius: 'sm',
    borderWidth: '1px',
    borderColor: 'border',
    bg: 'transparent',
    color: 'fg.muted',
    fontFamily: 'mono',
    fontSize: 'label-sm',
    fontWeight: 'medium',
    letterSpacing: 'wide',
    textTransform: 'uppercase',
  },
  variants: {
    variant: {
      subtle: {
        bg: 'transparent',
        borderColor: 'border',
        color: 'fg.muted',
      },
      outline: {
        bg: 'transparent',
        borderColor: 'ember',
        color: 'ember',
      },
      solid: {
        bg: 'ember',
        borderColor: 'ember',
        color: 'ink',
      },
    },
  },
  defaultVariants: {
    variant: 'subtle',
  },
})

const cardSlotRecipe = defineSlotRecipe({
  className: 'fk-card',
  slots: ['root', 'header', 'body', 'title', 'description', 'footer'],
  base: {
    root: {
      bg: 'bg.surface',
      borderWidth: '1px',
      borderColor: 'border',
      borderRadius: 'md',
      boxShadow: 'card',
      color: 'fg',
      p: '6',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '3',
      mb: '4',
    },
    body: {
      display: 'block',
    },
    title: {
      fontFamily: 'body',
      fontSize: 'title-md',
      fontWeight: 'semibold',
      color: 'fg',
    },
    description: {
      fontFamily: 'body',
      fontSize: 'body-md',
      color: 'fg.muted',
    },
    footer: {
      mt: '4',
    },
  },
})

const config = defineConfig({
  strictTokens: false,
  globalCss: {
    'html, body': {
      bg: 'bg',
      color: 'fg',
      fontFamily: 'body',
      fontSize: 'body-md',
      lineHeight: 'normal',
    },
    '::selection': {
      bg: 'ember',
      color: 'ink',
    },
  },
  theme: {
    tokens: {
      colors: colorTokens,
      fonts: fontTokens,
      fontSizes: fontSizeTokens,
      fontWeights: fontWeightTokens,
      lineHeights: lineHeightTokens,
      letterSpacings: letterSpacingTokens,
      spacing: spacingTokens,
      radii: radiusTokens,
      shadows: shadowTokens,
      durations: durationTokens,
      easings: easingTokens,
    },
    semanticTokens: {
      colors: {
        bg: {
          DEFAULT: { value: '{colors.ink}' },
          surface: { value: '{colors.graphite}' },
          sunken: { value: '{colors.sunken}' },
          subtle: { value: '{colors.graphite}' },
          muted: { value: '{colors.sunken}' },
          emphasized: { value: '{colors.filament}' },
          panel: { value: '{colors.graphite}' },
        },
        fg: {
          DEFAULT: { value: '{colors.bone}' },
          muted: { value: '{colors.ash}' },
          subtle: { value: '{colors.ash-soft}' },
        },
        border: {
          DEFAULT: { value: '{colors.filament}' },
          muted: { value: '{colors.filament}' },
          emphasized: { value: '{colors.border-strong}' },
          strong: { value: '{colors.border-strong}' },
        },
        accent: {
          DEFAULT: { value: '{colors.ember}' },
          hover: { value: '{colors.spark}' },
        },
        ember: {
          solid: { value: '{colors.ember}' },
          contrast: { value: '{colors.ink}' },
          fg: { value: '{colors.ember}' },
          muted: { value: '{colors.ember-wash}' },
          subtle: { value: '{colors.ember-wash}' },
          emphasized: { value: '{colors.spark}' },
          focusRing: { value: '{colors.ember}' },
        },
      },
    },
    textStyles: {
      'display-xl': {
        value: {
          fontFamily: 'heading',
          fontSize: 'display-xl',
          fontWeight: 'bold',
          lineHeight: 'tight',
          letterSpacing: 'tight',
        },
      },
      'display-lg': {
        value: {
          fontFamily: 'heading',
          fontSize: 'display-lg',
          fontWeight: 'bold',
          lineHeight: 'tight',
          letterSpacing: 'tight',
        },
      },
      'display-md': {
        value: {
          fontFamily: 'heading',
          fontSize: 'display-md',
          fontWeight: 'semibold',
          lineHeight: 'tight',
          letterSpacing: 'tight',
        },
      },
      'headline-lg': {
        value: {
          fontFamily: 'heading',
          fontSize: 'headline-lg',
          fontWeight: 'semibold',
          lineHeight: 'snug',
          letterSpacing: 'tight',
        },
      },
      'headline-md': {
        value: {
          fontFamily: 'heading',
          fontSize: 'headline-md',
          fontWeight: 'semibold',
          lineHeight: 'snug',
          letterSpacing: 'tight',
        },
      },
      'title-md': {
        value: {
          fontFamily: 'body',
          fontSize: 'title-md',
          fontWeight: 'semibold',
          lineHeight: 'snug',
        },
      },
      'body-lg': {
        value: {
          fontFamily: 'body',
          fontSize: 'body-lg',
          fontWeight: 'normal',
          lineHeight: 'relaxed',
        },
      },
      'body-md': {
        value: {
          fontFamily: 'body',
          fontSize: 'body-md',
          fontWeight: 'normal',
          lineHeight: 'normal',
        },
      },
      'body-sm': {
        value: {
          fontFamily: 'body',
          fontSize: 'body-sm',
          fontWeight: 'normal',
          lineHeight: 'normal',
          color: 'fg.muted',
        },
      },
      'label-sm': {
        value: {
          fontFamily: 'mono',
          fontSize: 'label-sm',
          fontWeight: 'medium',
          lineHeight: 'snug',
          letterSpacing: 'wider',
          textTransform: 'uppercase',
        },
      },
    },
    recipes: {
      button: buttonRecipe,
      heading: headingRecipe,
      text: textRecipe,
      link: linkRecipe,
      badge: badgeRecipe,
    },
    slotRecipes: {
      card: cardSlotRecipe,
    },
  },
})

export const system = createSystem(defaultConfig, config)
export const theme = system
