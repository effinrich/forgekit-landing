import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { Container } from './Container'

// If you have a custom theme, import and pass it: <ChakraProvider theme={theme}>

describe('Container', () => {
  it('renders correctly', () => {
    render(<ChakraProvider value={defaultSystem}><Container /></ChakraProvider>)
    
    expect(document.querySelector('[class]')).not.toBeNull()
  })
  
  it('renders sm size', () => {
    render(<ChakraProvider value={defaultSystem}><Container size="sm" /></ChakraProvider>)
    
    // Size "sm" renders without error
  })

  it('renders md size', () => {
    render(<ChakraProvider value={defaultSystem}><Container size="md" /></ChakraProvider>)
    
    // Size "md" renders without error
  })

  it('renders lg size', () => {
    render(<ChakraProvider value={defaultSystem}><Container size="lg" /></ChakraProvider>)
    
    // Size "lg" renders without error
  })

  it('renders xl size', () => {
    render(<ChakraProvider value={defaultSystem}><Container size="xl" /></ChakraProvider>)
    
    // Size "xl" renders without error
  })

  it('renders full size', () => {
    render(<ChakraProvider value={defaultSystem}><Container size="full" /></ChakraProvider>)
    
    // Size "full" renders without error
  })
})
