import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { Container } from './Container'

const meta: Meta<typeof Container> = {
  title: 'Ui/Container',
  component: Container,
  tags: ['autodocs'],
  argTypes: {
    size: {
        control: {
            type: "select",
            options: [
                "sm",
                "md",
                "lg",
                "xl",
                "full"
            ]
        }
    }
},
  args: {
    size: "sm"
},
}

export default meta

type Story = StoryObj<typeof Container>

/**
 * Default Container
 */
export const Default: Story = {
  args: {
    size: "sm"
},
}

/**
 * All size variants
 */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Container size="sm">sm</Container>
      <Container size="md">md</Container>
      <Container size="lg">lg</Container>
      <Container size="xl">xl</Container>
      <Container size="full">full</Container>
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
