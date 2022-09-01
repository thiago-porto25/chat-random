import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { ErrorBoundary } from "@src/shared/components/ErrorBoundary/ErrorBoundary"

export default {
  title: "Components/shared/ErrorBoundary",
  component: ErrorBoundary,
} as ComponentMeta<typeof ErrorBoundary>

const Child = () => {
  throw new Error()
}

export const Default: ComponentStory<typeof ErrorBoundary> = () => (
  <ErrorBoundary>
    <Child />
  </ErrorBoundary>
)
