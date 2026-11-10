import { Box, Heading, Text, SimpleGrid, VStack } from '@chakra-ui/react'
import { forwardRef, type ReactNode } from 'react'
import { Container } from '../Container'
import { GradientText } from '../GradientText'
import { FeatureCard } from '../FeatureCard'

export interface Feature {
  icon: ReactNode
  title: string
  description: string
  accentColor?: string
}

export interface FeaturesProps {
  /** Section badge/label */
  badge?: string
  /** Section headline */
  headline: string
  /** Highlighted portion of headline */
  highlightedText?: string
  /** Section description */
  description?: string
  /** Features to display */
  features: Array<Feature>
}

/**
 * Features section: Space Grotesk title, hairline, feature cards.
 */
export const Features = forwardRef<HTMLDivElement, FeaturesProps>(
  ({ badge, headline, highlightedText, description, features }, ref) => {
    const renderHeadline = () => {
      if (!highlightedText) return headline
      const parts = headline.split(highlightedText)
      return (
        <>
          {parts[0]}
          <GradientText variant="primary">{highlightedText}</GradientText>
          {parts[1]}
        </>
      )
    }

    return (
      <Box
        ref={ref}
        as="section"
        py="section-y"
        bg="bg"
        borderTopWidth="1px"
        borderColor="border"
      >
        <Container size="xl">
          <VStack gap={{ base: '12', md: '16' }}>
            <VStack gap="4" textAlign="center" maxW="2xl">
              {badge && (
                <Text
                  fontFamily="mono"
                  fontSize="label-sm"
                  fontWeight="medium"
                  letterSpacing="wider"
                  textTransform="uppercase"
                  color="fg.muted"
                >
                  {badge}
                </Text>
              )}
              <Heading as="h2" textStyle={{ base: 'headline-lg', md: 'display-md' }} color="fg">
                {renderHeadline()}
              </Heading>
              {description && (
                <Text textStyle="body-lg" color="fg.muted">
                  {description}
                </Text>
              )}
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="6" w="100%">
              {features.map((feature) => (
                <FeatureCard
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>
    )
  }
)

Features.displayName = 'Features'
