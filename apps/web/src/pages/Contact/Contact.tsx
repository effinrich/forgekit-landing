import { Box, Button, Container, Heading, Link, Text, VStack } from '@chakra-ui/react'
import { Header, Footer, Logo } from '@forgekit-landing/ui'
import { Seo } from '../../seo/Seo'
import { siteNavLinks, siteFooterColumns, siteSocialLinksMeta } from '../../data/siteFooter'
import { TwitterIcon, GitHubIcon, DiscordIcon } from '../../components/SocialIcons'

const NPM_MCP = 'https://www.npmjs.com/package/forgekit-storybook-mcp'
const CONTACT_EMAIL = 'forgekit@pm.me'

export function Contact() {
  return (
    <Box bg="bg" minH="100vh">
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

      <Container maxW="container.md" py="section-y" px={6}>
        <VStack gap={8} align="stretch">
          <VStack gap={3} align="flex-start">
            <Heading as="h1" fontSize={{ base: '3xl', md: '4xl' }} color="fg">
              Contact
            </Heading>
            <Text color="fg.muted" fontSize="lg">
              No contact form, no ticket queue — just direct channels.
            </Text>
          </VStack>

          <Box borderWidth="1px" borderColor="border" borderRadius="md" p={6} bg="bg.surface">
            <Heading as="h2" fontSize="lg" color="fg" mb={2}>
              Email
            </Heading>
            <Text color="fg.muted" mb={4}>
              Bugs, feature requests, or interest in the ForgeKit generator suite.
            </Text>
                        <Button
              colorPalette="ember"
              size="md"
              _hover={{ textDecoration: 'none' }}
              asChild
            >
              <Link
                href={`mailto:${CONTACT_EMAIL}`}
              >
                {CONTACT_EMAIL}
              </Link>
            </Button>
          </Box>

          <Box borderWidth="1px" borderColor="border" borderRadius="md" p={6} bg="bg.surface">
            <Heading as="h2" fontSize="lg" color="fg" mb={2}>
              GitHub issues
            </Heading>
            <Text color="fg.muted" mb={4}>
              Bug reports and feature requests for <code>forgekit-storybook-mcp</code> — fastest way to get
              something tracked and fixed.
            </Text>
                        <Button
              variant="outline"
              colorPalette="ember"
              borderColor="border"
              color="fg"
              _hover={{ bg: 'bg.sunken', textDecoration: 'none' }}
              size="md"
              asChild
            >
              <Link
                href="https://github.com/effinrich/storybook-mcp/issues"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open an issue
              </Link>
            </Button>
          </Box>

          <Box borderWidth="1px" borderColor="border" borderRadius="md" p={6} bg="bg.surface">
            <Heading as="h2" fontSize="lg" color="fg" mb={2}>
              Discord
            </Heading>
            <Text color="fg.muted" mb={4}>
              For quick questions and to see what others are building with it.
            </Text>
                        <Button
              variant="outline"
              colorPalette="ember"
              borderColor="border"
              color="fg"
              _hover={{ bg: 'bg.sunken', textDecoration: 'none' }}
              size="md"
              asChild
            >
              <Link
                href="https://discord.gg/jqt9EhYe"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join the Discord
              </Link>
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
  );
}
