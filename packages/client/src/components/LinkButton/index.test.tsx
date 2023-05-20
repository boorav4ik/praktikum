import { LinkButton } from './index'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

describe('LinkButton', () => {
  it('should render a link with the given text', () => {
    const text = 'Click me!'
    const { getByText } = render(
      <BrowserRouter>
        <LinkButton to='/'>{text}</LinkButton>
      </BrowserRouter>
    )
    expect(getByText(text)).toBeInTheDocument()
  })

  it('should render a link with the given variant', () => {
    const { getByRole } = render(
      <BrowserRouter>
        <LinkButton to='/' variant='outlined' />
      </BrowserRouter>)

    expect(getByRole('link')).toHaveClass('MuiButton-outlined')
  })

  it('should render a link with the given style', () => {
    const { getByRole } = render(
      <BrowserRouter>
        <LinkButton to='/' sx={{ backgroundColor: 'red' }} />
      </BrowserRouter>
    )
    expect(getByRole('link')).toHaveStyle('background-color: red')
  })

})