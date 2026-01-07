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
 * Pricing section with monthly/annual toggle
 */
export const Pricing = forwardRef<HTMLDivElement, PricingProps>(
  ({ badge, headline, highlightedText, description, plans }, ref) => {
    const [isAnnual, setIsAnnual] = useState(true)

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
        py={{ base: 16, md: 24 }}
        bg="slate.900"
        position="relative"
        overflow="hidden"
      >
        {/* Background glow */}
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          width="800px"
          height="800px"
          background="radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)"
          pointerEvents="none"
        />

        <Container size="xl" position="relative" zIndex={1}>
          <VStack spacing={{ base: 12, md: 16 }}>
            {/* Section header */}
            <VStack spacing={4} textAlign="center" maxW="2xl">
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
              <Heading
                fontSize={{ base: '2xl', md: '4xl' }}
                fontWeight="700"
                lineHeight="tight"
              >
                {renderHeadline()}
              </Heading>
              {description && (
                <Text fontSize="lg" color="slate.400">
                  {description}
                </Text>
              )}

              {/* Billing toggle */}
              <HStack spacing={4} pt={4}>
                <Text
                  color={!isAnnual ? 'white' : 'slate.500'}
                  fontWeight={!isAnnual ? '600' : '400'}
                >
                  Monthly
                </Text>
                <Switch
                  isChecked={isAnnual}
                  onChange={() => setIsAnnual(!isAnnual)}
                  colorScheme="brand"
                  size="lg"
                />
                <HStack spacing={2}>
                  <Text
                    color={isAnnual ? 'white' : 'slate.500'}
                    fontWeight={isAnnual ? '600' : '400'}
                  >
                    Annual
                  </Text>
                  <Box
                    bg="success.500"
                    color="white"
                    px={2}
                    py={0.5}
                    borderRadius="full"
                    fontSize="xs"
                    fontWeight="700"
                  >
                    Save 20%
                  </Box>
                </HStack>
              </HStack>
            </VStack>

            {/* Pricing cards */}
            <SimpleGrid
              columns={{ base: 1, lg: 3 }}
              spacing={{ base: 6, md: 8 }}
              w="100%"
              maxW="5xl"
              mx="auto"
            >
              {plans.map((plan, index) => (
                <PricingCard
                  key={index}
                  name={plan.name}
                  description={plan.description}
                  price={isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  period={isAnnual ? '/mo (billed annually)' : '/month'}
                  features={plan.features}
                  isPopular={plan.isPopular}
                  ctaText={plan.ctaText}
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
