const somar = require('./index')

test('soma de 2 + 3 deve ser 5', () => {
    expect(somar(2, 3)).toBe(5)
})