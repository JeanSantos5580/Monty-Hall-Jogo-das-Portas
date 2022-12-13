import styles from "./styles.module.css"

export default function Porta(props) {
    return (
        <div className={styles.container}>
            <div className={styles.porta}>
                <div className={styles.numero}>10</div>
                <div className={styles.macaneta}></div>
            </div>
            <div className={styles.baixo}></div>
        </div>
    )
}