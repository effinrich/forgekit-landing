import { Box, Container, Heading, Link, Tag, Text, VStack } from '@chakra-ui/react'
import { Header, Footer, Logo } from '@forgekit-landing/ui'
import { Seo } from '../../seo/Seo'
import { siteNavLinks, siteFooterColumns, siteSocialLinksMeta } from '../../data/siteFooter'
import { TwitterIcon, GitHubIcon, DiscordIcon } from '../../components/SocialIcons'

const NPM_MCP = 'https://www.npmjs.com/package/forgekit-storybook-mcp'
const CHANGELOG_URL = 'https://github.com/effinrich/storybook-mcp/blob/master/CHANGELOG.md'

type Entry = {
  version: string
  date: string
  kind: 'Added' | 'Changed' | 'Fixed' | 'Removed'
  summary: string
}

const ENTRIES: Entry[] = [
  {
    version: '1.2.0',
    date: '2026-04-04',
    kind: 'Changed',
    summary:
      'Fully open source (MIT) — removed Polar.sh license validation, paid tiers, sync caps, and feature gating. All templates, update_story, generate_code_connect, and unlimited sync_all are free for everyone.',
  },
  {
    version: '1.2.0',
    date: '2026-04-04',
    kind: 'Added',
    summary:
      'GitHub Actions CI runs typecheck, build, tests, and an MCP stdio smoke test on every push and pull request.',
  },
  {
    version: '1.1.5',
    date: '2026-02-23',
    kind: 'Added',
    summary:
      '--cleanup-only CLI flag, auto-injected as a prestorybook script, removes scaffold story files that conflict with generated ones before Storybook starts.',
  },
  {
    version: '1.1.4',
    date: '2026-02-23',
    kind: 'Fixed',
    summary:
      'sync-all now auto-detects and silently removes Storybook scaffold files (e.g. Button.stories.ts) that crash the file indexer when a real generated story shares the same name.',
  },
  {
    version: '1.1.1',
    date: '2026-02-23',
    kind: 'Fixed',
    summary:
      'Framework detection no longer falls back to vanilla on shadcn/ui projects — checks components.json, @radix-ui/*, class-variance-authority, and lucide-react as signals.',
  },
  {
    version: '1.1.0',
    date: '2026-02-23',
    kind: 'Added',
    summary:
      'Dynamic Storybook version detection reads the installed version from node_modules instead of suggesting a hardcoded dependency range.',
  },
  {
    version: '0.12.0',
    date: '2026-02-23',
    kind: 'Added',
    summary:
      'Background file watcher with debounced auto-sync, storybook-mcp.config.json auto-generation, and .env / .env.local config loading.',
  },
]

const KIND_COLOR: Record<Entry['kind'], string> = {
  Added: 'teal',
  Changed: 'purple',
  Fixed: 'orange',
  Removed: 'red',
}

export function Changelog() {
  return (
    <Box bg="slate.950" minH="100vh">
      <Seo
        title="Changelog"
        description="Release history for forgekit-storybook-mcp — the MIT open-source Storybook MCP server."
        path="/changelog"
      />
      <Header
        links={siteNavLinks}
        ctaText="Install on npm"
        onCtaClick={() => {
          window.location.href = NPM_MCP
        }}
      />

      <Container maxW="container.md" py={{ base: 16, md: 24 }} px={6}>
        <VStack spacing={10} align="stretch">
          <VStack spacing={3} align="flex-start">
            <Heading as="h1" fontSize={{ base: '3xl', md: '4xl' }} color="white">
              Changelog
            </Heading>
            <Text color="gray.400" fontSize="lg">
              Release history for <code>forgekit-storybook-mcp</code>. Full history, including patch releases,
              is in the repo.
            </Text>
            <Link href={CHANGELOG_URL} isExternal color="teal.300" fontSize="sm">
              View full CHANGELOG.md on GitHub →
            </Link>
          </VStack>

          <VStack spacing={6} align="stretch">
            {ENTRIES.map((entry, i) => (
              <Box
                key={`${entry.version}-${i}`}
                borderLeft="2px solid"
                borderColor="slate.800"
                pl={5}
                py={1}
              >
                <VStack align="flex-start" spacing={1}>
                  <Box display="flex" alignItems="center" gap={3}>
                    <Text fontWeight="700" color="white" fontFamily="mono">
                      v{entry.version}
                    </Text>
                    <Tag size="sm" colorScheme={KIND_COLOR[entry.kind]}>
                      {entry.kind}
                    </Tag>
                    <Text color="gray.600" fontSize="sm">
                      {entry.date}
                    </Text>
                  </Box>
                  <Text color="gray.400">{entry.summary}</Text>
                </VStack>
              </Box>
            ))}
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
