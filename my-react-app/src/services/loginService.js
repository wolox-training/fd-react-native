import api from '../config/api/index.js';

export default {
  login: credentials => api.post('/login', credentials)
};
