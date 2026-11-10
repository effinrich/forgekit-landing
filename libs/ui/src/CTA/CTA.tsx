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
 * Call-to-action: flat ink band, hairlines, ember highlight.
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
        as="section"
        py="section-y"
        bg="bg.surface"
        borderTopWidth="1px"
        borderBottomWidth="1px"
        borderColor="border"
      >
        <Container size="lg">
          <VStack gap="8" textAlign="center">
            <Heading
              as="h2"
              textStyle={{ base: 'headline-lg', md: 'display-md' }}
              color="fg"
              maxW="3xl"
            >
              {renderHeadline()}
            </Heading>

            <Text textStyle="body-lg" color="fg.muted" maxW="2xl">
              {description}
            </Text>

            <HStack
              gap="4"
              pt="4"
              flexDir={{ base: 'column', sm: 'row' }}
              w={{ base: '100%', sm: 'auto' }}
            >
              <Button
                size="lg"
                variant="solid"
                onClick={onPrimaryClick}
                w={{ base: '100%', sm: 'auto' }}
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
