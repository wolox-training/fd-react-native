import api from '../config/api.js';

export default {
  login: credentials => api.post('/login', credentials)
};
