import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import { ChakraProvider } from '@chakra-ui/react'
import { Features } from './Features'

// If you have a custom theme, import and pass it: <ChakraProvider theme={theme}>
      
describe('Features', () => {
  it('renders correctly', () => {
    render(<ChakraProvider><Features headline="Test headline" features={[{ icon: "test-<Icon></Icon>", title: "Test title", description: "Test description" }]} /></ChakraProvider>)
    
    expect(document.querySelector('[class]')).not.toBeNull()
  })
})
