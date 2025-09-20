/// <reference types='cypress' />
//import { before } from 'mocha'
import Login from '../support/Pages/Login'

describe('Realizar Login', function(){

    beforeEach(function(){
        cy.fixture('credenciaisFixture').then((dados)=>{
               this.credenciaisExt = dados
        })

        Login.acessarLogin()
        cy.url().should('include', 'automationexercise')
    })

    afterEach(function(){
        cy.realizarLogout()
    })

    it("Realizar Login com sucesso", function(){
        cy.realizarLogin(this.credenciaisExt.email.email_valido,
                         this.credenciaisExt.passwords.password_valido)            
        Login.verificarLoginSucesso()
        

    })
    
    it("Realizar Login com falha", function(){
        cy.realizarLogin(this.credenciaisExt.email.email_invalido,
                         this.credenciaisExt.passwords.password_invalido)
        Login.verificarLoginFalha()
    })
    
})