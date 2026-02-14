import {
  Box,
  HStack,
  Link,
  Button,
} from '@chakra-ui/react'
import { forwardRef } from 'react'
import { Container } from '../Container'
import { Logo } from '../Logo'

export interface HeaderProps {
  /** Navigation links */
  links?: Array<{ label: string; href: string }>
  /** CTA button text */
  ctaText?: string
  /** CTA click handler */
  onCtaClick?: () => void
  /** CTA link href (renders as anchor) */
  ctaHref?: string
  /** Extra props spread onto the CTA button */
  ctaProps?: Record<string, unknown>
}

/**
 * Fixed header with logo and navigation
 */
export const Header = forwardRef<HTMLDivElement, HeaderProps>(
  ({ links = [], ctaText = 'Get Started', onCtaClick, ctaHref, ctaProps }, ref) => {
    return (
      <Box
        ref={ref}
        as="header"
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={100}
        bg="rgba(2, 6, 23, 0.8)"
        backdropFilter="blur(12px)"
        borderBottom="1px solid"
        borderColor="slate.800"
      >
        <Container size="xl">
          <HStack justify="space-between" h="16">
            {/* Logo */}
            <Link href="/" _hover={{ textDecoration: 'none' }}>
              <Logo size="sm" />
            </Link>

            {/* Navigation */}
            <HStack gap={8} display={{ base: 'none', md: 'flex' }}>
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  color="slate.400"
                  fontSize="sm"
                  fontWeight="500"
                  _hover={{ color: 'white' }}
                  transition="color 0.2s"
                >
                  {link.label}
                </Link>
              ))}
            </HStack>

            {/* CTA */}
            {ctaHref ? (
              <Button
                asChild
                size="sm"
                variant="solid"
                _hover={{ textDecoration: 'none' }}
                {...ctaProps}
              >
                <a href={ctaHref} onClick={onCtaClick}>
                  {ctaText}
                </a>
              </Button>
            ) : (
              <Button
                size="sm"
                variant="solid"
                onClick={onCtaClick}
                {...ctaProps}
              >
                {ctaText}
              </Button>
            )}
          </HStack>
        </Container>
      </Box>
    )
  }
)

Header.displayName = 'Header'
