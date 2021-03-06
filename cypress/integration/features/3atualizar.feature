Feature: Atualizar um usuário

    Como uma pessoa qualquer
    Desejo atualizar as informações de determinado usuário
    Para ter o registro de suas informações atualizadas

    Background: Acessar cadastro de novo usuário
        Given acessei a aplicação
    
    Scenario: Localizando usuário pelo email
        When pesquisei por um usuário pelo seu email
        |email| vinicius@gmail.com  |
        And acesso o detalhes do usuário pesquisado
        Then visualizo todas as suas informações

    Scenario: Usuário inexistente
        When pesquisei por um usuário pelo seu email
        |email| vini@gmail.com  |
        Then visualizo a mensagem "Ops! Não existe nenhum usuário para ser exibido"

    Scenario: Atualizando dados do usuário
        When pesquisei por um usuário pelo seu email
        |email| vinicius@gmail.com  |
        And acesso o detalhes do usuário pesquisado
        And alterei o nome e o email do usuário por um inexistente
        |nome  |Perigoman            |
        |email |samba@gmail.com      |
        Then visualizo a mensagem "Informações atualizadas com sucesso"
    
    Scenario: Atualizando dados do usuário com email inválido
        When pesquisei por um usuário pelo seu email
        |email |samba@gmail.com |
        And acesso o detalhes do usuário pesquisado
        And alterei o email do usuário por um email invalido
        |email |vinigmail.com |
        Then visualizo a mensagem abaixo do campo email "Formato de e-mail inválido"

    Scenario: Atualizando dados do usuário para um email já existente
        When pesquisei por um usuário pelo seu email
        |email |samba@gmail.com|
        And acesso o detalhes do usuário pesquisado
        And alterei o email do usuário por um email ja existente de outro usuário
        |email |thetheo@perfeito.com|
        Then visualizo um modal com a mensagem "Este e-mail já é utilizado por outro usuário"

    Scenario: Atualizando dados do usuário excedendo o numero de caracteres
        When pesquisei por um usuário pelo seu email
        |email |samba@gmail.com |
        And acesso o detalhes do usuário pesquisado
        And alterei o nome e o email do usuário excedendo o numero de caracteres permitidos
        |nome  |perigomanperigomanperigomanperigomanperigomanperigomanperigomanperigomanperigomanperigomanperigomanperigoman|
        |email |samba@gmail.comsamba@gmail.comsamba@gmail.comsamba@gmail.comsamba@gmail.comsamba@gmail.comsamba@gmail.comsam|
        Then visualizo a mensagem abaixo do campo nome "Informe no máximo 100 caracteres para o nome"
        And visualizo a mensagem abaixo do campo email "Informe no máximo 60 caracteres para o e-mail"