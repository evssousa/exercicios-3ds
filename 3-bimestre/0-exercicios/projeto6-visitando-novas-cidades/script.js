const turista = prompt("E aí, turista! Qual é o seu nome?")
let cidades = ""
let contagem = 0

let continuar = prompt("Você visitou alguma cidade? (Sim/Não)")

while (continuar === "Sim") {
  let cidade = prompt("Qual é o nome da cidade visitada?")
  cidades += " - " + cidade + "\n"
  contagem++
  continuar = prompt("Você visitou alguma outra cidade? (Sim/Não)")
}

alert(`
  Turista: ${turista}
  Quantidade de cidades visitadas: ${contagem}
  Cidades visitadas: \n${cidades}
`)

// alert(
//   'Turista: ' + tourist +
//   '\nQuantidade de cidades visitadas: ' + count +
//   '\nCidades visitadas: \n' + city
// )