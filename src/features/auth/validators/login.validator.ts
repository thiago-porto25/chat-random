import { IAuthState, ILoginFormValues } from "@features/auth/types"
import { mockInfo } from "@src/test-utils"

export const validateLogin = (
  values: ILoginFormValues,
  error: IAuthState["error"]
) => {
  const errors = {} as ILoginFormValues

  if (error) {
    if (/wrong-password/i.test(error as string)) {
      errors.password = "Invalid Password"
    } else if (/user-not-found/i.test(error as string)) {
      errors.email = "Email not found"
    } else {
      errors.password = "Something went wrong"
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

  if (!values.password) {
    errors.password = mockInfo.requiredPasswordError
  }

  if (
    values.password &&
    (values.password.length < 6 || values.password.length > 20)
  ) {
    errors.password = mockInfo.invalidPasswordError
  }

  return errors
}
