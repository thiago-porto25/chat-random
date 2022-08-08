import { Form } from "react-final-form"
import { Button, Spacer } from "@thiagoporto/minim-ui"

import { testId } from "@src/test-utils"

import type { IFormProps } from "@features/auth/types"
import { validateRegister } from "@features/auth/validators"
import { FormInput } from "@features/auth/components"

import { StyledForm, ButtonContainer } from "./styles"

export const RegisterForm: React.FC<IFormProps> = ({ onSubmit }) => {
  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{ email: "", password: "", confirmPassword: "" }}
      validate={validateRegister}
      render={({ handleSubmit, submitting, errors }) => (
        <StyledForm onSubmit={handleSubmit} data-testid={testId.registerForm}>
          <FormInput
            label="Email"
            name="email"
            placeholder="youremail@example.com"
            type="email"
            data-testid={testId.email}
          />

          <Spacer variant="stack" size="xxxs" />

          <FormInput
            label="Password"
            name="password"
            placeholder="••••••••"
            type="password"
            data-testid={testId.password}
          />

          <Spacer variant="stack" size="xxxs" />

          <FormInput
            label="Confirm Password"
            name="confirmPassword"
            placeholder="••••••••"
            type="password"
            data-testid={testId.confirmPassword}
          />

          <Spacer variant="stack" size="sm" />

          <ButtonContainer>
            <Button
              disabled={
                submitting ||
                errors?.email ||
                errors?.password ||
                errors?.confirmPassword
              }
              data-testid={testId.registerSubmit}
              type="submit"
            >
              Submit
            </Button>
          </ButtonContainer>

          <Spacer variant="stack" size="sm" />
        </StyledForm>
      )}
    />
  )
}
