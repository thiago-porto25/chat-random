import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { LoginForm } from "@src/features/auth/components"

export default {
  title: "Components/Auth/LoginForm",
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>

export const Default: ComponentStory<typeof LoginForm> = () => (
  <LoginForm
    onSubmit={() => {
      return
    }}
    openForgotPassword={() => {
      return
    }}
  />
)
