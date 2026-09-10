import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { Footer } from './Footer'

const meta: Meta<typeof Footer> = {
  title: 'Ui/Footer',
  component: Footer,
  tags: [],
  argTypes: {
    tagline: {
        control: "text"
    },
    href: {
        control: "text"
    },
    label: {
        control: "text"
    }
},
  args: {
    label: "Label"
},
}

export default meta

type Story = StoryObj<typeof Footer>

/**
 * Default Footer
 */
export const Default: Story = {
  args: {
    label: "Label"
},
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
