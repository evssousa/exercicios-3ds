import express from "express"
import produtoRouter from "./produto"

const router = express.Router()
router.use("/produtos", produtoRouter)

export default router