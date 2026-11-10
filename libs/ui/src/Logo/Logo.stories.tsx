import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { Logo } from './Logo'

const meta: Meta<typeof Logo> = {
  title: 'Ui/Logo',
  component: Logo,
  tags: [],
  argTypes: {
    variant: {
        control: {
            type: "radio",
            options: [
                "icon",
                "wordmark"
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
    variant: "icon",
    size: "sm"
},
}

export default meta

type Story = StoryObj<typeof Logo>

/**
 * Default Logo
 */
export const Default: Story = {
  args: {
    variant: "icon",
    size: "sm"
},
}

/**
 * All size variants
 */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Logo size="sm" />
      <Logo size="md" />
      <Logo size="lg" />
    </div>
  ),
}

/**
 * All style variants
 */
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Logo variant="icon" />
      <Logo variant="wordmark" />
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
