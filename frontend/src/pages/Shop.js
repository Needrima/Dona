import React, {useState, useEffect} from 'react'
import Layout from '../components/Layout/Layout'
import ShopLayout from '../components/ShopComponents/ShopLayout'
import axiosInstance from '../axios/axios'

export const ShopContext = React.createContext();
const Shop = () => {
  useEffect(() => {
    document.title = "Jamo | Shop"
  })

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