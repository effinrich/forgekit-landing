import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ChakraProvider } from '@chakra-ui/react'
import { Hero } from './Hero'

// If you have a custom theme, import and pass it: <ChakraProvider theme={theme}>

describe('Hero', () => {
  it('renders correctly', () => {
    render(<ChakraProvider><Hero headline="Test headline" highlightedText="Test highlightedText" description="Test description" primaryCta="Test primaryCta" /></ChakraProvider>)
    
    expect(document.querySelector('[class]')).not.toBeNull()
  })

  it('calls onPrimaryClick when primaryclicked', async () => {
    const user = userEvent.setup()
    const handleEvent = vi.fn()

    const { container } = render(<ChakraProvider><Hero headline="Test headline" highlightedText="Test highlightedText" description="Test description" primaryCta="Test primaryCta" onPrimaryClick={handleEvent} /></ChakraProvider>)

    // Find the root element (first child of container)
    const element = container.firstChild as HTMLElement
    if (element) {
      await user.type(element, 'test')
      expect(handleEvent).toHaveBeenCalled()
    }
  })

  it('calls onSecondaryClick when secondaryclicked', async () => {
    const user = userEvent.setup()
    const handleEvent = vi.fn()

    const { container } = render(<ChakraProvider><Hero headline="Test headline" highlightedText="Test highlightedText" description="Test description" primaryCta="Test primaryCta" onSecondaryClick={handleEvent} /></ChakraProvider>)

    // Find the root element (first child of container)
    const element = container.firstChild as HTMLElement
    if (element) {
      await user.type(element, 'test')
      expect(handleEvent).toHaveBeenCalled()
    }
  })
})
