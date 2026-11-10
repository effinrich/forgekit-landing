import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { Container } from './Container'

const meta: Meta<typeof Container> = {
  title: 'Ui/Container',
  component: Container,
  tags: [],
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
      <Container size="sm" />
      <Container size="md" />
      <Container size="lg" />
      <Container size="xl" />
      <Container size="full" />
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
