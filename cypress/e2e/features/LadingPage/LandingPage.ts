/// <reference types="cypress" />
import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor"

import { TestId } from "../../../utils"

// GIVEN
Given("I am on the landing page and i'm not logged in.", () => {
  cy.visit("/")
  cy.wait(2000)
})

Given(
  "I am on the landing page and I've been previously logged in in this device and browser.",
  () => {
    cy.visit("/")
    cy.wait(2000)
  }
)

// WHEN
When("I click on the register button.", function () {
  cy.get(TestId.REGISTER_BTN).click()
})

When(
  "I press tab on my keyboard until I find the register button and press enter on it.",
  function () {
    cy.type("{tab}{tab}{tab}{tab}{enter}")
  }
)

When("I click on the login button.", function () {
  cy.get(TestId.LOGIN_BTN).click()
})

When(
  "I press tab on my keyboard until I find the login button and press enter on it.",
  function () {
    cy.type("{tab}{tab}{tab}{enter}")
  }
)

When("The page passes the lighthouse accessibility audit.", function () {
  cy.lighthouse(
    {
      accessibility: 100,
      "best-practices": 80,
      seo: 90,
    },
    undefined,
    undefined
  )
})

// THEN
Then(
  "I should see a welcome message and buttons to create an account and to login.",
  function () {
    cy.get(TestId.WELCOME_MSG).should("be.visible")
    cy.get(TestId.REGISTER_BTN).should("be.visible")
    cy.get(TestId.LOGIN_BTN).should("be.visible")
  }
)

Then("I should be redirected to my homepage.", function () {
  cy.url().should("have.string", "/home")
})

Then("I should access the register modal.", function () {
  cy.get(TestId.REGISTER_MODAL).should("be.visible")
})

Then("I should access the login modal.", function () {
  cy.get(TestId.LOGIN_MODAL).should("be.visible")
})

Then("I should be able to browse the website without problem.", function () {
  cy.end()
})
