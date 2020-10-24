import axios from 'axios';

const baseURL = 'http://localhost:3333';
// process.env.NODE_ENV === 'development' ?  : '';

const api = axios.create({
  baseURL,
});

export default api;
