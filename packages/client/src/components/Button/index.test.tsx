import { Button } from './index'
import { render } from '@testing-library/react'

describe('Button component', () => {
  it('render ', () => {
    const { getByRole } = render(<Button />)
    const btn = getByRole('button')

    expect(btn).toBeInTheDocument()
  })

  it('applies props to component', () => {
    const { getByRole } = render(<Button disabled={true} />)
    const btn = getByRole('button')

    expect(btn).toHaveAttribute('disabled')
  })

  it('should render a button with the given variant', () => {
    const { getByRole } = render(<Button variant='outlined' />)
    expect(getByRole('button')).toHaveClass('MuiButton-outlined')
  })

  it('should render a button with the given style', () => {
    const { getByRole } = render(<Button sx={{ backgroundColor: 'red' }} />)
    expect(getByRole('button')).toHaveStyle('background-color: red')
  })

})