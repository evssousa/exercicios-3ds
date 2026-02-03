# 👨‍🏫 **PROJETO 4 - SISTEMA DE ESCOLA ONLINE**

**Professor:** Everson Sousa | **Turma:** 2º EM Desenvolvimento de Sistemas

📅 **Início do Desenvolvimento:** 17/set | ⏳ **Prazo Máximo:** 23/set

---

## 📝 Projeto

Você deverá desenvolver um **sistema de gestão escolar simples**, aplicando conceitos de **POO em JavaScript**.

O sistema terá **três tipos de usuários** (Aluno, Professor, Coordenador) e permitirá gerenciar **turmas, disciplinas e notas**.

---

## 🏗️ Arquitetura de Pastas

```
projeto-escola/
│── class/
│   ├── Usuario.js
│   ├── Aluno.js
│   ├── Professor.js
│   ├── Coordenador.js
│   ├── Turma.js
│   ├── Disciplina.js
│   ├── Nota.js
│── test/
│   ├── escola.test.js
│── index.js
```

---

## 🔹 Regras do Sistema

### 👤 Usuários

- `Usuario` será a **classe pai** de `Aluno`, `Professor` e `Coordenador`.
- `Usuario` terá atributos privados `nome` e `idade`, com **getters/setters**.
- `Usuario` terá o método `acessoPainel()` → mensagem genérica “Acesso ao sistema escolar”.

**Herança e Polimorfismo:**

- **Aluno** → sobrescreve `acessoPainel()` com: “Painel do Aluno: consultar notas e disciplinas”.
- **Professor** → sobrescreve `acessoPainel()` com: “Painel do Professor: gerenciar notas e turmas”.
- **Coordenador** → sobrescreve `acessoPainel()` com: “Painel do Coordenador: administração escolar”.

---

### 📚 Disciplinas e Turmas

- `Disciplina` terá: `nome` e `cargaHoraria`.
- `Turma` terá: `nome` e **associação com uma lista de alunos e disciplinas**.

---

### 📝 Notas

- `Nota` terá: valor da nota e a disciplina vinculada.
- Cada aluno poderá receber várias notas associadas a disciplinas diferentes.

---

### 🔹 Saída Esperada

```
A saída esperada é por conta do seu entendimento desse requisito! 
Capriche dev!
```

---

## 💡 Exemplos de Execução Esperada (index.js)

### 1. Criando usuários e acessando painel

```jsx
const aluno = new Aluno("Maria", 16);
const professor = new Professor("João", 35);
const coordenador = new Coordenador("Ana", 40);

console.log(aluno.acessoPainel());
// "Painel do Aluno: consultar notas e disciplinas"

console.log(professor.acessoPainel());
// "Painel do Professor: gerenciar notas e turmas"

console.log(coordenador.acessoPainel());
// "Painel do Coordenador: administração escolar"

```

---

### 2. Criando disciplina, turma e associando aluno

```jsx
const matematica = new Disciplina("Matemática", 80);
const turmaA = new Turma("1ºA");

turmaA.adicionarDisciplina(matematica);
turmaA.adicionarAluno(aluno);

console.log(turmaA.disciplinas);
// [ Disciplina { nome: 'Matemática', cargaHoraria: 80 } ]

console.log(turmaA.alunos);
// [ Aluno { nome: 'Maria', idade: 16 } ]

```

---

### 3. Adicionando nota para o aluno

```jsx
const nota1 = new Nota(8.5, matematica);
aluno.adicionarNota(nota1);

console.log(aluno.notas);
// [ Nota { valor: 8.5, disciplina: Disciplina { nome: 'Matemática', cargaHoraria: 80 } } ]

```

---

## 🧪 **Faça os testes e confira se está tudo correto!**

Você terá uma etapa muito importante nesse projeto (além de ter a saída no terminal informado acima) para saber se tudo está ocorrendo direito. Além da pasta `class`, crie também uma pasta `test`.

Arquivo: `test/escola.test.js`

```jsx
const Aluno = require("../class/Aluno");
const Professor = require("../class/Professor");
const Coordenador = require("../class/Coordenador");
const Disciplina = require("../class/Disciplina");
const Turma = require("../class/Turma");
const Nota = require("../class/Nota");

describe("Sistema de Escola Online", () => {
  test("Aluno deve acessar painel corretamente", () => {
    const aluno = new Aluno("Maria", 16);
    expect(aluno.acessoPainel()).toBe("Painel do Aluno: consultar notas e disciplinas");
  });

  test("Professor deve acessar painel corretamente", () => {
    const professor = new Professor("João", 35);
    expect(professor.acessoPainel()).toBe("Painel do Professor: gerenciar notas e turmas");
  });

  test("Coordenador deve acessar painel corretamente", () => {
    const coordenador = new Coordenador("Ana", 40);
    expect(coordenador.acessoPainel()).toBe("Painel do Coordenador: administração escolar");
  });

  test("Deve adicionar disciplina e aluno à turma", () => {
    const matematica = new Disciplina("Matemática", 80);
    const turmaA = new Turma("1ºA");
    const aluno = new Aluno("Carlos", 15);

    turmaA.adicionarDisciplina(matematica);
    turmaA.adicionarAluno(aluno);

    expect(turmaA.disciplinas.length).toBe(1);
    expect(turmaA.alunos.length).toBe(1);
  });

  test("Aluno deve receber uma nota vinculada a disciplina", () => {
    const matematica = new Disciplina("Matemática", 80);
    const aluno = new Aluno("Pedro", 17);
    const nota = new Nota(9, matematica);

    aluno.adicionarNota(nota);
    expect(aluno.notas[0].valor).toBe(9);
  });
});

```

---

📌 Para rodar os testes e verificar se tudo está ocorrendo direito, instale:

```
npm init -y; npm install jest
```

No `package.json`, faça a modificação:

```
"scripts": {
  "test": "jest"
}
```

E execute para testar:

```
npm test
```

Se tudo estiver correto, o terminal terá uma resposta parecida com essa:

```bash
PASS  test/escola.test.js
  Sistema de Escola Online
    ✓ Aluno deve acessar painel corretamente (3 ms)
    ✓ Professor deve acessar painel corretamente
    ✓ Coordenador deve acessar painel corretamente
    ✓ Deve adicionar disciplina e aluno à turma
    ✓ Aluno deve receber uma nota vinculada a disciplina

```

Enfim, boas práticas! 🤙
