import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Code,
  OrderedList,
  ListItem,
  Divider,
  Badge,
  Link,
  Button,
} from '@chakra-ui/react'
import { Header, Footer, Logo } from '@forgekit-landing/ui'

const NPM_MCP = 'https://www.npmjs.com/package/forgekit-storybook-mcp'
const GH_MCP = 'https://github.com/effinrich/storybook-mcp'

const CheckCircleIcon = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
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

const navLinks = [
  { label: 'Features', href: '/#features' },
  { label: 'Open source', href: '/#open-source' },
  { label: 'Docs', href: '/docs' },
]

const footerColumns = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '/#features' },
      { label: 'Open source', href: '/#open-source' },
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
      { label: 'Contact', href: 'mailto:forgekit@pm.me' },
      { label: 'Twitter', href: 'https://twitter.com/forgekit' },
      { label: 'GitHub', href: GH_MCP },
    ],
  },
]

export function Success() {
  return (
    <Box bg="slate.950" minH="100vh">
      <Header
        links={navLinks}
        ctaText="Install on npm"
        onCtaClick={() => {
          window.location.href = NPM_MCP
        }}
      />

      <Container maxW="container.md" py={{ base: 24, md: 32 }} px={6}>
        <VStack spacing={8} align="center" textAlign="center">
          <CheckCircleIcon />

          <Badge
            colorScheme="teal"
            px={4}
            py={1}
            borderRadius="full"
            fontSize="sm"
            textTransform="none"
          >
            Welcome
          </Badge>

          <Heading
            as="h1"
            fontSize={{ base: '3xl', md: '4xl' }}
            fontWeight="bold"
            color="white"
            lineHeight="tight"
          >
            You&apos;re in —{' '}
            <Text as="span" color="teal.400">
              forgekit-storybook-mcp
            </Text>{' '}
            is MIT open source
          </Heading>

          <Text color="gray.400" fontSize="lg" maxW="lg">
            No license keys, no tiers. Install from npm, add a config file, and connect the MCP in your editor.
            This is the same flow documented in the project README.
          </Text>

          <HStack spacing={4} flexWrap="wrap" justify="center">
            <Button
              as={Link}
              href={NPM_MCP}
              isExternal
              colorScheme="teal"
              size="lg"
            >
              Open on npm
            </Button>
            <Button
              as={Link}
              href={GH_MCP}
              isExternal
              variant="outline"
              borderColor="whiteAlpha.300"
              color="white"
              size="lg"
              _hover={{ bg: 'whiteAlpha.100' }}
            >
              Star on GitHub
            </Button>
          </HStack>
        </VStack>

        <Divider my={10} borderColor="whiteAlpha.200" />

        <VStack spacing={8} align="stretch">
          <Heading as="h2" fontSize="xl" color="white">
            Quick start
          </Heading>

          <OrderedList spacing={6} color="gray.300" fontSize="md" pl={4}>
            <ListItem>
              <Text fontWeight="semibold" color="white" mb={2}>
                Install the package
              </Text>
              <Code
                display="block"
                whiteSpace="pre"
                p={4}
                borderRadius="md"
                bg="whiteAlpha.100"
                color="teal.300"
                fontSize="sm"
                overflowX="auto"
              >
                npm install forgekit-storybook-mcp
              </Code>
            </ListItem>

            <ListItem>
              <Text fontWeight="semibold" color="white" mb={2}>
                Add configuration
              </Text>
              <Text color="gray.400" mb={3}>
                Create <Code colorScheme="gray" fontSize="sm">storybook-mcp.config.json</Code> in your project root
                (see the README on GitHub for all options).
              </Text>
            </ListItem>

            <ListItem>
              <Text fontWeight="semibold" color="white" mb={2}>
                Run the MCP server
              </Text>
              <Code
                display="block"
                whiteSpace="pre"
                p={4}
                borderRadius="md"
                bg="whiteAlpha.100"
                color="teal.300"
                fontSize="sm"
              >
                npx forgekit-storybook-mcp
              </Code>
              <Text color="gray.400" mt={2}>
                You should see startup logs on stderr; stdout stays clean for MCP JSON-RPC.
              </Text>
            </ListItem>

            <ListItem>
              <Text fontWeight="semibold" color="white" mb={2}>
                Ship stories with your whole team
              </Text>
              <Text color="gray.400">
                Stories, tests, docs, sync, and Figma Code Connect are available to everyone under the MIT License.
              </Text>
            </ListItem>
          </OrderedList>
        </VStack>

        <Divider my={10} borderColor="whiteAlpha.200" />

        <VStack spacing={4} align="center" textAlign="center">
          <Text color="gray.500" fontSize="sm">
            Questions? Email{' '}
            <Text as="a" href="mailto:forgekit@pm.me" color="teal.400" _hover={{ textDecoration: 'underline' }}>
              forgekit@pm.me
            </Text>
          </Text>
        </VStack>
      </Container>

      <Footer
        logo={<Logo size="md" />}
        tagline="ForgeKit and forgekit-storybook-mcp — MIT open source."
        columns={footerColumns}
        socialLinks={[
          { icon: <TwitterIcon />, href: 'https://twitter.com/forgekit', label: 'Twitter' },
          { icon: <GitHubIcon />, href: GH_MCP, label: 'GitHub' },
          { icon: <DiscordIcon />, href: 'https://discord.gg/forgekit', label: 'Discord' },
        ]}
      />
    </Box>
  )
}
