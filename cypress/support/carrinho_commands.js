Cypress.Commands.add('adicionarProduto', (id) => {
  cy.get('.features_items .productinfo a[data-product-id="' + id + '"]').scrollIntoView().should('be.visible').click()
  cy.get('#cartModal').should('be.visible')
  cy.contains('#cartModal', 'Your product has been added to cart.').should('be.visible')
})

Cypress.Commands.add('continuarComprando', () => {
  cy.contains('#cartModal button', 'Continue Shopping').click()
  cy.get('#cartModal').should('not.be.visible')
})

Cypress.Commands.add('verCarrinho', () => {
  cy.contains('#cartModal a', 'View Cart').click()
  cy.location('pathname').should('eq', '/view_cart')
  cy.get('#cart_info').should('be.visible')
})

Cypress.Commands.add('validarProdutoNoCarrinho', (id, nome, preco, quantidade) => {
  cy.get('#product-' + id).should('be.visible').within(() => {
    cy.get('.cart_description h4 a').should('have.text', nome)
    cy.get('.cart_price p').should('have.text', 'Rs. ' + preco)
    cy.get('.cart_quantity button').should('have.text', String(quantidade))
    cy.get('.cart_total_price').should('have.text', 'Rs. ' + preco * quantidade)
  })
})
