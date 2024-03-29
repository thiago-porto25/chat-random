import { IAuthState, IForgotPasswordFormValues } from "@features/auth/types"
import { mockInfo } from "@src/test-utils"

export const validateForgotPassword = (
  values: IForgotPasswordFormValues,
  error: IAuthState["error"]
) => {
  const errors = {} as IForgotPasswordFormValues

  if (error) {
    if (/user-not-found/i.test(error as string)) {
      errors.email = "Email not found"
    } else {
      errors.email = "Something went wrong"
    }
  }

  if (
    !/^[-!#$%&'*+/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z{|}~])*@[a-zA-Z](-?[a-zA-Z0-9])*(\.[a-zA-Z](-?[a-zA-Z0-9])*)+$/.test(
      values.email
    )
  ) {
    errors.email = mockInfo.invalidEmailError
  }

  if (!values.email) {
    errors.email = mockInfo.requiredEmailError
  }

  return errors
}
