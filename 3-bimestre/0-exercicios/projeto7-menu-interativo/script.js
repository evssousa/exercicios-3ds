let option = ''

do {
    option = prompt(`
        Selecione uma opção abaixo:
        1 - opção um
        2 - opção dois
        3 - opção três
        4 - opção quatro
        5 - encerrar
    `)
    
    switch (option) {
        case '1':
            alert('Opção um selecionada.')
            break
        case '2':
            alert('Opção dois selecionada.')
            break
        case '3':
            alert('Opção três selecionada.')
            break
        case '4':
            alert('Opção quatro selecionada')
            break
        case '5':
            alert('Programa encerrado...')
            break
        default:
            alert('Opção inválida.')
    }
} while (option !== '0')