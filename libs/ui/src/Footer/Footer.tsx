import {
  Box,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Link,
  Separator,
} from '@chakra-ui/react'
import { forwardRef, type ReactNode } from 'react'
import { Container } from '../Container'

export interface FooterLink {
  label: string
  href: string
}

export interface FooterColumn {
  title: string
  links: FooterLink[]
}

export interface FooterProps {
  /** Logo component or text */
  logo: ReactNode
  /** Tagline under logo */
  tagline?: string
  /** Footer columns */
  columns: FooterColumn[]
  /** Social links */
  socialLinks?: Array<{
    icon: ReactNode
    href: string
    label: string
  }>
  /** Copyright text */
  copyright?: string
}

/**
 * Site footer: ink surface, hairline, muted labels.
 */
export const Footer = forwardRef<HTMLDivElement, FooterProps>(
  (
    {
      logo,
      tagline,
      columns,
      socialLinks,
      copyright = `© ${new Date().getFullYear()} ForgeKit`,
    },
    ref
  ) => {
    return (
      <Box
        ref={ref}
        as="footer"
        bg="bg"
        borderTopWidth="1px"
        borderColor="border"
      >
        <Container size="xl" py="section-y">
          <SimpleGrid columns={{ base: 1, md: 4 }} gap={{ base: '8', md: '12' }}>
            <VStack align={{ base: 'center', md: 'flex-start' }} gap="3">
              {logo}
              {tagline && (
                <Text color="fg.muted" textStyle="body-sm" maxW="xs" textAlign={{ base: 'center', md: 'left' }}>
                  {tagline}
                </Text>
              )}
              {socialLinks && socialLinks.length > 0 && (
                <HStack gap="4" pt="2">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      color="fg.muted"
                      _hover={{ color: 'fg' }}
                    >
                      {social.icon}
                    </Link>
                  ))}
                </HStack>
              )}
            </VStack>

            {columns.map((column) => (
              <VStack key={column.title} align={{ base: 'center', md: 'flex-start' }} gap="4">
                <Text
                  fontFamily="mono"
                  fontSize="label-sm"
                  fontWeight="medium"
                  letterSpacing="wider"
                  textTransform="uppercase"
                  color="fg.muted"
                >
                  {column.title}
                </Text>
                <VStack align={{ base: 'center', md: 'flex-start' }} gap="2">
                  {column.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      color="fg.muted"
                      textStyle="body-sm"
                      _hover={{ color: 'fg' }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </VStack>
              </VStack>
            ))}
          </SimpleGrid>

          <Separator borderColor="border" my="8" />

          <HStack
            justify="space-between"
            flexDir={{ base: 'column', sm: 'row' }}
            gap="3"
          >
            <Text color="fg.muted" textStyle="body-sm">
              {copyright}
            </Text>
            <HStack gap="4">
              <Link href="/privacy" color="fg.muted" textStyle="body-sm" _hover={{ color: 'fg' }}>
                Privacy
              </Link>
              <Link href="/terms" color="fg.muted" textStyle="body-sm" _hover={{ color: 'fg' }}>
                Terms
              </Link>
            </HStack>
          </HStack>
        </Container>
      </Box>
    )
  }
)

Footer.displayName = 'Footer'
