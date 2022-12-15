import axios from 'axios'

const productAxiosInstance = axios.create({
    baseURL: 'http://localhost:2022/product',
    headers: {
      Accept: 'application/json'
    }
})

const customerAxiosInstance = axios.create({
  baseURL: 'http://localhost:2022/customer',
  headers: {
    Accept: 'application/json'
  }
})

export {productAxiosInstance, customerAxiosInstance}