export const accessibilityTest = () => {
  cy.lighthouse(
    {
      accessibility: 90,
      "best-practices": 85,
      seo: 90,
    },
    undefined,
    undefined
  )
}
