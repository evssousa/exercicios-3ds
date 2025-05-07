## 🧑‍🏫 **Aula 3 — Renderizando componentes com `render()` e fazendo testes simples**

### ✅ **1. Explicando `render()`**

A função `render()` simula o componente React como se estivesse aparecendo no navegador, permitindo interagir com ele e testar como ele se comporta.

### ✅ **2. Criando componente `Saudacao.jsx`**

```jsx
// src/components/Saudacao.jsx
export function Saudacao({ nome }) {
  return <h1>Olá, {nome}!</h1>;
}

```

### ✅ **3. Criando o teste com `render()` e `getByText()`**

```js
// src/components/Saudacao.test.js
import { render, screen } from '@testing-library/react';
import { Saudacao } from './Saudacao';

test('renderiza a saudação com o nome corretamente', () => {
  // Renderiza o componente na "tela virtual"
  render(<Saudacao nome="João" />);

  // Busca o texto que deve aparecer na tela
  const titulo = screen.getByText('Olá, João!');

  // Verifica se o elemento está presente no documento (tela)
  expect(titulo).toBeInTheDocument();
});

```

### 🧪 **Explicando o passo a passo com comentários**

```js
import { render, screen } from '@testing-library/react'; // Importa ferramentas de teste
import { Saudacao } from './Saudacao'; // Importa o componente que será testado

test('renderiza a saudação com o nome corretamente', () => {
  render(<Saudacao nome="João" />); // Simula o componente aparecendo na tela

  const titulo = screen.getByText('Olá, João!'); // Busca o elemento com esse texto

  expect(titulo).toBeInTheDocument(); // Garante que o texto realmente foi renderizado
});

```

### 💻 Atividade Proposta:

**Tarefa:** Criar um componente `BoasVindas` que recebe um `usuário` como prop e renderiza:

```jsx
<p>Bem-vindo, {usuário.nome}!</p>

```

**Teste:** Verificar se o nome do usuário aparece corretamente na tela.