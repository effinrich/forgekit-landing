import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import { ChakraProvider } from '@chakra-ui/react'
import { Button } from './Button'

// If you have a custom theme, import and pass it: <ChakraProvider theme={theme}>

describe('Button', () => {
  it('renders correctly', () => {
    render(<ChakraProvider><Button /></ChakraProvider>)
    
    expect(document.querySelector('[class]')).not.toBeNull()
  })

  it('renders solid variant', () => {
    render(<ChakraProvider><Button variant="solid" /></ChakraProvider>)
    
    // Variant "solid" renders without error
  })

  it('renders outline variant', () => {
    render(<ChakraProvider><Button variant="outline" /></ChakraProvider>)
    
    // Variant "outline" renders without error
  })

  it('renders ghost variant', () => {
    render(<ChakraProvider><Button variant="ghost" /></ChakraProvider>)
    
    // Variant "ghost" renders without error
  })

  it('renders sm size', () => {
    render(<ChakraProvider><Button size="sm" /></ChakraProvider>)
    
    // Size "sm" renders without error
  })

  it('renders md size', () => {
    render(<ChakraProvider><Button size="md" /></ChakraProvider>)
    
    // Size "md" renders without error
  })

  it('renders lg size', () => {
    render(<ChakraProvider><Button size="lg" /></ChakraProvider>)
    
    // Size "lg" renders without error
  })
})
