describe('Caso 7 - Verificar a página de casos de teste', () => {
  it('Navega pelo botão Test Cases e confere a página', () => {
    cy.abrirInicio()
    cy.get('header a[href="/test_cases"]').click()
    cy.location('pathname').should('eq', '/test_cases')
    cy.contains('h2.title', 'Test Cases').should('be.visible')
    cy.get('.panel-group .panel').should('have.length.greaterThan', 0)
  })
})
