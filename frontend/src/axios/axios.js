import axios from 'axios'

const axiosInstance = axios.create({
    // baseURL: 'https://jamo-backend-production.up.railway.app',
    baseURL: 'http://localhost:2022',
    headers: {
      Accept: 'application/json'
    }
})

export default axiosInstance;