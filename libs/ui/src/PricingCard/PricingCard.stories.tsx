import type { Meta, StoryObj } from '@storybook/react'
import { PricingCard } from './PricingCard'

const meta: Meta<typeof PricingCard> = {
  title: 'Ui/PricingCard',
  component: PricingCard,
  tags: [],
}

export default meta
type Story = StoryObj<typeof PricingCard>

export const Free: Story = {
  args: {
    name: 'Free',
    description: 'For individual developers.',
    price: '$0',
    period: '/month',
    features: ['5 components', 'Basic stories', 'Community support'],
    ctaText: 'Get Started',
  },
}

export const Pro: Story = {
  args: {
    name: 'Pro',
    description: 'For teams and power users.',
    price: '$49',
    period: ' one-time',
    features: ['Unlimited components', 'Tests & docs', 'All templates', 'Priority support'],
    ctaText: 'Buy Pro',
    isPopular: true,
  },
}

export const NotPopular: Story = {
  args: {
    name: 'Enterprise',
    description: 'Custom solutions.',
    price: 'Contact us',
    features: ['Custom integrations', 'SLA', 'Dedicated support'],
    ctaText: 'Contact Sales',
    isPopular: false,
  },
}
