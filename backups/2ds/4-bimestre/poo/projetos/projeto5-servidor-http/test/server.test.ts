import request from "supertest"
import server from "../src/server"

describe("Teste do servidor HTTP", () => {
  test("Deve exibir mensagem personalizada no navegador", async () => {
    const response = await request(server).get("/")
    expect(response.statusCode).toBe(200)
    expect(response.text).toContain("Servidor rodando para John, idade 34!")
  })
})