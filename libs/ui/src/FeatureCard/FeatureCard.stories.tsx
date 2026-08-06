import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { FeatureCard } from './FeatureCard'

const meta: Meta<typeof FeatureCard> = {
  title: 'Ui/FeatureCard',
  component: FeatureCard,
  tags: [],
  argTypes: {
    title: {
        control: "text"
    },
    description: {
        control: "text"
    },
    accentColor: {
        control: "text"
    }
},
  args: {
    title: "Title"
},
}

export default meta

type Story = StoryObj<typeof FeatureCard>

/**
 * Default FeatureCard
 */
export const Default: Story = {
  args: {
    title: "Title"
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
