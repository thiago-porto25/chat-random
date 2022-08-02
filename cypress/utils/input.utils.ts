import { testId, data } from "./constants.utils"

export const input = {
  correctLogin: () => {
    cy.get(testId.EMAIL_INPUT).realType(data.VALID_EMAIL)
    cy.get(testId.PASSWORD_INPUT).realType(data.VALID_PASSWORD)
    cy.get(testId.LOGIN_BTN).realClick()
  },

  correctAccessibleLogin: () => {
    cy.tab()
      .realType(data.VALID_EMAIL)
      .tab()
      .realType(data.VALID_PASSWORD)
      .tab()
      .tab()
      .realType("{enter}")
  },

  incorrectLogin: () => {
    cy.get(testId.EMAIL_INPUT).realType(data.INVALID_EMAIL)
    cy.get(testId.PASSWORD_INPUT).realType(data.INVALID_PASSWORD)
  },

  incorrectCredentialsLogin: () => {
    cy.get(testId.EMAIL_INPUT).realType(data.USED_EMAIL)
    cy.get(testId.PASSWORD_INPUT).realType(data.INVALID_PASSWORD)
    cy.get(testId.LOGIN_BTN).realClick()
  },

  correctReset: () => {
    cy.get(testId.EMAIL_INPUT).realType(data.VALID_EMAIL)
    cy.get(testId.RESET_BTN).realClick()
  },

  correctAccessibleReset: () => {
    cy.tab().realType(data.VALID_EMAIL).tab().realType("{enter}")
  },

  incorrectReset: () => {
    cy.get(testId.EMAIL_INPUT).realType(data.INVALID_EMAIL)
    cy.get(testId.RESET_BTN).realClick()
  },

  noAccountReset: () => {
    cy.get(testId.EMAIL_INPUT).realType(data.NO_ACCOUNT_EMAIL)
    cy.get(testId.RESET_BTN).realClick()
  },

  correctRegister: () => {
    cy.get(testId.EMAIL_INPUT).realType(data.VALID_EMAIL)
    cy.get(testId.PASSWORD_INPUT).realType(data.VALID_PASSWORD)
    cy.get(testId.CONFIRM_PASSWORD_INPUT).realType(data.VALID_PASSWORD)
    cy.get(testId.REGISTER_BTN).realClick()
  },

  correctAccessibleRegister: () => {
    cy.tab()
      .realType(data.VALID_EMAIL)
      .tab()
      .realType(data.VALID_PASSWORD)
      .tab()
      .realType(data.VALID_PASSWORD)
      .tab()
      .realType("{enter}")
  },

  incorrectRegister: () => {
    cy.get(testId.EMAIL_INPUT).realType(data.INVALID_EMAIL)
    cy.get(testId.PASSWORD_INPUT).realType(data.INVALID_PASSWORD)
    cy.get(testId.CONFIRM_PASSWORD_INPUT).realType(data.VALID_PASSWORD)
    cy.get(testId.REGISTER_BTN).realClick()
  },

  usedEmailRegister: () => {
    cy.get(testId.EMAIL_INPUT).realType(data.USED_EMAIL)
    cy.get(testId.PASSWORD_INPUT).realType(data.VALID_PASSWORD)
    cy.get(testId.CONFIRM_PASSWORD_INPUT).realType(data.VALID_PASSWORD)
    cy.get(testId.REGISTER_BTN).realClick()
  },
}

Object.freeze(input)
