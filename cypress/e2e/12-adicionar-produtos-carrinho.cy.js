describe('Caso 12 - Adicionar dois produtos ao carrinho', () => {
  it('Confere os dois produtos, preços, quantidades e totais', () => {
    cy.fixture('produtos').then(({ primeiro, segundo }) => {
      cy.abrirInicio()
      cy.abrirProdutos()
      cy.adicionarProduto(primeiro.id)
      cy.continuarComprando()
      cy.adicionarProduto(segundo.id)
      cy.verCarrinho()
      cy.get('#cart_info_table tbody tr').should('have.length', 2)
      cy.validarProdutoNoCarrinho(primeiro.id, primeiro.nome, primeiro.preco, 1)
      cy.validarProdutoNoCarrinho(segundo.id, segundo.nome, segundo.preco, 1)
    })
  })
})
