import axios from 'axios'

const adminAxiosInstance = axios.create({
    baseURL: 'https://jamo-backend-production.up.railway.app/admin',
    headers: {
      Accept: 'application/json'
    }
})

const productAxiosInstance = axios.create({
  baseURL: 'https://jamo-backend-production.up.railway.app/product',
  headers: {
    Accept: 'application/json'
  }
})

export {adminAxiosInstance, productAxiosInstance}