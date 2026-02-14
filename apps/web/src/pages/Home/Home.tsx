import { Box } from '@chakra-ui/react'
import {
  Header,
  Hero,
  Features,
  Pricing,
  CTA,
  Footer,
  Logo,
} from '@forgekit-landing/ui'


// Icons as simple SVG components
const FigmaIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-labelledby="figmaIconTitle" role="img">
    <title id="figmaIconTitle">Figma logo</title>
    <path d="M5 5.5A3.5 3.5 0 018.5 2H12v7H8.5A3.5 3.5 0 015 5.5z" fill="#EA4C1D"/>
    <path d="M12 2h3.5a3.5 3.5 0 110 7H12V2z" fill="#F7991C"/>
    <path d="M12 12.5a3.5 3.5 0 117 0 3.5 3.5 0 11-7 0z" fill="#28C4F4"/>
    <path d="M5 19.5A3.5 3.5 0 018.5 16H12v3.5a3.5 3.5 0 11-7 0z" fill="#0ACF83"/>
    <path d="M5 12.5A3.5 3.5 0 018.5 9H12v7H8.5A3.5 3.5 0 015 12.5z" fill="#A259FF"/>
  </svg>
)

const CodeIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-labelledby="codeIconTitle"
    role="img"
  >
    <title id="codeIconTitle">Code icon</title>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
)


const TestIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-labelledby="testIconTitle"
    role="img"
  >
    <title id="testIconTitle">Test icon</title>
    <path d="M9 11l3 3L22 4" />
    <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
  </svg>
)


const StorybookIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    aria-labelledby="storybookIconTitle"
    role="img"
  >
    <title id="storybookIconTitle">Storybook logo</title>
    <rect width="24" height="24" rx="4" fill="#FF4785"/>
    <path
      fill="#FFF"
      d="M16.71 0.243l-.12 2.71a.18.18 0 00.29.15l1.06-.8.9.7a.18.18 0 00.28-.14L19 0l1.86-.07a.5.5 0 01.52.5v22.14a.5.5 0 01-.47.5l-15.13.67a.5.5 0 01-.53-.5V.5a.5.5 0 01.47-.5l11-.24zm-2.87 9.07c0 .47 2.67.24 3.03-.04 0-2.87-1.54-4.37-4.36-4.37-2.82 0-4.4 1.53-4.4 3.83 0 3.98 5.37 4.05 5.37 6.23 0 .62-.29 1-.96 1-.87 0-1.22-.47-1.18-2.07 0-.36-3.1-.48-3.2 0-.26 3.34 1.83 4.32 4.42 4.32 2.5 0 4.46-1.33 4.46-3.74 0-4.27-5.46-4.16-5.46-6.27 0-.85.57-1 1.01-1 .48 0 1.12.1 1.08 2.06z"
    />
  </svg>
)

const RocketIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-labelledby="rocketIconTitle"
    role="img"
  >
    <title id="rocketIconTitle">Rocket icon</title>
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
)

const SyncIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-labelledby="syncIconTitle"
    role="img"
  >
    <title id="syncIconTitle">Sync icon</title>
    <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0118.8-4.3M22 12.5a10 10 0 01-18.8 4.2" />
  </svg>
)

const TwitterIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-labelledby="twitterIconTitle"
    role="img"
  >
    <title id="twitterIconTitle">Twitter logo</title>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const GitHubIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-labelledby="githubIconTitle"
    role="img"
  >
    <title id="githubIconTitle">GitHub logo</title>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const DiscordIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-labelledby="discordIconTitle"
    role="img"
  >
    <title id="discordIconTitle">Discord logo</title>
    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);


const features = [
  {
    icon: <FigmaIcon />,
    title: 'Figma to React',
    description: 'Connect your Figma file and watch components materialize. Design tokens, components, and variants — all synced automatically.',
    accentColor: '#8b5cf6',
  },
  {
    icon: <TestIcon />,
    title: 'Tests Included',
    description: 'Every component ships with Vitest unit tests, Storybook interaction tests, and Playwright e2e tests. Production-ready from day one.',
    accentColor: '#14b8a6',
  },
  {
    icon: <StorybookIcon />,
    title: 'Storybook Stories',
    description: 'Full Storybook coverage with autodocs, interaction tests, and Chromatic visual regression testing built into CI.',
    accentColor: '#f97316',
  },
  {
    icon: <CodeIcon />,
    title: 'Clean Architecture',
    description: 'Nx monorepo foundation scales from SPA to enterprise. TypeScript, ESLint, Prettier — all configured correctly.',
    accentColor: '#8b5cf6',
  },
  {
    icon: <SyncIcon />,
    title: 'Live Sync',
    description: 'Design changes in Figma? Run one command to sync. Your codebase stays in perfect harmony with your designs.',
    accentColor: '#14b8a6',
  },
  {
    icon: <RocketIcon />,
    title: 'Deploy Anywhere',
    description: 'Vercel, Railway, or self-hosted with Dokploy. CI/CD pipelines included. Ship to production in minutes.',
    accentColor: '#f97316',
  },
]

