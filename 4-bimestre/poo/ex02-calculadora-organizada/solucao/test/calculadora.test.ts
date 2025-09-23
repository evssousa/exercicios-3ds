import { somar } from "../src/index"

describe("Função somar", () => {
  test("Deve somar dois números positivos", () => {
    expect(somar(2, 3)).toBe(5);
  });

  test("Deve somar um número positivo e um negativo", () => {
    expect(somar(10, -4)).toBe(6);
  });
});

