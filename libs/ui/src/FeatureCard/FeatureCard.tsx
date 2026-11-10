import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import { forwardRef, type ReactNode } from 'react'

export interface FeatureCardProps {
  /** Feature icon */
  icon: ReactNode
  /** Feature title */
  title: string
  /** Feature description */
  description: string
  /** Optional highlight color (ignored — Forge uses ember only) */
  accentColor?: string
}

/**
 * Feature card: graphite surface, hairline, 4px radius, icon tile.
 */
export const FeatureCard = forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ icon, title, description }, ref) => {
    return (
      <Box
        ref={ref}
        bg="bg.surface"
        borderWidth="1px"
        borderColor="border"
        borderRadius="md"
        boxShadow="card"
        p="6"
      >
        <VStack align="start" gap="4">
          <Box
            w="44px"
            h="44px"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            borderWidth="1px"
            borderColor="border"
            borderRadius="md"
            color="fg.muted"
            _hover={{ color: 'accent', borderColor: 'accent' }}
          >
            {icon}
          </Box>
          <Heading as="h3" textStyle="title-md" color="fg">
            {title}
          </Heading>
          <Text color="fg.muted" textStyle="body-md" lineHeight="relaxed">
            {description}
          </Text>
        </VStack>
      </Box>
    )
  }
)

FeatureCard.displayName = 'FeatureCard'
