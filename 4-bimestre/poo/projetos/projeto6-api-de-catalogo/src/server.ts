import express from "express"
import helmet from "helmet"
import path from "path"
import router from "./routes"

const server = express()

const porta = process.env.PORT

server.use(helmet())
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(express.static(path.join(__dirname, "../public")))

server.use("/", router)


server.listen(porta, () => {
    console.log(`Servidor está rodando no link http://localhost:${porta}/`)
}).close(() => {
  console.log("Servidor encerrado.");
})

export default server