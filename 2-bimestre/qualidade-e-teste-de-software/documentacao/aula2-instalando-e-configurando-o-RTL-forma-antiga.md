## 🧑‍🏫 **Aula 2 — Instalando e Configurando o React Testing Library (RTL)**

### ✅ **1. Criando projeto com Vite**

```bash
npm create vite@latest nome-projeto-react-testes

```

> Escolher React + JavaScript
> 

```bash
cd nome-projeto-react-testes
npm install

```

### ✅ **2. Instalando dependências de teste**

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event babel-jest identity-obj-proxy

```

### ✅ **3. Configurando Babel para suportar JSX nos testes**

Crie um arquivo chamado `babel.config.js`:

```
module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
};

```

### ✅ **4. Configurando Jest**

No `package.json`, adicionar:

```json
"jest": {
  "setupFilesAfterEnv": ["@testing-library/jest-dom/extend-expect"],
  "moduleNameMapper": {
    "\\.(css|less)$": "identity-obj-proxy"
  },
  "testEnvironment": "jsdom"
}

```

### ✅ **5. Criando primeiro componente para teste**

```jsx
// src/components/Button.jsx
export function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}

```

### ✅ **Criando teste do componente**

```
// src/components/Button.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

test('renderiza botão com texto e dispara o clique', () => {
  const mockFn = jest.fn();
  render(<Button label="Clique aqui" onClick={mockFn} />);

  const botao = screen.getByText('Clique aqui');
  fireEvent.click(botao);

  expect(botao).toBeInTheDocument();
  expect(mockFn).toHaveBeenCalled();
});

```

### 💻 Atividade Proposta:

> ```Crie um componente Mensagem que recebe uma prop chamada texto e renderiza um <p>{texto}</p>. Crie um teste para verificar se a mensagem foi renderizada.```
> 