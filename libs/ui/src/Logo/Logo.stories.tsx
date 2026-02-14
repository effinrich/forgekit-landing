import type { Meta, StoryObj } from '@storybook/react'
import { Logo } from './Logo'

const meta: Meta<typeof Logo> = {
  title: 'Ui/Logo',
  component: Logo,
  tags: [],
  parameters: {
    backgrounds: { default: 'dark' },
  },
}

export default meta
type Story = StoryObj<typeof Logo>

export const Wordmark: Story = {
  args: {
    variant: 'wordmark',
    size: 'md',
    colorScheme: 'dark',
  },
}

export const Icon: Story = {
  args: {
    variant: 'icon',
    size: 'md',
    colorScheme: 'dark',
  },
}

export const Large: Story = {
  args: {
    variant: 'wordmark',
    size: 'lg',
    colorScheme: 'dark',
  },
}

export const LightBackground: Story = {
  args: {
    variant: 'wordmark',
    size: 'md',
    colorScheme: 'light',
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
}
