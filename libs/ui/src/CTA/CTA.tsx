import { Box, Heading, Text, VStack, Button, HStack } from '@chakra-ui/react'
import { forwardRef } from 'react'
import { Container } from '../Container'
import { GradientText } from '../GradientText'

export interface CTAProps {
  /** Main headline */
  headline: string
  /** Highlighted portion of headline */
  highlightedText?: string
  /** Description text */
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

/**
 * Call-to-action section
 */
export const CTA = forwardRef<HTMLDivElement, CTAProps>(
  (
    {
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
    const renderHeadline = () => {
      if (!highlightedText) return headline
      const parts = headline.split(highlightedText)
      return (
        <>
          {parts[0]}
          <GradientText variant="accent">{highlightedText}</GradientText>
          {parts[1]}
        </>
      )
    }

    return (
      <Box
        ref={ref}
        py={{ base: 16, md: 24 }}
        position="relative"
        overflow="hidden"
      >
        {/* Background gradient */}
        <Box
          position="absolute"
          inset={0}
          bg="linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(249, 115, 22, 0.1) 100%)"
        />

        {/* Border gradient effect */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          height="1px"
          bg="linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.5), transparent)"
        />
        <Box
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          height="1px"
          bg="linear-gradient(90deg, transparent, rgba(249, 115, 22, 0.5), transparent)"
        />

        <Container size="lg" position="relative" zIndex={1}>
          <VStack gap={8} textAlign="center">
            <Heading
              fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }}
              fontWeight="700"
              lineHeight="tight"
              maxW="3xl"
            >
              {renderHeadline()}
            </Heading>

            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color="slate.400"
              maxW="2xl"
            >
              {description}
            </Text>

            <HStack
              gap={4}
              pt={4}
              flexDir={{ base: 'column', sm: 'row' }}
              w={{ base: '100%', sm: 'auto' }}
            >
              <Button
                size="lg"
                onClick={onPrimaryClick}
                w={{ base: '100%', sm: 'auto' }}
                px={8}
              >
                {primaryCta}
              </Button>
              {secondaryCta && (
                <Button
                  size="lg"
                  variant="outline"
                  onClick={onSecondaryClick}
                  w={{ base: '100%', sm: 'auto' }}
                >
                  {secondaryCta}
                </Button>
              )}
            </HStack>
          </VStack>
        </Container>
      </Box>
    )
  }
)

CTA.displayName = 'CTA'
