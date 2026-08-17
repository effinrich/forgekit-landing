import { Box, Button, Container, Heading, Link, Text, VStack } from '@chakra-ui/react'
import { Header, Footer, Logo } from '@forgekit-landing/ui'
import { Seo } from '../../seo/Seo'
import { siteNavLinks, siteFooterColumns, siteSocialLinksMeta } from '../../data/siteFooter'
import { TwitterIcon, GitHubIcon, DiscordIcon } from '../../components/SocialIcons'

const NPM_MCP = 'https://www.npmjs.com/package/forgekit-storybook-mcp'
const CONTACT_EMAIL = 'forgekit@pm.me'

export function Contact() {
  return (
    <Box bg="slate.950" minH="100vh">
      <Seo
        title="Contact"
        description="Get in touch about ForgeKit — bugs, feature requests, or the broader generator suite."
        path="/contact"
      />
      <Header
        links={siteNavLinks}
        ctaText="Install on npm"
        onCtaClick={() => {
          window.location.href = NPM_MCP
        }}
      />

      <Container maxW="container.md" py={{ base: 16, md: 24 }} px={6}>
        <VStack spacing={8} align="stretch">
          <VStack spacing={3} align="flex-start">
            <Heading as="h1" fontSize={{ base: '3xl', md: '4xl' }} color="white">
              Contact
            </Heading>
            <Text color="gray.400" fontSize="lg">
              No contact form, no ticket queue — just direct channels.
            </Text>
          </VStack>

          <Box borderWidth="1px" borderColor="teal.800" borderRadius="xl" p={6} bg="whiteAlpha.50">
            <Heading as="h2" fontSize="lg" color="white" mb={2}>
              Email
            </Heading>
            <Text color="gray.400" mb={4}>
              Bugs, feature requests, or interest in the ForgeKit generator suite.
            </Text>
            <Button
              as={Link}
              href={`mailto:${CONTACT_EMAIL}`}
              colorScheme="teal"
              size="md"
              _hover={{ textDecoration: 'none' }}
            >
              {CONTACT_EMAIL}
            </Button>
          </Box>

          <Box borderWidth="1px" borderColor="whiteAlpha.200" borderRadius="xl" p={6} bg="whiteAlpha.50">
            <Heading as="h2" fontSize="lg" color="white" mb={2}>
              GitHub issues
            </Heading>
            <Text color="gray.400" mb={4}>
              Bug reports and feature requests for <code>forgekit-storybook-mcp</code> — fastest way to get
              something tracked and fixed.
            </Text>
            <Button
              as={Link}
              href="https://github.com/effinrich/storybook-mcp/issues"
              isExternal
              variant="outline"
              colorScheme="gray"
              borderColor="whiteAlpha.300"
              color="white"
              _hover={{ bg: 'whiteAlpha.100', textDecoration: 'none' }}
              size="md"
            >
              Open an issue
            </Button>
          </Box>

          <Box borderWidth="1px" borderColor="whiteAlpha.200" borderRadius="xl" p={6} bg="whiteAlpha.50">
            <Heading as="h2" fontSize="lg" color="white" mb={2}>
              Discord
            </Heading>
            <Text color="gray.400" mb={4}>
              For quick questions and to see what others are building with it.
            </Text>
            <Button
              as={Link}
              href="https://discord.gg/jqt9EhYe"
              isExternal
              variant="outline"
              colorScheme="gray"
              borderColor="whiteAlpha.300"
              color="white"
              _hover={{ bg: 'whiteAlpha.100', textDecoration: 'none' }}
              size="md"
            >
              Join the Discord
            </Button>
          </Box>
        </VStack>
      </Container>

      <Footer
        logo={<Logo size="md" />}
        tagline="ForgeKit and forgekit-storybook-mcp — MIT open source. Figma to components, Storybook to truth."
        columns={siteFooterColumns}
        socialLinks={[
          { icon: <TwitterIcon />, ...siteSocialLinksMeta[0] },
          { icon: <GitHubIcon />, ...siteSocialLinksMeta[1] },
          { icon: <DiscordIcon />, ...siteSocialLinksMeta[2] },
        ]}
      />
    </Box>
  )
}
