import { useState } from "react"
import instance from "../config/axiosConfig"

const RegisterBoard = (props) => {

  const {idAdmin, refreshBoards} = props
  const [registerName, setRegisterName] = useState("")
  const [registerDate, setRegisterDate] = useState("")
  // const [nameBoard, setNameBoard] = useState("")
  // const [dateEnd, setDateEnd] = useState("")


  const handleClick = (nameRequest, dateRequest) => {
    instance.post(`/admin/createboard`,
    {
      name: nameRequest,
      id_admin: idAdmin,
      date_end: dateRequest,
    })
    .then(r => {
      alert(
        `Board Criado: \n ID :${r.data.id_board}, \n Nome: ${r.data.name}, \n Data Final; ${r.data.date_end}`,
      )
      // setNameBoard(r.data.name)
      // setDateEnd(r.data.date_end)
      refreshBoards(r.data.name)
    })
    .catch(response =>{
      alert('Board não registrado')
    })
  }

  const handleInputName = (event) => {
    setRegisterName(event.target.value)
  }

  const handleInputDate = (event) => {
    setRegisterDate(event.target.value)
  }

  return(
    <div>
      <label htmlFor="name-board">
        Nome do Board:
        <input id="name-board" type="text" onChange = {handleInputName}/>
      </label>
      <label htmlFor="date-board">
        Data de fim do board
        <input id="date-board" type="text" onChange = {handleInputDate} placeholder="YYYY-MM-DD"/>
      </label>
    <button type = "button" onClick={() => handleClick(registerName, registerDate)}>Cadastre Board</button>
    </div>
  );
}

export default RegisterBoard;