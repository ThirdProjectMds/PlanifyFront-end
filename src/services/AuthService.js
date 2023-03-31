import { createHttp } from './BaseService';

const http = createHttp(false);

export const login = ({ email, password }) => http.post('/login', { email, password })


