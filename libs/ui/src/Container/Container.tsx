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
 * Responsive container for consistent page layouts
 */
export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ size = 'xl', children, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        w="100%"
        maxW={maxWidths[size]}
        mx="auto"
        px={{ base: 4, md: 6, lg: 8 }}
        {...props}
      >
        {children}
      </Box>
    )
  }
)

Container.displayName = 'Container'
