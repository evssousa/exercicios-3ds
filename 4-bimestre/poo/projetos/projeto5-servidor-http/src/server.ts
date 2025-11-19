import { createServer } from "node:http"

let nome = "John"
let idade = 34
let token: string = process.env.PORT as string

const server = createServer((req, res) => {
    res.end(`Servidor rodando para ${nome}, idade ${idade}!`)
})

server.listen(3001, () => {
    console.log(`Servidor funcionando em http://localhost:${token}`)
})

server.close(() => {
  console.log("Servidor encerrado.")
})

export default server