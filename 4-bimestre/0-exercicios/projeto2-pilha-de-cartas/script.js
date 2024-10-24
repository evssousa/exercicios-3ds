let deck = []
let option = ''

do {
    option = prompt(`
        Cartas no baralho: ${deck.length}
        1 - Adicionar uma carta
        2 - Puxar uma carta
        3 - Sair
    `)

    switch (option) {
        case '1':
            const newCard = prompt('Qual é a carta:')
            deck.push(newCard)
            break
        case '2':
            const drawCard = deck.pop()
            if (!drawCard) {
                alert('Não há nenhuma carta no baralho!')
            } else {
                alert(`Você puxou um(a) ${drawCard}`)
            }
        case '3':
            alert('Saindo...')
            break
        default:
            alert('Opção inválida!')
    }
} while (option !== '3')