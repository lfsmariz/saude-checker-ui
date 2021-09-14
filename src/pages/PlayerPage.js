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
  const [price, setPrice] = useState("")

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

  const handlePrice = (event) => {
    setPrice(event.target.value)
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
    .catch(res => alert("Você não tem pontos suficientes ou já resgatou algum achievement esse mês"))
  }

  const verifyRedeem = () => {
    if (params.board === '' || player.id === '' || params.achievement === '' ) {
      return true
    }
    return false
  }

  const completeTask = (price) => {
    instance.post(`/player/complete_task?id_player=${player.id}&value=${price}`)
    .then((res) => setPlayer(res.data))
  }


  return (
    <div>
      <div>
        <Link to="/">Voltar à Página Principal</Link>
      </div>

      <div className = "divUser">
        <label htmlFor="input-id">
          Insira aqui o id do Player:
          <input type="text" id="input-id" name="id" onChange={handleInput}/>
          <button onClick = {searchId}>Carregar Player</button>
        </label>
        <div>
          Carregamos o player: {player.id} - {player.name} - {player.points}
        </div>
        <div>
          <label htmlFor="input-price">
            Valor da compra:
          <input type= "text" id = "input-price" name="price" onChange={handlePrice}/>
          <button onClick={() => completeTask(price)} disabled = {player.id === ''}>Adicionar Pontos</button>
          </label>
        </div>
      </div>
      
      <div className = "divUser">
        <h1 className = "titleUser">Seus boards</h1>

        <BoardList typeUser = 'player' idUser = {player.id} handleInput = {handleInput}/>

        <AchievementList idPlayer = {player.id} idBoard = {params.board} handleInput = {handleInput}/>

        <button onClick={redeemAchievement} disabled = {verifyRedeem()}>Resgatar Achievement</button>
      </div>
      
      <div className = "divUser">
        <h1 className = "titleUser">Achievements resgatados</h1>
        <CompleteAchievementList idPlayer = {player.id} lastAchievement = {lastAchievment}/>
      </div>
    </div>
  )
}

export default PlayerPage;