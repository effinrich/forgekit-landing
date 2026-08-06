import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { PricingCard } from './PricingCard'

const meta: Meta<typeof PricingCard> = {
  title: 'Ui/PricingCard',
  component: PricingCard,
  tags: [],
  argTypes: {
    name: {
        control: "text"
    },
    description: {
        control: "text"
    },
    price: {
        control: "text"
    },
    period: {
        control: "text"
    },
    ctaText: {
        control: "text"
    },
    isPopular: {
        control: "boolean"
    }
},
  args: {
    name: "Name",
    isPopular: false
},
}

export default meta

type Story = StoryObj<typeof PricingCard>

/**
 * Default PricingCard
 */
export const Default: Story = {
  args: {
    name: "Name",
    isPopular: false
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
