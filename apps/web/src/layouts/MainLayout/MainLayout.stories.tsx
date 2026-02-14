import type { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import { MainLayout } from './MainLayout'

const meta: Meta<typeof MainLayout> = {
  title: "Layouts/MainLayout",
  component: MainLayout,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
}

export default meta
type Story = StoryObj<typeof MainLayout>

export const Default: Story = {}
