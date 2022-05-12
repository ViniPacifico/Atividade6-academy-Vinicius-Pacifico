class PageUsers{
    campoPesquisa = ".sc-gKXOVf"
    botaoNovo = ".sc-gsnTZi"
    cardUsuarios = "#userData"
    botaoDetalhes = "#userDataDetalhe"
    botaoRemover = ".sc-kgflAQ"
    
    visitar(){
        cy.visit("https://academy-crud-frontend.herokuapp.com/");
    }

    buscarUsuarioEmail(email) {
        cy.get(this.campoPesquisa).type(email);
    }

    buscarUsuarioNome(nome) {
        cy.get(this.campoPesquisa).type(nome);
    }

    cadastrarUsuarioNovo(){
        cy.get(this.botaoNovo).click()
    }

    listaUsuarios(){
        cy.get(this.cardUsuarios).should('exist')
    }

    acessoDetalhes(){
        cy.get(this.botaoDetalhes).click()
    }

    removendoUsuario(){
        cy.get(this.botaoRemover).click()
        cy.contains("Confirmar").click()
        cy.contains("Usuário removido!").click()
    
    }
}
    export var pageUsers = new PageUsers();