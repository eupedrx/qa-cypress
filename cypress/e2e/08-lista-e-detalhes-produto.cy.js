describe('Caso 8 - Lista de produtos e detalhes do primeiro produto', () => {
  it('Exibe nome, categoria, preço, disponibilidade, condição e marca', () => {
    cy.fixture('produtos').then(({ primeiro }) => {
      cy.abrirInicio()
      cy.abrirProdutos()
      cy.get('.features_items .choose a').first().click()
      cy.location('pathname').should('eq', '/product_details/' + primeiro.id)
      cy.get('.product-information').should('be.visible').within(() => {
        cy.get('h2').should('have.text', primeiro.nome)
        cy.contains('p', 'Category: ' + primeiro.categoria).should('be.visible')
        cy.contains('span', 'Rs. ' + primeiro.preco).should('be.visible')
        cy.contains('p', 'Availability:').should('contain.text', 'In Stock').and('be.visible')
        cy.contains('p', 'Condition:').should('contain.text', 'New').and('be.visible')
        cy.contains('p', 'Brand:').should('contain.text', primeiro.marca).and('be.visible')
      })
    })
  })
})
