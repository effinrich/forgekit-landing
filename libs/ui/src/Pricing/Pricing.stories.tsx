import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { Pricing } from './Pricing'

const meta: Meta<typeof Pricing> = {
  title: 'Ui/Pricing',
  component: Pricing,
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
    }
},
}

export default meta

type Story = StoryObj<typeof Pricing>

/**
 * Default Pricing
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
