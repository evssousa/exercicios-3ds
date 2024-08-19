let primeiroNome = prompt('Digite seu primeiro nome:')
let sobrenome = prompt('Digite seu sobrenome:')
let curso = prompt('Digite seu curso da base técnica:')
const anoNascimento = parseInt(prompt('Digite seu ano de nascimento:'))

let idade = 2024 - anoNascimento

alert(`
    Olá ${primeiroNome} ${sobrenome}
    Então você estuda ${curso} e tem ${idade} anos. Legal!
`)