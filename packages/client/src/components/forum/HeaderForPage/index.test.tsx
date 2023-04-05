import { render } from '@testing-library/react'
import { HeaderForPage } from './index'

describe('HeaderForPage component', () => {
  it('renders the text passed in the `text` prop', () => {
    const text = 'Hello, world!'
    const { getByText } = render(
        <HeaderForPage text={text} />
    )
    const headerText = getByText(text)
    expect(headerText).toBeInTheDocument()
  })

  it('renders a back link when `backPath` is passed', () => {
    const backPath = '/previous-page'
    const { getByText } = render(
        <HeaderForPage text="Page Title" backPath={backPath} />
    )
    const backLink = getByText('Назад')
    expect(backLink).toBeInTheDocument()
    expect(backLink).toHaveAttribute('href', backPath)
  })

  it('does not render a back link when `backPath` is not passed', () => {
    const { queryByText } = render(
        <HeaderForPage text="Page Title" />
    )
    const backLink = queryByText('Назад')
    expect(backLink).toBeInTheDocument()
    expect(backLink).toHaveAttribute('href', '/')
  })
})