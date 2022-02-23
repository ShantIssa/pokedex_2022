import axios from 'axios';

export const BASE_URL = 'https://pokeapi.co/api/v2/';

const api = axios.create({ baseURL: BASE_URL });

export default api;
