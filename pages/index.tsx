import { useRouter } from "next/router"

export default function Home() {

    const router = useRouter()

    const handleClick = () => {
        router.push('/jogo')
    }

    return (
        <div>
            <button onClick={handleClick}>Jogar</button>
        </div>
    )
}
