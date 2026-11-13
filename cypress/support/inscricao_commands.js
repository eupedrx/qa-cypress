Cypress.Commands.add('realizarInscricao', () => {
  cy.get('#footer').scrollIntoView()
  cy.contains('#footer h2', 'Subscription').should('be.visible')
  const email = 'cypress.' + Date.now() + '.' + Cypress._.random(100000, 999999) + '@example.com'
  cy.get('#susbscribe_email').type(email)
  cy.get('#subscribe').click()
  cy.get('#success-subscribe').should('be.visible').and('contain.text', 'You have been successfully subscribed!')
})
