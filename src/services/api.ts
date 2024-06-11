import axios from 'axios';
import { API_URL, BEARER_TOKEN } from './api.constants';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${BEARER_TOKEN}`
  }
});

export default api;
