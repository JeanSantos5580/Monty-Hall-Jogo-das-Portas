import { useRouter } from 'next/router'
import { useState } from 'react'
import EntradaNumerica from '../EntradaNumerica'
import styles from './styles.module.css'

export default function Menu() {

    const [qtdePortas, setQtdePortas] = useState(3)
    const [comPresente, setComPresente] = useState(0)

    const router = useRouter()

    const handleClick = () => {
        router.push(`/jogo/${qtdePortas}/${comPresente}`)
    }


    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <div className={styles.l1}>
                    <div className={styles.cartao}>
                        Monty Hall
                    </div>
                    <div className={styles.cartao}>
                        <EntradaNumerica
                            text={'Numero de Portas'}
                            value={qtdePortas}
                            onChange={novaQtde => setQtdePortas(novaQtde)} />
                    </div>
                </div>
                <div className={styles.l2}>
                    <div className={styles.cartao}>
                        <EntradaNumerica
                            text={'Porta com Presente'}
                            value={comPresente}
                            onChange={novaPortaComPresente => setComPresente(novaPortaComPresente)} />
                    </div>
                    <div
                        onClick={handleClick}
                        className={styles.cartao}>Novo Jogo</div>
                </div>
            </div>
        </div>
    )
}