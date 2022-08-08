import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { RegisterForm } from "@src/features/auth/components"

export default {
  title: "Components/Auth/RegisterForm",
  component: RegisterForm,
} as ComponentMeta<typeof RegisterForm>

export const Default: ComponentStory<typeof RegisterForm> = () => (
  <RegisterForm
    onSubmit={() => {
      return
    }}
  />
)
