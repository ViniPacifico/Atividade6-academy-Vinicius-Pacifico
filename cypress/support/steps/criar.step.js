import{ pageUsers } from "../../plugins/pages/pageUsers.po"
import{ pageUsersNovo } from "../../plugins/pages/pageUsersNovo.po"

Given("acessei a pagina de criar usuario", () => {
    pageUsers.visitar()
});

And("acessei o cadastro de usuário", () =>{
    pageUsers.cadastrarUsuarioNovo()
});

When("informo os dados do usuario", (tabela) => {
    var dadosTabela = tabela.rowsHash()
    pageUsersNovo.cadastroValido(dadosTabela.nome,dadosTabela.email)
});

Then("vizualizamos a mensagem {string}", (mensagem) =>{
    cy.contains(mensagem).should('be.visible')
});

When("informo os dados do usuario com o nome invalido", (tabela) => { 

});

Then("visualizamos uma mensagem de erro nome invalido {string}", (mensagemErro) => {

});

When("informo os dados do usuario com email invalido", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    pageUsersNovo.cadastroValido(dadosTabela.nome,dadosTabela.email);
});

Then("visualizamos uma mensagem de erro email invalido {string}", (mensagem) => {
    cy.contains(mensagem).should('be.visible')
    cy.get(".sc-gsnTZi").click()
});

When("informo dados já existente por outro usuario", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    pageUsersNovo.cadastroValido(dadosTabela.nome,dadosTabela.email);
});

Then("visualizamos uma mensagem de erro de email invalido {string}", (mensagem) => {
    cy.contains(mensagem).should('be.visible')
    cy.contains("Cancelar").click()
    cy.get(".sc-dkzDqf").click()
});

When("informo dados do usuario com nome mais de 100 caracteres", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    pageUsersNovo.cadastroValido(dadosTabela.nome,dadosTabela.email);
});

Then("visualizamos uma mensagem de erro caracteres de nome {string}", (mensagem) => {
    cy.contains(mensagem).should('be.visible')
});

When("informo dados do usuario com o email mais de 60 caracteres", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    pageUsersNovo.cadastroValido(dadosTabela.nome,dadosTabela.email);
});

Then("visualizamos uma mensagem de erro caracteres de email {string}", (mensagem) => {
    cy.contains(mensagem).should('be.visible')
});
