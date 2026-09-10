import { Box, Container, Heading, Link, Text, VStack } from '@chakra-ui/react'
import { Header, Footer, Logo } from '@forgekit-landing/ui'
import { Seo } from '../../seo/Seo'
import { siteNavLinks, siteFooterColumns, siteSocialLinksMeta } from '../../data/siteFooter'
import { TwitterIcon, GitHubIcon, DiscordIcon } from '../../components/SocialIcons'

const NPM_MCP = 'https://www.npmjs.com/package/forgekit-storybook-mcp'
const LAST_UPDATED = 'August 2026'

export function Terms() {
  return (
    <Box bg="slate.950" minH="100vh">
      <Seo title="Terms of Service" description="Terms for using forgekit.cloud and the ForgeKit open-source tools." path="/terms" />
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
              Terms of Service
            </Heading>
            <Text color="gray.600" fontSize="sm">Last updated: {LAST_UPDATED}</Text>
          </VStack>

          <Heading as="h2" fontSize="lg" color="white" pt={2}>
            The software
          </Heading>
          <Text>
            <code>forgekit-storybook-mcp</code> is MIT-licensed. You can use, modify, and redistribute it under
            the terms of the MIT license included in the{' '}
            <Link href="https://github.com/effinrich/storybook-mcp/blob/master/LICENSE" isExternal color="teal.300">
              repository
            </Link>
            . There are no license keys, no paid tiers, and no usage limits.
          </Text>

          <Heading as="h2" fontSize="lg" color="white" pt={4}>
            No warranty
          </Heading>
          <Text>
            Provided as-is, as stated in the MIT license — no warranty of any kind, express or implied. Review
            generated output (stories, tests, docs) before committing it, same as you would any generated code.
          </Text>

          <Heading as="h2" fontSize="lg" color="white" pt={4}>
            This website
          </Heading>
          <Text>
            forgekit.cloud is a marketing and documentation site. Don&apos;t scrape it aggressively, don&apos;t
            use it to distribute malware, and don&apos;t misrepresent your affiliation with the project.
          </Text>

          <Heading as="h2" fontSize="lg" color="white" pt={4}>
            Changes
          </Heading>
          <Text>
            These terms may be updated as the project changes. Material changes will be reflected here with an
            updated date.
          </Text>

          <Heading as="h2" fontSize="lg" color="white" pt={4}>
            Contact
          </Heading>
          <Text>
            Questions: <Link href="mailto:forgekit@pm.me" color="teal.300">forgekit@pm.me</Link>.
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
