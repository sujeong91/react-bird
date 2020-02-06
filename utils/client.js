import axios from 'axios';

export const httpClient = axios.create({
  baseURL: 'http://localhost:3065/api',
  withCredentials: true, // back과 front간에 쿠키를 주고받을 수 있게 됨.
});
