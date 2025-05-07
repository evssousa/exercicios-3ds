import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Mensagem from './Mensagem'

test('renderiza o texto', () => {
    render(<Mensagem texto='Olá, mundo!' />)

    const msg = screen.getByText('Olá, mundo!')
    expect(msg).toBeInTheDocument()
})