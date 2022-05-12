Feature: criar usuarios
  Como uma pessoa qualquer
  Desejo registrar informações de usuário
  Para poder manipular estas informações livremente

Scenario: criar usuario
  Given acessei a pagina de criar usuario
  And acessei o cadastro de usuário
  When informo os dados do usuario
  |nome     |Vinicius           |
  |email    |vinicius@gmail.com |
  Then vizualizamos a mensagem "Usuário salvo com sucesso!" 

Scenario: Criar usuario email invalido
  Given acessei a pagina de criar usuario
  And acessei o cadastro de usuário
  When informo os dados do usuario com email invalido
  |nome     |Vinicius           |
  |email    |viniciusgmail.com |
  Then visualizamos uma mensagem de erro email invalido "Formato de e-mail inválido"

Scenario: Criar usuario com nome invalido
  Given acessei a pagina de criar usuario 
  And acessei o cadastro de usuário
  When informo os dados do usuario com o nome invalido
  |nome     |Vin                |
  |email    |vinicius@gmail.com |
  Then visualizamos uma mensagem de erro nome invalido "Informe pelo menos 4 letras para o nome."

  Scenario: Criar usuario com email já existente
  Given acessei a pagina de criar usuario
  And acessei o cadastro de usuário
  When informo dados já existente por outro usuario
  |nome     |Vinicius           |
  |email    |vinicius@gmail.com |
  Then visualizamos uma mensagem de erro de email invalido "Este e-mail já é utilizado por outro usuário."

  Scenario: Cadastrar um nome com mais de 100 caracteres
  Given acessei a pagina de criar usuario
  And acessei o cadastro de usuário
  When informo dados do usuario com nome mais de 100 caracteres
  |nome |viniciusviniciusviniciusviniciusviniciusviniciusviniciusviniciusviniciusviniciusviniciusviniciusviniciusviniciusviniciusviniciusviniciusviniciusviniciusviniciusviniciusv|
  |email|vinicius@gmail.com                                                                                                                                                       |
  Then visualizamos uma mensagem de erro caracteres de nome "Informe no máximo 100 caracteres para o nome"

  Scenario: Cadastrar um e-mail com mais de 60 caracteres
  Given acessei a pagina de criar usuario
  And acessei o cadastro de usuário
  When informo dados do usuario com o email mais de 60 caracteres
  |nome |Vinicius                                                                                                                                                                            |
  |email|vinicius@gmail.comvinicius@gmail.comvinicius@gmail.comvinicius@gmail.comvinicius@gmail.comvinicius@gmail.comvinicius@gmail.comvinicius@gmail.comvinicius@gmail.comvinicius@gmail.com|
  Then visualizamos uma mensagem de erro caracteres de email "Informe no máximo 60 caracteres para o e-mail"
  
