import axios from 'axios';

const api = axios.create({
  baseURL: (process.env.NEXT_PUBLIC_API_URL || 'https://gopratle-portal.onrender.com').replace(/\/$/, '') + '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;