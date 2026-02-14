import type { Meta, StoryObj } from '@storybook/react'
import { Footer } from './Footer'

const sampleColumns = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'GitHub', href: 'https://github.com' },
      { label: 'npm', href: 'https://npmjs.com' },
    ],
  },
]

const meta: Meta<typeof Footer> = {
  title: 'Ui/Footer',
  component: Footer,
  tags: [],
}

export default meta
type Story = StoryObj<typeof Footer>

export const Default: Story = {
  args: {
    logo: 'ForgeKit',
    tagline: 'Automate your Storybook workflow.',
    columns: sampleColumns,
  },
}

export const WithSocialLinks: Story = {
  args: {
    logo: 'ForgeKit',
    tagline: 'Automate your Storybook workflow.',
    columns: sampleColumns,
    socialLinks: [
      { icon: <span>𝕏</span>, href: 'https://twitter.com', label: 'Twitter' },
      { icon: <span>GH</span>, href: 'https://github.com', label: 'GitHub' },
    ],
    copyright: '© 2026 ForgeKit. All rights reserved.',
  },
}
