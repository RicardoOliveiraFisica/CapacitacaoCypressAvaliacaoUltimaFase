const el = require('./elements').ELEMENTS
class CategoryProducts {

    selecionarCategoriaAleatoria(){
        cy.get(el.category).then($categories => {
            cy.log('Categorias disponíveis: ' + $categories.length)
            let index = Cypress._.random(0, $categories.length - 1)
            cy.wrap($categories).eq(index).find('.panel-heading a').click()
            cy.wrap($categories).eq(index).find('.panel-collapse a').then(($subCategorias) => {
                cy.log('Subcategorias disponíveis: ' + $subCategorias.length)
                let subIndex = Cypress._.random(0, $subCategorias.length - 1)
                cy.wrap($subCategorias).eq(subIndex).click()
            })
        })
    }

    selecionarTipoProdutoAleatorio(){
        cy.wrap(el.subCategory,{ timeout: 5000 }).then($products => {
            cy.log('Subcategorias  disponíveis: ' + $products.length)
            let index = Cypress._.random(0, $products.length - 1)
            cy.wrap($products).eq(index).click()
        })
    }

    clicarNoProdutoAleatorio(){
            cy.get(el.product,{ timeout: 5000 }).should('have.length.greaterThan', 0).then($products => {
            cy.log('Produtos disponíveis: ' + $products.length)
            let index = Cypress._.random(0, $products.length - 1)
            cy.wrap($products).eq(index).find('a.add-to-cart').first().click({ force: true })  
        })
    }

    verificarProdutoAdicionadoAoCarrinhoSucesso() {
        cy.get(el.showCart,{ timeout: 3000 }).should('be.visible').click()
    }

    clicarEmContinuarComprando() {
        cy.get(el.continueShopping,{ timeout: 3000 }).should('be.visible').click()
    }

    clicarEmVerCarrinho() {
        cy.get(el.viewCart,{ timeout: 3000 }).should('be.visible').click()
    }

    esvaziarCarrinho() {
        cy.get(el.esvaziarCarrinho,{ timeout: 5000 }).then($itens => {
            if ($itens.length > 0) {
                cy.wrap($itens).each(($el) => {
                    cy.wrap($el).find('a').click()
                    cy.wait(1000)
                })
            } else {
                cy.log('O carrinho já está vazio.')
            }
        })
    }

    carrinhoEsvaziadoComSucesso() {
        cy.get('p',{ timeout: 5000 }).should('contain.text', 'Cart is empty!')
    }

}
export default new CategoryProducts()