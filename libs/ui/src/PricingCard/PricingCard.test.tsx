import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ChakraProvider } from '@chakra-ui/react'

import { PricingCard } from './PricingCard'

// If you have a custom theme, import and pass it: <ChakraProvider theme={theme}>

describe('PricingCard', () => {
  it('renders correctly', () => {
    render(<ChakraProvider><PricingCard name="Test name" description="Test description" price="$100" features={["Test feature"]} /></ChakraProvider>)
    
    expect(document.querySelector('[class]')).not.toBeNull()
  })

  it('calls onCtaClick when ctaclicked', async () => {
    const user = userEvent.setup()
    const handleEvent = vi.fn()

    const { container } = render(<ChakraProvider><PricingCard name="Test name" description="Test description" price="$100" features={["Test feature"]} onCtaClick={handleEvent} /></ChakraProvider>)

    // Find the root element (first child of container)
    const element = container.firstChild as HTMLElement
    if (element) {
      await user.type(element, 'test')
      expect(handleEvent).toHaveBeenCalled()
    }
  })
})
