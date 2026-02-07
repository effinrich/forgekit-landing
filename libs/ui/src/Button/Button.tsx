import { forwardRef } from 'react'
import { Button as ChakraButton, type ButtonProps as ChakraButtonProps } from '@chakra-ui/react'

export interface ButtonProps extends Omit<ChakraButtonProps, 'size'> {
  /** Visual style variant */
  variant?: 'solid' | 'outline' | 'ghost'
  /** Button size */
  size?: 'sm' | 'md' | 'lg'
}

/**
 * Primary button component for user interactions.
 *
 * @example
 * ```tsx
 * <Button variant="solid" size="md" onClick={handleClick}>
 *   Click me
 * </Button>
 * ```
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'solid', size = 'md', children, ...props }, ref) => {
    return (
      <ChakraButton
        ref={ref}
        variant={variant}
        size={size}
        {...props}
      >
        {children}
      </ChakraButton>
    )
  }
)

Button.displayName = 'Button'