const handleEarlyAccess = (plan: string) => {
  window.location.href = `mailto:forgekit@pm.me?subject=Early Access Request - ${plan} Plan&body=Hi,%0D%0A%0D%0AI'm interested in early access to the ${plan} plan.%0D%0A%0D%0AThanks!`
}

const pricingPlans = [
  {
    name: 'Launch',
    description: 'Perfect for indie developers and small projects',
    monthlyPrice: '$149',
    annualPrice: '$119',
    features: [
      'Figma design sync',
      'React + Vite SPA',
      'Chakra UI or shadcn/ui',
      'Full Storybook coverage',
      'Vitest + Playwright tests',
      'Chromatic CI workflow',
      'Vercel deployment',
    ],
    ctaText: 'Get Early Access',
    isPopular: false,
    onCtaClick: () => handleEarlyAccess('Launch'),
  },
  {
    name: 'Scale',
    description: 'For teams building production SaaS applications',
    monthlyPrice: '$349',
    annualPrice: '$279',
    features: [
      'Everything in Launch',
      'tRPC backend API',
      'Supabase integration',
      'Authentication ready',
      'Shared libs structure',
      'Multi-app monorepo',
      'Priority support',
    ],
    ctaText: 'Get Early Access',
    isPopular: true,
    onCtaClick: () => handleEarlyAccess('Scale'),
  },
  {
    name: 'Universal',
    description: 'Web + mobile from a single codebase',
    monthlyPrice: '$499',
    annualPrice: '$399',
    features: [
      'Everything in Scale',
      'Expo React Native app',
      'Tamagui universal UI',
      'Shared component library',
      'EAS deployment config',
      'Cross-platform testing',
      'Dedicated support',
    ],
    ctaText: 'Get Early Access',
    isPopular: false,
    onCtaClick: () => handleEarlyAccess('Universal'),
  },
]

const GITHUB_URL = 'https://github.com/effinrich/storybook-mcp-v2'
const NPM_URL = 'https://npmjs.com/package/forgekit-storybook-mcp'

const footerColumns = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Storybook MCP', href: '/storybook-mcp' },
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
      { label: 'Contact', href: 'mailto:forgekit@pm.me' },
      { label: 'X', href: 'https://x.com/forgekitdev' },
      { label: 'Discord', href: 'https://discord.gg/jqt9EhYe' },
    ],
  },
]

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
]

export function Home() {
  return (
    <Box bg="slate.950" minH="100vh">
      <Header
        links={navLinks}
        ctaText="Get Early Access"
        onCtaClick={() => handleEarlyAccess('ForgeKit')}
      />
      <Hero
        badge="Coming Soon"
        headline="From Figma to production-ready React"
        highlightedText="production-ready"
        description="Stop recreating designs by hand. ForgeKit transforms your Figma components into tested, documented, deployable React applications in minutes."
        primaryCta="Get Early Access"
        secondaryCta="View Storybook MCP"
        onPrimaryClick={() => handleEarlyAccess('ForgeKit')}
        onSecondaryClick={() => { window.location.href = '/storybook-mcp'; }}
      />

      <Features
        badge="Features"
        headline="Everything you need to ship faster"
        highlightedText="ship faster"
        description="Forgekit generates production-ready code, not throwaway prototypes."
        features={features}
      />

      <Pricing
        badge="Pricing"
        headline="Simple pricing, powerful output"
        highlightedText="Simple pricing"
        description="Start free, upgrade when you're ready. No hidden fees."
        plans={pricingPlans}
      />

      <CTA
        headline="Ready to transform your workflow?"
        highlightedText="transform"
        description="Join developers shipping faster with ForgeKit. Get early access — we'll notify you when we launch."
        primaryCta="Get Early Access"
        secondaryCta="View Storybook MCP"
        onPrimaryClick={() => handleEarlyAccess('ForgeKit')}
        onSecondaryClick={() => {
          window.location.href = '/storybook-mcp';
        }}
      />

      <Footer
        logo={<Logo size="md" />}
        tagline="Transform Figma designs into production-ready React applications."
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
