import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Porta from "../../../components/Porta/Porta";
import { atualizarPortas, criarPortas } from "../../../functions/portas";
import styles from '../../../styles/jogo.module.css'

export default function jogo() {

    const [valido, setValido] = useState(false)
    const [portas, setPortas] = useState([])
    
    const route = useRouter()

    const renderizarPortas = () => {
        return portas.map(porta => {
            return <Porta key={porta.numero} value={porta}
                onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} />
        })
    }
    
    useEffect(()=>{
        const portas = +route.query.portas
        const temPresente = +route.query.temPresente
        
        const qtdePortasValida = portas >= 3 && portas <= 100

        const  temPresenteValido = temPresente >=1 && temPresente <= portas

        setValido(qtdePortasValida && temPresenteValido)
    }, [portas])

    useEffect(()=>{
        const portas = +route.query.portas
        const temPresente = +route.query.temPresente
        setPortas(criarPortas(portas, temPresente))
    }, [route?.query])

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
                {valido ? renderizarPortas() : <h2>Valores Inválidos</h2>}
            </div>
        </div>
    )
}