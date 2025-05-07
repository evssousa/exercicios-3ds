export function MensagemCondicional({ exibir }) {
    return (
        <div>
            {exibir ? <p>Mensagem visível</p> : null}
        </div>
    )
}