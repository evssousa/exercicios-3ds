import { render, screen } from '@testing-library/react'
import { MensagemCondicional } from './MensagemCondicional'

// PROCURANDO DE FORMA SINCRONA

test('mensagem deve aparecer quando exibir for true', () => {
    render(<MensagemCondicional exibir={true} />)

    // getBy: procura sincronamente, dá erro se não encontrar. Usar quando o elemento deve estar na tela.
    const msg = screen.getByText('Mensagem visível')
    expect(msg).toBeInTheDocument()
})

test('mensagem não deve aparecer quando exibir for false', () => {
    render(<MensagemCondicional exibir={false} />)

    // queryBy: parecido com getBy, mas não dá erro se não achar. Usar quando o elemento pode ou não estar presente
    const msg = screen.queryByText('Mensagem visível')
    expect(msg).not.toBeInTheDocument()
})