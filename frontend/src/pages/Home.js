import React, {useState} from 'react'
import HomeLayout from '../components/HomeComponents/HomeLayout'
import Layout from '../components/Layout/Layout'
import {productAxiosInstance} from '../axios/axios'

export const HomeContext = React.createContext();
const Home = () => {
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
      <HomeContext.Provider value={{
        products,
        getProducts,
      }}>
        <HomeLayout />
      </HomeContext.Provider>
    </Layout>
  )
}

export default Home