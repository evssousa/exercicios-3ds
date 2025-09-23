# 🎯 Exercício: Calculadora Organizada

Crie uma função chamada **somar** em `src/calculadora.ts` que receba **dois números** como parâmetros e retorne a soma deles.

---

No `package.json`, adicione um script chamado **start** que execute `calculadora.ts`.

👉 Adicione no tsconfig.json (`npx tsc --init`) o script abaixo:
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "strict": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true,
    "outDir": "./dist"
  },
  "include": ["src", "test"]
}
```

👉 Para rodar os testes o jest com typescript, instale:

```
npm i -D jest ts-jest @types/jest ts-node; npx ts-jest config:init
```

Depois atualize o `package.json` para incluir:

```json
"scripts": {
  "test": "jest"
}
```

Para testar, no terminal:

```bash
npm test

```

Se passar ✅, quer dizer que sua função está correta!
