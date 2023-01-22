import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SingleOrderLayout from '../components/SingleOrderComponents/SingleOrderLayout';
import Layout from '../components/Layout/Layout';
import { adminAxiosInstance } from '../axios/axios';

export const singleOrderContext = React.createContext();
const SingleOrder = () => {
  const id = useParams()['id']
  const [state, setState] = useState({
    order: null,
  })

  const {order} = state;

  useEffect(() => {
    (
      async () => {
        try {
          const res = await adminAxiosInstance.get(`/order/${id}`)

          setState(state => ({
            ...state,
            order: res.data,
          }))  
        }catch(error) {
          console.log(error)
        }
      }
    )();
  }, [])

  return (
    <Layout>
      <singleOrderContext.Provider value={{
        order
      }}>
        <SingleOrderLayout />
      </singleOrderContext.Provider>
    </Layout>
  )
}

export default SingleOrder