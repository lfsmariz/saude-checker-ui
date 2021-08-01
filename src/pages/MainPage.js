import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <>
    <h1>Saude Checker</h1>
    <Link to="/admin">
      <div>
        <h1 className="btnMain">Página do administrador</h1>
      </div>
    </Link>
    <Link to="/player">
    <div>
      <h1 className="btnMain">Página do player</h1>
    </div>
    </Link>
    <Link to="/register">
    <div>
      <h1 className="btnMain">Página de Cadastro</h1>
    </div>
    </Link>
  </>
  )
}

export default MainPage;