# Testes Automatizados com Cypress - Automation Exercise

Este projeto realiza testes automatizados end-to-end na plataforma [Automation Exercise](https://www.automationexercise.com/) utilizando [Cypress](https://www.cypress.io/).

## Estrutura do Projeto

```
cypress/
  e2e/                # Testes end-to-end
  support/            # Page Objects, comandos customizados e utilitários
  fixtures/           # Dados de teste (ex: credenciais)
  downloads/          # Arquivos baixados durante os testes
.gitignore
package.json
cypress.config.js
README.md
allure-report/        # Relatórios gerados pelo Allure
allure-results/       # Resultados dos testes para o Allure
```

## Principais Funcionalidades Testadas

- **Cadastro de usuário**: Testa cadastro com dados válidos e inválidos ([RealizarCadastro.cy.js](cypress/e2e/RealizarCadastro.cy.js))
- **Login**: Testa login com sucesso e falha ([RealizarLogin.cy.js](cypress/e2e/RealizarLogin.cy.js))
- **Compra de produtos**: Seleção aleatória de categorias/produtos, checkout e pagamento ([RealizarCompra.cy.js](cypress/e2e/RealizarCompra.cy.js))
- **Carrinho de compras**: Adição, visualização e esvaziamento do carrinho ([CarregarEEsvaziarCarrinho.cy.js](cypress/e2e/CarregarEEsvaziarCarrinho.cy.js))

## Como Executar os Testes

1. **Instale as dependências:**
   ```sh
   npm install
   ```

2. **Crie o arquivo `cypress.env.json` na raiz do projeto** contendo seu e-mail e senha de teste no formato abaixo:
   ```json
   {
     "user_email": "seu_email@exemplo.com",
     "user_senha": "sua_senha"
   }
   ```

3. **Execute os testes:**
   ```sh
   npx cypress open
   ```
   ou em modo headless:
   ```sh
   npx cypress run
   ```

4. **Gerar relatório Allure (opcional):**
   - Após rodar os testes, gere o relatório:
     ```sh
     npx allure generate allure-results --clean -o allure-report
     npx allure open allure-report
     ```

## Configuração

- O arquivo [`cypress.config.js`](cypress.config.js) define a base URL e o tamanho da viewport.
- Dados sensíveis e credenciais de teste estão em [`cypress/fixtures/credenciaisFixture.json`](cypress/fixtures/credenciaisFixture.json).

## Page Objects

A lógica de interação com as páginas está organizada em arquivos na pasta [`cypress/support/Pages`](cypress/support/Pages):

- [`Login`](cypress/support/Pages/Login/index.js)
- [`Signup`](cypress/support/Pages/Signup/index.js)
- [`Home`](cypress/support/Pages/Home/index.js)
- [`CategoryProducts`](cypress/support/Pages/CategoryProducts/index.js)
- [`ViewCart`](cypress/support/Pages/ViewCart/index.js)
- [`Checkout`](cypress/support/Pages/Checkout/index.js)
- [`Payment`](cypress/support/Pages/Payment/index.js)

## Gerador de Usuários

Utiliza [`criarRegistroUsuario`](cypress/support/Factories/newUser.js) para gerar dados aleatórios de cadastro.

## Observações

- O projeto ignora erros de JS da página para evitar falhas nos testes.
- Os comandos customizados estão em [`cypress/support/commands.js`](cypress/support/commands.js).

---

**Autor:** Ricardo de Oliveira 
**Contato:** https://github.com/RicardoOliveiraFisica
