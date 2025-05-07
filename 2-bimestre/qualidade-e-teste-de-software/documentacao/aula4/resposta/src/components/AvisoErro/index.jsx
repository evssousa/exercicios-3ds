export function AvisoErro({ erro }) {
    return (
        <div>
            {erro ? <p>{erro}</p> : null}
        </div>
    )
}