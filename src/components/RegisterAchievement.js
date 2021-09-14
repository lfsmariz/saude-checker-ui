import { useState } from "react"
import instance from "../config/axiosConfig"

const RegisterAchievement = (props) => {

  const {idAdmin, refreshAchievements, idBoard} = props
  const [registerNameAchievement, setRegisterNameAchievement] = useState("")
  const [registerPointAchievement, setRegisterPointAchievemen] = useState("")
  const [registerPlanType, setRegisterPlanType] = useState("")


  const handleClick = () => {
    instance.post(`/admin/createachievement`,
    {
      "name": registerNameAchievement,
      "id_admin": idAdmin,
      "id_board": idBoard,
      "points": registerPointAchievement,
      "plan_type": registerPlanType,
    })
    .then(r => {
      alert(
        `Achievement Criado: \n ID :${r.data.id}, \n Nome: ${r.data.name}, \n Pontos: ${r.data.points}, \n Board: ${r.data.board_name}, \n Plan: ${r.data.plan_type}`,
      )
      refreshAchievements(r.data.name)
    })
    .catch(response =>{
      alert('Achievement não registrado')
    })
  }

  const handleInputAchievementName = (event) => {
    setRegisterNameAchievement(event.target.value)
  }

  const handleInputAchievementPoints = (event) => {
    setRegisterPointAchievemen(event.target.value)
  }

  const handleInputPlanType = (event) => {
    setRegisterPlanType(event.target.value)
  }

  return(
    <div>
      <label htmlFor="name-achievement">
        Nome do Achievement:
        <input id="name-achievement" type="text" onChange = {handleInputAchievementName}/>
      </label>
      <label htmlFor="date-board">
        Pontuação do Achievement:
        <input id="date-board" type="text" onChange = {handleInputAchievementPoints} placeholder="1000"/>
      </label>
      <label htmlFor="plan-type">
        Tipo do Achievement:
        <input id="plan-type" type="text" onChange = {handleInputPlanType} placeholder="10"/>
      </label>
    <button type = "button" onClick={() => handleClick()}>Cadastre Achievement</button>
    </div>
  );
}

export default RegisterAchievement;