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
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Badge variant="solid">solid</Badge>
      <Badge variant="outline">outline</Badge>
      <Badge variant="subtle">subtle</Badge>
    </div>
  ),
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
