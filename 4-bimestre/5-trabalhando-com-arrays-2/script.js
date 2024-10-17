// cortar e concatenar
// slice (cortar): cria uma cópia do array
const cesta = ['banana', 'manga', 'abacaxi', 'limão', 'caju']
const frutas = cesta.slice(1, 3)
console.log(cesta) // mostra o array completo
console.log(frutas) // mostra o array cortado
// também é possível
const outros = cesta.slice(-4)
console.log(outros) // mostra do manga (que é -4) para frente

// concat (juntar)
const novasFrutas = ['acerola', 'jambo']
const novaCesta = cesta.concat(novasFrutas, 'carambola')
console.log(novaCesta)

// substituindo elementos
// splice (remover grupo de elementos e substituir por outros)
const a = cesta.splice(2, 1, 'laranja') // indice, quantidade, item a ser substituido
console.log(cesta) // mostra que trocou
console.log(a) // mostra o que tirou e está guardado na variável

// iterar sobre os elementos do array
for (let i = 0; i < cesta.length; i++) {
    const elemento = cesta[i]
    console.log(elemento + ' se encontra na posição ' + i)
}