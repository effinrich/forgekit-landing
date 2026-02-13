import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Ui/Button',
  component: Button,
  tags: ['autodocs'],
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
      <Button size="sm">sm</${analysis.name}>
      <Button size="md">md</${analysis.name}>
      <Button size="lg">lg</${analysis.name}>
    </div>
  ),
}

/**
 * All style variants
 */
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button variant="solid">solid</${analysis.name}>
      <Button variant="outline">outline</${analysis.name}>
      <Button variant="ghost">ghost</${analysis.name}>
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
