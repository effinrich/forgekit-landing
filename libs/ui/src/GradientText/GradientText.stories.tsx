import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { GradientText } from './GradientText'

const meta: Meta<typeof GradientText> = {
  title: 'Ui/GradientText',
  component: GradientText,
  tags: [],
  argTypes: {
    variant: {
        control: {
            type: "radio",
            options: [
                "primary",
                "accent",
                "rainbow"
            ]
        }
    }
},
  args: {
    variant: "primary"
},
}

export default meta

type Story = StoryObj<typeof GradientText>

/**
 * Default GradientText
 */
export const Default: Story = {
  args: {
    variant: "primary"
},
}

/**
 * All style variants
 */
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <GradientText variant="primary" />
      <GradientText variant="accent" />
      <GradientText variant="rainbow" />
    </div>
  ),
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
