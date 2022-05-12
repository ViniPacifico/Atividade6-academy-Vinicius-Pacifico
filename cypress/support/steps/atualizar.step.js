import{ pageUsers } from "../../plugins/pages/pageUsers.po"
import{ pageDetalhes } from "../../plugins/pages/pageDetalhes.po"


Given("acessei a aplicação", ()=>{
    pageUsers.visitar()
});


When("pesquisei por um usuário pelo seu email", (tabela) =>{
    var dadosTabela = tabela.rowsHash()
    pageUsers.buscarUsuarioEmail(dadosTabela.email)
});

And("acesso o detalhes do usuário pesquisado", () =>{
    pageUsers.acessoDetalhes()
})

Then("visualizo todas as suas informações", () =>{
    pageDetalhes.visualizarDetalhes()
})


When("pesquisei por um usuário pelo seu email", (tabela) =>{
    var dadosTabela = tabela.rowsHash()
    pageUsers.buscarUsuarioEmail(dadosTabela.email)
});

Then("visualizo a mensagem {string}", (mensagem) =>{
    cy.contains(mensagem).should('be.visible')
})


When("pesquisei por um usuário pelo seu email", (tabela) =>{
    var dadosTabela = tabela.rowsHash()
    pageUsers.buscarUsuarioEmail(dadosTabela.email)
});

And("acesso o detalhes do usuário pesquisado", () =>{
    pageUsers.acessoDetalhes()
});

And("alterei o nome e o email do usuário por um inexistente", (tabela) =>{
    var dadosTabela = tabela.rowsHash()
    pageDetalhes.atualizarUsuario(dadosTabela.nome,dadosTabela.email)
});

Then("visualizo a mensagem {string}", (mensagem) =>{
    cy.contains(mensagem).should('be.visible')
})


When("pesquisei por um usuário pelo seu email", (tabela) =>{
    var dadosTabela = tabela.rowsHash()
    pageUsers.buscarUsuarioEmail(dadosTabela.email)
});

And("acesso o detalhes do usuário pesquisado", () =>{
    pageUsers.acessoDetalhes()
});

And("alterei o email do usuário por um email invalido", (tabela) =>{
    var dadosTabela = tabela.rowsHash()
    pageDetalhes.atualizarUsuario('',dadosTabela.email)
});

Then("visualizo a mensagem abaixo do campo email {string}", (mensagem) =>{
    cy.contains(mensagem).should('be.visible')
    cy.contains(".sc-iqcoie","Cancelar").click()
});


When("pesquisei por um usuário pelo seu email", (tabela) =>{
    var dadosTabela = tabela.rowsHash()
    pageUsers.buscarUsuarioEmail(dadosTabela.email)
});

And("acesso o detalhes do usuário pesquisado", () =>{
    pageUsers.acessoDetalhes()
});

And("alterei o email do usuário por um email ja existente de outro usuário", (tabela) =>{
    var dadosTabela = tabela.rowsHash()
    pageDetalhes.atualizarUsuario('',dadosTabela.email)
});

Then("visualizo um modal com a mensagem {string}", (mensagem) =>{
    cy.contains(mensagem).should('be.visible')
    cy.contains(".sc-iTONeN","Cancelar").click()
    cy.contains(".sc-iqcoie","Cancelar").click()
});


When("pesquisei por um usuário pelo seu email", (tabela) =>{
    var dadosTabela = tabela.rowsHash()
    pageUsers.buscarUsuarioEmail(dadosTabela.email)
});

And("acesso o detalhes do usuário pesquisado", () =>{
    pageUsers.acessoDetalhes()
});

And("alterei o nome e o email do usuário excedendo o numero de caracteres permitidos", (tabela) =>{
    var dadosTabela = tabela.rowsHash()
    pageDetalhes.atualizarUsuario(dadosTabela.nome,dadosTabela.email)
});

Then("visualizo a mensagem abaixo do campo nome {string}", (mensagem) =>{
    cy.contains(mensagem).should('be.visible')
});
