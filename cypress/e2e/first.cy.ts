/// <reference types="cypress" />
import { value } from "../utils"

describe("Testing cypress", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("2+2 should equal 4", () => {
    expect(value + value).to.equal(4)
  })
})
