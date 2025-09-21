//Elementos da pagina de categoria de produtos
export const ELEMENTS ={
    category: 'div[class="panel panel-default"]',
    subCategory: 'div[class="panel-collapse in"]',
    product: 'div[class="features_items"] div[class="col-sm-4"]:visible', //garante que o produto está visível
    showCart: '#cartModal > div > div > div > p > a',
    continueShopping: 'button[class="btn btn-success close-modal btn-block"]',
    viewCart: 'a[href="/view_cart"] > i[class="fa fa-shopping-cart"]',
    esvaziarCarrinho: 'td[class="cart_delete"]'
}