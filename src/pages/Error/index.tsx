import { Link } from 'react-router-dom'
export default function Error() {
    return (
        <>
            <h1>Error 404</h1>
            <h1>Pagina não encontrada</h1>
            <Link to="/">Voltar para home</Link>
        </>
    )
}