import axios from 'axios';

const api = axios.create({
  baseURL: 'https://whispering-woodland-29547.herokuapp.com/api/'
})

export default api;