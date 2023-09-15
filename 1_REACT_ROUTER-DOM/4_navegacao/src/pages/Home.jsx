import { Link } from "react-router-dom"
import Usuarios from "../../../3_segunda_rota/src/pages/Usuarios"

function Home() {
  return (
    <div>
        <h1>Home</h1>
        <Link to={"/Usuarios"}>Ir para usuários</Link>
    </div>

  )
}

export default Home