import axios from 'axios';

const api = axios.create();
api.defaults.baseURL = 'https://my-json-server.typicode.com/marycamila184/';

export default api;