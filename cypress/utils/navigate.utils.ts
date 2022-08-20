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
    cy.tab().tab().tab().tab().tab().tab().realClick()
  },
  closeModal: () => {
    cy.scrollTo("top")
    cy.get(testId.CLOSE_BTN).click()
  },
  accessibleCloseModal: () => {
    cy.wait(500)
    cy.tab().tab().realType("{enter}")
  },
}

Object.freeze(navigate)
