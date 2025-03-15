#### PROFESSOR: EVERSON SOUSA | TURMA: 3º EM DESENVOLVIMENTO DE SISTEMAS

DATA DE ENTREGA: 12/MAR
# PROJETO 4 – SISTEMA DE NOTAS ESCOLARES

## **1️⃣ Estruturando Arquivos de Testes Corretamente**

### **📌 Onde colocar os arquivos de teste?**

📍 O Jest busca por arquivos de teste de três formas comuns:

1. Arquivos dentro de uma **pasta `__tests__`**.
2. Arquivos com extensão **`.test.js`** (exemplo: `notas.test.js`).
3. Arquivos com extensão **`.spec.js`** (exemplo: `notas.spec.js`).

📌 **Estrutura recomendada para testes:**

```
/meu-projeto
  /src
    notas.js
  /tests
    notas.test.js
  package.json
  jest.config.js

```

✅ **Boa prática:** Separar os arquivos de testes em uma pasta `/tests` para organização.

---

## **2️⃣ Boas Práticas na Escrita de Testes**

### **🔹 Regras para escrever bons testes**

✔️ **Cada teste deve ter um único propósito** (ex: testar só a média, só a aprovação).

✔️ **Evitar testes muito grandes** – cada teste deve ser simples e direto.

✔️ **Usar nomes descritivos** para os testes (`test('deve calcular a média corretamente')`).

✔️ **Utilizar `beforeEach` ou `beforeAll` para preparar o ambiente**, se necessário.

✔️ **Evitar dependência entre testes** (um teste não deve depender do outro para funcionar).

---

## **3️⃣ Criando Testes Reutilizáveis**

Em vez de escrever **código repetitivo**, podemos usar `beforeEach` para preparar o ambiente.

📌 **Exemplo sem `beforeEach` (código repetitivo):**

```
const { calculaMedia } = require('../src/notas');

test('média de [8, 9, 10] deve ser 9', () => {
  expect(calculaMedia([8, 9, 10])).toBe(9);
});

test('média de [5, 5, 5] deve ser 5', () => {
  expect(calculaMedia([5, 5, 5])).toBe(5);
});

```

📌 **Exemplo com `beforeEach` (reutilizando código):**

```
const { calculaMedia } = require('../src/notas');

let notas1, notas2;

beforeEach(() => {
  notas1 = [8, 9, 10];
  notas2 = [5, 5, 5];
});

test('média de notas1 deve ser 9', () => {
  expect(calculaMedia(notas1)).toBe(9);
});

test('média de notas2 deve ser 5', () => {
  expect(calculaMedia(notas2)).toBe(5);
});

```

✅ **Benefício:** Menos repetição de código e testes mais organizados.

---

### Vamos ao projeto! Crie um conjunto de testes para validar três funções:

📌 **Código-base (`notas.js`)**

```
function calcularMedia(notas) {
  if (notas.length === 0) throw new Error('Lista de notas vazia');
  const soma = notas.reduce((acc, nota) => acc + nota, 0);
  return soma / notas.length;
}

function verificaAprovacao(media) {
  return media >= 6 ? 'Aprovado' : 'Reprovado';
}

function adicionarNota(notas, novaNota) {
  if (novaNota < 0 || novaNota > 10) throw new Error('Nota inválida');
  return [...notas, novaNota];
}

module.exports = { calcularMedia, verificaAprovacao, adicionarNota };

```

✅ **O que deve ser testado?**

✔️ Média das notas corretamente.

✔️ Verificação de aprovação.

✔️ Verificação de reprovação.

✔️ Adição de novas notas ao array.
