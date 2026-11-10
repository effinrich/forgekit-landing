import { Box, type BoxProps } from '@chakra-ui/react'
import { forwardRef } from 'react'

export interface ContainerProps extends BoxProps {
  /** Maximum width variant */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

const maxWidths = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  full: '100%',
}

/**
 * Page container: 1280px max, 32px horizontal pad (system.css .container).
 */
export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ size = 'xl', children, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        w="100%"
        maxW={maxWidths[size]}
        mx="auto"
        px="8"
        {...props}
      >
        {children}
      </Box>
    )
  }
)

Container.displayName = 'Container'
