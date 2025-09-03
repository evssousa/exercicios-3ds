PROFESSOR: EVERSON SOUSA | TURMA: 2º EM DESENVOLVIMENTO DE SISTEMAS

DATA DE ENTREGA: 26/ago| Prazo Máximo: 01/set <br>
DATA DA 2º CORREÇÃO: até 10/set

# 🏗️ Projeto 2 – Sistema de Cadastro de Usuários

### 📖 Projeto:

Você foi contratado como backEnd para desenvolver um **mini-sistema de cadastro de usuários** em JavaScript, utilizando **Programação Orientada a Objetos**.

O sistema deve permitir:

1. Criar usuários com **nome, idade e e-mail**.
2. Definir uma **mensagem de boas-vindas** que só pode ser acessada através de um **método getter**.
3. Controlar se o usuário está **ativo ou inativo** (encapsulamento com `getter` e `setter`).
4. Ter um método que **mostre os dados do usuário**.
5. Utilizar **métodos estáticos** para contar quantos usuários foram criados até o momento.
6. Não pode usar arrays ou estruturas de repetição **dentro da classe**. (Apenas condicionais `if/else`).

---

## 📚 Estrutura:

- **Classe `Usuario`** com:
    - Construtor (`nome`, `idade`, `email`).
    - Propriedade privada `#ativo`.
    - Getter/Setter para `ativo`. (Retorno no index deve ser `true` ou `false`)
    - Getter `boasVindas` para retornar: `"Bem-vindo, NOME!"`.
    - Método `mostrarDados()` para exibir informações do usuário (`console.log`).
    - Variável estática `totalUsuarios`.
    - Método estático `contarUsuarios()` para exibir o total de usuários criados.
- Você irá utilizar o `prompt-sync` para ter dados dinâmicos, então faça essas perguntas:
    - Digite o nome do usuário:
    - Digite a idade do usuário:
    - Digite o email do usuário:
    - Usuário ativo? [S/N]:
    - Deseja adicionar outro usuário? [S/N]:
- No terminal, quando a pergunta “Deseja adicionar outro usuário” for “N”, o retorno irá sair algo parecido com:

```
Bem-vindo, Alice!
Nome: Alice
Idade: 20
Email: alice@email.com
Ativo: true
==========================
Bem-vindo, Bruno!
Nome: Bruno
Idade: 25
Email: bruno@email.com
Ativo: false
Total de usuários criados: 2
```

**OBS: Muita atenção nas perguntas que precisam de condicionais [S/N], pois se o usuário digitar outra letra, é para retornar a mensagem `Dado incorreto!` e o sistema deve ser encerrado. Não importa se o usuário digitar S ou N na forma maiúscula ou minúscula.**

---

## 🛠 Faça os testes e confira se está tudo correto!

Você terá uma etapa muito importante nesse projeto (além de ter a saída no terminal informado acima) para saber se tudo está ocorrendo direito. Além da pasta `class`, crie também uma pasta `test`.

Dentro dessa pasta, crie um arquivo com nome `usuario.test.js` e cole o código abaixo:

```jsx
const Usuario = require("../class/Usuario") // supondo que o código esteja em usuario.js

test("Deve criar um usuário e retornar mensagem de boas-vindas", () => {
  const user = new Usuario("Carlos", 30, "carlos@email.com")
  expect(user.boasVindas).toBe("Bem-vindo, Carlos!")
})

test("Deve ativar e desativar usuário corretamente", () => {
  const user = new Usuario("Duda", 22, "duda@email.com")
  user.ativo = true
  expect(user.ativo).toBe(true)
  user.ativo = false
  expect(user.ativo).toBe(false)
})

test("Deve contar usuários criados corretamente", () => {
  const totalAntes = Usuario.totalUsuarios
  new Usuario("Edu", 28, "edu@email.com")
  expect(Usuario.totalUsuarios).toBe(totalAntes + 1)
})
```

📌 Para rodar os testes e verificar se tudo está ocorrendo direito, instale:

```bash
npm init -y; npm install jest
```

No `package.json`, faça a modificação:

```json
"scripts": {
  "test": "jest"
}
```

E execute para testar:

```bash
npm test
```

Se tudo estiver correto, o terminal terá uma resposta parecida com essa:

```markdown
 PASS  test/usuario.test.js
  √ Deve criar um usuário e retornar mensagem de boas-vindas (3 ms)
  √ Deve ativar e desativar usuário corretamente
  √ Deve contar usuários criados corretamente

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        0.344 s, estimated 1 s
Ran all test suites.
```

Lembrem das coisas de lógica de programação!

Enfim, boas práticas! 🤙
