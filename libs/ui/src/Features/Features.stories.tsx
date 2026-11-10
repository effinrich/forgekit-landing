import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { Features } from './Features'

const meta: Meta<typeof Features> = {
  title: 'Ui/Features',
  component: Features,
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

type Story = StoryObj<typeof Features>

/**
 * Default Features
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
