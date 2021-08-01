import axios from "axios"
import { useState } from "react"

const RegisterBoard = (props) => {

  const {idAdmin} = props
  const [registerName, setRegisterName] = useState("")
  const [registerDate, setRegisterDate] = useState("")
  const [nameBoard, setNameBoard] = useState("")
  const [dateEnd, setDateEnd] = useState("")


  const handleClick = (nameRequest, dateRequest) => {
    axios.post(`https://saudechecker.herokuapp.com/admin/createboard`,
    {
      name: nameRequest,
      id_admin: idAdmin,
      date_end: dateRequest,
    })
    .then(r => {
      alert(
        `Board Criado: \n ID :${r.data.id_board}, \n Nome: ${r.data.name}, \n Data Final; ${r.data.date_end}`,
      )
      setNameBoard(r.data.name)
      setDateEnd(r.data.date_end)
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
    <input type="text" onChange = {handleInputName}/>
    <input type="text" onChange = {handleInputDate}/>
    <button type = "button" onClick={() => handleClick(registerName, registerDate)}>Cadastre Board</button>
    </div>
  );
}

export default RegisterBoard;