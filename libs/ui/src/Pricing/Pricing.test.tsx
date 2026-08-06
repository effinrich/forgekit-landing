import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import { ChakraProvider } from '@chakra-ui/react'
import { Pricing } from './Pricing'

// If you have a custom theme, import and pass it: <ChakraProvider theme={theme}>

describe('Pricing', () => {
  it('renders correctly', () => {
    render(<ChakraProvider><Pricing headline="Test headline" plans={[{ name: "Test name", description: "Test description", features: ["Test feature"], monthlyPrice: "$100", annualPrice: "$100" }]} /></ChakraProvider>)
    
    expect(document.querySelector('[class]')).not.toBeNull()
  })
})
