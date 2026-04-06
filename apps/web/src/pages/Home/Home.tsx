import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react'
import {
  Header,
  Hero,
  Features,
  CTA,
  Footer,
  Logo,
} from '@forgekit-landing/ui'

const NPM_MCP = 'https://www.npmjs.com/package/forgekit-storybook-mcp'
const GH_MCP = 'https://github.com/effinrich/storybook-mcp'

// Icons as simple SVG components
const FigmaIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M5 5.5A3.5 3.5 0 018.5 2H12v7H8.5A3.5 3.5 0 015 5.5zM12 2h3.5a3.5 3.5 0 110 7H12V2z" />
    <path d="M12 12.5a3.5 3.5 0 117 0 3.5 3.5 0 11-7 0z" />
    <path d="M5 19.5A3.5 3.5 0 018.5 16H12v3.5a3.5 3.5 0 11-7 0zM5 12.5A3.5 3.5 0 018.5 9H12v7H8.5A3.5 3.5 0 015 12.5z" />
  </svg>
)

const CodeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="16,18 22,12 16,6" />
    <polyline points="8,6 2,12 8,18" />
  </svg>
)

const TestIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 11l3 3L22 4" />
    <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
  </svg>
)

const StorybookIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.71.243l-.12 2.71a.18.18 0 00.29.15l1.06-.8.9.7a.18.18 0 00.28-.14L19 0l1.86-.07a.5.5 0 01.52.5v22.14a.5.5 0 01-.47.5l-15.13.67a.5.5 0 01-.53-.5V.5a.5.5 0 01.47-.5l11-.24zm-2.87 9.07c0 .47 2.67.24 3.03-.04 0-2.87-1.54-4.37-4.36-4.37-2.82 0-4.4 1.53-4.4 3.83 0 3.98 5.37 4.05 5.37 6.23 0 .62-.29 1-.96 1-.87 0-1.22-.47-1.18-2.07 0-.36-3.1-.48-3.2 0-.26 3.34 1.83 4.32 4.42 4.32 2.5 0 4.46-1.33 4.46-3.74 0-4.27-5.46-4.16-5.46-6.27 0-.85.57-1 1.01-1 .48 0 1.12.1 1.08 2.06z" />
  </svg>
)

const RocketIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
    <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
)

const SyncIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0118.8-4.3M22 12.5a10 10 0 01-18.8 4.2" />
  </svg>
)

const McpIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
)

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

const features = [
  {
    icon: <McpIcon />,
    title: 'Model Context Protocol',
    description:
      'A real MCP server for Storybook: story generation, component analysis, validation, and tools your editor can call — the same ideas as the forgekit-storybook-mcp README.',
    accentColor: '#8b5cf6',
  },
  {
    icon: <StorybookIcon />,
    title: 'Stories, tests, docs',
    description:
      'Auto-sync on startup, templates, Vitest and Playwright-oriented output, MDX docs, and Figma Code Connect — all MIT, no feature gates.',
    accentColor: '#f97316',
  },
  {
    icon: <CodeIcon />,
    title: 'Framework-aware',
    description:
      'Auto-detects Chakra UI, shadcn/ui, Tamagui, and Gluestack UI. Any React project works; unrecognized setups get sensible vanilla defaults.',
    accentColor: '#14b8a6',
  },
  {
    icon: <FigmaIcon />,
    title: 'Figma in the loop',
    description:
      'Connect designs to code with Code Connect and the broader ForgeKit story — from file to components without reinventing your design system.',
    accentColor: '#8b5cf6',
  },
  {
    icon: <SyncIcon />,
    title: 'Live sync',
    description:
      'Watch component folders, debounced rescans, and periodic catch-up so your stories stay aligned as files change.',
    accentColor: '#14b8a6',
  },
  {
    icon: <RocketIcon />,
    title: 'ForgeKit + npm',
    description:
      'ForgeKit is the Nx / app / UI / Storybook generator suite. The package is forgekit-storybook-mcp because @forgekit on npm was taken — fully standalone, install with npm.',
    accentColor: '#f97316',
  },
]

const handleForgeKitWaitlist = () => {
  window.location.href =
    "mailto:forgekit@pm.me?subject=ForgeKit%20generator%20interest&body=Hi!%20I'm%20interested%20in%20news%20about%20the%20ForgeKit%20monorepo%20generator."
}

const footerColumns = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Open source', href: '#open-source' },
      { label: 'Changelog', href: '/changelog' },
      { label: 'Roadmap', href: '/roadmap' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '/docs' },
      { label: 'API Reference', href: '/docs/api' },
      { label: 'Examples', href: '/examples' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'X', href: 'https://x.com/forgekitdev' },
      { label: 'GitHub', href: GH_MCP },
    ],
  },
]

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Open source', href: '#open-source' },
  { label: 'Docs', href: '/docs' },
]

