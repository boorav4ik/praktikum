import React, { Component } from 'react'
import { ErrorPage } from '../../pages/Error'

interface ErrorBoundaryProps {
  children: any
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends Component<
  React.PropsWithChildren<ErrorBoundaryProps>,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      const notFoundError = {
        message: 'Упс. Мы работаем над исправлением ошибки.',
      }

      return <ErrorPage error={notFoundError} />
    }

    return this.props.children
  }
}

export default ErrorBoundary
