import { Badge as ChakraBadge, type BadgeProps as ChakraBadgeProps } from '@chakra-ui/react'
import { forwardRef } from 'react'

export interface BadgeProps extends ChakraBadgeProps {
  /** Badge variant */
  variant?: 'solid' | 'outline' | 'subtle'
  /** Color palette */
  colorPalette?: 'brand' | 'accent' | 'success' | 'slate'
}

/**
 * Badge for labels, tags, and status indicators
 */
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'subtle', colorPalette = 'brand', children, ...props }, ref) => {
    return (
      <ChakraBadge
        ref={ref}
        variant={variant}
        colorPalette={colorPalette}
        px={3}
        py={1}
        borderRadius="full"
        fontSize="xs"
        fontWeight="600"
        textTransform="uppercase"
        letterSpacing="wider"
        {...props}
      >
        {children}
      </ChakraBadge>
    )
  }
)

Badge.displayName = 'Badge'
