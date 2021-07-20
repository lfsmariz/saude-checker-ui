import axios from "axios";
import { useState } from "react";

const SampleComponent = () => {

  const [nome, setNome] = useState("")
  const [idUser, setIdUser] = useState("")
  const [resultado, setResultado] = useState("")


  const handleClick = (nameRequest) => {
    axios.post('http://localhost:8080/player/create',
    {
      name: nameRequest
    })
    .then(r => {
      setResultado(r.data.name)
      setIdUser(r.data.id)
    })
  }

  const handleInput = (event) => {
    setNome(event.target.value)
  }

  return(
    <div>
    <h1>{resultado} - {idUser}</h1>
    <input type="text" onChange = {handleInput}/>
    <button type = "button" onClick={() => handleClick(nome)}>Bati na api</button>
    </div>
  );
}

export default SampleComponent;