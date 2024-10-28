const person = {
    name: 'John',
    age: 26,
    friends: ['Lucas', 'Juliana', 'Rafael'],
    address: {
        road: 'Rua das quantas',
        city: 'Bairro dos quinhetos',
        number: 30
    }
}

console.log(person.name)
console.log(person.age)
console.log(person.friends[0])
console.log(person.address.city)

// =============================
const cesta = []

const frutas = {}
frutas.cor = 'Verde'
frutas.nome = 'Limão'
frutas.quantidade = 3
frutas.sabor = true

console.log(frutas.cor)
console.log(frutas.nome)

cesta.push(frutas)
console.log(cesta[0].nome)