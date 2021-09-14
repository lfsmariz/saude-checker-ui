import axios from "axios"
import { useState } from "react"

const NewAdmin = () => {

  const [register, setRegister] = useState("")
  const [idUser, setIdUser] = useState("")
  const [nameUser, setNameUser] = useState("")


  const handleClick = (nameRequest) => {
    axios.post(`https://snackbarchecker.herokuapp.com/admin/create`,
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
    <h1 className = "titleUser">Criar Admin</h1>
    <input type="text" placeholder="Insira aqui o nome..." onChange = {handleInput}/>
    <button type = "button" onClick={() => handleClick(register)}>Cadastre Admin</button>
    <h3 className = "textTopUser">Foi criado o Admin:</h3>
    <p className = "textUser">Nome: {nameUser}</p>
    <p className = "textUser">ID: {idUser}</p>
    </div>
  );
}

export default NewAdmin;