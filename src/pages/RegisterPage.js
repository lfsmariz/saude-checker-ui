import { Link } from "react-router-dom";
import RegisterComponent from "../components/RegisterComponent";

const RegisterPage = () => {
  return (
    <div className="body">
      <Link to="/">Voltar à Página Principal</Link>

      <RegisterComponent typeRegister="player"/>
      <RegisterComponent typeRegister="admin"/>
    </div>
  )
}

export default RegisterPage;