import { render, screen } from '@testing-library/react'
import { MensagemAtrasada } from './MensagemAtrasada'

test('mensagem deve aparecer depois de um tempo', async () => {
    render(<MensagemAtrasada />)

    // findBy: de forma assíncrono, espera o elemento aparecer. Usar quando o elemento aparece depois de um tempo (ex: requisições)
    const msg = await screen.findByText('Carregado com sucesso!')
    expect(msg).toBeInTheDocument()
})