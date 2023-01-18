import axios from 'axios'

const adminAxiosInstance = axios.create({
    baseURL: 'http://localhost:2022/admin',
    headers: {
      Accept: 'application/json'
    }
})

export {adminAxiosInstance}