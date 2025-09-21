const el = require('./elements').ELEMENTS
class Home {

    acessarHome(){
        cy.visit('/')
    }
    
    verificarSeLogado() {
        return cy.get('body').then($body => {
            if ($body.find(el.msgLoginSucesso).length > 0) {
            cy.log('Usuário já está logado');
            return true;
            } else {
            cy.log('Usuário não está logado');
            return false;
            }
        });
    }

    clicarEmLogoutSeLogado(){
        cy.get(el.logout).parent().then($el => {
            const text = $el.text()
            cy.log('Elemento de logout: ' + $el.text())
            if (text.includes('Logout')) {
                cy.wrap($el).click()
                cy.url().should('include', '/login')            
            } else {
                cy.log('Usuário não está logado')
            }
        })
    }

}
export default new Home()