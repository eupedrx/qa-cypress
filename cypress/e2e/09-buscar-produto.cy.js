describe('Caso 9 - Buscar produto', () => {
  it('Pesquisa um produto e confere os resultados', () => {
    cy.fixture('produtos').then(({ busca }) => {
      cy.abrirInicio()
      cy.abrirProdutos()
      cy.get('#search_product').type(busca)
      cy.get('#submit_search').click()
      cy.location('search').should('include', 'search=')
      cy.contains('h2.title', 'Searched Products').should('be.visible')
      cy.get('.features_items .productinfo p')
        .should('have.length.greaterThan', 0)
        .each(($nome) => {
          expect($nome.text().toLowerCase()).to.include(busca.toLowerCase())
        })
    })
  })
})
