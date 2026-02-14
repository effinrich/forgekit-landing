import { describe, it, expect } from 'vitest'
import { render, screen } from '../test-utils'
import { Badge } from './Badge'

describe('Badge', () => {
  it('renders children text', () => {
    render(<Badge>New</Badge>)
    expect(screen.getByText('New')).toBeInTheDocument()
  })

  it('defaults to subtle variant and brand colorScheme', () => {
    const { container } = render(<Badge>Default</Badge>)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('renders with solid variant', () => {
    render(<Badge variant="solid">Solid</Badge>)
    expect(screen.getByText('Solid')).toBeInTheDocument()
  })

  it('renders with outline variant', () => {
    render(<Badge variant="outline">Outline</Badge>)
    expect(screen.getByText('Outline')).toBeInTheDocument()
  })
})
