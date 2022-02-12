# Projeto para demonstar como usar RabbitMQ e nodejs

##  Caso de Uso

* a construção de uma api que pesquise um usuário do github, faça extração de informação do usuário.

## Serviços

* api com duas rotas que  recebe request para buscar informações e colocar na fila, e request para pesquisar o status da requisição no banco.
* Um serviço responsável pro fazer o garimpo de dados do usuário do gitHub e armazenar no banco.
* Um serviço para tratar erro, simplismente pega o erro e armazena no banco.

### Pré-requisitos
* typescript
* mongoDB e mongoose
* rabbitMQ
