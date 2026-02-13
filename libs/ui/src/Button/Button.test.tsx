import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Test Content</Button>)
    
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<Button className="custom-class">Content</Button>)
    
    const element = screen.getByText('Content')
    expect(element).toHaveClass('custom-class')
  })

  it('renders solid variant', () => {
    render(<Button variant="solid">Content</Button>)
    
    const element = screen.getByText('Content')
    expect(element).toHaveAttribute('data-variant', 'solid')
  })

  it('renders outline variant', () => {
    render(<Button variant="outline">Content</Button>)
    
    const element = screen.getByText('Content')
    expect(element).toHaveAttribute('data-variant', 'outline')
  })

  it('renders ghost variant', () => {
    render(<Button variant="ghost">Content</Button>)
    
    const element = screen.getByText('Content')
    expect(element).toHaveAttribute('data-variant', 'ghost')
  })

  it('renders sm size', () => {
    render(<Button size="sm">Content</Button>)
    
    const element = screen.getByText('Content')
    expect(element).toHaveAttribute('data-size', 'sm')
  })

  it('renders md size', () => {
    render(<Button size="md">Content</Button>)
    
    const element = screen.getByText('Content')
    expect(element).toHaveAttribute('data-size', 'md')
  })

  it('renders lg size', () => {
    render(<Button size="lg">Content</Button>)
    
    const element = screen.getByText('Content')
    expect(element).toHaveAttribute('data-size', 'lg')
  })
})
