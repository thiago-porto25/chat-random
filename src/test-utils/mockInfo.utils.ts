//

export const mockInfo = {
  // errors
  requiredEmailError: "Required",
  requiredPasswordError: "Required",
  requiredConfirmPasswordError: "Required",
  invalidEmailError: "Invalid email address",
  invalidPasswordError: "Password must be 6-20 characters long",
  passwordMismatchError: "Passwords do not match",

  // Input values
  validEmail: "test_email@hotmail.com",
  invalidEmail: "test_email@h",
  validPassword: "password123",
  invalidPassword: "pas",
}

Object.freeze(mockInfo)
