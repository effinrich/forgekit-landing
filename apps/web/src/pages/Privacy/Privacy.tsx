import { Box, Container, Heading, Link, Text, VStack } from '@chakra-ui/react'
import { Header, Footer, Logo } from '@forgekit-landing/ui'
import { Seo } from '../../seo/Seo'
import { siteNavLinks, siteFooterColumns, siteSocialLinksMeta } from '../../data/siteFooter'
import { TwitterIcon, GitHubIcon, DiscordIcon } from '../../components/SocialIcons'

const NPM_MCP = 'https://www.npmjs.com/package/forgekit-storybook-mcp'
const LAST_UPDATED = 'August 2026'

export function Privacy() {
  return (
    <Box bg="slate.950" minH="100vh">
      <Seo title="Privacy Policy" description="What forgekit.cloud collects and why — short version: not much." path="/privacy" />
      <Header
        links={siteNavLinks}
        ctaText="Install on npm"
        onCtaClick={() => {
          window.location.href = NPM_MCP
        }}
      />

      <Container maxW="container.md" py={{ base: 16, md: 24 }} px={6}>
        <VStack spacing={6} align="stretch" color="gray.400" fontSize="md" lineHeight="tall">
          <VStack spacing={2} align="flex-start">
            <Heading as="h1" fontSize={{ base: '3xl', md: '4xl' }} color="white">
              Privacy Policy
            </Heading>
            <Text color="gray.600" fontSize="sm">Last updated: {LAST_UPDATED}</Text>
          </VStack>

          <Text>
            This site (forgekit.cloud) is a marketing page for open-source software. It doesn&apos;t have user
            accounts, doesn&apos;t process payments, and doesn&apos;t collect personal data through any form on
            this domain.
          </Text>

          <Heading as="h2" fontSize="lg" color="white" pt={4}>
            What is collected
          </Heading>
          <Text>
            Basic, aggregated page-visit analytics via Vercel Speed Insights (page load performance, no
            cross-site tracking, no cookies used for advertising). If you email us or message us on Discord or X,
            we see whatever you send through that platform — governed by that platform&apos;s own privacy policy,
            not ours.
          </Text>

          <Heading as="h2" fontSize="lg" color="white" pt={4}>
            The software itself
          </Heading>
          <Text>
            <code>forgekit-storybook-mcp</code> runs locally in your own environment via stdio — it does not send
            your component code, design files, or project data to any server we operate. See the{' '}
            <Link href="https://github.com/effinrich/storybook-mcp" isExternal color="teal.300">
              source
            </Link>{' '}
            if you want to verify that yourself.
          </Text>

          <Heading as="h2" fontSize="lg" color="white" pt={4}>
            External links
          </Heading>
          <Text>
            Links to npm, GitHub, Discord, and X take you to third-party sites with their own privacy policies.
          </Text>

          <Heading as="h2" fontSize="lg" color="white" pt={4}>
            Questions
          </Heading>
          <Text>
            Email <Link href="mailto:forgekit@pm.me" color="teal.300">forgekit@pm.me</Link>.
          </Text>
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
