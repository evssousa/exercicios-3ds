# 📘 AULA 22: CRIANDO TESTES PARA DIFERENTES CENÁRIOS: SUCESSO, ERRO, CASOS LIMITE

## 🎯 Objetivos da aula

- Entender diferentes cenários de teste.
- Criar testes para:
    - Sucesso
    - Erro
    - Casos limite
- Aumentar cobertura de testes.
- Pensar como QA.

# 🧠 Mentalidade de QA

Pense:

> Programador pensa: "funciona?"
> 
> 
> QA pensa: "onde quebra?"
> 

# 🔎 Problema comum

```jsx
expect(dividir(10, 2)).toBe(5)
```

👉 Só testa sucesso.

# 📦 Tipos de cenário

## ✅ 1. Sucesso

Sistema funciona corretamente.

## ❌ 2. Erro

Entrada inválida.

## ⚠️ 3. Caso limite

Valores extremos ou especiais.

# 📊 Exemplo real

## 📄 src/index.js

```jsx
// Função de divisão
function dividir(a, b) {

  // Evita divisão por zero
  if (b === 0) {
    return null
  }

  return a / b
}

module.exports = dividir
```

# 🧪 Testes completos

```jsx
const dividir = require("../src/index")

describe("Função dividir", () => {

  // Sucesso
  test("Deve dividir corretamente 10 por 2", () => {
    expect(dividir(10, 2)).toBe(5)
  })

  // Erro
  test("Deve retornar null ao dividir por zero", () => {
    expect(dividir(10, 0)).toBe(null)
  })

  // Caso limite
  test("Deve retornar 0 ao dividir 0 por 5", () => {
    expect(dividir(0, 5)).toBe(0)
  })

})
```

# 📌 Expandindo cenários (nível mais avançado)

Se pergunte:

👉 E se:

- números negativos?
- valores grandes?
- valores não numéricos?

# 🧪 Exemplos adicionais

```jsx
test("Deve dividir números negativos", () => {
  expect(dividir(-10, 2)).toBe(-5)
})

test("Deve lidar com números grandes", () => {
  expect(dividir(1000000, 2)).toBe(500000)
})
```

Finalizamos a aula aqui!

_

# 📝 Atividade Rápida

## 🎯 Testando sistema de login

Criar testes para:

- Login válido
- Login inválido
- Campos vazios
- Caso extra: usuário correto e senha errada

### 📄 Código (`src/index.js`)

```jsx
function login(usuario, senha) {

  // Validação básica
  if (!usuario || !senha) {
    return false
  }

  // Credenciais fixas
  if (usuario === "admin" && senha === "123") {
    return true
  }

  return false
}

module.exports = login
```

## 📦 Testes a serem feitos
>Describe: Função login

>Test: Deve retornar true para login válido

>Test: Deve retornar false para senha incorreta

>Test: Deve retornar false para usuário incorreto

>Test: Deve retornar false quando dados não forem informados