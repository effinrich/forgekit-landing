import { Text, type TextProps } from '@chakra-ui/react'
import { forwardRef } from 'react'

export interface GradientTextProps extends TextProps {
  /** Kept for API compatibility. All variants render ember (no gradients). */
  variant?: 'primary' | 'accent' | 'rainbow'
}

/**
 * Accent text. DESIGN.md forbids gradients, so this is a solid ember span.
 */
export const GradientText = forwardRef<HTMLParagraphElement, GradientTextProps>(
  ({ children, ...props }, ref) => {
    return (
      <Text ref={ref} as="span" color="ember" {...props}>
        {children}
      </Text>
    )
  }
)

GradientText.displayName = 'GradientText'
