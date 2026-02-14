import { Box, Heading, Text, SimpleGrid, VStack } from "@chakra-ui/react"
import { forwardRef, type ReactNode } from "react"
import { Container } from "../Container"
import { GradientText } from "../GradientText"
import { FeatureCard } from "../FeatureCard"

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
  features: Feature[]
}

/**
 * Features section displaying product capabilities
 */
export const Features = forwardRef<HTMLDivElement, FeaturesProps>(
  ({ badge, headline, highlightedText, description, features }, ref) => {
    // Split headline if there's highlighted text
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
      <Box ref={ref} py={{ base: 16, md: 24 }} bg="slate.950">
        <Container size="xl">
          <VStack gap={{ base: 12, md: 16 }}>
            {/* Section header */}
            <VStack gap={4} textAlign="center" maxW="2xl">
              {badge && (
                <Text
                  color="brand.400"
                  fontWeight="600"
                  fontSize="sm"
                  textTransform="uppercase"
                  letterSpacing="wider"
                >
                  {badge}
                </Text>
              )}
              <Heading fontSize={{ base: "2xl", md: "4xl" }} fontWeight="700" lineHeight="tight">
                {renderHeadline()}
              </Heading>
              {description && (
                <Text fontSize="lg" color="slate.400">
                  {description}
                </Text>
              )}
            </VStack>

            {/* Features grid */}
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={{ base: 6, md: 8 }} w="100%">
              {features.map((feature) => (
                <FeatureCard
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  accentColor={feature.accentColor}
                />
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>
    )
  }
)

Features.displayName = "Features"
