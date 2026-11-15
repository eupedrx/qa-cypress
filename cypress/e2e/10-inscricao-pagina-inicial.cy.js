describe('Caso 10 - Inscrição na página inicial', () => {
  it('Inscreve um e-mail pelo rodapé da página inicial', () => {
    cy.abrirInicio()
    cy.realizarInscricao()
  })
})
