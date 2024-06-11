import axios from 'axios';
import { API_URL, APP_TOKEN } from './api.constants';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${APP_TOKEN}`
  }
});

export default api;
