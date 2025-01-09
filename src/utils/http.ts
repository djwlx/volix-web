import axios from 'axios';

const http = axios.create({
  baseURL: import.meta.env.PROD ? '/api' : 'http://localhost:3000/api',
});

export { http };
