import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <>
    <h1>Saude Checker</h1>
    <Link to="/admin">
      <div className="divMain">
        <h1 className="tituloMain">Página do administrador</h1>
        <p className="subTituloMain">Visualize todas as funções dos administradores.</p>
      </div>
    </Link>
    <Link to="/player">
    <div className="divMain">
      <h1 className="tituloMain">Página do Player</h1>
      <p className="subTituloMain">Visualize todas as informações do player.</p>
    </div>
    </Link>
    <Link to="/register">
    <div className="divMain">
      <h1 className="tituloMain">Página de Cadastro</h1>
      <p className="subTituloMain">Cadastre seus usuários e administradores.</p>
    </div>
    </Link>
  </>
  )
}

export default MainPage;