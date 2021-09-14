import { Link } from "react-router-dom";
import NewAdmin from "../components/NewAdmin";
import RegisterComponent from "../components/NewAdmin";
import NewPlayer from "../components/NewPlayer";

const RegisterPage = () => {
  return (
    <div className="body">
      <Link className="generalText" to="/">Voltar à Página Principal</Link>

      <NewPlayer/>
      <NewAdmin/>
    </div>
  )
}

export default RegisterPage;