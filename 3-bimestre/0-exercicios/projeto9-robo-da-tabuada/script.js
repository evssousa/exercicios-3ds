const num = parseFloat(prompt("De qual número você deseja calcular a tabuada?"))
let result = ""

for (let i = 1; i <= 20; i++) {
  result += `-> ${num} x ${i} = ${num * i}\n`
}

alert(`
  Resultado da tabuada de ${num}:
  ${result}\n\n
`)