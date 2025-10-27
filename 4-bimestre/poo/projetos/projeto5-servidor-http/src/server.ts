import { createServer } from "node:http"
let token: string = process.env.POST as string

const server = createServer((req, res) => {
    res.end("Servidor rodando para Raven, idade 16!!")
})

server.listen(3001, () => {
    console.log("Servidor funcionando em http://localhost:" + token)
})

server.close(() => {
  console.log("Servidor encerrado.")
})

export default server