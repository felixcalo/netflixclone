import axios from 'axios';
import 'dotenv/config'
import tmbd from '../config'

const api = axios.create({ baseURL: tmbd.API_BASIC });

export default api;