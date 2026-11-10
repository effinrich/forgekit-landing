import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { Badge } from './Badge'

const meta: Meta<typeof Badge> = {
  title: 'Ui/Badge',
  component: Badge,
  tags: [],
  argTypes: {
    variant: {
        control: {
            type: "radio",
            options: [
                "solid",
                "outline",
                "subtle"
            ]
        }
    },
    colorScheme: {
        control: {
            type: "radio",
            options: [
                "brand",
                "accent",
                "success",
                "slate"
            ]
        }
    }
},
  args: {
    variant: "solid",
    colorScheme: "brand"
},
}

export default meta

type Story = StoryObj<typeof Badge>

/**
 * Default Badge
 */
export const Default: Story = {
  args: {
    variant: "solid",
    colorScheme: "brand"
},
}

/**
 * All style variants
 */
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Badge variant="solid" />
      <Badge variant="outline" />
      <Badge variant="subtle" />
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
