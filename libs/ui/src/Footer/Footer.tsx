import {
  Box,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Link,
  Separator,
} from '@chakra-ui/react'
import { forwardRef } from 'react'
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
  logo: React.ReactNode
  /** Tagline under logo */
  tagline?: string
  /** Footer columns */
  columns: FooterColumn[]
  /** Social links */
  socialLinks?: Array<{
    icon: React.ReactNode
    href: string
    label: string
  }>
  /** Copyright text */
  copyright?: string
}

/**
 * Footer section with columns and social links
 */
export const Footer = forwardRef<HTMLDivElement, FooterProps>(
  ({ logo, tagline, columns, socialLinks, copyright }, ref) => {
    const currentYear = new Date().getFullYear()

    return (
      <Box ref={ref} bg="slate.950" borderTop="1px solid" borderColor="slate.900">
        <Container size="xl" py={{ base: 12, md: 16 }}>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 5 }}
            gap={{ base: 8, md: 12 }}
          >
            {/* Brand column */}
            <VStack align={{ base: 'center', md: 'start' }} gap={4} gridColumn={{ lg: 'span 2' }}>
              <Box fontSize="2xl" fontWeight="700" color="white">
                {logo}
              </Box>
              {tagline && (
                <Text color="slate.500" fontSize="sm" maxW="xs" textAlign={{ base: 'center', md: 'left' }}>
                  {tagline}
                </Text>
              )}
              {socialLinks && (
                <HStack gap={4} pt={2}>
                  {socialLinks.map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      color="slate.500"
                      _hover={{ color: 'white' }}
                      transition="color 0.2s"
                    >
                      {social.icon}
                    </Link>
                  ))}
                </HStack>
              )}
            </VStack>

            {/* Link columns */}
            {columns.map((column, index) => (
              <VStack
                key={index}
                align={{ base: 'center', md: 'start' }}
                gap={4}
              >
                <Text
                  fontWeight="600"
                  color="white"
                  fontSize="sm"
                  textTransform="uppercase"
                  letterSpacing="wider"
                >
                  {column.title}
                </Text>
                <VStack align={{ base: 'center', md: 'start' }} gap={3}>
                  {column.links.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      href={link.href}
                      color="slate.500"
                      fontSize="sm"
                      _hover={{ color: 'white' }}
                      transition="color 0.2s"
                    >
                      {link.label}
                    </Link>
                  ))}
                </VStack>
              </VStack>
            ))}
          </SimpleGrid>

          <Separator borderColor="slate.900" my={8} />

          <HStack
            justify="space-between"
            flexDir={{ base: 'column', sm: 'row' }}
            gap={4}
          >
            <Text color="slate.600" fontSize="sm">
              {copyright || `© ${currentYear} Forgekit. All rights reserved.`}
            </Text>
            <HStack gap={6}>
              <Link href="/privacy" color="slate.600" fontSize="sm" _hover={{ color: 'slate.400' }}>
                Privacy Policy
              </Link>
              <Link href="/terms" color="slate.600" fontSize="sm" _hover={{ color: 'slate.400' }}>
                Terms of Service
              </Link>
            </HStack>
          </HStack>
        </Container>
      </Box>
    )
  }
)

Footer.displayName = 'Footer'
