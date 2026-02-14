import type { Meta, StoryObj } from '@storybook/react'
import { Features } from './Features'

const StarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

const sampleFeatures = [
  { icon: <StarIcon />, title: 'Stories', description: 'Auto-generated stories.' },
  { icon: <StarIcon />, title: 'Tests', description: 'Component tests included.' },
  { icon: <StarIcon />, title: 'Docs', description: 'MDX documentation.' },
]

const meta: Meta<typeof Features> = {
  title: 'Ui/Features',
  component: Features,
  tags: [],
}

export default meta
type Story = StoryObj<typeof Features>

export const Default: Story = {
  args: {
    headline: 'Everything you need',
    features: sampleFeatures,
  },
}

export const WithBadgeAndHighlight: Story = {
  args: {
    badge: 'Features',
    headline: 'Everything you need',
    highlightedText: 'you need',
    description: 'Built for modern React workflows.',
    features: sampleFeatures,
  },
}
