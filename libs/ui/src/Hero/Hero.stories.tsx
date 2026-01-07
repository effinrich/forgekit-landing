import type { Meta, StoryObj } from '@storybook/react'
import { Hero } from './Hero'

const meta: Meta<typeof Hero> = {
  title: 'Sections/Hero',
  component: Hero,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof Hero>

export const Default: Story = {
  args: {
    badge: 'Now in Public Beta',
    headline: 'From Figma to production-ready React',
    highlightedText: 'production-ready',
    description:
      'Stop recreating designs by hand. Forgekit transforms your Figma components into tested, documented, deployable React applications in minutes.',
    primaryCta: 'Start Free Trial',
    secondaryCta: 'Watch Demo',
  },
}

export const NoBadge: Story = {
  args: {
    headline: 'Build faster with Forgekit',
    highlightedText: 'faster',
    description: 'The fastest way to go from design to production.',
    primaryCta: 'Get Started',
  },
}

export const SingleCTA: Story = {
  args: {
    badge: 'New',
    headline: 'Ship your next project today',
    highlightedText: 'today',
    description: 'Everything you need to build production-ready applications.',
    primaryCta: 'Start Building',
  },
}
