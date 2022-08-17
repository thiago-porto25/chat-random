import React from "react"

import { testId } from "@src/test-utils"

import { Loader } from "./styles"

export const Spinner: React.FC = () => {
  return <Loader data-testid={testId.spinner}>Loading...</Loader>
}
