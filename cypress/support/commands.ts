/// <reference types="cypress" />
import "@cypress-audit/lighthouse/commands"
import "cypress-plugin-tab"

// Namespace shenanigans for @cypress-audit/lighthouse
declare global {
  namespace Cypress {
    interface Chainable {
      lighthouse(
        thresholds: any,
        opts: any,
        config: any
      ): Cypress.Chainable<null> | Cypress.Chainable<JQuery<any>>
    }
  }
}
