import type { Meta, StoryObj } from '@storybook/react'
import { Heading, VStack } from '@chakra-ui/react'
import { GradientText } from './GradientText'

const meta: Meta<typeof GradientText> = {
  title: 'Components/GradientText',
  component: GradientText,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof GradientText>

export const Primary: Story = {
  args: {
    children: 'Gradient Text',
    variant: 'primary',
    fontSize: '4xl',
    fontWeight: 'bold',
  },
}

export const Accent: Story = {
  args: {
    children: 'Accent Gradient',
    variant: 'accent',
    fontSize: '4xl',
    fontWeight: 'bold',
  },
}

export const Rainbow: Story = {
  args: {
    children: 'Rainbow Effect',
    variant: 'rainbow',
    fontSize: '4xl',
    fontWeight: 'bold',
  },
}

export const InHeadline: Story = {
  render: () => (
    <VStack spacing={4} align="start">
      <Heading size="2xl">
        Build <GradientText variant="primary">production-ready</GradientText> apps
      </Heading>
      <Heading size="xl">
        Ship <GradientText variant="accent">faster</GradientText> than ever
      </Heading>
      <Heading size="lg">
        The <GradientText variant="rainbow">complete</GradientText> solution
      </Heading>
    </VStack>
  ),
}
