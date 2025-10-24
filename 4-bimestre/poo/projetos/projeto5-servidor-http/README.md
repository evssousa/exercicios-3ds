PROFESSOR: Everson Sousa | TURMA: 2º EM DESENVOLVIMENTO DE SISTEMAS

DATA DE ENTREGA: 28/out (não haverá uma outra correção)

# 💻 PROJETO 5 – Servidor HTTP com Variáveis de Ambiente

### 🏢 Projeto

Você foi contratado como **desenvolvedor júnior** em uma empresa que está testando a criação de **servidores Node.js** para pequenos serviços internos.

Seu líder técnico pediu que você desenvolvesse um **servidor HTTP básico em TypeScript**, que utilize **variáveis de ambiente** e mostre informações personalizadas.

A ideia é criar um pequeno servidor que, quando acessado no navegador, exiba o nome e a idade do desenvolvedor que está rodando o projeto.

---

## 🎯 Desafio

Crie um servidor HTTP em `src/server.ts` que:

1. **Leia a variável `PORT`** do arquivo `.env`.
2. **Exiba uma mensagem personalizada** no navegador com seu nome e idade.
3. **Mostre no console** em qual porta o servidor está rodando.

---

### 🧩 Exemplo de `.env`

```
PORT=3001
```

### 💻 Exemplo de saída no navegador

```
Servidor rodando para John, idade 34!
```

### 🖥️ Exemplo no console

```
Servidor funcionando em http://localhost:3001
```

---

## 🧪 Observação Importante

Adicione estas linhas **no final do seu `server.ts`** para que o teste automatizado no GitHub Actions funcione corretamente:

```tsx
server.close(() => {
  console.log("Servidor encerrado.")
})

export default server

```

> 💡 Motivo: se o servidor não for encerrado corretamente, o GitHub Action nunca concluirá a verificação dos testes.
> 

Enfim, boas práticas! 🤙