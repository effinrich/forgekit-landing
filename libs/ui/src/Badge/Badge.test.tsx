import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Badge } from './Badge'

describe('Badge', () => {
  it('renders correctly', () => {
    render(<Badge>Test Content</Badge>)
    
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<Badge className="custom-class">Content</Badge>)
    
    const element = screen.getByText('Content')
    expect(element).toHaveClass('custom-class')
  })

  it('renders solid variant', () => {
    render(<Badge variant="solid">Content</Badge>)
    
    const element = screen.getByText('Content')
    expect(element).toHaveAttribute('data-variant', 'solid')
  })

  it('renders outline variant', () => {
    render(<Badge variant="outline">Content</Badge>)
    
    const element = screen.getByText('Content')
    expect(element).toHaveAttribute('data-variant', 'outline')
  })

  it('renders subtle variant', () => {
    render(<Badge variant="subtle">Content</Badge>)
    
    const element = screen.getByText('Content')
    expect(element).toHaveAttribute('data-variant', 'subtle')
  })
})
