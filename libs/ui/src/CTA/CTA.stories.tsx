import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { CTA } from './CTA'

const meta: Meta<typeof CTA> = {
  title: 'Ui/CTA',
  component: CTA,
  tags: [],
  argTypes: {
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

type Story = StoryObj<typeof CTA>

/**
 * Default CTA
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