export function Home() {
  return (
    <Box bg="slate.950" minH="100vh">
      <Header
        links={navLinks}
        ctaText="Install on npm"
        onCtaClick={() => {
          window.location.href = NPM_MCP
        }}
      />
      <Hero
        badge="MIT · open source"
        headline="ForgeKit and Storybook MCP, fully open source"
        highlightedText="fully open source"
        description="A Model Context Protocol (MCP) server for Storybook — story generation, tests, docs, sync, and Figma Code Connect. Published as forgekit-storybook-mcp (the @forgekit scope was taken on npm). Use it standalone or alongside ForgeKit when you scaffold the full monorepo."
        primaryCta="Install on npm"
        secondaryCta="View on GitHub"
        onPrimaryClick={() => {
          window.location.href = NPM_MCP
        }}
        onSecondaryClick={() => {
          window.location.href = GH_MCP
        }}
      />

      <Features
        badge="Why it exists"
        headline="Everything you need to document components"
        highlightedText="document components"
        description="forgekit-storybook-mcp matches the README: one MIT package, full tool surface, no paywall."
        features={features}
      />

      <Box id="open-source" py={{ base: 16, md: 24 }} scrollMarginTop="80px">
        <Container maxW="container.xl">
          <VStack spacing={{ base: 10, md: 14 }}>
            <VStack spacing={4} textAlign="center" maxW="3xl">
              <Text
                color="brand.400"
                fontWeight="600"
                fontSize="sm"
                textTransform="uppercase"
                letterSpacing="wider"
              >
                Open source
              </Text>
              <Heading
                as="h2"
                fontSize={{ base: '2xl', md: '4xl' }}
                fontWeight="bold"
                color="white"
                lineHeight="tight"
              >
                Celebrate shipping:{' '}
                <Text as="span" color="teal.400">
                  npm install
                </Text>{' '}
                and go
              </Heading>
              <Text color="gray.400" fontSize={{ base: 'md', md: 'lg' }}>
                The Storybook MCP is MIT-licensed — stories, tests, templates, sync, and Code Connect for everyone.
                Star the repo, file issues, and share what you build.
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="full">
              <Box
                borderWidth="1px"
                borderColor="whiteAlpha.200"
                borderRadius="xl"
                p={{ base: 6, md: 8 }}
                bg="whiteAlpha.50"
                _hover={{ borderColor: 'teal.500', transition: 'border-color 0.2s' }}
              >
                <VStack align="stretch" spacing={4}>
                  <Text fontWeight="700" color="white" fontSize="xl">
                    forgekit-storybook-mcp
                  </Text>
                  <Text color="gray.400">
                    The package on npm. CLI commands forgekit-storybook-mcp and storybook-mcp — same README you know,
                    zero license keys.
                  </Text>
                  <HStack spacing={3} flexWrap="wrap">
                    <Button
                      as={Link}
                      href={NPM_MCP}
                      isExternal
                      colorScheme="teal"
                      size="md"
                    >
                      npm package
                    </Button>
                    <Button
                      as={Link}
                      href={GH_MCP}
                      isExternal
                      variant="outline"
                      colorScheme="gray"
                      borderColor="whiteAlpha.300"
                      color="white"
                      _hover={{ bg: 'whiteAlpha.100' }}
                      size="md"
                    >
                      Source on GitHub
                    </Button>
                  </HStack>
                </VStack>
              </Box>

              <Box
                borderWidth="1px"
                borderColor="whiteAlpha.200"
                borderRadius="xl"
                p={{ base: 6, md: 8 }}
                bg="whiteAlpha.50"
              >
                <VStack align="stretch" spacing={4}>
                  <Text fontWeight="700" color="white" fontSize="xl">
                    ForgeKit generator
                  </Text>
                  <Text color="gray.400">
                    The broader ForgeKit vision: Nx monorepos, Figma-driven UI libraries, Storybook, and deployment
                    patterns — rolling out over time. Want word on the generator? Say hello.
                  </Text>
                  <Button
                    onClick={handleForgeKitWaitlist}
                    variant="outline"
                    colorScheme="gray"
                    borderColor="whiteAlpha.300"
                    color="white"
                    _hover={{ bg: 'whiteAlpha.100' }}
                    size="md"
                    alignSelf="flex-start"
                  >
                    Email the team
                  </Button>
                </VStack>
              </Box>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      <CTA
        headline="Ready to wire Storybook into your agent workflow?"
        highlightedText="agent workflow"
        description="Install from npm, add storybook-mcp.config.json, and connect the MCP in Cursor or Claude Desktop — same flow as the project README."
        primaryCta="Install on npm"
        secondaryCta="Repository"
        onPrimaryClick={() => {
          window.location.href = NPM_MCP
        }}
        onSecondaryClick={() => {
          window.location.href = GH_MCP
        }}
      />

      <Footer
        logo={<Logo size="md" />}
        tagline="ForgeKit and forgekit-storybook-mcp — MIT open source. Figma to components, Storybook to truth."
        columns={footerColumns}
        socialLinks={[
          { icon: <TwitterIcon />, href: 'https://x.com/forgekitdev', label: 'X' },
          { icon: <GitHubIcon />, href: GH_MCP, label: 'GitHub' },
          { icon: <DiscordIcon />, href: 'https://discord.gg/jqt9EhYe', label: 'Discord' },
        ]}
      />
    </Box>
  )
}
