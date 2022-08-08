import { IRegisterFormValues } from "@features/auth/types"
import { mockInfo } from "@src/test-utils"

export const validateRegister = (values: IRegisterFormValues) => {
  const errors = {} as IRegisterFormValues

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

  if (values.password.length < 6 || values.password.length > 20) {
    errors.password = mockInfo.invalidPasswordError
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = mockInfo.requiredConfirmPasswordError
  }

  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = mockInfo.passwordMismatchError
  }

  return errors
}
