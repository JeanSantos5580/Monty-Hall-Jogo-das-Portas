import { useRouter } from "next/router";
import { useState } from "react";
import Porta from "../components/Porta/Porta";
import { atualizarPortas, criarPortas } from "../functions/portas";
import styles from '../styles/jogo.module.css'

export default function jogo() {

    const [portas, setPortas] = useState(criarPortas(14, 3))

    const renderizarPortas = () => {
        return portas.map(porta => {
            return <Porta key={porta.numero} value={porta}
                onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} />
        })
    }

    const route = useRouter()

    const handleClick = () => {
        route.push('/')
    }

    return (
        <div className={styles.jogo}>
            <div className={styles.botoes}>
                <button onClick={handleClick}
                >
                    Novo Jogo
                </button>
            </div>
            <div className={styles.portas}>
                {renderizarPortas()}
            </div>
        </div>
    )
}