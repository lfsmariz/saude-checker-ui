import axios from "axios";


const instance = axios.create({
  baseURL: 'https://snackbarchecker.herokuapp.com'
})

export default instance;