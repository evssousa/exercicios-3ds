let speed = 0

// 1. irá executar o "do" pelo menos uma vez mesmo que a condição seja falsa.
do {
  console.log(`A velocidade do veículo é ${speed}km/h.`)
  speed -= 20
} while (speed > 0)

console.log(`Velocidade final: ${speed}km/h.`)