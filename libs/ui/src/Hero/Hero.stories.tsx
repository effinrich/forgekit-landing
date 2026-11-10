import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { Hero } from './Hero'

const meta: Meta<typeof Hero> = {
  title: 'Ui/Hero',
  component: Hero,
  tags: [],
  argTypes: {
    badge: {
        control: "text"
    },
    headline: {
        control: "text"
    },
    highlightedText: {
        control: "text"
    },
    description: {
        control: "text"
    },
    primaryCta: {
        control: "text"
    },
    secondaryCta: {
        control: "text"
    }
},
}

export default meta

type Story = StoryObj<typeof Hero>

/**
 * Default Hero
 */
export const Default: Story = {
}

/**
 * Interactive test
 */
export const Interactive: Story = {
  play: async ({ canvasElement }) => {
    // Verify component renders
    await expect(canvasElement.firstElementChild).toBeInTheDocument()
  },
}
