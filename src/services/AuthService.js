import { createHttp } from './BaseService';

const http = createHttp(false);

export const signup = ({ email, password, firstName, lastName }) => http.post("/register", { email, password, firstName, lastName })
export const login = ({ email, password }) => http.post('/login', { email, password })


