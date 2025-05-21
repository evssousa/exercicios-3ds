## 📝 Exercício Proposto (15 minutos)

### 📋 Desafio: **Saudação Condicional**

> Crie um componente Saudacao que mostra uma mensagem diferente dependendo da hora do dia.
> 

### ✅ Requisitos:

- Crie um estado `hora` com um valor inicial fixo (por exemplo: 10).
- Use `if`, ternário ou `&&` para exibir:
    - "Bom dia!" se a hora for até 11.
    - "Boa tarde!" se for entre 12 e 17.
    - "Boa noite!" se for 18 ou mais.
- Permita que o usuário digite a hora manualmente com um `<input type="number">`.
- Atualize o estado `hora` com o valor digitado.

## 📝 **Exercício Proposto (20 minutos)**

### 🎯 Desafio: **Lista de Produtos**

> Crie um componente ListaProdutos que renderize uma lista de produtos, com nome e preço.
> 

### ✅ Requisitos:

- Crie um array de objetos com `id`, `nome` e `preco`.
- Renderize cada produto dentro de uma `<li>` com a seguinte estrutura:
    - **Exemplo:** `"Produto: Caderno - R$ 20,00"`
- Use a propriedade `key`.

### 🧩 Dica:

Use `toFixed(2)` para formatar o preço.

### 📌 Resultado Visual Esperado:

```
Lista de Produtos:
- Produto: Caderno - R$ 20.00
- Produto: Lápis - R$ 2.50
- Produto: Borracha - R$ 1.75

```
