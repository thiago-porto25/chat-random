import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { ForgotPasswordForm } from "@src/features/auth/components"

export default {
  title: "Components/Auth/ForgotPasswordForm",
  component: ForgotPasswordForm,
} as ComponentMeta<typeof ForgotPasswordForm>

export const Default: ComponentStory<typeof ForgotPasswordForm> = () => (
  <ForgotPasswordForm
    onSubmit={() => {
      return
    }}
  />
)
