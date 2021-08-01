import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import instance from "../config/axiosConfig";
import RegisterBoard from "../components/RegisterBoard";


const AdminPage = () => {
  const initStateParams = {
    id: '',
  }

  const initStateAdmin = {
    id: '',
    name: '',
  }

  const [params, setParams] = useState(initStateParams)
  const [admin, setAdmin] = useState(initStateAdmin)

  const searchIdAdmin = () => {
    instance.get(`/admin/${params.id}`)
    .then((res) => setAdmin(res.data))
    .catch(res => {
      alert('Admin não encontrado')
      setAdmin(initStateAdmin)})
  }

  const handleInput = ({target}) => {
    const {name, value} = target;
    const newValue = {...params}
    newValue[name] = value
    setParams(newValue)
  }

  return (
    <div>
      <label htmlFor="input-id">
        Insira aqui o id do Admin:
        <input type="text" id="input-id" name="id" onChange={handleInput}/>
        <button onClick = {searchIdAdmin}>Carregar Admin</button>
      </label>
      <div>
        Carregamos o admin: {admin.id} - {admin.name}
      </div>
      <div>
        <RegisterBoard idAdmin={admin.id}/>
      </div>
      <div>
        <Link to="/">Voltar à Página Principal</Link>
      </div>
    </div>
  )
}

export default AdminPage;