Cypress.Commands.add('preencherLogin', (email, senha) => {
  cy.get('[data-qa="login-email"]').should('be.visible').type(email)
  cy.get('[data-qa="login-password"]').type(senha, { log: false })
  cy.get('[data-qa="login-button"]').should('be.enabled').click()
})
