let amount = parseInt(prompt('Quanto de dinheiro disponível você tem (Ex: 1200):'))

let option = ''
do {
  option = prompt(`
  Valor atual na carteira: R$${amount.toFixed(2)}
  Selecione uma das opções abaixo:
  1 - Adicionar dinheiro
  2 - Remover dinheiro
  0 - Sair
`)

  switch (option) {
    case '1':
      let add = parseInt(prompt('Quanto deseja adicionar (Ex: 500):'))
      amount += add
      break
    case '2':
      let remove = parseInt(prompt('Quanto deseja retirar (Ex: 300):'))
      amount -= remove
      break
    case '0':
      alert('Saindo do programa...')
      break
    default:
      alert('Você digitou uma opção inválida.')
  }
} while (option !== '0')