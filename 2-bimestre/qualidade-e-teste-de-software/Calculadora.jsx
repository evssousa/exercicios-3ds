import React from 'react'
import './Calculadora.css'

export default function Calculadora() {
    return (
        <div className="container">
            <h1>Calculadora Simples</h1>

            <input type="number" placeholder="Digite o primeiro número" />
            <input type="number" placeholder="Digite o segundo número" />

            <div className="buttons">
                <button>Somar</button>
                <button>Subtrair</button>
                <button>Multiplicar</button>
                <button>Dividir</button>
            </div>

            <p>Resultado:</p>
        </div>
    )
}