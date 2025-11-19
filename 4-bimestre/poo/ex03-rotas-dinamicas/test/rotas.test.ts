import request from "supertest";
import express from "express";

const app = express();

app.get("/ping", (req, res) => res.json({ pong: true }));
app.get("/produtos/:id", (req, res) =>
  res.json({ nome: "Teclado XYZ", preco: 90 })
);
app.get("/voos/:de/:para", (req, res) => {
  const { de, para } = req.params;
  res.json({
    voo: { de: de.toUpperCase(), para: para.toUpperCase(), preco: 1234 },
  });
});

describe("Rotas Express", () => {
  test("GET /ping deve retornar pong", async () => {
    const res = await request(app).get("/ping");
    expect(res.body).toEqual({ pong: true });
  });

  test("GET /produtos/:id deve retornar nome e preço", async () => {
    const res = await request(app).get("/produtos/1");
    expect(res.body).toHaveProperty("nome");
    expect(res.body).toHaveProperty("preco");
  });

  test("GET /voos/:de/:para deve retornar objeto de voo", async () => {
    const res = await request(app).get("/voos/sp/rj");
    expect(res.body.voo.de).toBe("SP");
    expect(res.body.voo.para).toBe("RJ");
  });
});

