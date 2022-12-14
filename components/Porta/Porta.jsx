import styles from "./styles.module.css"

export default function Porta({selecionada}) {

    const portaSelecionada = 
    selecionada ? 
    styles.estruturaSelecionada : ''

    const macanetaSelecionada =  
    selecionada ? 
    styles.macanetaSelecionada : ''

    const numeroSelecionado =  
    selecionada ? 
    styles.numeroSelecionado : ''

    return (
        <div className={styles.container}>

            <div 
            className=
            {`${styles.estrutura} ${portaSelecionada}`}>
                <div className={styles.porta} >
                    <div className={`${styles.numero} ${numeroSelecionado}`}>10</div>
                    <div className={`${styles.macaneta} ${macanetaSelecionada}`}></div>
                </div>
            </div>

            <div className={styles.base}></div>
        </div>
    )
}