import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '../test-utils'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'

describe('Button', () => {
  it('renders children text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument()
  })

  it('calls onClick when clicked', async () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Press</Button>)
    await userEvent.click(screen.getByRole('button', { name: 'Press' }))
    expect(handleClick).toHaveBeenCalledOnce()
  })

  it('renders all three variants without error', () => {
    const { unmount: u1 } = render(<Button variant="solid">A</Button>)
    u1()
    const { unmount: u2 } = render(<Button variant="outline">B</Button>)
    u2()
    render(<Button variant="ghost">C</Button>)
    expect(screen.getByRole('button', { name: 'C' })).toBeInTheDocument()
  })

  it('renders all three sizes without error', () => {
    render(
      <>
        <Button size="sm">S</Button>
        <Button size="md">M</Button>
        <Button size="lg">L</Button>
      </>
    )
    expect(screen.getByRole('button', { name: 'S' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'L' })).toBeInTheDocument()
  })
})
