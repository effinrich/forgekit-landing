import type { Meta, StoryObj } from '@storybook/react'
import { Header } from './Header'

const meta: Meta<typeof Header> = {
  title: 'Ui/Header',
  component: Header,
  tags: [],
}

export default meta
type Story = StoryObj<typeof Header>

export const Default: Story = {
  args: {
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
    ],
    ctaText: 'Get Started',
  },
}

export const WithCtaHref: Story = {
  args: {
    links: [{ label: 'Features', href: '#features' }],
    ctaText: 'Buy Pro',
    ctaHref: 'https://polar.sh/forgekit',
  },
}

export const NoLinks: Story = {
  args: {
    ctaText: 'Sign Up',
  },
}
