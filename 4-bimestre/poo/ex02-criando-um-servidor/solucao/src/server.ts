import { createServer } from "node:http"

const port: number = parseInt(process.env.PORT as string) || 3000
const nome: string = "John"
const idade: number = 34

const server = createServer((req, res) => {
  res.end(`Servidor rodando para ${nome}, idade ${idade}!`)
})

server.listen(port, () => {
  console.log(`Servidor funcionando em http://localhost:${port}`)
})

export default server