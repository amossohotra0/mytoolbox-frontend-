// src/api/apiClient.js
import axios from 'axios';
import { API_URL } from '../env';

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

export default apiClient;