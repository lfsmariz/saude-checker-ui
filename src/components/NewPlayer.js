import axios from "axios"
import { useState } from "react"

const NewPlayer = () => {

  const [register, setRegister] = useState("")
  const [idUser, setIdUser] = useState("")
  const [nameUser, setNameUser] = useState("")
  const [vipUser, setVipUser] = useState(true)
  const [vipRegister, setVipRegister] = useState(true)


  const handleClick = (nameRequest, vipRequest) => {
    axios.post(`https://snackbarchecker.herokuapp.com/player/create`,
    {
      name: nameRequest,
      vip: vipRequest
    })
    .then(r => {
      setNameUser(r.data.name)
      setIdUser(r.data.id)
      setVipUser(r.data.vip)
    })
  }

  const handleInput = (event) => {
    setRegister(event.target.value)
  }

  const handleVip = (event) =>{
      setVipRegister(!vipRegister)
  }

  return(
    <div className = "divUser">
    <h1 className = "titleUser">Criar Player</h1>
    <input type="text" placeholder="Insira aqui o nome..." onChange = {handleInput}/>
    <input type = "checkbox" id = "vip" name = "subscribe" defaultChecked= "vipRegister"  onChange = {handleVip}/>
    <label className= "generalText" for = "vip"> VIP </ label>
    <button type = "button" onClick={() => handleClick(register, vipRegister)}>Cadastre Player</button>
    <h3 className = "textTopUser">Foi criado o player:</h3>
    <p className = "textUser">Nome: {nameUser}</p>
    <p className = "textUser">ID: {idUser}</p>
    </div>
  );
}

export default NewPlayer;