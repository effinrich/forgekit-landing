import { Box, Container, Heading, Link, Text, VStack } from '@chakra-ui/react'
import { Header, Footer, Logo } from '@forgekit-landing/ui'
import { Seo } from '../../seo/Seo'
import { siteNavLinks, siteFooterColumns, siteSocialLinksMeta } from '../../data/siteFooter'
import { TwitterIcon, GitHubIcon, DiscordIcon } from '../../components/SocialIcons'

const NPM_MCP = 'https://www.npmjs.com/package/forgekit-storybook-mcp'

export function About() {
  return (
    <Box bg="slate.950" minH="100vh">
      <Seo
        title="About"
        description="ForgeKit is built by Rich Tillman — a frontend engineer working on design-system tooling and MCP servers that connect Figma to code."
        path="/about"
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
              About
            </Heading>
          </VStack>

          <VStack spacing={5} align="flex-start" color="gray.400" fontSize="lg" lineHeight="tall">
            <Text>
              ForgeKit is built by Rich Tillman, a frontend engineer who spends most of his time at the
              intersection of design systems and developer tooling — the handoff between a Figma file and the
              component that actually ships.
            </Text>
            <Text>
              <code>forgekit-storybook-mcp</code> came out of a recurring problem: keeping Storybook stories,
              tests, and docs in sync with components by hand doesn&apos;t scale, and AI coding assistants work
              far better with structured context than with a screenshot. It&apos;s MIT-licensed and free — no
              tiers, no license keys.
            </Text>
            <Text>
              The broader ForgeKit idea is the same problem at monorepo scale: Nx, a shared UI library, Storybook,
              and deployment patterns that stay wired together instead of drifting apart. That part is still
              rolling out — see the <Link href="/roadmap" color="teal.300">roadmap</Link> for what&apos;s actually
              shipped versus still in progress.
            </Text>
          </VStack>
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
