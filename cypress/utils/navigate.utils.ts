import { testId } from "./constants.utils"

export const navigate = {
  loginModal: () => {
    cy.get(testId.LOGIN_BTN).realClick()
  },
  registerModal: () => {
    cy.get(testId.REGISTER_BTN).realClick()
  },
  resetModal: () => {
    navigate.loginModal()
    cy.get(testId.RESET_BTN).realClick()
  },
  accessibleResetModal: () => {
    navigate.loginModal()
    cy.tab().tab().tab().realType("{enter}")
  },
  closeModal: () => {
    cy.get(testId.CLOSE_BTN).realClick()
  },
  accessibleCloseModal: () => {
    cy.tab().realType("{type}")
  },
}

Object.freeze(navigate)
