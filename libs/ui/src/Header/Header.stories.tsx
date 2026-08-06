import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { Header } from './Header'

const meta: Meta<typeof Header> = {
  title: 'Ui/Header',
  component: Header,
  tags: [],
}

export default meta

type Story = StoryObj<typeof Header>

/**
 * Default Header
 */
export const Default: Story = {
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
