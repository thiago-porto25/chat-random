import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Card } from "@src/features/landing/components"

export default {
  title: "Components/Landing/Card",
  component: Card,
} as ComponentMeta<typeof Card>

const mockFn = () => {
  return
}

export const Default: ComponentStory<typeof Card> = () => (
  <Card openLoginModal={mockFn} openRegisterModal={mockFn} />
)
