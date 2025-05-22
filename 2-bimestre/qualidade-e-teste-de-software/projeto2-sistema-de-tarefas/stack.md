### 💼 **Projeto 6 —** Sistema de Tarefas (To-do List) com testes

> 🧪 *Desafio Interno - Protótipo Visual de Lista de Tarefas*
> 
> 
> Você foi contratado por uma startup de tecnologia que está testando ideias de microaplicativos voltados para produtividade. Uma das ideias iniciais é uma aplicação simples de lista de tarefas.
> 
> Seu papel como **desenvolvedor júnior da equipe de Front-end** é criar a interface dessa lista em React e garantir, com testes automatizados, que todos os elementos esperados estão funcionando corretamente na tela.
> 
> ⚠️ **Importante**: Esse projeto faz parte de uma **etapa inicial de prototipação**, sem banco de dados ou funcionalidades avançadas como edição e exclusão. O foco está em **renderização de elementos, input controlado e lista dinâmica.**
> 
> Sua missão:
> 
> - Criar um componente chamado `ListaTarefas.jsx`
> - Adicionar um input controlado
> - Adicionar um botão com texto **Adicionar**
> - Exibir a lista de tarefas na tela usando `.map()`
> - Escrever testes com **React Testing Library** para garantir:
>     1. O input e o botão estão visíveis
>     2. É possível digitar no input
>     3. A tarefa é adicionada corretamente à lista após o clique no botão

### 🗃️ Estrutura sugerida do projeto:

```
/src
 ├── /components
 │    └── ListaTarefas.jsx
 └── /__tests__
      └── ListaTarefas.test.jsx
```

Base do Design UI inicial do projeto:

![image.png](attachment:3e8e4f8d-0e1d-484e-8a49-7994d4160746:image.png)

### **Por fim, o teste deve sair dessa forma:**
```bash
 PASS  src/assets/__tests__/ListaTarefas.test.js
    ✓ renderiza input e botão corretamente (27 ms)
    ✓ adiciona tarefa à lista (9 ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        1.077 s, estimated 2 s
```

Se saiu dessa forma, você completou esse projeto. Parabéns!
