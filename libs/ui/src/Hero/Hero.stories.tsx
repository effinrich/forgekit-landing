import type { Meta, StoryObj } from '@storybook/react'
import { Hero } from './Hero'

const meta: Meta<typeof Hero> = {
  title: 'Ui/Hero',
  component: Hero,
  tags: [],
}

export default meta
type Story = StoryObj<typeof Hero>

export const Default: Story = {
  args: {
    headline: 'Automate your Storybook workflow',
    highlightedText: 'Storybook',
    description: 'Generate stories, tests, and docs from your React components.',
    primaryCta: 'Get Started Free',
  },
}

export const WithBadgeAndSecondaryCta: Story = {
  args: {
    badge: 'New in v0.8',
    headline: 'Automate your Storybook workflow',
    highlightedText: 'Storybook',
    description: 'Generate stories, tests, and docs from your React components.',
    primaryCta: 'Get Started Free',
    secondaryCta: 'Watch Demo',
  },
}
