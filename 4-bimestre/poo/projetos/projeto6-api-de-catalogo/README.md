PROFESSOR: Everson Sousa | TURMA: 2º EM DESENVOLVIMENTO DE SISTEMAS

DATA DE ENTREGA: 23/nov

# 🧩 PROJETO 6 - API DE CATÁLOGO DE PRODUTOS

## 🏢 Contexto

A empresa fictícia **TechMarket** está desenvolvendo o back-end de um novo catálogo digital de produtos.

Você foi contratado como **desenvolvedor Node.js com TypeScript** para construir a **primeira versão da API**.

O objetivo é criar uma **API REST simples** com **Express**, que contenha rotas bem organizadas e estruturadas, utilizando boas práticas de modularização e middlewares.

---

## 📁 **Estrutura esperada do projeto**

```
ex06-techmarket
 ┣ 📂 src
 ┃ ┣ 📂 routes
 ┃ ┃ ┣ 📜 index.ts
 ┃ ┃ ┗ 📜 produtos.ts
 ┃ ┗ 📜 server.ts
 ┣ 📜 .env
 ┣ 📜 package.json
 ┗ 📜 README.md

```

---

## 🎯 **Requisitos**

1. Crie um servidor **Express** em `src/server.ts` que:
    - Use os middlewares:
        - `helmet()`
        - `express.json()`
        - `express.urlencoded({ extended: true })`
        - `express.static()` apontando para uma pasta `public`
    - Utilize a variável `PORT` definida no `.env`
    - Mostre no console:
        
        ```
        Servidor rodando em http://localhost:3000/
        
        ```
        
2. Crie o arquivo `src/routes/produtos.ts` com as seguintes rotas:
    - `GET /` → retorna uma lista fixa de produtos (array com 3 objetos)
    - `GET /:id` → retorna um produto específico conforme o ID
    - `POST /` → cadastra um novo produto (adiciona em um array em memória e retorna o produto criado)
3. Crie o arquivo `src/routes/index.ts` que:
    - Importe o router de produtos
    - Use `router.use("/produtos", produtosRouter)`
    - Tenha uma rota `GET /ping` → retorna `{ pong: true }`
    - Tenha uma rota `GET /` → retorna seu nome e idade no formato JSON
4. No `server.ts`, importe o router principal:
    
    ```tsx
    import router from "./routes";
    server.use("/", router);
    
    ```
    

---

## 📦 **Exemplo de resposta**

### **GET /**

```json
{ "nome": "Everson", "idade": 34 }

```

### **GET /produtos**

```json
[
  { "id": 1, "nome": "Mouse Gamer", "preco": 120 },
  { "id": 2, "nome": "Teclado Mecânico", "preco": 350 },
  { "id": 3, "nome": "Monitor Full HD", "preco": 900 }
]

```

### **GET /produtos/2**

```json
{ "id": 2, "nome": "Teclado Mecânico", "preco": 350 }

```

### **POST /produtos**

**Body (JSON):**

```json
{ "id": 4, "nome": "Headset RGB", "preco": 200 }

```

**Resposta:**

```json
{ "id": 4, "nome": "Headset RGB", "preco": 200 }

```

---

## 💡 Dica

Lembre-se de exportar o servidor e encerrar ele ao final do arquivo `server.ts` para o teste automatizado funcionar corretamente:

```tsx
// adicionar no final do seu servidor, depois do parêntese:
.close(() => {
  console.log("Servidor encerrado.");
});

export default server;

```

---

boas práticas! 🤙