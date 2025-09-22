# 🎯 Exercício

No arquivo chamado `pessoa.js`, exporte uma função chamada **apresentarPessoa**.

Essa função deve receber dois parâmetros (`nome` e `idade`) e **retornar** a frase:

```
"Meu nome é {nome} e tenho {idade} anos."
```

No `package.json`, adicione um script chamado **start** que execute `pessoa.js`.

---
👉 Para rodar os testes, atualize o `package.json` para incluir:

```json
"scripts": {
  "start": "node pessoa.js",
  "test": "jest"
}
```
Não esqueça de instalar o Jest para fazer os testes:
```bash
npm install jest -D
```

E para testar, no terminal:

```bash
npm test

```

Se passar ✅, quer dizer que sua função está correta!