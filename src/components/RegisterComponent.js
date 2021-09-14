import axios from "axios"
import { useState } from "react"
import instance from "../config/axiosConfig"

const RegisterComponent = (props) => {

  const {typeRegister} = props

  const [register, setRegister] = useState("")
  const [plantype, setPlantype] = useState("")
  const [idUser, setIdUser] = useState("")
  const [nameUser, setNameUser] = useState("")
  const [planTypeReceive, setPlanTypeReceive] = useState("")


  const handleClick = (nameRequest, plantype) => {
    instance.post(`/${typeRegister}/create`,
    {
      name: nameRequest,
      planType: plantype
    })
    .then(r => {
      setNameUser(r.data.name)
      setIdUser(r.data.id)
      setPlanTypeReceive(r.data.planType)
    })
  }

  const handleInput = (event) => {
    setRegister(event.target.value)
  }

  const handlePlan = (event) => {
    setPlantype(event.target.value)
  }

  const renderForm = () => {
    if (typeRegister !== "admin") {
    return(
    <div className = "divUser">
      <h1 className = "titleUser">Criar {typeRegister}</h1>
      <input type="text" placeholder="Insira aqui o nome..." onChange = {handleInput}/>
      <input type="text" placeholder="Inisira aqui o plano..." onChange = {handlePlan}/>
      <button type = "button" onClick={() => handleClick(register, plantype)}>Cadastre {typeRegister}</button>
      <h3 className = "textTopUser">Foi criado o {typeRegister}:</h3>
      <p className = "textUser">Nome: {nameUser}</p>
      <p className = "textUser">ID: {idUser}</p>
      <p className = "textUser">Type Plan: {planTypeReceive}</p>
    </div>)
    }

    return(
    <div className = "divUser">
      <h1 className = "titleUser">Criar {typeRegister}</h1>
      <input type="text" placeholder="Insira aqui o nome..." onChange = {handleInput}/>
      <button type = "button" onClick={() => handleClick(register, plantype)}>Cadastre {typeRegister}</button>
      <h3 className = "textTopUser">Foi criado o {typeRegister}:</h3>
      <p className = "textUser">Nome: {nameUser}</p>
      <p className = "textUser">ID: {idUser}</p>
    </div>
    )
  }

  return(
    renderForm()
  );
}

export default RegisterComponent;