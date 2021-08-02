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
    <div className = "divUser">
    <h1 className = "titleUser">Criar {typeRegister}</h1>
    <input type="text" placeholder="Inisira aqui o nome..." onChange = {handleInput}/>
    <button type = "button" onClick={() => handleClick(register)}>Cadastre {typeRegister}</button>
    <h3 className = "textTopUser">Foi criado o {typeRegister}:</h3>
    <p className = "textUser">Nome: {nameUser}</p>
    <p className = "textUser">ID: {idUser}</p>
    </div>
  );
}

export default RegisterComponent;