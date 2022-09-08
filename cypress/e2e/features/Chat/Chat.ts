/// <reference types="cypress" />
import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor"

import { testId, data, input } from "../../../utils"

// GIVEN
Given("I am on the Chat page, I'm logged in and in a chat.", function () {
  cy.login()
  cy.callFirestore("set", "chats/test", {
    messages: [],
    participants: ["asud98asd98asdixmkxmcxl99ddl"],
    full: false,
  })
  cy.visit("/home")
  cy.get(testId.CHAT_NOW_BTN).realClick()
  cy.wait(2000)
})

Given("I'm logged in and not in a chat.", function () {
  cy.login()
  cy.wait(1000)
})

// When
When("I enter the chat page.", function () {
  cy.visit("/chat")
})

When("I input a message and press the send button.", function () {
  input.messageChat()
})

When("I input a message and press enter.", function () {
  input.accessibleMessageChat()
})

When("I click the leave button.", function () {
  cy.get(testId.CHAT_LEAVE).realClick()
})

// Then
Then("I should see its content.", function () {
  cy.get(testId.CHAT_INPUT).should("be.visible")
  cy.get(testId.CHAT_SUBMIT).should("be.visible")
  cy.get(testId.CHAT_LEAVE).should("be.visible")
})

Then("I should see the message in the chat body.", function () {
  cy.contains(data.MESSAGE).should("be.visible")
})

Then("I should be redirected to the home page.", function () {
  cy.wait(2000)
  cy.url().should("have.string", "/home")
})
