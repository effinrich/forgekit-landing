import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ChakraProvider } from '@chakra-ui/react'

import { Footer } from './Footer'

// If you have a custom theme, import and pass it: <ChakraProvider theme={theme}>

describe('Footer', () => {
  it('renders correctly', () => {
    render(<ChakraProvider><Footer logo="test" columns={[{ title: "Test title", links: [{ href: "Test href", label: "Test label" }] }]} /></ChakraProvider>)
    
    expect(document.querySelector('[class]')).not.toBeNull()
  })
})
