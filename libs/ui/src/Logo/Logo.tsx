import { Box, HStack, Text } from '@chakra-ui/react'
import { forwardRef } from 'react'

export interface LogoProps {
  /** Show full wordmark or just icon */
  variant?: 'icon' | 'wordmark'
  /** Size preset */
  size?: 'sm' | 'md' | 'lg'
}

const sizes = {
  sm: { icon: 32, fontSize: 'lg', gap: 2 },
  md: { icon: 40, fontSize: 'xl', gap: 2 },
  lg: { icon: 56, fontSize: '2xl', gap: 3 },
}

/**
 * ForgeKit Logo - Curly braces with flame
 */
export const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ variant = 'wordmark', size = 'md' }, ref) => {
    const { icon: iconSize, fontSize, gap } = sizes[size]

    const _LogoIcon = () => (
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Curly braces - slate */}
        <path
          d="M55 30 Q32 30 32 65 L32 90 Q32 100 18 100 Q32 100 32 110 L32 135 Q32 170 55 170"
          fill="none"
          stroke="#0f172a"
          strokeWidth="11"
          strokeLinecap="round"
        />
        <path
          d="M145 30 Q168 30 168 65 L168 90 Q168 100 182 100 Q168 100 168 110 L168 135 Q168 170 145 170"
          fill="none"
          stroke="#0f172a"
          strokeWidth="11"
          strokeLinecap="round"
        />
        {/* Outer flame - deep orange */}
        <path
          d="M100 55 Q108 70 115 85 Q125 105 120 120 Q118 135 100 145 Q82 135 80 120 Q75 105 85 85 Q92 70 100 55Z"
          fill="#ea580c"
        />
        {/* Inner flame - orange */}
        <path
          d="M100 72 Q106 82 110 92 Q116 105 112 115 Q110 125 100 132 Q90 125 88 115 Q84 105 90 92 Q94 82 100 72Z"
          fill="#f97316"
        />
        {/* Core flame - yellow */}
        <path
          d="M100 88 Q104 95 106 102 Q108 112 105 118 Q103 123 100 125 Q97 123 95 118 Q92 112 94 102 Q96 95 100 88Z"
          fill="#fbbf24"
        />
      </svg>
    )

    const LogoIconLight = () => (
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Curly braces - white for dark bg */}
        <path
          d="M55 30 Q32 30 32 65 L32 90 Q32 100 18 100 Q32 100 32 110 L32 135 Q32 170 55 170"
          fill="none"
          stroke="white"
          strokeWidth="11"
          strokeLinecap="round"
        />
        <path
          d="M145 30 Q168 30 168 65 L168 90 Q168 100 182 100 Q168 100 168 110 L168 135 Q168 170 145 170"
          fill="none"
          stroke="white"
          strokeWidth="11"
          strokeLinecap="round"
        />
        {/* Outer flame - deep orange */}
        <path
          d="M100 55 Q108 70 115 85 Q125 105 120 120 Q118 135 100 145 Q82 135 80 120 Q75 105 85 85 Q92 70 100 55Z"
          fill="#ea580c"
        />
        {/* Inner flame - orange */}
        <path
          d="M100 72 Q106 82 110 92 Q116 105 112 115 Q110 125 100 132 Q90 125 88 115 Q84 105 90 92 Q94 82 100 72Z"
          fill="#f97316"
        />
        {/* Core flame - yellow */}
        <path
          d="M100 88 Q104 95 106 102 Q108 112 105 118 Q103 123 100 125 Q97 123 95 118 Q92 112 94 102 Q96 95 100 88Z"
          fill="#fbbf24"
        />
      </svg>
    )

    if (variant === 'icon') {
      return (
        <Box ref={ref}>
          <LogoIconLight />
        </Box>
      )
    }

    return (
      <HStack ref={ref} spacing={gap} align="center">
        <LogoIconLight />
        <Text
          fontSize={fontSize}
          fontWeight="700"
          color="white"
          letterSpacing="-0.02em"
        >
          Forge<Text as="span" color="orange.400">Kit</Text>
        </Text>
      </HStack>
    )
  }
)

Logo.displayName = 'Logo'
