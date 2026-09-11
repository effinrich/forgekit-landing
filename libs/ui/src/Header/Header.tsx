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
}

/**
 * Fixed header: ink bar, hairline, no blur.
 */
export const Header = forwardRef<HTMLDivElement, HeaderProps>(
  ({ links = [], ctaText = 'Get Started', onCtaClick }, ref) => {
    return (
      <Box
        ref={ref}
        as="header"
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={100}
        bg="bg"
        borderBottomWidth="1px"
        borderColor="border"
      >
        <Container size="xl">
          <HStack justify="space-between" h="16">
            <Link href="/" _hover={{ textDecoration: 'none', color: 'fg' }} color="fg">
              <Logo size="sm" />
            </Link>

            <HStack gap="8" display={{ base: 'none', md: 'flex' }}>
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  color="fg.muted"
                  textStyle="body-md"
                  fontWeight="medium"
                  _hover={{ color: 'fg' }}
                >
                  {link.label}
                </Link>
              ))}
            </HStack>

            <Button size="sm" variant="solid" onClick={onCtaClick}>
              {ctaText}
            </Button>
          </HStack>
        </Container>
      </Box>
    )
  }
)

Header.displayName = 'Header'
