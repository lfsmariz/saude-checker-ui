import { Link } from "react-router-dom";
import RegisterComponent from "../components/RegisterComponent";

const RegisterPage = () => {
  return (
    <div className="body">
      <RegisterComponent typeRegister="player"/>
      <RegisterComponent typeRegister="admin"/>

      <Link to="/">Voltar à Página Principal</Link>
    </div>
  )
}

export default RegisterPage;