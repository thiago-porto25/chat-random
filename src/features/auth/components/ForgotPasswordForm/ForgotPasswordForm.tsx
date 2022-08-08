import { Form } from "react-final-form"
import { Button, Spacer } from "@thiagoporto/minim-ui"

import { testId } from "@src/test-utils"

import type { IFormProps } from "@features/auth/types"
import { validateForgotPassword } from "@features/auth/validators"
import { FormInput } from "@features/auth/components"

import { StyledForm, ButtonContainer } from "./styles"

export const ForgotPasswordForm: React.FC<IFormProps> = ({ onSubmit }) => {
  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{ email: "" }}
      validate={validateForgotPassword}
      render={({ handleSubmit, submitting, errors }) => (
        <StyledForm onSubmit={handleSubmit} data-testid={testId.resetForm}>
          <FormInput
            label="Email"
            name="email"
            placeholder="youremail@example.com"
            type="email"
            data-testid={testId.email}
          />

          <Spacer variant="stack" size="sm" />

          <ButtonContainer>
            <Button
              disabled={submitting || errors?.email}
              data-testid={testId.resetSubmit}
              type="submit"
            >
              Send
            </Button>
          </ButtonContainer>
        </StyledForm>
      )}
    />
  )
}
