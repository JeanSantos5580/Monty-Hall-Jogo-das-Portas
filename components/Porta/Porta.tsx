import styles from "./styles.module.css"
import PortaModel from "../../model/porta"


interface PortaProps {
    value: PortaModel
    onChange: (novaPorta: PortaModel) => void
}
export default function Porta(props: PortaProps) {

    const porta = props.value
    const portaSelecionada = porta.selecionada && !porta.aberta ? styles.estruturaSelecionada : ''

    const alternarSelecao = e => props.onChange(porta.alternarSeleção())

    const abrir = e => {
        e.stopPropagation()
        props.onChange(porta.abrir())
    }

    const renderizarPorta = () => {
        return (
            <div className={styles.porta} >
                <div className={styles.numero}>{porta.numero}</div>
                <div
                    className={styles.macaneta}
                    onClick={abrir}
                ></div>
            </div>
        )
    }

    return (
        <div
            className={styles.container}
            onClick={alternarSelecao}
        >
            <div className={`${styles.estrutura} ${portaSelecionada}`}>
                {porta.aberta ? false : renderizarPorta()}
            </div>

            <div className={styles.basePorta}></div>
        </div>
    )
}