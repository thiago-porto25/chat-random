import { useEffect, useCallback } from "react"
import { Form } from "react-final-form"
import { Button, Spacer } from "@thiagoporto/minim-ui"

import { testId } from "@src/test-utils"

import { useAppDispatch, useAppSelector } from "@src/shared/hooks"

import type { IAuthFormProps, IRegisterFormValues } from "@features/auth/types"
import { clearAuthError } from "@features/auth/store/auth.slice"
import {
  selectAuthError,
  selectAuthStatus,
} from "@features/auth/store/selectors"
import { validateRegister } from "@features/auth/validators"

import { FormInput } from "@features/auth/components"
import { StyledForm, ButtonContainer } from "./styles"

export const RegisterForm: React.FC<IAuthFormProps> = ({ onSubmit }) => {
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
      onSubmit={({ email, password }) => onSubmit(email, password)}
      initialValues={{ email: "", password: "", confirmPassword: "" }}
      validate={(values: IRegisterFormValues) =>
        validateRegister(values, error)
      }
      render={({ handleSubmit, submitting, errors }) => (
        <StyledForm onSubmit={handleSubmit} data-testid={testId.registerForm}>
          <FormInput
            label="Email"
            name="email"
            placeholder="youremail@example.com"
            type="email"
            data-testid={testId.email}
            onChange={clearErrors}
          />

          <Spacer variant="stack" size="xxxs" />

          <FormInput
            label="Password"
            name="password"
            placeholder="••••••••"
            type="password"
            data-testid={testId.password}
            onChange={clearErrors}
          />

          <Spacer variant="stack" size="xxxs" />

          <FormInput
            label="Confirm Password"
            name="confirmPassword"
            placeholder="••••••••"
            type="password"
            data-testid={testId.confirmPassword}
            onChange={clearErrors}
          />

          <Spacer variant="stack" size="sm" />

          <ButtonContainer>
            <Button
              disabled={
                status === "loading" ||
                submitting ||
                errors?.email ||
                errors?.password ||
                errors?.confirmPassword
              }
              data-testid={testId.registerSubmit}
              type="submit"
              isLoading={status === "loading"}
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
