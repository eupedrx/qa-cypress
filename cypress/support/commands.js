Cypress.Commands.add('abrirInicio', () => {
  cy.visit('/')
  cy.get('header .logo img').should('be.visible')
  cy.get('#slider').should('be.visible')
})

Cypress.Commands.add('abrirProdutos', () => {
  cy.get('header a[href="/products"]').click()
  cy.location('pathname').should('eq', '/products')
  cy.contains('h2.title', 'All Products').should('be.visible')
  cy.get('.features_items .product-image-wrapper').should('have.length.greaterThan', 0)
})
