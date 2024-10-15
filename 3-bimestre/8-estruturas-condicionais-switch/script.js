// 2. por ter a letra b no parâmetro, irá direto para o case 'b', depois irá executar os demais.
switch ('b') {
  case 'a':
    alert('É a letra A')
  case 'b':
    alert('É a letra B')
    // 3. para que não continue executando, o break irá para a execução.
    break
  case 'c':
    alert('É a letra C')
  // 1. default é o resultado padrão caso não caia em nenhum dos cases.
  default:
    alert('Finalizando...')
}

// === OUTRO EXEMPLO ===============================================
const resultado = parseInt(prompt('Digite um número entre 1 à 3:'))

switch (resultado) {
  case 1:
    alert('O número é 1')
    break
  case 2:
    alert('O número é 2')
    break
  case 3:
    alert('O número é 3')
    break
  default:
    alert('Você digitou um número errado...')
}