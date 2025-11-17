import { Router } from "express";

const router = Router();

let produtos = [
  { id: 1, nome: "Mouse Gamer", preco: 120 },
  { id: 2, nome: "Teclado Mecânico", preco: 350 },
  { id: 3, nome: "Monitor Full HD", preco: 900 }
];

router.get("/", (req, res) => {
  res.json(produtos);
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const produto = produtos.find((p) => p.id === id);

  res.json(produto);
});

router.post("/", (req, res) => {
  const novo = req.body;
  produtos.push(novo);
  res.status(200).json(novo);
});

export default router;
