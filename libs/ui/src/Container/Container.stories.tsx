import type { Meta, StoryObj } from '@storybook/react'
import { Container } from './Container'

const meta: Meta<typeof Container> = {
  title: 'Ui/Container',
  component: Container,
  tags: [],
}

export default meta
type Story = StoryObj<typeof Container>

export const Default: Story = {
  args: {
    children: 'Default container (xl)',
    size: 'xl',
  },
}

export const Small: Story = {
  args: {
    children: 'Small container (640px max)',
    size: 'sm',
  },
}

export const Full: Story = {
  args: {
    children: 'Full-width container',
    size: 'full',
  },
}
