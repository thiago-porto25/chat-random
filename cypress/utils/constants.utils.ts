export const testId = {
  WELCOME_MSG: "[data-testid='welcome-message']",
  REGISTER_BTN: "[data-testid='register-button']",
  REGISTER_BTN_SUBMIT: "[data-testid='register-button-submit']",
  LOGIN_BTN: "[data-testid='login-button']",
  LOGIN_MODAL: "[data-testid='login-modal']",
  LOGIN_BTN_SUBMIT: "[data-testid='login-button-submit']",
  REGISTER_MODAL: "[data-testid='register-modal']",
  RESET_BTN: "[data-testid='reset-button']",
  RESET_MODAL: "[data-testid='reset-modal']",
  RESET_BTN_SUBMIT: "[data-testid='reset-button-submit']",
  EMAIL_INPUT: "[data-testid='email-input']",
  PASSWORD_INPUT: "[data-testid='password-input']",
  CONFIRM_PASSWORD_INPUT: "[data-testid='confirm-password-input']",
  INPUT_ERROR: "[data-testid='input-error']",
  CLOSE_BTN: "[data-testid='close-button']",
  CHAT_NOW_BTN: "[data-testid='chat-now-button']",
  TRY_BUTTON: "[data-testid='try-button']",
  SETTINGS_BTN: "[data-testid='settings-button']",
  LOGOUT_BTN: "[data-testid='logout-button']",
  NO_CHAT_TITLE: "[data-testid='no-chat-title']",
}

export const data = {
  VALID_EMAIL: "valid@test.com",
  VALID_PASSWORD: "123456abc",
  INVALID_EMAIL: "invalidemail",
  INVALID_PASSWORD: "in",
  USED_EMAIL: "test@test.com",
  USED_PASSWORD: "123456abc",
  NO_ACCOUNT_EMAIL: "noaccount@gmail.com",
}

Object.freeze(testId)
Object.freeze(data)
