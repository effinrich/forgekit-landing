import { Box, HStack, Image } from '@chakra-ui/react'
import { forwardRef } from 'react'

export interface LogoProps {
  /** Show full wordmark or just icon */
  variant?: 'icon' | 'wordmark'
  /** Size preset */
  size?: 'sm' | 'md' | 'lg'
}

const sizes = {
  sm: { icon: 32, wordmark: 140 },
  md: { icon: 40, wordmark: 180 },
  lg: { icon: 56, wordmark: 235 },
}

/**
 * ForgeKit Logo — uses official brand SVGs
 * Dark variant (white text/strokes) for dark backgrounds
 */
export const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ variant = 'wordmark', size = 'md' }, ref) => {
    const { icon, wordmark } = sizes[size]

    if (variant === 'icon') {
      return (
        <Box ref={ref}>
          <Image
            src="/forgekit-mark-dark.svg"
            alt="ForgeKit"
            width={`${icon}px`}
            height={`${icon}px`}
          />
        </Box>
      )
    }

    return (
      <Box ref={ref}>
        <Image
          src="/forgekit-wordmark-dark.svg"
          alt="ForgeKit"
          width={`${wordmark}px`}
          height="auto"
        />
      </Box>
    )
  }
)

Logo.displayName = 'Logo'
