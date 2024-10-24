let queue = []
let option = ''

do {
    let patient = ''
    for (let i = 0; i < queue.length; i++) {
        patient += (i + 1) + 'º - ' + queue[i] + '\n'
    }

    option = prompt(`
        Pacientes: ${patient}
        Escolha uma ação:
        1 - Novo paciente
        2 - Consultar paciente
        3 - Sair
    `)

    switch (option) {
        case '1':
            const newPatient = prompt('Qual é o nome do paciente?')
            queue.push(newPatient)
            break
        case '2':
            const consultedPatient = queue.shift()
            if (!consultedPatient) {
                alert('Não há pacientes na fila!')
            } else {
                alert(`${consultedPatient} foi removido da fila.`)
            }
            break
        case '3':
            alert('Saindo...')
            break
        default:
            alert('Opção inválida!')
            break
    }

} while (option !== '3')