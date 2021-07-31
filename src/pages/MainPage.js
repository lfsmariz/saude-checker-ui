import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <>
    <Link to="/admin">
      <div>
        <h1>Página do administrador</h1>
      </div>
    </Link>
    <Link to="/player">
    <div>
      <h1>Página do player</h1>
    </div>
    </Link>
    <Link to="/register">
    <div>
      <h1>Página de Cadastro</h1>
    </div>
    </Link>
  </>
  )
}

export default MainPage;