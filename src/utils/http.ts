import axios from 'axios';
import { serviceUrl } from './env';

const http = axios.create({
  baseURL: `${serviceUrl}/api`,
});

export { http };
