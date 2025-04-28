# CRIANDO PROJETO REACT COM JEST!

### 1. **Crie o projeto com Vite**

Se ainda não tiver o Vite instalado:

```bash
npm create vite@latest nome_do_projeto
```

Depois:

```bash
cd nome_do_projeto
npm install
```

---

### 2. **Instale as dependências de testes**

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom babel-jest
```

```bash
npm install --save-dev jest-environment-jsdom
```

---

### 3. **Configure o Babel**

Crie um arquivo chamado `.babelrc` na raiz do projeto com:

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

E instale os presets:

```bash
npm install --save-dev @babel/preset-env @babel/preset-react
```

---

### 4. **Configure o Jest**

Crie um arquivo `jest.config.js` na raiz do projeto:

```jsx
export default {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy'
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  }
}
```

E instale o `identity-obj-proxy`:

```bash
npm install --save-dev identity-obj-proxy
```

---

### 5. **Crie o setup dos testes**

Arquivo `setupTests.js` na raiz:

```jsx
import '@testing-library/jest-dom'
```

---

### 6. **Crie os arquivos do projeto**

Comece a desenvolver seu projeto em `src/components/Projeto.jsx` .

E depois estilize o projeto em `src/components/Projeto.css` .

No caminho `src/__test__/Projeto.test.js` você desenvolve seu teste

---

### 7. Não esqueça! **Adicione o script no package.json**

Em `"scripts"` no `package.json`, adicione:

```json
"test": "jest"
```

---

### 8. Detalhe importante!

No seus testes, adicione na primeira linha `import React from 'react'` pois ele será necessário para reconhecer alguns detalhes dos seus componentes a partir de agora.

---

### 9.1. Rode seu projeto

!!! Lembre-se: para seu projeto aparecer, é necessário refatorar os arquivos `App.jsx` e `main.jsx`.

```bash
npm run dev
```

---

### 9.2. **Rode os testes**

```bash
npm run test
```
