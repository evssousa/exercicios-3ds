import { render, screen } from '@testing-library/react'
import { AvisoErro } from './index'

test('se erro estiver presente, o texto deve aparecer', () => {
    render(<AvisoErro erro={'Algo deu errado'} />)

    const msg = screen.getByText('Algo deu errado')
    expect(msg).toBeInTheDocument()
})

test('se erro estiver vazio, o elemento não deve estar presente', () => {
    render(<AvisoErro erro={''} />)

    const msg = screen.queryByText(/.+/) // qualquer texto
    expect(msg).not.toBeInTheDocument()
})