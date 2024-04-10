
# RestFul Api para uma Cardapio Virtual

Você pode adicionar e remover elementos do cardapio por meio dela, 
tambem possui funcionalidades para calcular o imc do usuario

## Autores

- [@MateusSousaSantos](https://www.github.com/MateusSousaSantos)

## Documentação da API

#### Retorna todos os itens

```http
  GET /cardapio/v1/foodData
```

#### Salvar uma comida no cardapio 

```http
  POST cardapio/v1/foodData
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `nome`      | `string` | **Obrigatório**. O nome da comida que você quer salvar  |
| `diaSemana`      | `string` | **Obrigatório**. O dia da semana em que ela estara disponivel|


#### Deletar um Player da DataBase

```http
  GET cardapio/v1/foodData/:comidaId
```
