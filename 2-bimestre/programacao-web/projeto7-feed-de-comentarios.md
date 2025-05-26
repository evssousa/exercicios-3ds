PROFESSOR: EVERSON SOUSA | TURMA: 2º EM DESENVOLVIMENTO DE SISTEMAS

DATA DE ENTREGA: 27/mai | Prazo Máximo: 02/jun

# PROJETO 7 - FEED DE COMENTÁRIOS

## 📋 Introdução ao Projeto

### 🏢 Cenário:

> Você foi contratado por uma empresa de mídia digital para desenvolver um Feed de Comentários, onde os usuários poderão deixar opiniões em tempo real sobre uma publicação.

---

## 🔹 Requisitos do Projeto

### Componente Pai: `FeedDeComentarios`

- Gerencia a lista de comentários via `useState`.
- Renderiza os componentes filhos `FormularioComentario` e `ListaComentarios`.

### Componente Filho 1: `FormularioComentario`

- Contém o campo de entrada e o botão "Enviar".
- Envia o comentário ao componente pai por uma função passada via `props`.

### Componente Filho 2: `ListaComentarios`

- Recebe os comentários via `props` e renderiza a lista.

---

### 📁 **Estrutura sugerida**

```
src/
├── components/
│   ├── FeedDeComentarios.jsx
│   ├── FormularioComentario.jsx
│   └── ListaComentarios.jsx
├── App.jsx

```

Base do Design UI inicial do projeto:
![prof7image.png](prof7image.png)

Boas práticas! 🤙
