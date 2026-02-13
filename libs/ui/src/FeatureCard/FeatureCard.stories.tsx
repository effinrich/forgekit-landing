import type { Meta, StoryObj } from "@storybook/react"
import { expect, userEvent, within } from "storybook/test"
import { FeatureCard } from "./FeatureCard"

const meta: Meta<typeof FeatureCard> = {
  title: "Ui/FeatureCard",
  component: FeatureCard,
  tags: [],
  argTypes: {
    title: {
      control: "text",
    },
    description: {
      control: "text",
    },
    accentColor: {
      control: "text",
    },
  },
}

export default meta

type Story = StoryObj<typeof FeatureCard>

/**
 * Default FeatureCard
 */
export const Default: Story = {}

/**
 * Interactive test
 */
export const Interactive: Story = {
  args: {
    title: "Click me",
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
