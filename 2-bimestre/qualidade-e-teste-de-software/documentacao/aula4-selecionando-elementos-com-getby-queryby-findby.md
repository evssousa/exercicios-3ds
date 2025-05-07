## 🧑‍🏫 **Aula 4 — Selecionando elementos com `getBy`, `queryBy`, `findBy`**

### ✅ **1. Diferença entre os seletores**

| Método | Descrição curta | Quando usar |
| --- | --- | --- |
| `getBy` | Procura **sincronamente**, dá erro se não encontrar | Quando o elemento **deve** estar na tela |
| `queryBy` | Parecido com `getBy`, mas **não dá erro** se não achar | Quando o elemento pode ou **não estar presente** |
| `findBy` | **Assíncrono**, espera o elemento aparecer | Quando o elemento **aparece depois de um tempo** (ex: requisições) |


### ✅ **2. Criando componente `MensagemCondicional.jsx`**

```jsx
// src/components/MensagemCondicional.jsx
export function MensagemCondicional({ exibir }) {
  return (
    <div>
      {exibir ? <p>Mensagem visível</p> : null}
    </div>
  );
}

```

### ✅ **3. Criando testes com `getBy` e `queryBy`**

```js
// src/components/MensagemCondicional.test.js
import { render, screen } from '@testing-library/react';
import { MensagemCondicional } from './MensagemCondicional';

test('mensagem deve aparecer quando exibir for true', () => {
  render(<MensagemCondicional exibir={true} />);

  const msg = screen.getByText('Mensagem visível');
  expect(msg).toBeInTheDocument();
});

test('mensagem não deve aparecer quando exibir for false', () => {
  render(<MensagemCondicional exibir={false} />);

  const msg = screen.queryByText('Mensagem visível');
  expect(msg).not.toBeInTheDocument();
});

```

### ✅ **4. Exemplo com `findBy` (assíncrono)**

```jsx
// src/components/MensagemAtrasada.jsx
import { useEffect, useState } from 'react';

export function MensagemAtrasada() {
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setMensagem('Carregado com sucesso!');
    }, 1000); // aparece depois de 1 segundo
  }, []);

  return <p>{mensagem}</p>;
}

```

**Teste com `findBy`:**

```jsx
// src/components/MensagemAtrasada.test.js
import { render, screen } from '@testing-library/react';
import { MensagemAtrasada } from './MensagemAtrasada';

test('mensagem deve aparecer depois de um tempo', async () => {
  render(<MensagemAtrasada />);

  // Espera a mensagem aparecer (assíncrono)
  const mensagem = await screen.findByText('Carregado com sucesso!');
  expect(mensagem).toBeInTheDocument();
});

```

### 🧪 Explicação com comentários

```jsx
// getByText - erro se não encontrar
screen.getByText('Texto')

// queryByText - retorna null se não encontrar (sem erro)
screen.queryByText('Texto')

// findByText - espera aparecer, bom pra async
await screen.findByText('Texto')

```

### 💻 Atividade Proposta:

**Componente:** `AvisoErro`

Recebe a prop `erro` e, se ela estiver preenchida, exibe um `<p>` com o erro.

**Testes:**

1. Quando `erro` estiver presente, o texto deve aparecer.
2. Quando `erro` estiver vazio, o elemento **não** deve estar presente.