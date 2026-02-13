import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { CTA } from './CTA'

const meta: Meta<typeof CTA> = {
  title: 'Ui/CTA',
  component: CTA,
  tags: ['autodocs'],
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
  args: {
    children: 'Click me',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const element = canvas.getByText(/click me/i)
    
    // Verify element renders
    await expect(element).toBeInTheDocument()
    
    // Test interaction
    await userEvent.click(element)
  },
}
