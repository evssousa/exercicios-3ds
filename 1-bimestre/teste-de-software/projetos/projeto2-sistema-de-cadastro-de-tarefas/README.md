# 📘 PROJETO 2 - Sistema de Cadastro de Tarefas

# 🧩 PROBLEMA

Você foi contratado para desenvolver parte de um sistema simples de **gerenciamento de tarefas**. Esse sistema permitirá registrar tarefas e consultar quantas tarefas existem.

Antes de implementar o sistema, você deve garantir que as **regras de negócio sejam testadas**. Para isso, você deve utilizar **testes automatizados com Jest**.

# 📋 REQUISITOS

Criar um sistema simples para **cadastro de tarefas** com as seguintes regras.

### 📌 Requisito 1 – Cadastro de tarefa

O sistema deve permitir cadastrar uma tarefa com uma função `cadastrarTarefa(descricao)`.

Essa função deve:

- Salvar a tarefa no banco
- Retornar `true` quando o cadastro for realizado

### 📌 Requisito 2 – Descrição obrigatória

Uma tarefa **não pode ser cadastrada sem descrição**.

Se a descrição não existir: `return false`.

### 📌 Requisito 3 – Listar total de tarefas

O sistema deve possuir uma função `totalTarefas()`. Essa função deve retornar **quantas tarefas existem no banco**.

### 📌 Requisito 4 – Banco deve iniciar vazio

Sempre que os testes rodarem, o banco deve começar **sem dados**.

# 📦 ARQUITETURA DO PROJETO

```
projeto
 ┣ database
 ┃ ┗ tarefaDatabase.js
 ┣ services
 ┃ ┗ tarefaService.js
 ┣ controllers
 ┃ ┗ tarefaController.js
 ┣ test
 ┃ ┗ tarefaService.test.js
```

## 🧪 OBS IMPORTANTE: Sempre inicie pelos testes!!!

### 🚀 Desafio Extra (para quem terminar antes e não é obrigatório fazer. Vale +1 ponto extra!)

Adicione essas novas features! Para isso, mande antes um commit do que você fez no projeto até aqui, e só aí você deve iniciar essa nova feature.

### 📌 Requisito extra 1

Criar função `listarTarefas()`, que retorna todas as tarefas.

### 📌 Requisito extra 2

Criar teste que valide:

- lista contém a tarefa cadastrada.

Boas práticas! 🤙