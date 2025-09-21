import Login from '../support/Pages/Login'
import Logout from '../support/Pages/Home'

Cypress.Commands.add('realizarLogin', (email, password) => {
    Login.acessarLogin()  
    Login.preenherEmail(email)
    Login.preencherPassword(password)
    Login.clicarEmLogin()
})

Cypress.Commands.add('realizarLogout', () => {
    Logout.clicarEmLogoutSeLogado()
})