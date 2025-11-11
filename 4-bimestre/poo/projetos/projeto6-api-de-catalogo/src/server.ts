import express from "express"
import helmet from "helmet"
import path from "path"
import router from './routes'

let token:string = process.env.PORT as string

const server = express()

server.use(helmet())
server.use(express.json())
server.use(express.urlencoded({extended: true}))
server.use(express.static(path.join(__dirname, "../public")))

server.use("/", router)

server.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:" + token +"/")
})
