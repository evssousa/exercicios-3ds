import Express from "express"

const router = Express.Router();

let produtos = [
  { id: 1, nome: "Notebook", preco: 3500 },
  { id: 2, nome: "Mouse Gamer", preco: 150 },
  { id: 3, nome: "Teclado Mecânico", preco: 400 },
]

router.get("/", (req, res) => {
  res.json(produtos)
})

router.get("/:id", (req, res) => {
  const id = Number(req.params.id)
  const produto = produtos.find((p) => p.id === id)

  res.json(produto)
})
router.post("/", (req,res)=>{
  res.json({"id": 99, "nome": "Webcam", "preco": 300 })
})
export default router