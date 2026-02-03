import request from "supertest";
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ nome: "Everson", idade: 34 });
});

describe("Servidor Express Básico", () => {
  test("Deve retornar nome e idade em JSON", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("nome");
    expect(response.body).toHaveProperty("idade");
  });
});