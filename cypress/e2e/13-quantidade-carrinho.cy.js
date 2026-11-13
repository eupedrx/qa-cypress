describe('Caso 13 - Quantidade do produto no carrinho', () => {
  it('Adiciona quatro unidades e confere a quantidade e o total', () => {
    cy.fixture('produtos').then(({ primeiro }) => {
      cy.abrirInicio()
      cy.get('a[href="/product_details/' + primeiro.id + '"]').first().click()
      cy.get('.product-information h2').should('have.text', primeiro.nome)
      cy.get('#quantity').clear().type('4')
      cy.get('button.cart').click()
      cy.get('#cartModal').should('be.visible')
      cy.verCarrinho()
      cy.get('#cart_info_table tbody tr').should('have.length', 1)
      cy.validarProdutoNoCarrinho(primeiro.id, primeiro.nome, primeiro.preco, 4)
    })
  })
})
