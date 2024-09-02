const meters = parseFloat(prompt('Digite um valor em metros (Ex: 2.5):'))

const option = parseInt(prompt(`
  Agora, selecione uma opção abaixo para converter, entre:
  1 - milímetro (mm)
  2 - centrímetro (cm)
  3 - decímetro (dm)
  4 - decâmetro (dam)
  5 - hectômetro (hm)
  6 - quilômetro (km)
`))

let newValue = 0

switch (option) {
  case 1:
    newValue = meters * 1000
    alert(`${meters}m equivalem à ${newValue.toFixed(2)}mm`)
    break
  case 2:
    newValue = meters * 100
    alert(`${meters}m equivalem à ${newValue.toFixed(2)}cm`)
    break
  case 3:
    newValue = meters * 10
    alert(`${meters}m equivalem à ${newValue.toFixed(2)}dm`)
    break
  case 4:
    newValue = meters / 10
    alert(`${meters}m equivalem à ${newValue.toFixed(2)}dam`)
    break
  case 5:
    newValue = meters / 100
    alert(`${meters}m equivalem à ${newValue.toFixed(2)}hm`)
    break
  case 6:
    newValue = meters / 1000
    alert(`${meters}m equivalem à ${newValue.toFixed(2)}km`)
    break
  default:
    alert('Opção inválida!')
}