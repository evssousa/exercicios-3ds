<!--
## 📘 **Projeto de Recuperação – "Cartão de Apresentação"**

### 🎯 **Objetivo**

Criar uma página simples em React que exibe um cartão com o **nome** e a **profissão** de uma pessoa, e que, ao clicar em um **botão**, exibe uma **mensagem de boas-vindas**.

---

### 🧩 **Descrição do Projeto**

Você foi convidado a criar um cartão simples de apresentação para um site. Ele deve conter:

- Um **título com o nome** de uma pessoa (ex: João Silva)
- Um **subtítulo com a profissão** (ex: Estudante de Programação)
- Um **botão** com o texto “Mostrar mensagem”
- Quando o botão for clicado, deve aparecer a seguinte mensagem logo abaixo:
    
    “Olá, seja bem-vindo ao meu perfil!”
    

---

### 📂 **Organização do Projeto**

A estrutura será **simples**. Tudo pode estar no mesmo diretório:

```
/cartao-app
├── App.jsx
├── **Cartao.jsx <- componente a ser criado!**
├── index.css
└── main.jsx

```

---

### ✅ **Critérios de Avaliação (Total: 6,0 pontos)**

| Critério | Pontos |
| --- | --- |
| Criou e exibiu corretamente o nome e a profissão usando props | 2,0 |
| Criou um componente separado (`Cartao.jsx`) | 1,0 |
| Usou evento `onClick` para exibir a mensagem | 1,5 |
| Estilizou de forma simples (cores, espaçamento ou borda) | 1,0 |
| JSX sem erros (uso de fragmentos ou elementos organizados) | 0,5 |
| **Total** | **6,0** |

---

### 💡 **Dicas**

- Lembre-se de **importar o componente `Cartao` no `App.jsx`**
- Para mostrar a mensagem, você pode usar uma **variável simples ou o próprio texto direto no botão**
- Estilize com borda, cor de fundo clara, e um pouco de margem/padding
- A mensagem pode ser sempre visível ou aparecer só depois do clique (sem necessidade de `useState`)

---

Boa sorte!
