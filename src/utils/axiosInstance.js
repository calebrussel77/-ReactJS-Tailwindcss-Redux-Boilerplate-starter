import axios from 'axios';
import authToken from '../shared/authToken';

const axiosInstance = axios.create({
    baseURL: '', //Your base url to your api
    headers: {
        'content-type': 'application/json',
        Authorization: authToken() ? `Bearer ${authToken()}` : undefined,
    },
});

export default axiosInstance;
