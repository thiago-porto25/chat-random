import { testId, data } from "./constants.utils"

export const input = {
  correctLogin: () => {
    cy.get(testId.EMAIL_INPUT).focus().wait(200).realType(data.USED_EMAIL)
    cy.get(testId.PASSWORD_INPUT).focus().wait(200).realType(data.USED_PASSWORD)
    cy.get(testId.LOGIN_BTN_SUBMIT).realClick()
  },

  correctAccessibleLogin: () => {
    cy.tab()
      .realType(data.USED_EMAIL)
      .tab()
      .realType(data.USED_PASSWORD)
      .tab()
      .tab()
      .realType("{enter}")
  },

  incorrectLogin: () => {
    cy.get(testId.EMAIL_INPUT).focus().realType(data.INVALID_EMAIL)
    cy.get(testId.PASSWORD_INPUT).focus().realType(data.INVALID_PASSWORD)
  },

  incorrectCredentialsLogin: () => {
    cy.get(testId.EMAIL_INPUT).focus().realType(data.USED_EMAIL)
    cy.get(testId.PASSWORD_INPUT).focus().realType(data.INVALID_PASSWORD)
    cy.get(testId.LOGIN_BTN_SUBMIT).realClick()
  },

  correctReset: () => {
    cy.get(testId.EMAIL_INPUT).focus().wait(200).realType(data.USED_EMAIL)
    cy.get(testId.RESET_BTN_SUBMIT).realClick()
  },

  correctAccessibleReset: () => {
    cy.tab().tab().realType(data.USED_EMAIL).tab().realType("{enter}")
  },

  incorrectReset: () => {
    cy.get(testId.EMAIL_INPUT).focus().realType(data.INVALID_EMAIL)
    cy.get(testId.RESET_BTN_SUBMIT).realClick()
  },

  noAccountReset: () => {
    cy.get(testId.EMAIL_INPUT).focus().realType(data.NO_ACCOUNT_EMAIL)
    cy.get(testId.RESET_BTN_SUBMIT).realClick()
  },

  correctRegister: () => {
    cy.get(testId.EMAIL_INPUT).focus().wait(200).realType(data.VALID_EMAIL)
    cy.get(testId.PASSWORD_INPUT)
      .focus()
      .wait(200)
      .realType(data.VALID_PASSWORD)
    cy.get(testId.CONFIRM_PASSWORD_INPUT)
      .focus()
      .wait(200)
      .realType(data.VALID_PASSWORD)
    cy.get(testId.REGISTER_BTN_SUBMIT).realClick()
  },

  correctAccessibleRegister: () => {
    cy.tab()
      .realType(data.VALID_EMAIL + "a")
      .tab()
      .realType(data.VALID_PASSWORD)
      .tab()
      .realType(data.VALID_PASSWORD)
      .tab()
      .realType("{enter}")
  },

  incorrectRegister: () => {
    cy.get(testId.EMAIL_INPUT).focus().realType(data.INVALID_EMAIL)
    cy.get(testId.PASSWORD_INPUT).focus().realType(data.INVALID_PASSWORD)
    cy.get(testId.CONFIRM_PASSWORD_INPUT).focus().realType(data.VALID_PASSWORD)
    cy.get(testId.REGISTER_BTN_SUBMIT).realClick()
  },

  usedEmailRegister: () => {
    cy.get(testId.EMAIL_INPUT).focus().wait(200).realType(data.USED_EMAIL)
    cy.get(testId.PASSWORD_INPUT)
      .focus()
      .wait(200)
      .realType(data.VALID_PASSWORD)
    cy.get(testId.CONFIRM_PASSWORD_INPUT)
      .focus()
      .wait(200)
      .realType(data.VALID_PASSWORD)
    cy.get(testId.REGISTER_BTN_SUBMIT).realClick()
  },
}

Object.freeze(input)
