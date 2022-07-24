/// <reference types="cypress" />

describe("Testing cypress", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("2+2 should equal 4", () => {
    expect(2 + 2).to.equal(4)
  })
})
