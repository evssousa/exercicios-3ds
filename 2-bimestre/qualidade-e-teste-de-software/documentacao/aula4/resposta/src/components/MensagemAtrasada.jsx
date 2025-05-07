import { useEffect, useState } from 'react'

export function MensagemAtrasada() {
    const [mensagem, setMensagem] = useState('')

    useEffect(() => {
        setTimeout(() => {
            setMensagem('Carregado com sucesso!')
        }, 3000) // aparece depois de 3 segundos
    }, [])

    return <p>{mensagem}</p>
}