import request from "supertest";
import server from "../src/server";

describe("Testes do Projeto 6 - TechMarket API", () => {
  afterAll(() => {
    server.listen().close();
  });

  it("Deve retornar pong em /ping", async () => {
    const res = await request(server).get("/ping");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ pong: true });
  });

  it("Deve retornar nome e idade em /", async () => {
    const res = await request(server).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("nome");
    expect(res.body).toHaveProperty("idade");
  });

  it("Deve retornar lista de produtos", async () => {
    const res = await request(server).get("/produtos");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body[0]).toHaveProperty("nome");
  });

  it("Deve retornar um produto específico", async () => {
    const res = await request(server).get("/produtos/1");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("id", 1);
  });

  it("Deve permitir cadastrar um novo produto", async () => {
    const novo = { id: 99, nome: "Webcam", preco: 300 };
    const res = await request(server).post("/produtos").send(novo);
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(novo);
  });
});

