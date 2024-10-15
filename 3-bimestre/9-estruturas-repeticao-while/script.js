let velocity = 80

while (velocity > 0) {
  alert(`O carro está a ${velocity}km/h`)
  velocity -= 20
  alert('Diminuindo 20km/h')

  // 1. utilizando o break
  if (velocity === 40) {
    break
  }
}

alert('O carro parou')