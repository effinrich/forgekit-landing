import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  SimpleGrid,
  Code,
  Badge,
  Divider,
  Icon,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react'
import { Header, Footer, Logo, Container } from '@forgekit-landing/ui'

// --- Icons ---

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

const TerminalIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" y1="19" x2="20" y2="19" />
  </svg>
)

const SyncIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0118.8-4.3M22 12.5a10 10 0 01-18.8 4.2" />
  </svg>
)

const ComponentIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </svg>
)

const TestIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 11l3 3L22 4" />
    <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
  </svg>
)

const DocsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
)

const NxIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
    <line x1="12" y1="22" x2="12" y2="15.5" />
    <polyline points="22 8.5 12 15.5 2 8.5" />
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

// --- Data ---

const POLAR_CHECKOUT_URL = 'https://buy.polar.sh/polar_cl_Tnd3ryKUJpYPnXF0kBW1KFHQnoLlxAq2cz9GL3Et0dV'
const NPM_URL = 'https://npmjs.com/package/forgekit-storybook-mcp'
const GITHUB_URL = 'https://github.com/effinrich/storybook-mcp-v2'

const features = [
  {
    icon: <SyncIcon />,
    title: 'Auto-Sync on Startup',
    description: 'Scans your components, creates missing stories, updates changed ones. Your Storybook stays current without lifting a finger.',
  },
  {
    icon: <ComponentIcon />,
    title: 'Framework-Aware',
    description: 'Detects Chakra UI, shadcn/ui, Tamagui, Gluestack, React Native — generates stories with the right providers and controls.',
  },
  {
    icon: <TestIcon />,
    title: 'Test Generation',
    description: 'Playwright and Vitest interaction tests generated from your component API. Real coverage, not empty assertions.',
  },
  {
    icon: <DocsIcon />,
    title: 'MDX Documentation',
    description: 'Auto-generated MDX docs with prop tables, usage examples, and live previews. Your component catalog writes itself.',
  },
  {
    icon: <NxIcon />,
    title: 'Nx Monorepo Support',
    description: 'Scans all libraries, resolves cross-lib dependencies. Tested on workspaces with 26 libs and 352+ components.',
  },
  {
    icon: <TerminalIcon />,
    title: 'Works in Your Editor',
    description: 'MCP protocol — plugs into Cursor, Claude Desktop, or any MCP-compatible client. No new tools to learn.',
  },
]

const comparisonRows = [
  { feature: 'Basic stories with controls', free: true, pro: true },
  { feature: 'Component analysis & listing', free: true, pro: true },
  { feature: 'Auto-sync (up to 5 components)', free: true, pro: true },
  { feature: 'Unlimited component sync', free: false, pro: true },
  { feature: 'Advanced templates (MSW, forms, router)', free: false, pro: true },
  { feature: 'Test generation (Playwright + Vitest)', free: false, pro: true },
  { feature: 'MDX documentation generation', free: false, pro: true },
  { feature: 'Priority email support', free: false, pro: true },
  { feature: 'Lifetime updates', free: false, pro: true },
]

const navLinks = [
  { label: 'ForgeKit', href: '/' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
]

const footerColumns = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Changelog', href: GITHUB_URL + '/blob/master/CHANGELOG.md' },
      { label: 'Roadmap', href: GITHUB_URL + '/blob/master/ROADMAP.md' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'npm', href: NPM_URL },
      { label: 'GitHub', href: GITHUB_URL },
      { label: 'README', href: NPM_URL + '#readme' },
      { label: 'Issues', href: GITHUB_URL + '/issues' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'ForgeKit', href: '/' },
      { label: 'Contact', href: 'mailto:forgekit@pm.me' },
      { label: 'X', href: 'https://x.com/forgekitdev' },
      { label: 'Discord', href: 'https://discord.gg/jqt9EhYe' },
    ],
  },
]

// --- Page ---

