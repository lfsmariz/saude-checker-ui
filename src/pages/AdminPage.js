import { useState } from "react";
import { Link } from "react-router-dom";
import instance from "../config/axiosConfig";
import RegisterBoard from "../components/RegisterBoard";
import BoardList from "../components/BoardList";
import RegisterAchievement from "../components/RegisterAchievement";
import RegisterPlayer from "../components/RegisterPlayer";
import BoardAchivements from "../components/BoardAchievements";
import BoardPlayers from "../components/BoardPlayers";


const AdminPage = () => {
  const initStateParams = {
    id: '',
    board: '',
  }

  const initStateAdmin = {
    id: '',
    name: '',
  }

  const [params, setParams] = useState(initStateParams)
  const [admin, setAdmin] = useState(initStateAdmin)
  const [lastBoard, setLastBoard] = useState("")
  const [lastAchievement, setLastAchievement] = useState("")
  const [lastPlayer, setLastPlayer] = useState("")

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
        <RegisterBoard idAdmin={admin.id} refreshBoards = {setLastBoard}/>
      </div>
      <div>
        <BoardList typeUser = 'admin' idUser = {admin.id} handleInput = {handleInput} lastBoard={lastBoard}/>
      </div>
      <div>
        <RegisterAchievement idAdmin= {admin.id} refreshAchievements={setLastAchievement}  idBoard = {params.board}/>
      </div>
      <div>
        <RegisterPlayer refreshPlayers = {setLastPlayer} idBoard = {params.board}/>
      </div>
      <div>
        <BoardAchivements idBoard = {params.board} lastAchivement = {lastAchievement}/>
      </div>
      <div>
        <BoardPlayers idBoard={params.board} lastPlayer={lastPlayer}/>
      </div>
      <div>
        <Link to="/">Voltar à Página Principal</Link>
      </div>
    </div>
  )
}

export default AdminPage;