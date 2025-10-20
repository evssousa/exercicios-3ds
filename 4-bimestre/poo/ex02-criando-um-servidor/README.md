# 📝 Atividade

Crie um **servidor HTTP** em `src/server.ts` que:

1. Leia a variável **PORT** do arquivo `.env`.
2. Exiba uma mensagem personalizada com seu **nome** e **idade**.
3. Mostre no console em qual porta o servidor está rodando.

### Exemplo de `.env`

```
PORT=3001
```

### Exemplo de saída no navegador

```
Servidor rodando para John, idade 34!
```

### Exemplo no console

```
Servidor funcionando em http://localhost:3001
```

### Observação

Adicione essas linhas no final do seu servidor para o teste no Action funcionar:

```
server.close(() => {
  console.log("Servidor encerrado.")
})

export default server
```