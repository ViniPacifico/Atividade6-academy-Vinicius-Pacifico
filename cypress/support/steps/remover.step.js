import {pageUsers} from "../../plugins/pages/pageUsers.po"

Given("acessei a aplicação", () => {
  pageUsers.visitar()
});

When("pesquisei por um usuário pelo email", (tabela) =>{
  var dadosTabela = tabela.rowsHash()
  pageUsers.buscarUsuarioEmail(dadosTabela.email)
});

Then("removo o usuário pela opção de excluir", () =>{
  pageUsers.removendoUsuario()
});

When("pesquisei por um usuário pelo nome inexistente", (tabela) =>{
  var dadosTabela = tabela.rowsHash()
  pageUsers.buscarUsuarioNome(dadosTabela.nome)
});

Then("visualizo a mensagem {string}", (mensagem) =>{
  cy.contains(mensagem).should('be.visible')
})