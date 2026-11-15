describe('Caso 11 - Inscrição na página do carrinho', () => {
  it('Inscreve um e-mail pelo rodapé da página do carrinho', () => {
    cy.abrirInicio()
    cy.get('header a[href="/view_cart"]').click()
    cy.location('pathname').should('eq', '/view_cart')
    cy.realizarInscricao()
  })
})
