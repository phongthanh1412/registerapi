import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const registerUser = async (data) => {
  const response = await api.post('/user/register', data);
  return response.data;
};

export const loginUser = async (data) => {
  const response = await api.post('/user/login', data);
  return response.data;
};
