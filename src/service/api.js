import axios from 'axios';
import tmbd from '../config'

const api = axios.create({ baseURL: tmbd.API_BASIC });

export default api;