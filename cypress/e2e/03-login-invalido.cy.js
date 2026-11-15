describe('Caso 3 - Login com e-mail e senha incorretos', () => {
  it('Exibe a mensagem de erro de credenciais inválidas', () => {
    cy.fixture('usuarios').then(({ invalido }) => {
      cy.abrirInicio()
      cy.get('header a[href="/login"]').click()
      cy.location('pathname').should('eq', '/login')
      cy.contains('.login-form h2', 'Login to your account').should('be.visible')
      cy.preencherLogin(invalido.email, invalido.senha)
      cy.contains('.login-form p', 'Your email or password is incorrect!').should('be.visible')
      cy.location('pathname').should('eq', '/login')
    })
  })
})
