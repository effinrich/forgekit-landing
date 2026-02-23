import type { Meta, StoryObj } from '@storybook/react'
import { GradientText } from './GradientText'

const meta: Meta<typeof GradientText> = {
  title: 'Ui/GradientText',
  component: GradientText,
  tags: [],
}

export default meta
type Story = StoryObj<typeof GradientText>

export const Primary: Story = {
  args: {
    children: 'Primary Gradient',
    variant: 'primary',
  },
}

export const Accent: Story = {
  args: {
    children: 'Accent Gradient',
    variant: 'accent',
  },
}

export const Rainbow: Story = {
  args: {
    children: 'Rainbow Gradient',
    variant: 'rainbow',
  },
}
