import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './Badge'

const meta: Meta<typeof Badge> = {
  title: 'Ui/Badge',
  component: Badge,
  tags: [],
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {
  args: {
    children: 'Badge',
    variant: 'subtle',
    colorScheme: 'brand',
  },
}

export const Solid: Story = {
  args: {
    children: 'Solid',
    variant: 'solid',
    colorScheme: 'brand',
  },
}

export const Outline: Story = {
  args: {
    children: 'Outline',
    variant: 'outline',
    colorScheme: 'accent',
  },
}

export const AllColorSchemes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      <Badge colorScheme="brand">Brand</Badge>
      <Badge colorScheme="accent">Accent</Badge>
      <Badge colorScheme="success">Success</Badge>
      <Badge colorScheme="slate">Slate</Badge>
    </div>
  ),
}
