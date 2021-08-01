import { useState } from "react";
import { Link } from "react-router-dom";
import AchievementList from "../components/AchievementList";
import BoardList from "../components/BoardList";
import CompleteAchievementList from "../components/CompleteAchievementList";
import instance from "../config/axiosConfig";

const PlayerPage = () => {

  const initStateParams = {
    id: '',
    board: '',
    achievement: '',
  }

  const initStatePlayer = {
    id: '',
    name: '',
    points: '',
  }

  const [params, setParams] = useState(initStateParams)
  const [player, setPlayer] = useState(initStatePlayer)
  const [lastAchievment, setLastAchievment] = useState("")

  const searchId = () => {
    instance.get(`/player/${params.id}`)
    .then((res) => setPlayer(res.data))
    .catch(res => {
      alert('Usuário não encontrado')
      setPlayer(initStatePlayer)})
  }

  const handleInput = ({target}) => {
    const {name, value} = target;
    const newValue = {...params}
    newValue[name] = value
    setParams(newValue)
  }

  const redeemAchievement = () => {
    const payload = {
      "id_user": player.id,
      "id_achievement": params.achievement
    }
    instance.post('/player/redeem_achievement', payload)
    .then((res) => {
      setPlayer({...player, points: player.points - +res.data.points})
      setLastAchievment(res.data.name)
    })
    .catch(res => alert("Você não tem pontos suficientes ou o achievement ja foi resgatado"))
  }

  const verifyRedeem = () => {
    if (params.board === '' || player.id === '' || params.achievement === '' ) {
      return true
    }
    return false
  }

  const completeTask = () => {
    instance.post(`/player/complete_task/?id_player=${player.id}`)
    .then((res) => setPlayer(res.data))
  }


  return (
    <div>
      <label htmlFor="input-id">
        Insira aqui o id do Player:
        <input type="text" id="input-id" name="id" onChange={handleInput}/>
        <button onClick = {searchId}>Carregar Player</button>
      </label>
      <div>
        Carregamos o player: {player.id} - {player.name} - {player.points}
      </div>
      <div>
        <button onClick={completeTask} disabled = {player.id === ''}>Completar Tarefa</button>
      </div>
      <div>
        <Link to="/">Voltar à Página Principal</Link>
      </div>
      <div>
        <BoardList typeUser = 'player' idUser = {player.id} handleInput = {handleInput}/>
      </div>
      <div>
        <AchievementList idPlayer = {player.id} idBoard = {params.board} handleInput = {handleInput}/>
      </div>
      <div>
        <button onClick={redeemAchievement} disabled = {verifyRedeem()}>Resgatar Achievement</button>
      </div>
      <div>
        <CompleteAchievementList idPlayer = {player.id} lastAchievement = {lastAchievment}/>
      </div>
    </div>
  )
}

export default PlayerPage;