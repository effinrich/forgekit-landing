import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Ui/Button',
  component: Button,
  tags: [],
  argTypes: {
    variant: {
        control: {
            type: "radio",
            options: [
                "solid",
                "outline",
                "ghost"
            ]
        }
    },
    size: {
        control: {
            type: "radio",
            options: [
                "sm",
                "md",
                "lg"
            ]
        }
    }
},
  args: {
    variant: "solid",
    size: "sm"
},
}

export default meta

type Story = StoryObj<typeof Button>

/**
 * Default Button
 */
export const Default: Story = {
  args: {
    variant: "solid",
    size: "sm"
},
}

/**
 * All size variants
 */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button size="sm" />
      <Button size="md" />
      <Button size="lg" />
    </div>
  ),
}

/**
 * All style variants
 */
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button variant="solid" />
      <Button variant="outline" />
      <Button variant="ghost" />
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
