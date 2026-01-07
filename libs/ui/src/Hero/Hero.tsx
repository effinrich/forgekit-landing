import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  Flex,
  Icon,
} from '@chakra-ui/react'
import { forwardRef } from 'react'
import { Container } from '../Container'
import { GradientText } from '../GradientText'
import { Badge } from '../Badge'

export interface HeroProps {
  /** Optional badge text */
  badge?: string
  /** Main headline */
  headline: string
  /** Highlighted text in headline */
  highlightedText: string
  /** Subheadline/description */
  description: string
  /** Primary CTA text */
  primaryCta: string
  /** Secondary CTA text */
  secondaryCta?: string
  /** Primary CTA click handler */
  onPrimaryClick?: () => void
  /** Secondary CTA click handler */
  onSecondaryClick?: () => void
}

const PlayIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
  </svg>
)

/**
 * Hero section for landing page
 */
export const Hero = forwardRef<HTMLDivElement, HeroProps>(
  (
    {
      badge,
      headline,
      highlightedText,
      description,
      primaryCta,
      secondaryCta,
      onPrimaryClick,
      onSecondaryClick,
    },
    ref
  ) => {
    // Split headline to insert gradient text
    const parts = headline.split(highlightedText)

    return (
      <Box
        ref={ref}
        position="relative"
        minH="100vh"
        display="flex"
        alignItems="center"
        overflow="hidden"
        pt={{ base: 20, md: 0 }}
      >
        {/* Background gradient mesh */}
        <Box
          position="absolute"
          inset={0}
          bg="slate.950"
          _after={{
            content: '""',
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(139, 92, 246, 0.3), transparent)',
          }}
        />

        {/* Animated grid pattern */}
        <Box
          position="absolute"
          inset={0}
          backgroundImage="linear-gradient(rgba(139, 92, 246, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.03) 1px, transparent 1px)"
          backgroundSize="60px 60px"
          opacity={0.5}
        />

        <Container size="xl" position="relative" zIndex={1}>
          <VStack spacing={{ base: 6, md: 8 }} textAlign="center" maxW="4xl" mx="auto">
            {badge && (
              <Badge variant="subtle" colorScheme="brand">
                {badge}
              </Badge>
            )}

            <Heading
              as="h1"
              fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
              fontWeight="800"
              lineHeight="1.1"
              letterSpacing="-0.02em"
            >
              {parts[0]}
              <GradientText variant="primary">{highlightedText}</GradientText>
              {parts[1]}
            </Heading>

            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color="slate.400"
              maxW="2xl"
              lineHeight="tall"
            >
              {description}
            </Text>

            <HStack
              spacing={4}
              pt={4}
              flexDir={{ base: 'column', sm: 'row' }}
              w={{ base: '100%', sm: 'auto' }}
            >
              <Button
                size="lg"
                variant="solid"
                onClick={onPrimaryClick}
                w={{ base: '100%', sm: 'auto' }}
                px={8}
              >
                {primaryCta}
              </Button>
              {secondaryCta && (
                <Button
                  size="lg"
                  variant="ghost"
                  onClick={onSecondaryClick}
                  leftIcon={<PlayIcon />}
                  w={{ base: '100%', sm: 'auto' }}
                >
                  {secondaryCta}
                </Button>
              )}
            </HStack>

            {/* Social proof */}
            <HStack
              spacing={8}
              pt={8}
              color="slate.500"
              fontSize="sm"
              flexWrap="wrap"
              justify="center"
            >
              <Text>✓ No credit card required</Text>
              <Text>✓ 14-day free trial</Text>
              <Text>✓ Cancel anytime</Text>
            </HStack>
          </VStack>
        </Container>
      </Box>
    )
  }
)

Hero.displayName = 'Hero'
