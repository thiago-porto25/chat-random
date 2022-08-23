/// <reference types="cypress" />
import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor"

import { testId, accessibilityTest } from "../../../utils"

// GIVEN
Given("I am on the Home page and I'm logged in.", function () {
  cy.login()
  cy.callFirestore("set", "chats", "readyChat.json")
})

Given(
  "I am on the Home page, I'm logged in and there's no one to chat.",
  function () {
    cy.login()
  }
)

// When
When("I click the 3 dots, and click the logout button.", function () {
  cy.get(testId.SETTINGS_BTN).realClick()
  cy.get(testId.LOGOUT_BTN).realClick()
})

When("I click the Chat now button.", function () {
  cy.get(testId.CHAT_NOW_BTN).realClick()
})

When("I click the Try with bot button.", function () {
  cy.get(testId.TRY_BUTTON).realClick()
})

When(
  "I click the Chat now button and there's an error finding a new chat.",
  function () {
    cy.get(testId.CHAT_NOW_BTN).realClick()
    cy.intercept("/accounts:signUp", new Error("Error"))
  }
)

When("The page passes the lighthouse accessibility audit.", function () {
  accessibilityTest()
})

// Then
Then("I should be logged out.", function () {
  cy.url().should("have.string", "/")
})

Then(
  "I should be see a message explaining that there's no one to chat and that I can chat with a bot.",
  function () {
    cy.get(testId.NO_CHAT_TITLE).should("be.visible")
    cy.get(testId.TRY_BUTTON).should("be.visible")
  }
)

Then("I should go to chat page.", function () {
  cy.url().should("have.string", "/home")
})

Then("I should see an error toast message.", function () {
  cy.contains("Error").should("be.visible")
})

Then("I should be able to browse the website without problem.", function () {
  cy.end()
})
