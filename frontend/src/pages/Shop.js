import React, {useState} from 'react'
import Layout from '../components/Layout/Layout'
import ShopLayout from '../components/ShopComponents/ShopLayout'
import {productAxiosInstance} from '../axios/axios'

export const ShopContext = React.createContext();
const Shop = () => {
  const [state, setState] = useState({
    products: []
  });

  const {products} = state;

  const getProducts = (number) => {
    productAxiosInstance.get(`/${number}`)
    .then((res)=> res.status === 200 ? setState(state => ({...state, products: res.data})) : [])
    .catch((error)=> console.log(error))
  }

  return (
    <Layout>
      <ShopContext.Provider value={{
        products,
        getProducts,
      }}>
        <ShopLayout />
      </ShopContext.Provider>
    </Layout>
  )
}

export default Shop