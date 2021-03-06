Feature: Remover usuário
    Como uma pessoa qualquer
    Desejo remover um usuário
    Para que suas informações não estejam mais registradas

    Background: Acessando a aplicação
        Given acessei a aplicação

    Scenario: Removendo usuário
        When pesquisei por um usuário pelo email
        |email |samba@gmail.com |
        Then removo o usuário pela opção de excluir

    Scenario: Usuário inexistente
        When pesquisei por um usuário pelo nome inexistente
        |nome | samba |
        Then visualizo a mensagem "Ops! Não existe nenhum usuário para ser exibido"