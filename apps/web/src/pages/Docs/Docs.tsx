import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { Header, Footer, Logo } from '@forgekit-landing/ui'
import { Seo } from '../../seo/Seo'
import { DOCS_STORYBOOK_MCP, SITE_ORIGIN } from '../../seo/site'
import { FORGEKIT_PACKAGES } from '../../data/forgekitPackages'

const NPM_MCP = 'https://www.npmjs.com/package/forgekit-storybook-mcp'

const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const DiscordIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
)

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Packages', href: '/packages' },
  { label: 'Docs', href: '/docs' },
  { label: 'Features', href: '/#features' },
]

const footerColumns = [
  {
    title: 'Product',
    links: [
      { label: 'Packages', href: '/packages' },
      { label: 'Documentation', href: '/docs' },
      { label: 'Features', href: '/#features' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Storybook MCP repo', href: 'https://github.com/effinrich/storybook-mcp' },
      { label: 'npm', href: NPM_MCP },
    ],
  },
  {
    title: 'Site',
    links: [
      { label: 'Sitemap', href: `${SITE_ORIGIN}/sitemap.xml` },
      { label: 'forgekit.cloud', href: SITE_ORIGIN },
    ],
  },
]

export function Docs() {
  return (
    <Box bg="slate.950" minH="100vh">
      <Seo
        title="Documentation hub"
        description="ForgeKit documentation: Storybook MCP on docs.forgekit.cloud, npm packages, and links to GitHub. MIT open-source tools for Storybook, Figma, and Nx."
        path="/docs"
      />
      <Header
        links={navLinks}
        ctaText="Install Storybook MCP"
        onCtaClick={() => {
          window.location.href = NPM_MCP
        }}
      />

      <Container maxW="container.md" py={{ base: 16, md: 24 }} px={6}>
        <VStack spacing={10} align="stretch">
          <VStack spacing={3} align="flex-start">
            <Heading as="h1" fontSize={{ base: '3xl', md: '4xl' }} color="white">
              Documentation
            </Heading>
            <Text color="gray.400" fontSize="lg">
              ForgeKit splits docs by package. This site is the marketing home; long-form docs for Storybook MCP
              live on Mintlify at a dedicated subdomain.
            </Text>
          </VStack>

          <Box
            borderWidth="1px"
            borderColor="teal.800"
            borderRadius="xl"
            p={6}
            bg="whiteAlpha.50"
          >
            <Heading as="h2" fontSize="lg" color="white" mb={3}>
              Storybook MCP — full documentation
            </Heading>
            <Text color="gray.400" mb={4}>
              Install, MCP client setup, CLI flags, tools reference, and templates — maintained in the{' '}
              <code>storybook-mcp</code> repo and published to{' '}
              <strong>docs.forgekit.cloud</strong> when DNS is configured.
            </Text>
            <Button
              as={Link}
              href={DOCS_STORYBOOK_MCP}
              isExternal
              colorScheme="teal"
              size="md"
            >
              Open docs.forgekit.cloud
            </Button>
          </Box>

          <Box>
            <Heading as="h2" fontSize="lg" color="white" mb={4}>
              All packages (quick links)
            </Heading>
            <VStack align="stretch" spacing={3}>
              {FORGEKIT_PACKAGES.map(pkg => (
                <Link
                  key={pkg.npmName}
                  href={pkg.docsUrl}
                  isExternal
                  color="teal.300"
                  fontSize="sm"
                  _hover={{ textDecoration: 'underline' }}
                >
                  <Text as="span" fontFamily="mono">
                    {pkg.npmName}
                  </Text>
                  {' — '}
                  {pkg.docsLabel}
                </Link>
              ))}
            </VStack>
            <Button
              as={RouterLink}
              to="/packages"
              variant="link"
              color="gray.400"
              mt={6}
              fontSize="sm"
            >
              Full package catalog with integrations →
            </Button>
          </Box>

          <Text fontSize="sm" color="gray.500">
            Operators: deployment steps for the docs subdomain are in the repo under{' '}
            <code>docs/DEPLOY_DOCS_FORGEKIT_CLOUD.md</code>.
          </Text>
        </VStack>
      </Container>

      <Footer
        logo={<Logo size="md" />}
        tagline="ForgeKit — documentation and open-source packages."
        columns={footerColumns}
        socialLinks={[
          { icon: <TwitterIcon />, href: 'https://x.com/forgekitdev', label: 'X' },
          { icon: <GitHubIcon />, href: 'https://github.com/effinrich/storybook-mcp', label: 'GitHub' },
          { icon: <DiscordIcon />, href: 'https://discord.gg/jqt9EhYe', label: 'Discord' },
        ]}
      />
    </Box>
  )
}
