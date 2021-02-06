import axios from 'axios';

const ApiClient = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  withCredentials: true,
});

export default ApiClient;
