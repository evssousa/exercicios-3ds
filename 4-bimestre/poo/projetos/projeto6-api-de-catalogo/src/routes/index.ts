import express from "express"
import produtosRouter from "./produtos"

const router = express.Router()

router.use("/produtos", produtosRouter)

router.get("/", (req, res) => {
    res.json({ "nome": "Everson", "idade": 34 })
})

router.get("/ping", (req, res) => {
    res.json({ pong: true})
})



export default router 