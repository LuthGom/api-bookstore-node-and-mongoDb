<h1>BookStore  Rest API</h1>

### Descrição:

<p>A aplicação é uma funcionalidade back-end que gera e gerencia cadastros de livros, autores e editoras (entidade a ser implementada em breve), para uma livraria. Para o projeto foi utilizado o MongoDB Atlas para segurar os dados na nuvem, utilizando o mongoose para conectar à aplicação. Além disso, a API conta com todo o CRUD,além de endpoints de busca personalizada, utilizando os respectivos métodos HTTP, e montada em camadas de arquitetura MVC.</p>

## Status dp Projeto

![Bagde](https://img.shields.io/badge/Status%20do%20Projeto-Concluído-red)

## Ferramentas necessárias:

<p>Atenção nesta parte, pois para utilizar esta Api você precisará instalar algumas ferramentas fundamentais na sua máquina, como: <a href="https://www.gitkraken.com/download?utm_term=git&utm_campaign=1+%7C+1+GK+Git+GUI+-+Search&utm_source=adwords&utm_medium=ppc&hsa_acc=1130375851&hsa_cam=393455543&hsa_grp=23981425823&hsa_ad=550570964612&hsa_src=g&hsa_tgt=kwd-247385313&hsa_kw=git&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQiA-qGNBhD3ARIsAO_o7ym_H2X6ZGqwCZJqFF5FFzq4fVkZ1h6JujQY4yk9UI5bf2cnWf-Ez-EaAstwEALw_wcB">Git</a> e o JavaScript com <a href="https://nodejs.org/en/download/">NodeJS</a>, além do gerenciador de pacotes npm e a framework express. 
<strong>Observação</strong> é recomendável a utilização de um editor de código que tenha familiaridade, caso não tenha com nenhum, recomenda-se o <a href="https://code.visualstudio.com/download">VsCode</a> pela intuitividade do mecanismo. </p>

### Dependências:

![Badge](https://img.shields.io/badge/"express"-"%5E4.17.1"-red)
![Badge](https://img.shields.io/badge/"mongoose"-"%5E5.0.2"-red)
![Badge](https://img.shields.io/badge/"cors"-"%5E2.8.5"-red)

### Dependências de desenvolvimento:

![Badge](https://img.shields.io/badge/"nodemon"-"%5E2.0.15"-red)

## Iniciando passo a passo:

<ul> 
<li>Após a instalação das ferramentas, acesse o local em sua máquina onde deseja clonar o repositório, abra o terminal "Git Bash"
e rode o seguinte comando no terminal:</li>
<li> <strong>git clone https://github.com/LuthGom/restaurante-cliente-API.git </strong></li>
<li>Com o repositório aberto, instale as dependências necessárias com o seguinte comando no terminal:</li>
<li> <strong>npm install </strong></li>
<li>Para instalar as dependências de desenvolvimento, rode o comando abaixo no terminal:</li>
<li><strong> npm install nodemon --save-dev</strong></li>
<li>Para iniciar a aplicação basta rodar o comando abaixo via terminal:</li>
<li><strong> npm start</strong></li>
<li> O servidor iniciará na porta:3000 - acesse: http://localhost:3000/clientes</li>

## Atenção:

<p>É essencial salientar que a versão do NodeJs utilizada para desenvolvimento é a v16.14.0 x LTS, ou seja, é pertinente a instalação de versão igual ou superior para a impecável execução da mesma.</p>

## Rotas da API

### 📚 BOOKS 📚

| Método     | Rota            | Descrição                  |
| ---------- | --------------- | -------------------------- |
| **GET**    | `/books`        | Lista todos os livros      |
| **GET**    | `/despesas{id}` | Busca o livro pelo {id}    |
| **POST**   | `/books`        | Adiciona um novo livro     |
| **PATCH**  | `/books/:{id}`  | Atualiza o livro pelo {id} |
| **DELETE** | `/books/:{id}`  | Deleta o livro pelo {id}   |

### ✍ AUTOR ✍

| Método | Rota | Descrição |
| **GET** | `/authors` | Lista todos os autores |
| **GET** | `/authors/:{id}` | Busca o autor pelo {id} |
| **POST** | `/authors` | Adiciona um novo autor |
| **PATCH** | `/authors/:{id}` | Atualiza o autor pelo {id} |
| **DELETE** | `/authors/:{id}` | Deleta o autor pelo {id} |

## Campos necessários para cadastrar um novo livro:

```json
{
    "titulo": string ("obrigatório"),
    "autor": {stringo - ObjectId} ("obrigatório"),
    "editora": string ("obrigatório"),
    "numerosPaginas": number
}
```

## Campos necessários para cadastrar um novo Autor:

```json
{
    "nome": string ("obrigatório"),
    "nacionalidade": string
}
```
## Autor 🌈
<a href="https://www.linkedin.com/in/dev-luciano-mendes/">Luciano Mendes(Luth🌈) | Clique aqui para o meu Linkedin</a>
<p>Um ex quase professor de Química!
Depois de 3 anos cursando a Licenciatura, abandonei a graduaçao antes que entrasse em moldes sociais rígidos
e perdesse o viés educacional presente em mim!</p>