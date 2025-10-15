function apresentarPessoa(nome, idade) {
    return `Meu nome é ${nome} e tenho ${idade} anos.`
}

const john = apresentarPessoa("John", 90)
console.log(john)

module.exports = apresentarPessoa