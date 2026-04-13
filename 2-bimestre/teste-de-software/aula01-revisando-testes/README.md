# 📘 AULA 21: REVISANDO TESTES: COMO ESCREVER TESTES MAIS CLAROS E ORGANIZADOS

## 🎯 Objetivos da aula

- Revisar fundamentos de testes com Jest.
- Aprender a escrever testes **claros, organizados e profissionais**.
- Utilizar `describe` para estruturar testes.
- Aplicar padrões de nomenclatura.
- Entender a separação entre:
    - testes de aprendizado
    - testes de correção (GitHub Actions)

# 🧠 Por que qualidade de teste importa?

Se pergunte:

> Se você abrir um teste daqui a 6 meses, você vai entender ele?
> 

👉 Testes são:

- Documentação
- Garantia de qualidade
- Ferramenta de comunicação entre devs

# 🔎 Problema real (simulação)

Confira o teste abaixo:

```jsx
test("teste 1", () => {
  expect(calcular(10)).toBe(20)
})
```

- O que essa função faz?
- O que está sendo testado?
- Por que 20?

👉 Ninguém sabe.

# ✅ Teste bem escrito

```jsx
test("Deve retornar o dobro quando receber o número 10", () => {
  expect(calcular(10)).toBe(20)
})
```

Agora:

- O comportamento está claro
- O teste vira documentação

# 📌 Regra de ouro

```
Um teste deve ser compreensível sem precisar ler o código da função
```

# 🧱 Estrutura ideal de um teste

Sempre siga o padrão AAA:

```
Arrange (preparação) → Act (execução) → Assert (verificação)
```

## 📄 Exemplo

```jsx
// Importa a função que será testada
const somar = require("../src/index")

describe("Função somar", () => {

  test("Deve retornar 4 quando somar 2 + 2", () => {

    // Arrange (preparação)
    const a = 2
    const b = 2

    // Act (execução)
    const resultado = somar(a, b)

    // Assert (verificação)
    expect(resultado).toBe(4)

  })

})
```

# 📦 Organização com describe

Antes:

```jsx
test("teste 1", ...)
test("teste 2", ...)
```

Depois:

```jsx
describe("Função somar", () => {

  test("Deve somar números positivos", () => { ... })

  test("Deve somar números negativos", () => { ... })

})
```

# 📌 Padrões de nome (IMPORTANTE)

Sempre escreva os testes nesse formato:

```
Deve + ação + condição + resultado
```

Exemplos:

- Deve retornar true quando login for válido
- Deve retornar false quando senha estiver errada
- Deve somar corretamente números negativos

# ⚠️ Erros comuns

- Nome genérico ("teste 1")
- Teste fazendo muitas coisas
- Falta de organização
- Não usar describe
- Teste difícil de entender

Finalizamos essa aula aqui!

_

# 📝 Atividade Rápida

### 📁 Sempre siga essa estrutura:

```
projeto
 ┣ src
 ┣ test        ← aluno (onde você mexe)
 ┣ correction  ← professor (não mexa aqui)
```

## 🎯 Refatorando testes

Refatore os testes abaixo:

- Usar `describe`
- Melhorar nomes
- Aplicar padrão AAA

### 📄 Código (`src/index.js`)

```jsx
// Função de subtração
function subtrair(a, b) {
  return a - b
}

module.exports = subtrair
```

### ❌ Testes ruins

```jsx
const subtrair = require("../src/index")

test("teste 1", () => {
  expect(subtrair(5, 2)).toBe(3)
})

test("teste 2", () => {
  expect(subtrair(10, 5)).toBe(5)
})
```

## 📦 Testes a serem feitos
>Describe: Função subtrair

>Test: Deve retornar 3 quando subtrair 5 por 2

>Test: Deve retornar 5 quando subtrair 10 por 5