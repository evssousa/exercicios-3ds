// declarando uma função
function ola() {
    // saída da função
    console.log('Olá, mundo!')
}

// chamada da função
ola()

// ==============================
function soma(a, b) {
    const sum = a + b
    console.log(`A soma de ${a} + ${b} é igual à ${sum}`)
}

// o que tem dentro do () indica o "a" e "b" da função soma (function soma), tendo que ser obrigatoriamente declarada na ordem.
soma(2, 3)

// === EXEMPLO COM ALERT =======
function dizerOla(nome) {
    // alert(`Olá, ${nome}!`)
}
dizerOla('John')

// também é possível chamar várias vezes, de forma diferente
dizerOla('Wick')
dizerOla('Rafa')
dizerOla('Maverick')

// === CRIANDO UM OBJETO NA FUNÇÃO ========
function newUser(name, email, password) {
    const user = {
        name: name,
        email: email,
        password: password
    }

    console.log(user)
}
newUser('John', 'john@email.com', 1234)

// === PEQUENO SISTEMA DE VERIFICAÇÃO DE LOGIN ============
function userVerify(name, password) {
    const user = {
        name: name,
        password: password
    }

    if (user.password === 1234) {
        console.log(`Olá ${name}, seja bem vindo!`)
    } else {
        console.log('Senha errada, tente novamente...')
    }
}
userVerify('John', 1234)


function sum(a, b) {
    console.log(a + b)
}
sum(10, '4')
