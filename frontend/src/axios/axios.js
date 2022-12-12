import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:2022/product',
    headers: {
      Accept: 'application/json'
    }
})

export default axiosInstance