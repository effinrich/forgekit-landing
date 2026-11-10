/** Forge tokens from apps/web/DESIGN.md + apps/web/src/styles/system.css. Hexes only. */

export const forgeColors = {
  ink: '#0B0B0C',
  graphite: '#131315',
  sunken: '#1B1B1E',
  filament: '#26262A',
  ember: '#F65A1A',
  spark: '#FF7A38',
  bone: '#F2F2F3',
  ash: '#8B8B92',
  ashSoft: '#5A5A60',
  borderStrong: '#2F2F34',
  error: '#E2403A',
  success: '#4FB477',
  edgeHighlight: 'rgba(255, 255, 255, 0.03)',
  emberWash: 'rgba(246, 90, 26, 0.12)',
  emberHalo: 'rgba(246, 90, 26, 0.24)',
} as const

export const forgeFonts = {
  heading: '"Space Grotesk", "Helvetica Neue", Arial, sans-serif',
  body: '"Inter", "Helvetica Neue", Arial, sans-serif',
  mono: '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace',
} as const

export const colorTokens = {
  ink: { value: forgeColors.ink },
  graphite: { value: forgeColors.graphite },
  sunken: { value: forgeColors.sunken },
  filament: { value: forgeColors.filament },
  ember: { value: forgeColors.ember },
  spark: { value: forgeColors.spark },
  bone: { value: forgeColors.bone },
  ash: { value: forgeColors.ash },
  'ash-soft': { value: forgeColors.ashSoft },
  'border-strong': { value: forgeColors.borderStrong },
  error: { value: forgeColors.error },
  success: { value: forgeColors.success },
  'edge-highlight': { value: forgeColors.edgeHighlight },
  'ember-wash': { value: forgeColors.emberWash },
  'ember-halo': { value: forgeColors.emberHalo },
}

export const fontTokens = {
  heading: { value: forgeFonts.heading },
  body: { value: forgeFonts.body },
  mono: { value: forgeFonts.mono },
}

export const fontSizeTokens = {
  'display-xl': { value: '88px' },
  'display-lg': { value: '64px' },
  'display-md': { value: '48px' },
  'headline-lg': { value: '32px' },
  'headline-md': { value: '24px' },
  'title-md': { value: '18px' },
  'body-lg': { value: '16px' },
  'body-md': { value: '14px' },
  'body-sm': { value: '13px' },
  'label-sm': { value: '11px' },
  'mono-sm': { value: '12px' },
}

export const fontWeightTokens = {
  normal: { value: '400' },
  medium: { value: '500' },
  semibold: { value: '600' },
  bold: { value: '700' },
}

export const lineHeightTokens = {
  tight: { value: '1.05' },
  snug: { value: '1.2' },
  normal: { value: '1.45' },
  relaxed: { value: '1.6' },
}

export const letterSpacingTokens = {
  tight: { value: '-0.02em' },
  normal: { value: '0' },
  wide: { value: '0.04em' },
  wider: { value: '0.12em' },
}

export const spacingTokens = {
  gutter: { value: '24px' },
  'section-y': { value: '64px' },
}

export const radiusTokens = {
  none: { value: '0px' },
  sm: { value: '2px' },
  md: { value: '4px' },
  lg: { value: '8px' },
  full: { value: '999px' },
}

export const shadowTokens = {
  none: { value: 'none' },
  'inset-edge': { value: `inset 0 1px 0 ${forgeColors.edgeHighlight}` },
  card: { value: `inset 0 1px 0 ${forgeColors.edgeHighlight}` },
  pop: { value: '0 18px 40px -12px rgba(0,0,0,0.75), 0 2px 0 0 rgba(0,0,0,0.4)' },
  focus: { value: `0 0 0 2px ${forgeColors.emberHalo}` },
}

export const durationTokens = {
  fast: { value: '120ms' },
  base: { value: '200ms' },
}

export const easingTokens = {
  out: { value: 'cubic-bezier(0.2, 0.65, 0.25, 1)' },
}
