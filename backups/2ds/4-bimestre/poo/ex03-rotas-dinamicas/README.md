Crie um servidor Express que contenha as seguintes rotas:

1. **GET /ping** → Retorna `{ pong: true }`
2. **GET /produtos/:id** → Retorna um JSON com `nome` e `preco`
3. **GET /voos/:de/:para** → Retorna um JSON no formato:

```json
{
  "voo": {
    "de": "SP",
    "para": "RJ",
    "preco": 1234
  }
}

```