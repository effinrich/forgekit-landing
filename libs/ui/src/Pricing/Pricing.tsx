import { Box, Heading, Text, SimpleGrid, VStack, HStack, Switch } from '@chakra-ui/react'
import { forwardRef, useState } from 'react'
import { Container } from '../Container'
import { GradientText } from '../GradientText'
import { PricingCard, type PricingCardProps } from '../PricingCard'

export interface PricingPlan extends Omit<PricingCardProps, 'price' | 'period'> {
  /** Monthly price */
  monthlyPrice: string
  /** Annual price (per month) */
  annualPrice: string
}

export interface PricingProps {
  /** Section badge/label */
  badge?: string
  /** Section headline */
  headline: string
  /** Highlighted portion of headline */
  highlightedText?: string
  /** Section description */
  description?: string
  /** Pricing plans */
  plans: PricingPlan[]
}

/**
 * Pricing section composed from Forge cards, type, and toggle.
 */
export const Pricing = forwardRef<HTMLDivElement, PricingProps>(
  ({ badge, headline, highlightedText, description, plans }, ref) => {
    const [isAnnual, setIsAnnual] = useState(false)

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
              <HStack gap="3" pt="2">
                <Text color={!isAnnual ? 'fg' : 'fg.muted'} textStyle="body-md">
                  Monthly
                </Text>
                <Switch.Root
                  checked={isAnnual}
                  onCheckedChange={(e) => setIsAnnual(e.checked)}
                  colorPalette="ember"
                >
                  <Switch.HiddenInput />
                  <Switch.Control>
                    <Switch.Thumb />
                  </Switch.Control>
                </Switch.Root>
                <HStack gap="2">
                  <Text color={isAnnual ? 'fg' : 'fg.muted'} textStyle="body-md">
                    Annual
                  </Text>
                  <Text
                    fontFamily="mono"
                    fontSize="label-sm"
                    letterSpacing="wide"
                    textTransform="uppercase"
                    color="ember"
                    borderWidth="1px"
                    borderColor="ember"
                    borderRadius="sm"
                    px="2"
                    py="0.5"
                  >
                    Save 20%
                  </Text>
                </HStack>
              </HStack>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 3 }} gap="6" w="100%" maxW="5xl">
              {plans.map((plan) => (
                <PricingCard
                  key={plan.name}
                  name={plan.name}
                  description={plan.description}
                  price={isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  period={isAnnual ? '/mo (billed annually)' : '/month'}
                  features={plan.features}
                  ctaText={plan.ctaText}
                  isPopular={plan.isPopular}
                  onCtaClick={plan.onCtaClick}
                />
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>
    )
  }
)

Pricing.displayName = 'Pricing'
