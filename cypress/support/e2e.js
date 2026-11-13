import './commands'
import './login_commands'
import './carrinho_commands'
import './inscricao_commands'

beforeEach(() => {
  cy.intercept({ hostname: /(^|\.)(doubleclick\.net|googlesyndication\.com|googleadservices\.com|googletagmanager\.com|google-analytics\.com)$/ }, { statusCode: 204, body: '' })
})
