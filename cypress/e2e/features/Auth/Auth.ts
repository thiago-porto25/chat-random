/// <reference types="cypress" />
import { When, Then, Given, And } from "@badeball/cypress-cucumber-preprocessor"

import { testId, navigate, input, accessibilityTest } from "../../../utils"

// GIVEN
Given("I have the login modal open.", function () {
  cy.logout()
  cy.visit("/")
  cy.wait(2000)
  navigate.loginModal()
})

Given("I have the register modal open.", function () {
  cy.logout()
  cy.visit("/")
  cy.wait(2000)
  navigate.registerModal()
})

// WHEN
When(
  "I fill in the login form with my credentials and I press the login button.",
  function () {
    input.correctLogin()
  }
)

When(
  "I fill in the login form with my credentials navigating with my keyboard and I press the login button navigating with my keyboard.",
  function () {
    input.correctAccessibleLogin()
  }
)

When("I don't input either my email or password.", function () {})

When("I input either an invalid email or password.", function () {
  input.incorrectLogin()
})

When(
  "I input either an email that isn't registered or a password that is incorrect for that email.",
  function () {
    input.incorrectCredentialsLogin()
  }
)

When("click the close icon.", function () {
  navigate.closeModal()
})

When("click the close icon navigating with my keyboard.", function () {
  navigate.accessibleCloseModal()
})

When("The page passes the lighthouse accessibility audit.", function () {
  accessibilityTest()
})

When("I click the Forgot Password link.", function () {
  navigate.resetModal()
})

When(
  "I click the Forgot Password link navigating with my keyboard.",
  function () {
    navigate.accessibleResetModal()
  }
)

When(
  "I fill in the register form with correct information and I press the register button.",
  function () {
    input.correctRegister()
  }
)

When(
  "I fill in the register form with correct information navigating with my keyboard and I press the register button navigating with my keyboard.",
  function () {
    input.correctAccessibleRegister()
  }
)

When(
  "I don't input either my email, password or confirm password.",
  function () {}
)

When(
  "I input either an invalid email, password or confirm password.",
  function () {
    input.incorrectRegister()
  }
)

When("I input an email already used.", function () {
  input.usedEmailRegister()
})

// AND
And(
  "I should see an error message under the invalid input field.",
  function () {
    cy.get(testId.INPUT_ERROR).should("be.visible")
  }
)

And(
  "I fill in the the reset form with a valid email and I press the send button.",
  function () {
    input.correctReset()
  }
)

And(
  "I fill in the the reset form with a valid email navigating with my keyboard and I press the send button navigating with my keyboard.",
  function () {
    input.correctAccessibleReset()
  }
)
And("I don't input my email.", function () {})

And("I fill in the form with an invalid email.", function () {
  input.incorrectReset()
})

And(
  "I fill in the the reset form with a email that doesn't have an account associated with it and I press the send button.",
  function () {
    input.noAccountReset()
  }
)

// THEN
Then("I should be logged in and be redirected to my home page.", function () {
  cy.url().should("include", "/home")
})

Then("the login button should be disabled.", function () {
  cy.get(testId.LOGIN_BTN_SUBMIT).should("have.attr", "disabled")
})

Then("the login modal should disappear.", function () {
  cy.get(testId.LOGIN_MODAL).should("not.exist")
})

Then("I should be able to browse the modal without problem.", function () {
  cy.end()
})

Then(
  "I should see a success message telling me to go to my email inbox to reset my password.",
  function () {
    cy.contains(/check/i).should("be.visible")
  }
)

Then("the send button should be disabled.", function () {
  cy.get(testId.RESET_BTN_SUBMIT).should("have.attr", "disabled")
})

Then("the reset modal should disappear.", function () {
  cy.tab().realType("{enter}")
  cy.get(testId.RESET_MODAL).should("not.exist")
})

Then(
  "my account should be created and I should be logged in and be redirected to my home page.",
  function () {
    cy.url().should("include", "/home")
  }
)

Then("the register button should be disabled.", function () {
  cy.get(testId.REGISTER_BTN_SUBMIT).should("have.attr", "disabled")
})

Then("the register modal should disappear.", function () {
  cy.get(testId.REGISTER_MODAL).should("not.exist")
})
