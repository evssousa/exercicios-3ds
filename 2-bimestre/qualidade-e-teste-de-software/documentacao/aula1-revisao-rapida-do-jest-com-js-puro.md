## 🧑‍🏫 **Aula 1 — Revisão Rápida do Jest com JS Puro**

### ✅ **1. Revisão: Conceitos rápidos de Jest**

- `describe()` → agrupar testes
- `test()` ou `it()` → define um teste
- `expect()` → faz uma asserção
- Principais matchers:
    
    ```
    expect(valor).toBe(esperado)
    expect(valor).toEqual(objeto)
    expect(array).toContain(valor)
    expect(fn).toHaveBeenCalled()
    expect(texto).toMatch(/regex/)
    
    ```
    

### ✅ **2. Exemplo simples para revisar**

```
function somar(a, b) {
  return a + b;
}

module.exports = somar;

```

**Arquivo de teste:**

```
const somar = require('./somar');

test('soma de 2 + 3 deve ser 5', () => {
  expect(somar(2, 3)).toBe(5);
});

```

**Execução:**

```bash
npx jest

```

### 🧪 Atividade Proposta:

> Crie um arquivo multiplicar.js com uma função simples e escrevem um teste para verificar o funcionamento.
> 