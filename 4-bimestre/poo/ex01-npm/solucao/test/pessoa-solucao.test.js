const apresentarPessoa = require("../pessoa-solucao")

describe("Função apresentarPessoa", () => {
  test("Deve retornar a frase com nome e idade corretos", () => {
    expect(apresentarPessoa("Maria", 25)).toBe("Meu nome é Maria e tenho 25 anos.")
  })
})