import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.100.15:8087'
});

export default api;