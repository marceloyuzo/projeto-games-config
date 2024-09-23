## Requisitos Funcionais
[ ] - O usuário deve ser capaz de criar uma conta;
[ ] - O usuário deve ser capaz de entrar em sua conta cadastrada;
[ ] - O usuário deve ser capaz de registrar as suas configurações (teclado/mouse/video) em seus respectivos jogos;
[ ] - O usuário deve ser capaz de acessar outros perfis de outros usuários;
[ ] - O usuário deve ser capaz de controlar a privacidade da sua conta;
[ ] - O usuário deve ser capaz de solicitar configurações de novos jogos;


## Regras de Negocio
[ ] - O usuário não deve poder se cadastrar com um e-mail duplicado;
[ ] - O usuário não pode acessar perfis privados;
[ ] - O site deve possuir por padrão as configurações dos seguintes jogos competitivos (CS, Valorant, Deadlock);
[ ] - Admnistradores podem aprovar ou rejeitar solicitações de usuários de novas configurações de jogos;
[ ] -

## Requisitos Não Funcionais
[ ] - A senha do usuário precisa estar criptografada;
[ ] - Os dados da aplicação precisam estar persistidos em um banco PostgresSQL;
[ ] - Todas as listas de dados precisam estar paginadas com 20 itens por página;
[ ] - O usuário deve ser identificado por um JWT (JSON WEB TOKEN);