import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
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

/**
 * Hero section composed from Forge type, container, and button anatomy.
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
    const parts = headline.split(highlightedText)

    return (
      <Box
        ref={ref}
        as="section"
        bg="bg"
        borderBottomWidth="1px"
        borderColor="border"
        pt={{ base: '24', md: '32' }}
        pb="section-y"
      >
        <Container size="xl">
          <VStack gap="6" textAlign="center" maxW="4xl" mx="auto">
            {badge && (
              <Badge variant="outline" colorScheme="accent">
                {badge}
              </Badge>
            )}

            <Heading
              as="h1"
              textStyle={{ base: 'headline-lg', md: 'display-md', lg: 'display-lg' }}
              color="fg"
            >
              {parts[0]}
              <GradientText variant="primary">{highlightedText}</GradientText>
              {parts[1]}
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

Hero.displayName = 'Hero'
