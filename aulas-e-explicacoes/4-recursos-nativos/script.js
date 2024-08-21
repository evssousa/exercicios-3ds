let nome = 'John'

// retorno no console do navegador
console.log(nome)

// retorno com bloco de erro
console.error(name)

// retorno com bloco de alerta
console.warn(nome)

// representa a aba do navegador (popup)
window.alert(nome)

// permite inserir um conteúdo (input)
nome = window.prompt('Insira seu nome:')
console.log(nome)

// mostra mensagem de confirmação (popup de confirmação)
let confirmacao = window.confirm('Confirmar essa ação?')
console.log(confirmacao)

// o window. ele é o objeto global do navegador, então não há necessidade de usar ele no código