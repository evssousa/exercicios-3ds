import { Router } from "express";
import produtosRouter from "./produtos";

const router = Router();

router.get("/ping", (req, res) => {
  res.json({ pong: true });
});

router.get("/", (req, res) => {
  res.json({ nome: "Gustavo", idade: 18 });
});

router.use("/produtos", produtosRouter);

export default router;
