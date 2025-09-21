/// <reference types='cypress' />
//import { before } from 'mocha'
import Login from '../support/Pages/Login'
import Home from '../support/Pages/Home'
import CategoryProducts from '../support/Pages/CategoryProducts'
import ViewCart from '../support/Pages/ViewCart'
import Checkout from '../support/Pages/Checkout'
import Payment from '../support/Pages/Payment'


describe('Realizar Compra', function(){
    Cypress.on('uncaught:exception', (err, runnable) => {
      // impede falha por erro de JS da página
      return false
    })

    beforeEach(function(){

        cy.fixture('credenciaisFixture').then((dados)=>{
                this.credenciaisExt = dados
        }) 
        
        Home.acessarHome()
        Home.verificarSeLogado().then((logado) => {
                Login.acessarLogin()
                cy.url().should('include', 'automationexercise')
                if (!logado) {                                
                        cy.realizarLogin(this.credenciaisExt.email.email_valido,
                                this.credenciaisExt.passwords.password_valido)
                }
        })           

              
    })    

    for (let compra=1; compra<4; compra++){
        it(`Realizar Compra com sucesso de nº "${compra}"`, function(){    
                CategoryProducts.selecionarCategoriaAleatoria()
                CategoryProducts.clicarNoProdutoAleatorio()
                CategoryProducts.verificarProdutoAdicionadoAoCarrinhoSucesso()
                ViewCart.verificarCarrinhoSucesso()
                ViewCart.clicarEmCheckout()
                Checkout.verificarCheckoutSucesso()
                Checkout.verificarCarrinhoNaoVazio()
                Checkout.clicarEmCheckout()
                Payment.preencherInfoCard(
                        this.credenciaisExt.payment.card_name,
                        this.credenciaisExt.payment.card_number,
                        this.credenciaisExt.payment.card_cvv,
                        this.credenciaisExt.payment.card_expiration_month,
                        this.credenciaisExt.payment.card_expiration_year
                )
                Payment.clicarEmPagarEConfirmar()
                Payment.verificarPagamentoSucesso()
        })
   }

})