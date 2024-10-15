// métodos: métodos são funções no qual ele executa alguma coisa
const cesta = ['Maça', 'Banana', 'Manga']

// push: Adiciona um elemento no final do array
cesta.push('Laranja')

// unshift: Adiciona um elemento no começo do array
cesta.unshift('Abacaxi')

// pop: Remove um elemento no final do array
cesta.pop()

// shift: Remove um elemento no começo do array
cesta.shift()

// includes: Verifica se um certo elemento está presente no array 
const inclui = cesta.includes('Banana')

// indexOf: Encontra o índice que possui o elemento indicado, ou -1 caso ele não exista no array
const indice = cesta.indexOf('Manga')

console.log(indice)