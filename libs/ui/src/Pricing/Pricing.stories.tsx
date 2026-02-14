import type { Meta, StoryObj } from '@storybook/react'
import { Pricing } from './Pricing'

const samplePlans = [
  {
    name: 'Free',
    description: 'For individual developers.',
    monthlyPrice: '$0',
    annualPrice: '$0',
    features: ['5 components', 'Basic stories'],
    ctaText: 'Get Started',
  },
  {
    name: 'Pro',
    description: 'For teams.',
    monthlyPrice: '$49',
    annualPrice: '$39',
    features: ['Unlimited components', 'Tests & docs', 'All templates'],
    ctaText: 'Buy Pro',
    isPopular: true,
  },
  {
    name: 'Enterprise',
    description: 'Custom solutions.',
    monthlyPrice: 'Contact',
    annualPrice: 'Contact',
    features: ['Everything in Pro', 'Custom integrations', 'SLA'],
    ctaText: 'Contact Sales',
  },
]

const meta: Meta<typeof Pricing> = {
  title: 'Ui/Pricing',
  component: Pricing,
  tags: [],
}

export default meta
type Story = StoryObj<typeof Pricing>

export const Default: Story = {
  args: {
    headline: 'Simple, transparent pricing',
    plans: samplePlans,
  },
}

export const WithBadgeAndHighlight: Story = {
  args: {
    badge: 'Pricing',
    headline: 'Simple, transparent pricing',
    highlightedText: 'transparent',
    description: 'Start free, upgrade when you need more.',
    plans: samplePlans,
  },
}
