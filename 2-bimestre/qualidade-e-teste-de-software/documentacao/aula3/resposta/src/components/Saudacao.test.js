import { render, screen } from '@testing-library/react' // importa ferramentas de teste
import { Saudacao } from './Saudacao' // importa o componente que será testado

test('renderiza a saudação com o nome corretamente', () => {
    // renderiza o componente na "tela virtual"
    render(<Saudacao nome='João' />) // simula o componente aparecendo na tela

    // busca o texto que deve aparecer na tela
    const titulo = screen.getByText('Olá, João!') // busca o elemento com esse texto

    // verifica se o elemento está presente no documento (tela)
    expect(titulo).toBeInTheDocument() // garante que o texto realmente foi renderizado
})