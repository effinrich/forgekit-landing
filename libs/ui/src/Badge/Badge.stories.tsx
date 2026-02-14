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
    colorPalette: 'brand',
  },
}

export const Solid: Story = {
  args: {
    children: 'Solid',
    variant: 'solid',
    colorPalette: 'brand',
  },
}

export const Outline: Story = {
  args: {
    children: 'Outline',
    variant: 'outline',
    colorPalette: 'accent',
  },
}

export const AllcolorPalettes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      <Badge colorPalette="brand">Brand</Badge>
      <Badge colorPalette="accent">Accent</Badge>
      <Badge colorPalette="success">Success</Badge>
      <Badge colorPalette="slate">Slate</Badge>
    </div>
  ),
}
