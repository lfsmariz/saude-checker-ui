import axios from "axios"
import { useState } from "react"

const RegisterComponent = (props) => {

  const {typeRegister} = props

  const [register, setRegister] = useState("")
  const [idUser, setIdUser] = useState("")
  const [nameUser, setNameUser] = useState("")


  const handleClick = (nameRequest) => {
    axios.post(`https://saudechecker.herokuapp.com/${typeRegister}/create`,
    {
      name: nameRequest
    })
    .then(r => {
      setNameUser(r.data.name)
      setIdUser(r.data.id)
    })
  }

  const handleInput = (event) => {
    setRegister(event.target.value)
  }

  return(
    <div>
    <input type="text" onChange = {handleInput}/>
    <button type = "button" onClick={() => handleClick(register)}>Cadastre {typeRegister}</button>
    <p>Foi criado o {typeRegister}:</p>
    <p className = "user">Nome: {nameUser}</p>
    <p className = "user">ID: {idUser}</p>
    </div>
  );
}

export default RegisterComponent;