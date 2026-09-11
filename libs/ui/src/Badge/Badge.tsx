import { Badge as ChakraBadge, type BadgeProps as ChakraBadgeProps } from '@chakra-ui/react'
import { forwardRef } from 'react'

export interface BadgeProps extends Omit<ChakraBadgeProps, 'colorPalette'> {
  /** Badge variant */
  variant?: 'solid' | 'outline' | 'subtle'
  /** Color scheme — mapped onto Forge ember/success tokens */
  colorScheme?: 'brand' | 'accent' | 'success' | 'slate'
}

/**
 * Tag-style badge (2px radius, mono label). Not a pill.
 */
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'subtle', colorScheme = 'brand', children, ...props }, ref) => {
    const isAccent = colorScheme === 'brand' || colorScheme === 'accent'
    const resolvedVariant = isAccent && variant === 'subtle' ? 'outline' : variant

    return (
      <ChakraBadge ref={ref} variant={resolvedVariant} {...props}>
        {children}
      </ChakraBadge>
    )
  }
)

Badge.displayName = 'Badge'