export function StorybookMcp() {
  return (
    <Box bg="slate.950" minH="100vh">
      <Header
        links={navLinks}
        ctaText="Get Pro — $49"
        onCtaClick={() => { window.location.href = POLAR_CHECKOUT_URL }}
      />

      {/* Hero */}
      <Box as="section" pt={{ base: 28, md: 36 }} pb={{ base: 16, md: 24 }}>
        <Container>
          <VStack spacing={8} textAlign="center" maxW="3xl" mx="auto">
            <HStack spacing={3}>
              <Badge
                bg="whiteAlpha.100"
                color="teal.300"
                px={4}
                py={1}
                borderRadius="full"
                fontSize="sm"
                fontWeight="medium"
                textTransform="none"
              >
                1,100+ downloads
              </Badge>
              <Badge
                bg="whiteAlpha.100"
                color="purple.300"
                px={4}
                py={1}
                borderRadius="full"
                fontSize="sm"
                fontWeight="medium"
                textTransform="none"
              >
                MCP Server
              </Badge>
            </HStack>

            <Heading
              as="h1"
              fontSize={{ base: '4xl', md: '6xl' }}
              fontWeight="bold"
              color="white"
              lineHeight="tight"
              letterSpacing="tight"
            >
              Stop writing{' '}
              <Text as="span" bgGradient="linear(to-r, teal.400, purple.400)" bgClip="text">
                Storybook boilerplate
              </Text>
            </Heading>

            <Text color="gray.400" fontSize={{ base: 'lg', md: 'xl' }} maxW="2xl" lineHeight="tall">
              An MCP server that scans your React components and auto-generates stories, tests, and documentation.
              Framework-aware. Nx-ready. Works in your editor.
            </Text>

            {/* Install command */}
            <Box
              bg="whiteAlpha.50"
              border="1px solid"
              borderColor="whiteAlpha.100"
              borderRadius="lg"
              px={6}
              py={3}
              w="fit-content"
            >
              <Code
                bg="transparent"
                color="teal.300"
                fontSize={{ base: 'md', md: 'lg' }}
                fontWeight="medium"
              >
                npm install forgekit-storybook-mcp
              </Code>
            </Box>

            <HStack spacing={4} pt={2}>
              <Button
                size="lg"
                bg="teal.500"
                color="white"
                _hover={{ bg: 'teal.400' }}
                px={8}
                fontWeight="semibold"
                onClick={() => { window.location.href = POLAR_CHECKOUT_URL }}
              >
                Get Pro — $49
              </Button>
              <Button
                size="lg"
                variant="outline"
                borderColor="whiteAlpha.300"
                color="white"
                _hover={{ bg: 'whiteAlpha.100' }}
                px={8}
                fontWeight="semibold"
                onClick={() => { window.location.href = NPM_URL }}
              >
                View on npm
              </Button>
            </HStack>

            <Text color="gray.500" fontSize="sm">
              Free tier available · Pro is a one-time payment · No subscription
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Features */}
      <Box as="section" id="features" py={{ base: 16, md: 24 }}>
        <Container>
          <VStack spacing={4} textAlign="center" mb={16}>
            <Badge
              bg="whiteAlpha.100"
              color="teal.300"
              px={4}
              py={1}
              borderRadius="full"
              fontSize="sm"
              textTransform="none"
            >
              Features
            </Badge>
            <Heading as="h2" fontSize={{ base: '3xl', md: '4xl' }} color="white" fontWeight="bold">
              Everything your Storybook needs
            </Heading>
            <Text color="gray.400" fontSize="lg" maxW="2xl">
              From story generation to test coverage — fully automated.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {features.map((f) => (
              <Box
                key={f.title}
                bg="whiteAlpha.50"
                border="1px solid"
                borderColor="whiteAlpha.100"
                borderRadius="xl"
                p={8}
                _hover={{ borderColor: 'teal.500', bg: 'whiteAlpha.100' }}
                transition="all 0.2s"
              >
                <Box color="teal.400" mb={4}>{f.icon}</Box>
                <Heading as="h3" fontSize="lg" color="white" mb={3} fontWeight="semibold">
                  {f.title}
                </Heading>
                <Text color="gray.400" fontSize="md" lineHeight="tall">
                  {f.description}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Pricing Comparison */}
      <Box as="section" id="pricing" py={{ base: 16, md: 24 }}>
        <Container>
          <VStack spacing={4} textAlign="center" mb={16}>
            <Badge
              bg="whiteAlpha.100"
              color="teal.300"
              px={4}
              py={1}
              borderRadius="full"
              fontSize="sm"
              textTransform="none"
            >
              Pricing
            </Badge>
            <Heading as="h2" fontSize={{ base: '3xl', md: '4xl' }} color="white" fontWeight="bold">
              Free to start.{' '}
              <Text as="span" color="teal.400">$49</Text> to unlock everything.
            </Heading>
            <Text color="gray.400" fontSize="lg" maxW="2xl">
              One-time payment. Lifetime updates. No subscription.
            </Text>
          </VStack>

          {/* Comparison Table */}
          <Box
            maxW="3xl"
            mx="auto"
            bg="whiteAlpha.50"
            border="1px solid"
            borderColor="whiteAlpha.100"
            borderRadius="xl"
            overflow="hidden"
          >
            {/* Header row */}
            <HStack
              px={8}
              py={4}
              bg="whiteAlpha.50"
              borderBottom="1px solid"
              borderColor="whiteAlpha.100"
              justify="space-between"
            >
              <Text color="gray.400" fontWeight="semibold" flex={1}>Feature</Text>
              <Text color="gray.400" fontWeight="semibold" w="80px" textAlign="center">Free</Text>
              <Text color="teal.400" fontWeight="semibold" w="80px" textAlign="center">Pro</Text>
            </HStack>

            {comparisonRows.map((row, i) => (
              <HStack
                key={row.feature}
                px={8}
                py={4}
                borderBottom={i < comparisonRows.length - 1 ? '1px solid' : 'none'}
                borderColor="whiteAlpha.50"
                justify="space-between"
                _hover={{ bg: 'whiteAlpha.50' }}
              >
                <Text color="gray.300" flex={1} fontSize="sm">{row.feature}</Text>
                <Box w="80px" display="flex" justifyContent="center">
                  {row.free ? <CheckIcon /> : <XIcon />}
                </Box>
                <Box w="80px" display="flex" justifyContent="center">
                  {row.pro ? <CheckIcon /> : <XIcon />}
                </Box>
              </HStack>
            ))}

            {/* CTA row */}
            <HStack px={8} py={6} bg="whiteAlpha.50" justify="space-between" align="center">
              <Text color="gray.400" flex={1} />
              <Box w="80px" textAlign="center">
                <Text color="gray.500" fontSize="sm" fontWeight="semibold">$0</Text>
              </Box>
              <Box w="80px" textAlign="center">
                <Text color="teal.400" fontSize="sm" fontWeight="bold">$49</Text>
              </Box>
            </HStack>
          </Box>

          <VStack spacing={4} pt={10}>
            <Button
              size="lg"
              bg="teal.500"
              color="white"
              _hover={{ bg: 'teal.400' }}
              px={10}
              fontWeight="semibold"
              onClick={() => { window.location.href = POLAR_CHECKOUT_URL }}
            >
              Get Pro License — $49
            </Button>
            <Text color="gray.500" fontSize="sm">
              Instant delivery via email · Activate with one line in your config
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Quick Start */}
      <Box as="section" py={{ base: 16, md: 24 }}>
        <Container>
          <VStack spacing={4} textAlign="center" mb={12}>
            <Badge
              bg="whiteAlpha.100"
              color="teal.300"
              px={4}
              py={1}
              borderRadius="full"
              fontSize="sm"
              textTransform="none"
            >
              Quick Start
            </Badge>
            <Heading as="h2" fontSize={{ base: '3xl', md: '4xl' }} color="white" fontWeight="bold">
              Up and running in 60 seconds
            </Heading>
          </VStack>

          <VStack spacing={6} maxW="2xl" mx="auto">
            {[
              { step: '1', label: 'Install', code: 'npm install forgekit-storybook-mcp' },
              { step: '2', label: 'Add to MCP config', code: '{ "mcpServers": { "storybook": { "command": "npx", "args": ["forgekit-storybook-mcp"] } } }' },
              { step: '3', label: 'Start your editor', code: 'Your components sync automatically on startup' },
            ].map((s) => (
              <HStack
                key={s.step}
                w="full"
                bg="whiteAlpha.50"
                border="1px solid"
                borderColor="whiteAlpha.100"
                borderRadius="lg"
                p={6}
                spacing={5}
                align="flex-start"
              >
                <Box
                  bg="teal.500"
                  color="white"
                  borderRadius="full"
                  w="32px"
                  h="32px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontWeight="bold"
                  fontSize="sm"
                  flexShrink={0}
                >
                  {s.step}
                </Box>
                <VStack align="start" spacing={2}>
                  <Text color="white" fontWeight="semibold">{s.label}</Text>
                  <Code
                    bg="whiteAlpha.100"
                    color="teal.300"
                    px={3}
                    py={1}
                    borderRadius="md"
                    fontSize="sm"
                    whiteSpace="pre-wrap"
                    wordBreak="break-all"
                  >
                    {s.code}
                  </Code>
                </VStack>
              </HStack>
            ))}
          </VStack>
        </Container>
      </Box>

      {/* Final CTA */}
      <Box as="section" py={{ base: 16, md: 24 }}>
        <Container>
          <VStack
            spacing={6}
            textAlign="center"
            bg="whiteAlpha.50"
            border="1px solid"
            borderColor="whiteAlpha.100"
            borderRadius="2xl"
            py={{ base: 12, md: 16 }}
            px={8}
            maxW="3xl"
            mx="auto"
          >
            <Heading as="h2" fontSize={{ base: '2xl', md: '3xl' }} color="white" fontWeight="bold">
              Your Storybook, on autopilot.
            </Heading>
            <Text color="gray.400" fontSize="lg" maxW="xl">
              Stop writing boilerplate. Start shipping components with full coverage.
            </Text>
            <HStack spacing={4}>
              <Button
                size="lg"
                bg="teal.500"
                color="white"
                _hover={{ bg: 'teal.400' }}
                px={8}
                fontWeight="semibold"
                onClick={() => { window.location.href = POLAR_CHECKOUT_URL }}
              >
                Get Pro — $49
              </Button>
              <Button
                size="lg"
                variant="outline"
                borderColor="whiteAlpha.300"
                color="white"
                _hover={{ bg: 'whiteAlpha.100' }}
                px={8}
                fontWeight="semibold"
                onClick={() => { window.location.href = GITHUB_URL }}
              >
                GitHub
              </Button>
            </HStack>
          </VStack>
        </Container>
      </Box>

      <Footer
        logo={<Logo size="md" />}
        tagline="Auto-generate Storybook stories from your React components."
        columns={footerColumns}
        socialLinks={[
          { icon: <TwitterIcon />, href: 'https://x.com/forgekitdev', label: 'X' },
          { icon: <GitHubIcon />, href: GITHUB_URL, label: 'GitHub' },
          { icon: <DiscordIcon />, href: 'https://discord.gg/jqt9EhYe', label: 'Discord' },
        ]}
      />
    </Box>
  )
}
