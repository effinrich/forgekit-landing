import type { Meta, StoryObj } from '@storybook/react'
import { SimpleGrid } from '@chakra-ui/react'
import { FeatureCard } from './FeatureCard'

const CodeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="16,18 22,12 16,6" />
    <polyline points="8,6 2,12 8,18" />
  </svg>
)

const meta: Meta<typeof FeatureCard> = {
  title: 'Components/FeatureCard',
  component: FeatureCard,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px', padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof FeatureCard>

export const Default: Story = {
  args: {
    icon: <CodeIcon />,
    title: 'Clean Architecture',
    description:
      'Nx monorepo foundation scales from SPA to enterprise. TypeScript, ESLint, Prettier — all configured correctly.',
  },
}

export const WithAccentColor: Story = {
  args: {
    icon: <CodeIcon />,
    title: 'Custom Accent',
    description: 'Feature cards can have custom accent colors for visual variety.',
    accentColor: '#f97316',
  },
}

export const Grid: Story = {
  render: () => (
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
      <FeatureCard
        icon={<CodeIcon />}
        title="Feature One"
        description="Description for the first feature goes here."
        accentColor="#8b5cf6"
      />
      <FeatureCard
        icon={<CodeIcon />}
        title="Feature Two"
        description="Description for the second feature goes here."
        accentColor="#14b8a6"
      />
      <FeatureCard
        icon={<CodeIcon />}
        title="Feature Three"
        description="Description for the third feature goes here."
        accentColor="#f97316"
      />
    </SimpleGrid>
  ),
}
