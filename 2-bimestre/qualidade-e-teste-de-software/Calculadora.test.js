import React from 'react'
import { render, screen } from '@testing-library/react'
import Calculadora from '../components/Calculadora'

describe('Calculadora Simples', () => {
    test('renderiza os inputs', () => {
        render(<Calculadora />) // simula a renderização do componente

        // procura o esperado
        expect(screen.getByPlaceholderText('Digite o primeiro número')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Digite o segundo número')).toBeInTheDocument()
    })

    test('renderiza os botões', () => {
        render(<Calculadora />) // simula a renderização do componente

        expect(screen.getByText('Somar')).toBeInTheDocument()
        expect(screen.getByText('Subtrair')).toBeInTheDocument()
        expect(screen.getByText('Multiplicar')).toBeInTheDocument()
        expect(screen.getByText('Dividir')).toBeInTheDocument()
    })

    test('exibe o parágrafo de resultado', () => {
        render(<Calculadora />) // simula a renderização do componente

        expect(screen.getByText('Resultado:')).toBeInTheDocument()
    })
})