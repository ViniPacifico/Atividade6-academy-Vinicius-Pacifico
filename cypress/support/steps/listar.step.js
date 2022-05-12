
import{ pageUsers } from "../../plugins/pages/pageUsers.po"


Given("acessei a aplicação",() =>{
    pageUsers.visitar()
});


Then("visualizo as informações de todos os usuários cadastrados na aplicação",()=>{
    pageUsers.listaUsuarios()
});


Then("visualizo uma opção para cadastrar um usuário na aplicação",()=>{
    cy.contains("Ops! Não existe nenhum usuário para ser exibido.").should('be.visible')
    cy.contains("Cadastre um novo usuário").should('be.visible')
});