import styles from "./styles.module.css"

export default function Presente() {
    return (
        <div className={styles.container}>
            <div className={styles.presente}>
                <div className={styles.tampa}></div>
                <div className={styles.corpo}>
                    <div className={styles.lacoHorizontal}></div>
                    <div className={styles.lacoVertical}></div>
                </div>
            </div>
        </div>
    )
}