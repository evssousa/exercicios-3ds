// array bidimensional é um array de duas dimensões. Chamado na matemática de matriz.

const arr = [
    ['Nível 1', 'Nível 2', 'Nível 3'], 
    ['Nível 4', 'Nível 5', 'Nível 6'], 
]

// para chamar
console.log(arr[0][1]) // para mostrar o nível 2

// criando outro exemplos de um array bidimensional
const matriz = [
    ['l1/c1', 'l1/c2', 'l1/c3'],
    ['l2/c1', 'l2/c2', 'l2/c3'],
    ['l3/c1', 'l3/c2', 'l3/c3'],
]
console.table(matriz)

// adicionar itens a matriz
matriz.push(['nova linha']) // cria uma nova linha

matriz[0].push('l1/c4') // cria uma nova coluna no index 0
console.table(matriz)

// iterar sobre o array
for (let i = 0; i < matriz.length; i++) {
    // para cada linha, cria outra repetição
    for (let j = 0; j < matriz[i].length; j++) {
        const elemento = matriz[i][j]
        console.log(`Posição (${i}, ${j}) Valor ${elemento}`)
    }
    // console.log(matriz[i])
}