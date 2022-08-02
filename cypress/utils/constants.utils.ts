export const testId = {
  WELCOME_MSG: "[data-testid='welcome-message']",
  REGISTER_BTN: "[data-testid='register-button']",
  LOGIN_BTN: "[data-testid='login-button']",
  LOGIN_MODAL: "[data-testid='login-modal']",
  REGISTER_MODAL: "[data-testid='register-modal']",
  RESET_BTN: "[data-testid='reset-button']",
  RESET_MODAL: "[data-testid='reset-modal']",
  EMAIL_INPUT: "[data-testid='email-input']",
  PASSWORD_INPUT: "[data-testid='password-input']",
  CONFIRM_PASSWORD_INPUT: "[data-testid='confirm-password-input']",
  INPUT_ERROR: "[data-testid='input-error']",
  CLOSE_BTN: "[data-testid='close-button']",
}

export const data = {
  VALID_EMAIL: "email@gmail.com",
  VALID_PASSWORD: "password",
  INVALID_EMAIL: "invalidemail",
  INVALID_PASSWORD: "in",
  USED_EMAIL: "test@test.com",
  USED_PASSWORD: "123456abc",
  NO_ACCOUNT_EMAIL: "noaccount@gmail.com",
}

Object.freeze(testId)
Object.freeze(data)
