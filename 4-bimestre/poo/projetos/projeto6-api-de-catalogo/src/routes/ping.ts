import express from "express"

const router = express.Router()

router.get("/", (req, res) => {
    res.json({ pong: true })
})

export default router