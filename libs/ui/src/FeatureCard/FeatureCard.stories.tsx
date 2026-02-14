import type { Meta, StoryObj } from '@storybook/react'
import { FeatureCard } from './FeatureCard'

const StarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

const meta: Meta<typeof FeatureCard> = {
  title: 'Ui/FeatureCard',
  component: FeatureCard,
  tags: [],
}

export default meta
type Story = StoryObj<typeof FeatureCard>

export const Default: Story = {
  args: {
    icon: <StarIcon />,
    title: 'Auto-Generated Stories',
    description: 'Automatically create Storybook stories from your React components.',
  },
}

export const CustomAccent: Story = {
  args: {
    icon: <StarIcon />,
    title: 'Custom Accent Color',
    description: 'FeatureCard with a custom accent color.',
    accentColor: '#F97316',
  },
}
