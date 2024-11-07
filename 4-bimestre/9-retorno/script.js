// 1. retorno é a saída da função
// o retorno é usado para armazenarmos a saída da função em uma variável
// se não explicitarmos qual deve ser a saída da função, sua saída será undefined

// 2. nesse exemplo, não iremos ter uma resposta pois não temos um meio de mostrar o que a variavel media tem gravado
function media(a, b) {
    const media = (a + b) / 2
}
const result = media(5, 9)
console.log(result)

// 3. para ter um tipo de retorno da variavel media, o codigo deveria ser:
function mediaParcial(a, b) {
    const media = (a + b) / 2
    console.log(media) // esse seria o retorno!
}
media(5 ,9)

// 4. só que o console.log() é um tipo de comando que serve para verificar algo no console. Por isso temos o return, ficando assim:
function mediaFinal(a, b) {
    const media = (a + b) / 2
    return media 
    // aqui estou dizendo que o valor de media deverá ser retornado, ou seja, mostrado um retorno na saida
}
const resultFinal = mediaFinal(5, 9) // iremos gravar a execução da função na variável
console.log(resultFinal) // iremos mostrar o resultado no console, para verificação

// 5. outro exemplo:
function areaRetangular(base, altura) {
    // const calc = base * altura
    return base * altura // também podemos fazer o calculo diretamente no return
}
console.log(areaRetangular(3, 5)) // também podemos colocar nossa função diretamente no console.log()

// 6. mais outro exemplo:
function olaMundo() {
    let texto = '...'
    return texto
    // repare que a partir daqui nada será executado, pois o return encerra a execução
    texto = 'Olá mundo!' 
    console.log(texto)
}
console.log(olaMundo())

// 7. também podemos usar return nos escopos:
function maioridade(idade) {
    if (idade >= 18) {
        return 'Maior de idade'
    } else {
        return 'Menor de idade'
    }
}
console.log(maioridade(20))
console.log(maioridade(13))
