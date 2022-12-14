import Porta from "../components/Porta/Porta";
import Presente from "../components/Presente/Presente";

export default function Home() {
  return (
    <div style={{display: 'flex'}}>
      <Porta selecionada/>
      <Porta selecionada/>
      <Porta />
      <Porta />
    </div>
  )
}
