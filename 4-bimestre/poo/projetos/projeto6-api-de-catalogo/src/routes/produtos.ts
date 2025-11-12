import { Router, Request, Response } from "express"

const router = Router();

let produtos = [
  { id: 1, nome: "Notebook", preco: 3500 },
  { id: 2, nome: "Mouse Gamer", preco: 150 },
  { id: 3, nome: "Teclado Mecânico", preco: 400 },
]

router.get("/", (req: Request, res: Response) => {
  res.json(produtos)
})

router.get("/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const produto = produtos.find((p) => p.id === id)

  if (!produto) {
    return res.status(404).json({ erro: "Produto não encontrado" })
  }

  res.json(produto)
})

router.post("/", (req: Request, res: Response) => {
  const { nome, preco } = req.body

  if (!nome || !preco) {
    return res.status(400).json({ erro: "Nome e preço são obrigatórios" })
  }

  const novoProduto = {
    id: produtos.length + 1,
    nome,
    preco,
  }

  produtos.push(novoProduto)
  res.status(201).json(novoProduto)
})

export default router