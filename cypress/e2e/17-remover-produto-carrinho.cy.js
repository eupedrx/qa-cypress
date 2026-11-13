describe('Caso 17 - Remover produto do carrinho', () => {
  it('Remove o produto e confirma que o carrinho está vazio', () => {
    cy.fixture('produtos').then(({ primeiro }) => {
      cy.abrirInicio()
      cy.adicionarProduto(primeiro.id)
      cy.verCarrinho()
      cy.validarProdutoNoCarrinho(primeiro.id, primeiro.nome, primeiro.preco, 1)
      cy.get('#product-' + primeiro.id + ' .cart_quantity_delete').click()
      cy.get('#product-' + primeiro.id).should('not.exist')
      cy.contains('#empty_cart', 'Cart is empty!').should('be.visible')
    })
  })
})
