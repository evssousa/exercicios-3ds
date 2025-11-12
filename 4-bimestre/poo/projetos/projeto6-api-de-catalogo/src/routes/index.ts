import express from "express"
import produtoRouter from "./produto"

const router = express.Router()

router.use("/produtos", produtoRouter)
router.get("/", (req, res) => {
    let nome: string = "Rav"
    let idade: number = 16
    res.json({ nome: nome ,idade: idade})
})
router.get("/ping", (req, res) => {
    res.json({ pong: true })
})

export default router