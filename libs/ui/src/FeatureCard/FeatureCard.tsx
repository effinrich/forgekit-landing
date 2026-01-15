import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import { forwardRef, type ReactNode } from 'react'

export interface FeatureCardProps {
  /** Feature icon */
  icon: ReactNode
  /** Feature title */
  title: string
  /** Feature description */
  description: string
  /** Optional highlight color */
  accentColor?: string
}

/**
 * Card for displaying product features
 */
export const FeatureCard = forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ icon, title, description, accentColor = 'brand.500' }, ref) => {
    return (
      <Box
        ref={ref}
        bg="slate.900"
        border="1px solid"
        borderColor="slate.800"
        borderRadius="2xl"
        p={{ base: 6, md: 8 }}
        position="relative"
        overflow="hidden"
        transition="all 0.3s ease"
        _hover={{
          borderColor: 'slate.700',
          transform: 'translateY(-4px)',
          boxShadow: `0 20px 40px -20px ${accentColor}40`,
        }}
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          bg: accentColor,
          opacity: 0,
          transition: 'opacity 0.3s ease',
        }}
        sx={{
          '&:hover::before': {
            opacity: 1,
          },
        }}
      >
        <VStack align="start" spacing={4}>
          <Box
            p={3}
            bg="slate.800"
            borderRadius="xl"
            color={accentColor}
          >
            {icon}
          </Box>
          <Heading size="md" color="white">
            {title}
          </Heading>
          <Text color="slate.400" lineHeight="tall">
            {description}
          </Text>
        </VStack>
      </Box>
    )
  }
)

FeatureCard.displayName = 'FeatureCard'
