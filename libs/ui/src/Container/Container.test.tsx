import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Container } from './Container'

describe('Container', () => {
  it('renders correctly', () => {
    render(<Container>Test Content</Container>)
    
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<Container className="custom-class">Content</Container>)
    
    const element = screen.getByText('Content')
    expect(element).toHaveClass('custom-class')
  })

  it('renders sm size', () => {
    render(<Container size="sm">Content</Container>)
    
    const element = screen.getByText('Content')
    expect(element).toHaveAttribute('data-size', 'sm')
  })

  it('renders md size', () => {
    render(<Container size="md">Content</Container>)
    
    const element = screen.getByText('Content')
    expect(element).toHaveAttribute('data-size', 'md')
  })

  it('renders lg size', () => {
    render(<Container size="lg">Content</Container>)
    
    const element = screen.getByText('Content')
    expect(element).toHaveAttribute('data-size', 'lg')
  })

  it('renders xl size', () => {
    render(<Container size="xl">Content</Container>)
    
    const element = screen.getByText('Content')
    expect(element).toHaveAttribute('data-size', 'xl')
  })

  it('renders full size', () => {
    render(<Container size="full">Content</Container>)
    
    const element = screen.getByText('Content')
    expect(element).toHaveAttribute('data-size', 'full')
  })
})
