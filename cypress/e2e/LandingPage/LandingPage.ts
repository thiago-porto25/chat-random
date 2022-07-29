/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

Given("I am on the landing page and i'm not logged in.", function () {
  cy.visit("/")
})

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

Then("I should be able to browse the website without problem.", function () {
  cy.end()
})
