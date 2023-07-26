import React, {useState} from 'react'
import HomeLayout from '../components/HomeComponents/HomeLayout'
import Layout from '../components/Layout/Layout'
import axiosInstance from '../axios/axios'

export const HomeContext = React.createContext();
const Home = () => {
  const [state, setState] = useState({
    products: null
  });

  const {products} = state;

  const getProducts = (number) => {
    axiosInstance.get(`product/amount/${number}`)
    .then((res)=> res.status === 200 && setState(state => ({...state, products: res?.data || null})))
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