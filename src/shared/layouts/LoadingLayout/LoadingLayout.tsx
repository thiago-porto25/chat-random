import React from "react"
import { Loading } from "@thiagoporto/minim-ui"

import { testId } from "@src/test-utils"

import { Container } from "./styles"

export const LoadingLayout: React.FC = () => {
  return (
    <Container aria-label="Loading..." data-testid={testId.loadingLayout}>
      <Loading />
      loading...
    </Container>
  )
}
