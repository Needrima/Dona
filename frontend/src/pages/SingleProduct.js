import React, {useEffect, useState} from 'react'
import Layout from '../components/Layout/Layout'
import SingleProductLayout from '../components/SingleProduct/SingleProductLayout'
import axiosInstance from '../axios/axios'
import { useParams } from 'react-router';

export const SingleProductContext = React.createContext();
const SingleProduct = () => { 
    useEffect(() => {
      document.title = "Jamo | Shop"
    })

    const [state, setState] = useState({
        products: null,
        singleProduct: null,
    });

    const {products, singleProduct} = state;

    const getProducts = (number) => {
      axiosInstance.get(`product/amount/${number}`)
        .then((res)=> res.status === 200 && setState(state => ({...state, products: res?.data || null})))
        .catch((error)=> console.log(error))
    }

    const id = useParams()['id'];
    useEffect(() => {    
      axiosInstance.get(`product/ref/${id}`)
        .then((res)=> res.status === 200 && setState(state => ({...state, singleProduct: res?.data || null})))
        .catch((error)=> console.log(error))
        
        document.body.scrollTop = 40; // FOR SAFARI
        document.documentElement.scrollTop = 40; // FOR CHROME, FIREFOZ, IE, OPERA
    }, [id])


  return (
    <Layout>
      <SingleProductContext.Provider value={{
        products,
        getProducts,
        singleProduct,
      }}>
        <SingleProductLayout />
      </SingleProductContext.Provider>
    </Layout>
  )
}

export default SingleProduct;