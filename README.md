<h1 align="center">
  <img alt="GoStack" title="GoStack" src="https://camo.githubusercontent.com/8c13dc2618dbd7f76d1d574350b98fdee1335ce5/68747470733a2f2f726f636b6574736561742d63646e2e73332d73612d656173742d312e616d617a6f6e6177732e636f6d2f626f6f7463616d702d6865616465722e706e67" width="200px" />
</h1>

<p align="center">
  <a href="#rocket-resultado">Resultado</a>

</p>

<h2 align="center"> Desafio 4: Introdução ao React </h2>

<h2> Sobre o desafio </h2>

Crie uma aplicação do zero utilizando **Webpack, Babel, Webpack Dev Server e ReactJS**.

Nessa aplicação você irá desenvolver uma interface semelhante com a do Facebook utilizando React.

As informações contidas na interface são estáticas e não precisam refletir nenhuma API REST ou back-end.

<h2>Tela da aplicação</h2>

<img src="https://raw.githubusercontent.com/Rocketseat/bootcamp-gostack-desafio-04/master/.github/facebook.png">

O layout não precisa ficar exatamente igual, você pode utilizar sua criatividade para modificar da maneira que preferir.

O mais importante é que todos elementos apareçam em tela.

O layout da aplicação está nesse [link](https://github.com/Rocketseat/bootcamp-gostack-desafio-04/blob/master/.github/layout.sketch) que pode ser aberto por essa ferramenta gratuita e online: https://www.figma.com/

<h2>Componentes</h2>

Na imagem abaixo destaquei cada componente que você criará e abaixo da imagem está a descrição e responsabilidades de cada um:

<img src="https://raw.githubusercontent.com/Rocketseat/bootcamp-gostack-desafio-04/master/.github/components.png">

**Header (Amarelo):** Responsável por exibir a logo e o link para acessar o perfil;

**PostList (Verde):** Responsável por armazenar os dados da listagem de post, esses dados devem ficar dentro do state do componente e não em uma variável comum, por exemplo:
```js
class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "http://url-da-imagem.com/imagem.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
      {
        id: 2
        // Restante dos dados de um novo post
      }
    ]
  };
}
```

**Post (Vermelho):** Responsável por exibir os dados do post, esses dados devem vir através de uma propriedade recebida do componente PostList, ou seja, lá no PostList você terá algo assim:

```js
posts.map(post => <Post key={post.id} data={post} />);
```

**Comment (Azul):** Responsável por exibir um comentário. Os dados do comentário virão por uma propriedade do componente. Dentro do componente Post você terá um novo .map para listar os comentários do post:
```js
data.comments.map(comment => <Comment key={comment.id} data={comment} />);
```

<h1 href="#rocket-resultado"> Resultado </h1>

<img src="https://github.com/vagnerwentz/facebook-reactjs-layout/blob/master/.github/facebook-layout.png" />
