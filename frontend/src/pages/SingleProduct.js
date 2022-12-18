import React, {useState} from 'react'
import Layout from '../components/Layout/Layout'
import SingleProductLayout from '../components/SingleProduct/SingleProductLayout'
import {productAxiosInstance} from '../axios/axios'

export const SingleProductContext = React.createContext();
const SingleProduct = () => {
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
      <SingleProductContext.Provider value={{
        products,
        getProducts,
      }}>
        <SingleProductLayout />
      </SingleProductContext.Provider>
    </Layout>
  )
}

export default SingleProduct;