import axios from 'axios'

const productAxiosInstance = axios.create({
    baseURL: 'https://jamo-backend-production.up.railway.app/product',
    headers: {
      Accept: 'application/json'
    }
})

const customerAxiosInstance = axios.create({
  baseURL: 'https://jamo-backend-production.up.railway.app/customer',
  headers: {
    Accept: 'application/json'
  }
})

export {productAxiosInstance, customerAxiosInstance}