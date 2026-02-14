import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
} from '@chakra-ui/react'
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
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      fill="currentColor"
    />
  </svg>
)

/**
 * Pricing card for displaying subscription plans
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
        bg={isPopular ? 'slate.800' : 'slate.900'}
        border="1px solid"
        borderColor={isPopular ? 'brand.500' : 'slate.800'}
        borderRadius="2xl"
        p={{ base: 6, md: 8 }}
        transition="all 0.3s ease"
        _hover={{
          transform: 'translateY(-4px)',
          boxShadow: isPopular
            ? '0 20px 60px -20px rgba(139, 92, 246, 0.4)'
            : '0 20px 40px -20px rgba(0, 0, 0, 0.3)',
        }}
      >
        {isPopular && (
          <Box
            position="absolute"
            top={-3}
            left="50%"
            transform="translateX(-50%)"
            bg="brand.500"
            color="white"
            px={4}
            py={1}
            borderRadius="full"
            fontSize="xs"
            fontWeight="700"
            textTransform="uppercase"
            letterSpacing="wider"
          >
            Most Popular
          </Box>
        )}

        <VStack align="stretch" gap={6}>
          <Box>
            <Heading size="lg" color="white" mb={2}>
              {name}
            </Heading>
            <Text color="slate.400" fontSize="sm">
              {description}
            </Text>
          </Box>

          <HStack align="baseline" gap={1}>
            <Text fontSize="4xl" fontWeight="700" color="white">
              {price}
            </Text>
            <Text color="slate.500" fontSize="lg">
              {period}
            </Text>
          </HStack>

          <VStack align="stretch" gap={3}>
            {features.map((feature, index) => (
              <HStack
                key={index}
                gap={3}
                color="slate.300"
              >
                <Box
                  color={isPopular ? 'brand.400' : 'success.400'}
                  flexShrink={0}
                >
                  <CheckIcon />
                </Box>
                <Text>{feature}</Text>
              </HStack>
            ))}
          </VStack>

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
