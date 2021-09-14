import axios from "axios";


const instance = axios.create({
  baseURL: 'https://gymchecker.herokuapp.com'
})

export default instance;