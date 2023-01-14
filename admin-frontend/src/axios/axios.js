import axios from 'axios'

const ordersAxiosInstance = axios.create({
    baseURL: 'http://localhost:2022/order',
    headers: {
      Accept: 'application/json'
    }
})

export {ordersAxiosInstance}