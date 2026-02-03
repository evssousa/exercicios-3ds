# 📝 Atividade

Crie um servidor usando **Express** e **TypeScript** que:

1. Utilize os middlewares:
    - `helmet()`
    - `express.json()`
    - `express.urlencoded({ extended: true })`
    - `express.static()` com uma pasta `public`
2. Tenha uma rota **GET “/”** que retorne um JSON com o **seu nome** e **sua idade**.
3. Exiba no console:
    
    ```
    Servidor rodando em http://localhost:3000/
    ```