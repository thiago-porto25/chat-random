import React from "react"
import { Button, Logo, Typography, Spacer } from "@thiagoporto/minim-ui"

import { IErrorBoundaryProps, IErrorBoundaryState } from "@src/shared/types"

import { ErrorBoundaryContainer } from "./styles"

export class ErrorBoundary extends React.Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: unknown) {
    return { hasError: !!error }
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorBoundaryContainer>
          <Logo size={{ sm: "xxl", md: "xxl", lg: "uul" }} />

          <Spacer variant="stack" size={{ sm: "md", md: "md", lg: "sm" }} />

          <Typography textStyle="heading1" as="h1">
            Oops... something went wrong!
          </Typography>

          <Spacer variant="stack" size={{ sm: "xxxs", md: "xxxs", lg: "nn" }} />

          <Typography textStyle="subHeading1" as="p">
            We have encountered an internal error and we are sorry for the
            inconvenience.
          </Typography>

          <Spacer variant="stack" size={{ sm: "md", md: "md", lg: "sm" }} />

          <Button variant="secondary" onClick={() => location.reload()}>
            Reload Page
          </Button>
        </ErrorBoundaryContainer>
      )
    }

    return this.props.children
  }
}
