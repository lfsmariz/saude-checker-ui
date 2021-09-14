import { useState } from "react"
import instance from "../config/axiosConfig"

const RegisterPlayer = (props) => {

  const {refreshPlayers, idBoard} = props
  const [idPlayer, setIDPlayer] = useState("")

  const handleClick = () => {
    instance.post(`/admin/registerplayer`,
    {
      "id_player": idPlayer,
      "id_board": idBoard
    })
    .then(r => {
      alert(
        `Player Associado com sucesso: \n Nome :${r.data.name_player}`,
      )
      refreshPlayers(r.data.name)
    })
    .catch(response =>{
      alert('Player não registrado')
    })
  }

  const handleInputAchievementName = (event) => {
    setIDPlayer(event.target.value)
  }

  return(
    <div>
      <label className="generalText" htmlFor="name-player">
        ID do Player:
        <input id="name-player" type="text" onChange = {handleInputAchievementName}/>
      </label>
    <button type = "button" onClick={() => handleClick()}>Registrar Player no Board</button>
    </div>
  );
}

export default RegisterPlayer;