import axios from "axios";


const instance = axios.create({
  baseURL: 'https://saudechecker.herokuapp.com'
})

export default instance;