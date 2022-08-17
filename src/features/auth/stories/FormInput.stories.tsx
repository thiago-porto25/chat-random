import React from "react"
import { Form } from "react-final-form"
import { ComponentMeta, ComponentStory } from "@storybook/react"

import { FormInput } from "@src/features/auth/components"
import { validateForgotPassword } from "@src/features/auth/validators"

export default {
  title: "Components/Auth/FormInput",
  component: FormInput,
} as ComponentMeta<typeof FormInput>

const Template: ComponentStory<typeof FormInput> = (args) => (
  <Form
    onSubmit={() => {
      return
    }}
    validate={(values: { email: string }) => validateForgotPassword(values, "")}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit} style={{ maxWidth: "600px" }}>
        <FormInput {...args} />
      </form>
    )}
  />
)

export const Email: ComponentStory<typeof FormInput> = Template.bind({})
Email.args = {
  name: "email",
  label: "Email",
  type: "email",
  placeholder: "example@email.com",
}
