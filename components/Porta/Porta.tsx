import styles from "./styles.module.css"
import PortaModel from "../../model/porta"


interface PortaProps {
    value: PortaModel
    onChange: (novaPorta: PortaModel) => void
}
export default function Porta(props: PortaProps) {

    const porta = props.value

    const alternarSelecao = e => props.onChange(porta.alternarSeleção())

    const portaSelecionada = 
    porta.selecionada ? 
    styles.estruturaSelecionada : ''


    return (
        <div 
        className={styles.container}
        onClick={alternarSelecao}
        >
            <div 
            className=
            {`${styles.estrutura} ${portaSelecionada}`}>
                <div className={styles.porta} >
                    <div className={styles.numero}>{porta.numero}</div>
                    <div className={styles.macaneta}></div>
                </div>
            </div>

            <div className={styles.basePorta}></div>
        </div>
    )
}