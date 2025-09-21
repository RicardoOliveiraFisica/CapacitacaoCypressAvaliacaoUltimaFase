/// <reference types='cypress' />
//import { before } from 'mocha'
import Login from '../support/Pages/Login'
import Home from '../support/Pages/Home'
import CategoryProducts from '../support/Pages/CategoryProducts'


describe('Carregar e Esvaziar carrinho', function(){
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
                if (!logado) {                         
                    cy.realizarLogin(this.credenciaisExt.email.email_valido,
                                     this.credenciaisExt.passwords.password_valido)
                }
        })           

              
    })
    
    for (let item=1; item<=10; item++){
        it(`Inserir item nº "${item}"`, function(){    
                CategoryProducts.selecionarCategoriaAleatoria()
                CategoryProducts.clicarNoProdutoAleatorio()
                CategoryProducts.clicarEmContinuarComprando()
        })
    }

    it("Verificar carrinho com itens", function(){
        CategoryProducts.clicarEmVerCarrinho()
    })

    it("Esvaziar carrinho", function(){
        CategoryProducts.clicarEmVerCarrinho()
        CategoryProducts.esvaziarCarrinho()
        CategoryProducts.carrinhoEsvaziadoComSucesso()
    })



})