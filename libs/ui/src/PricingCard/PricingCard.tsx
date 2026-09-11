import { Box, Heading, Text, VStack, HStack, List, Button } from '@chakra-ui/react'
import { forwardRef } from 'react'

export interface PricingCardProps {
  /** Plan name */
  name: string
  /** Plan description */
  description: string
  /** Price amount */
  price: string
  /** Price period (e.g., "/month") */
  period?: string
  /** List of features */
  features: string[]
  /** CTA button text */
  ctaText?: string
  /** Is this the highlighted/popular plan? */
  isPopular?: boolean
  /** Click handler */
  onCtaClick?: () => void
}

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12l5 5L20 7" />
  </svg>
)

/**
 * Pricing card using Forge card anatomy (graphite, hairline, 4px radius).
 */
export const PricingCard = forwardRef<HTMLDivElement, PricingCardProps>(
  (
    {
      name,
      description,
      price,
      period = '/month',
      features,
      ctaText = 'Get Started',
      isPopular = false,
      onCtaClick,
    },
    ref
  ) => {
    return (
      <Box
        ref={ref}
        position="relative"
        bg="bg.surface"
        borderWidth="1px"
        borderColor={isPopular ? 'ember' : 'border'}
        borderRadius="md"
        boxShadow="card"
        p="6"
      >
        {isPopular && (
          <Box
            position="absolute"
            top="-11px"
            left="50%"
            transform="translateX(-50%)"
            bg="ember"
            color="ink"
            px="2"
            height="22px"
            display="inline-flex"
            alignItems="center"
            borderRadius="sm"
            fontFamily="mono"
            fontSize="label-sm"
            fontWeight="medium"
            textTransform="uppercase"
            letterSpacing="wide"
          >
            Most Popular
          </Box>
        )}

        <VStack align="stretch" gap="6">
          <Box>
            <Heading as="h3" textStyle="title-md" color="fg" mb="2">
              {name}
            </Heading>
            <Text color="fg.muted" textStyle="body-sm">
              {description}
            </Text>
          </Box>

          <HStack align="baseline" gap="1">
            <Text fontFamily="mono" fontSize="headline-lg" fontWeight="semibold" color="fg">
              {price}
            </Text>
            <Text color="fg.muted" textStyle="body-md">
              {period}
            </Text>
          </HStack>

          <List.Root gap="3" variant="plain">
            {features.map((feature) => (
              <List.Item key={feature} display="flex" alignItems="center" color="fg" textStyle="body-md">
                <Box as="span" color="ember" mr="3" display="inline-flex">
                  <CheckIcon />
                </Box>
                {feature}
              </List.Item>
            ))}
          </List.Root>

          <Button
            size="lg"
            variant={isPopular ? 'solid' : 'outline'}
            w="100%"
            onClick={onCtaClick}
          >
            {ctaText}
          </Button>
        </VStack>
      </Box>
    )
  }
)

PricingCard.displayName = 'PricingCard'
