import { Box, Container, Heading, Link, Text, VStack } from '@chakra-ui/react'
import { Header, Footer, Logo } from '@forgekit-landing/ui'
import { Seo } from '../../seo/Seo'
import { siteNavLinks, siteFooterColumns, siteSocialLinksMeta } from '../../data/siteFooter'
import { TwitterIcon, GitHubIcon, DiscordIcon } from '../../components/SocialIcons'

const NPM_MCP = 'https://www.npmjs.com/package/forgekit-storybook-mcp'
const ISSUES_URL = 'https://github.com/effinrich/storybook-mcp/issues'

export function Roadmap() {
  return (
    <Box bg="bg" minH="100vh">
      <Seo
        title="Roadmap"
        description="What's shipped, what's in progress, and where to weigh in on ForgeKit's direction."
        path="/roadmap"
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
              Roadmap
            </Heading>
            <Text color="fg.muted" fontSize="lg">
              This page won&apos;t promise features that aren&apos;t built yet. Here&apos;s what&apos;s actually
              shipped versus in progress.
            </Text>
          </VStack>

          <Box borderWidth="1px" borderColor="border" borderRadius="md" p={6} bg="bg.surface">
            <Heading as="h2" fontSize="lg" color="fg" mb={3}>
              Shipped: forgekit-storybook-mcp
            </Heading>
            <Text color="fg.muted">
              MIT-licensed, no feature gates. Story generation, tests, docs, sync, and Figma Code Connect are all
              available today — see the <Link href="/changelog" color="accent">changelog</Link> for release
              history.
            </Text>
          </Box>

          <Box borderWidth="1px" borderColor="border" borderRadius="md" p={6} bg="bg.surface">
            <Heading as="h2" fontSize="lg" color="fg" mb={3}>
              In progress: the broader ForgeKit generator
            </Heading>
            <Text color="fg.muted">
              The Nx / app / UI / Storybook generator suite is rolling out over time — Storybook MCP was the
              first piece to reach MIT and a stable release. No fixed dates yet; this section will update as
              pieces actually ship, not before.
            </Text>
          </Box>

          <VStack align="flex-start" gap={2} pt={4}>
            <Text color="fg.muted">Want to weigh in or track specific work?</Text>
            <Link
              href={ISSUES_URL}
              color="accent"
              target='_blank'
              rel='noopener noreferrer'>
              Open an issue or check existing ones on GitHub →
            </Link>
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
  );
}
