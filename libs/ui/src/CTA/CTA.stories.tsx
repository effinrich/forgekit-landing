import type { Meta, StoryObj } from '@storybook/react'
import { CTA } from './CTA'

const meta: Meta<typeof CTA> = {
  title: 'Ui/CTA',
  component: CTA,
  tags: [],
}

export default meta
type Story = StoryObj<typeof CTA>

export const Default: Story = {
  args: {
    headline: 'Ready to get started?',
    description: 'Start building better components today.',
    primaryCta: 'Get Started',
  },
}

export const WithHighlight: Story = {
  args: {
    headline: 'Ready to get started?',
    highlightedText: 'started',
    description: 'Start building better components today.',
    primaryCta: 'Get Started',
    secondaryCta: 'Learn More',
  },
}

export const WithSecondaryCta: Story = {
  args: {
    headline: 'Ship faster with ForgeKit',
    description: 'Automate your Storybook workflow.',
    primaryCta: 'Buy Now',
    secondaryCta: 'View Docs',
  },
}
