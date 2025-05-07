import { render, screen } from '@testing-library/react'
import { BoasVindas } from './BoasVindas'

test('renderiza a mensagem de boas vindas do usuário', () => {
    const usuarioTeste = {
        nome: 'Everson'
    }

    render(<BoasVindas nome={usuarioTeste} />)

    const msg = screen.getByText('Bem-vindo, Everson!')
    expect(msg).toBeInTheDocument()
})