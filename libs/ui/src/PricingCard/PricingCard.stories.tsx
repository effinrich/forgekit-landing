import type { Meta, StoryObj } from '@storybook/react'
import { SimpleGrid } from '@chakra-ui/react'
import { PricingCard } from './PricingCard'

const meta: Meta<typeof PricingCard> = {
  title: 'Components/PricingCard',
  component: PricingCard,
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
type Story = StoryObj<typeof PricingCard>

export const Default: Story = {
  args: {
    name: 'Pro',
    description: 'For growing teams',
    price: '$49',
    period: '/month',
    features: [
      'Unlimited projects',
      '10 team members',
      'Priority support',
      'Advanced analytics',
    ],
    ctaText: 'Get Started',
  },
}

export const Popular: Story = {
  args: {
    name: 'Scale',
    description: 'Most popular choice',
    price: '$99',
    period: '/month',
    features: [
      'Everything in Pro',
      'Unlimited team members',
      'Custom integrations',
      'SLA guarantee',
      '24/7 support',
    ],
    ctaText: 'Start Free Trial',
    isPopular: true,
  },
}

export const PricingGrid: Story = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '1200px', padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
  render: () => (
    <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={8}>
      <PricingCard
        name="Starter"
        description="For individuals"
        price="$19"
        period="/month"
        features={[
          '5 projects',
          '1 team member',
          'Email support',
        ]}
        ctaText="Start Free"
      />
      <PricingCard
        name="Pro"
        description="For small teams"
        price="$49"
        period="/month"
        features={[
          'Unlimited projects',
          '10 team members',
          'Priority support',
          'API access',
        ]}
        ctaText="Get Started"
        isPopular
      />
      <PricingCard
        name="Enterprise"
        description="For large organizations"
        price="$199"
        period="/month"
        features={[
          'Everything in Pro',
          'Unlimited members',
          'Custom contracts',
          'Dedicated support',
          'SSO & SAML',
        ]}
        ctaText="Contact Sales"
      />
    </SimpleGrid>
  ),
}
