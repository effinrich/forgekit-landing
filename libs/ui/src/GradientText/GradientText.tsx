import { Text, type TextProps } from '@chakra-ui/react'
import { forwardRef } from 'react'

export interface GradientTextProps extends TextProps {
  /** Gradient variant */
  variant?: 'primary' | 'accent' | 'rainbow'
}

const gradients = {
  primary: 'linear-gradient(135deg, #a78bfa 0%, #8b5cf6 50%, #6d28d9 100%)',
  accent: 'linear-gradient(135deg, #fb923c 0%, #f97316 50%, #ea580c 100%)',
  rainbow: 'linear-gradient(135deg, #8b5cf6 0%, #f97316 50%, #14b8a6 100%)',
}

/**
 * Text with gradient color fill for eye-catching headlines
 */
export const GradientText = forwardRef<HTMLParagraphElement, GradientTextProps>(
  ({ variant = 'primary', children, ...props }, ref) => {
    return (
      <Text
        ref={ref}
        as="span"
        background={gradients[variant]}
        backgroundClip="text"
        sx={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
        {...props}
      >
        {children}
      </Text>
    )
  }
)

GradientText.displayName = 'GradientText'
