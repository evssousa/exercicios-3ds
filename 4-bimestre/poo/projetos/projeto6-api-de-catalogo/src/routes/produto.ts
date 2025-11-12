import express from "express";

const router = express.Router();

const myProductArr = [
  { id: 1, nome: "Mouse Gamer", preco: 120 },
  { id: 2, nome: "Teclado Mecânico", preco: 350 },
  { id: 3, nome: "Monitor Full HD", preco: 900 }
];

// Rota para listar todos os produtos
router.get("/", (req, res) => {
  res.json( [{ id: 1, nome: "Mouse Gamer", preco: 120 },
  { id: 2, nome: "Teclado Mecânico", preco: 350 },
  { id: 3, nome: "Monitor Full HD", preco: 900 }] )
});

// Rota para pegar um produto específico pelo ID
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const produto = myProductArr.find(p => p.id === id);

  res.json(produto);
});

router.post("/", (req, res) => {
    const newProduct = req.body
    res.json(newProduct)
    myProductArr.push(newProduct)
})

export default router;
