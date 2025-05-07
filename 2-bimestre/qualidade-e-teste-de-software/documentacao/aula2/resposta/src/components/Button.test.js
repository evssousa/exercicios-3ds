import { render, screen, fireEvent } from "@testing-library/react"
import '@testing-library/jest-dom'
import { Button } from './Button'

test('renderiza botão com texto e dispara o clique', () => {
    // Criamos uma função simulada (mock) com jest.fn()
    const mockFn = jest.fn()
    render(<Button label="Clique aqui" onClick={mockFn} />)

    const botao = screen.getByText('Clique aqui')
    fireEvent.click(botao)

    expect(botao).toBeInTheDocument()
    expect(mockFn).toHaveBeenCalled()
})