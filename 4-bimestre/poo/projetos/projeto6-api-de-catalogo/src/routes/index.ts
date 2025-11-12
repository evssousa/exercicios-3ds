import express from "express"
import produtoRouter from "./produto"
import pingRouter from "./ping"

const router = express.Router()

router.use("/ping", pingRouter)
router.use("/produtos", produtoRouter)
router.get("/", (req, res) => {
    let nome: string = "Rav"
    let idade: number = 16
    res.json({ nome: nome ,idade: idade})
})

export default router