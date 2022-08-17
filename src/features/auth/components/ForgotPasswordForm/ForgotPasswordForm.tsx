import { useEffect, useCallback } from "react"
import { Form } from "react-final-form"
import { Button, Spacer } from "@thiagoporto/minim-ui"

import { testId } from "@src/test-utils"

import { useAppDispatch, useAppSelector } from "@src/shared/hooks"
import { Spinner } from "@src/shared/components"

import type {
  IForgotPasswordFormValues,
  IResetFormProps,
} from "@features/auth/types"
import {
  clearAuthError,
  selectAuthError,
  selectAuthStatus,
} from "@features/auth/store/auth.slice"
import { validateForgotPassword } from "@features/auth/validators"
import { FormInput } from "@features/auth/components"

import { StyledForm, ButtonContainer } from "./styles"

export const ForgotPasswordForm: React.FC<IResetFormProps> = ({ onSubmit }) => {
  const dispatch = useAppDispatch()
  const error = useAppSelector(selectAuthError)
  const status = useAppSelector(selectAuthStatus)

  const clearErrors = useCallback(() => {
    if (error) dispatch(clearAuthError())
  }, [error, dispatch])

  useEffect(() => {
    return () => {
      dispatch(clearAuthError())
    }
  }, [dispatch])

  return (
    <Form
      onSubmit={({ email }) => onSubmit(email)}
      initialValues={{ email: "" }}
      validate={(values: IForgotPasswordFormValues) =>
        validateForgotPassword(values, error)
      }
      render={({ handleSubmit, submitting, errors }) => (
        <StyledForm onSubmit={handleSubmit} data-testid={testId.resetForm}>
          <FormInput
            label="Email"
            name="email"
            placeholder="youremail@example.com"
            type="email"
            data-testid={testId.email}
            onChange={clearErrors}
          />

          <Spacer variant="stack" size="sm" />

          <ButtonContainer>
            <Button
              disabled={status === "loading" || submitting || errors?.email}
              data-testid={testId.resetSubmit}
              type="submit"
            >
              {status === "loading" ? <Spinner /> : "Send"}
            </Button>
          </ButtonContainer>

          <Spacer variant="stack" size="md" />
        </StyledForm>
      )}
    />
  )
}
