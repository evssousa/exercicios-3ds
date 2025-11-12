import express from "express"
import produtosRouter from "./produtos"

const router = express.Router()

router.get("/", (req, res) => {
  let nome: string = "Everson"
  let idade: number = 34
  res.json({ nome, idade })
})
router.get("/ping", (req, res) => {
  res.json({ pong: true })
})

router.use("/produtos", produtosRouter)

export default router