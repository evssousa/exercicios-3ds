const nameChar1 = prompt('Digite o nome do personagem:')
const attackChar1 = parseInt(prompt('Digite o poder de ataque desde personagem [ex: 10]:'))

const nameChar2 = prompt('Digite o nome de outro personagem:')
let lifePointsChar2 = parseInt(prompt('Digite a quantidade de pontos de vida esse personagem tem [ex: 10]:'))
const defensePointsChar2 = parseInt(prompt('Digite o valor do poder de defesa deste personagem [ex: 10]:'))
const shield = true

if (attackChar1 > defensePointsChar2 && shield == false) {
  let damage = attackChar1 - defensePointsChar2
  lifePointsChar2 -= damage
  alert(`${nameChar1} atacou. ${nameChar2} sofreu ${damage} de dano e não possui escudo. Sua vida agora é ${lifePointsChar2}.`)
} else if (attackChar1 > defensePointsChar2 && shield == true) {
  let damage = (attackChar1 - defensePointsChar2) / 2
  lifePointsChar2 -= damage
  alert(`${nameChar1} atacou. ${nameChar2} sofreu ${damage} de dano por possui escudo. Sua vida agora é ${lifePointsChar2}.`)
} else {
  alert(`${nameChar1} atacou, mas não afetou ${nameChar2}. Nenhum dano causado!`)
}