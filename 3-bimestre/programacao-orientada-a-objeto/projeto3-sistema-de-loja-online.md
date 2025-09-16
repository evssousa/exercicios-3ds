PROFESSOR: Everson Sousa | TURMA: 2º EM DESENVOLVIMENTO DE SISTEMAS

DATA DE ENTREGA: 09/set | Prazo Máximo: 15/set<br>
PRÓXIMA CORREÇÃO: 13/set

# **PROJETO 3 - SISTEMA DE LOJA ONLINE**

## 📝 Projeto

Você deverá desenvolver um **sistema de loja online simples**.

O sistema terá dois tipos de usuários:

- **Cliente** → pode visualizar produtos, adicionar ao carrinho e finalizar pedidos.
- **Administrador** → pode adicionar e remover produtos do catálogo da loja.

---

## 🏗️ Arquitetura de Pastas

```
projeto-loja/
│── class/
│   ├── Usuario.js
│   ├── Cliente.js
│   ├── Administrador.js
│   ├── Produto.js
│   ├── Pedido.js
│── test/
│   ├── loja.test.js
│── index.js

```

---

## 🔹 Regras do Sistema

### 👤 Usuários

- `Usuario` será a classe **pai** de `Cliente` e `Administrador`.
- Também terá um método `acessoPainel( )` com a mensagem “Acesso genérico ao sistema”.
- Terá os atributos privados `nome` e `idade`.
- **Herança**:
    - `Cliente` herda de `Usuario` e tem:
        - Um **carrinho** que adicionará os produtos (associação com produtos/pedidos).
        - Irá sobrescrever o método `acessoPainel( )` com a mensagem “Acesso ao painel de compras”.
        - Um método `adicionarProduto( )` que irá adicionar os produtos ao carrinho.
    - `Administrador` herda de `Usuario` e pode:
        - Cadastrar produto.
        - Remover produto.
        - Irá sobrescrever o método `acessoPainel( )` com a mensagem “Acesso ao painel de administrativo”.

### 📦 Produtos

- Cada `Produto` terá:
    - Nome
    - Preço
    - Estoque

### 🛒 Pedidos

- Um `Pedido` será associado a um `Cliente` e conterá uma lista de produtos.
- O valor total do pedido será a soma dos produtos.

---

## 💡 Exemplos de Execução Esperada

1. Cliente adicionando produto ao carrinho:

```jsx
const cliente = new Cliente("Maria", 20);
const produto1 = new Produto("Camisa", 50, 10);

cliente.adicionarProduto(produto1);

console.log(cliente.carrinho);
// [ Produto { nome: 'Camisa', preco: 50, estoque: 10 } ]

```

1. Cliente finalizando pedido:

```jsx
const pedido = new Pedido(cliente, cliente.carrinho);
console.log(pedido.calcularTotal());
// 50

```

1. Administrador adicionando novo produto:

```jsx
const admin = new Administrador("João", 30);
const produto2 = new Produto("Tênis", 200, 5);

admin.adicionarProduto(produto2);
console.log(admin.produtos);
// [ Produto { nome: 'Tênis', preco: 200, estoque: 5 } ]

```

Ao executar o `index.js`, retornará algo dessa forma:

```
Acesso genérico ao sistema.
=================================
Acesso ao painel administrativo.
Produtos cadastrados pelo admin: [
  Produto { nome: 'Camisa', preco: 50, estoque: 10 },
  Produto { nome: 'Tênis', preco: 200, estoque: 5 }
]
=================================
Acesso ao painel de compras.
Carrinho da cliente: [
  Produto { nome: 'Camisa', preco: 50, estoque: 10 },
  Produto { nome: 'Tênis', preco: 200, estoque: 5 }
]
Valor total do pedido: 250
```

---

### 🧪 Faça os testes e confira se está tudo correto!

Você terá uma etapa muito importante nesse projeto (além de ter a saída no terminal informado acima) para saber se tudo está ocorrendo direito. Além da pasta `class`, crie também uma pasta `test`.

Dentro dessa pasta, crie um arquivo com nome `loja.test.js` e cole o código abaixo:

```jsx
const Cliente = require("../class/Cliente");
const Administrador = require("../class/Administrador");
const Produto = require("../class/Produto");
const Pedido = require("../class/Pedido");

describe("Sistema de Loja Online", () => {
  test("Cliente deve conseguir adicionar produtos ao carrinho", () => {
    const cliente = new Cliente("Maria", 20);
    const produto = new Produto("Camisa", 50, 10);
    cliente.adicionarProduto(produto);

    expect(cliente.carrinho.length).toBe(1);
  });

  test("Pedido deve calcular o valor total corretamente", () => {
    const cliente = new Cliente("Maria", 20);
    const produto = new Produto("Camisa", 50, 10);
    cliente.adicionarProduto(produto);

    const pedido = new Pedido(cliente, cliente.carrinho);
    expect(pedido.calcularTotal()).toBe(50);
  });

  test("Administrador deve adicionar produto ao catálogo", () => {
    const admin = new Administrador("João", 30);
    const produto = new Produto("Tênis", 200, 5);
    admin.adicionarProduto(produto);

    expect(admin.produtos.length).toBe(1);
  });

  test("Polimorfismo no acessoPainel de Cliente", () => {
    const cliente = new Cliente("Ana", 22);
    expect(cliente.acessoPainel()).toBe("Acesso ao painel de compras.");
  });

  test("Polimorfismo no acessoPainel de Administrador", () => {
    const admin = new Administrador("Lucas", 25);
    expect(admin.acessoPainel()).toBe("Acesso ao painel administrativo.");
  });
});

```

📌 Para rodar os testes e verificar se tudo está ocorrendo direito, instale:

```bash
npm init -y; npm install jest
```

No `package.json`, faça a modificação:

```json
"scripts": {
  "test": "jest"
}
```

E execute para testar:

```bash
npm test
```

Se tudo estiver correto, o terminal terá uma resposta parecida com essa:

```markdown
 PASS  test/loja.test.js
  Sistema de Loja Online
    √ Cliente deve conseguir adicionar produtos ao carrinho (5 ms)
    √ Pedido deve calcular o valor total corretamente (1 ms)
    √ Administrador deve adicionar produto ao catálogo (1 ms)
    √ Polimorfismo no acessoPainel de Cliente (1 ms)
    √ Polimorfismo no acessoPainel de Administrador (1 ms)

Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        0.608 s
Ran all test suites.
```

Enfim, boas práticas! 🤙
