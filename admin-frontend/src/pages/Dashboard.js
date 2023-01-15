import React, {useEffect, useState} from 'react'
import Layout from '../components/Layout/Layout'
import DashboardLayout from '../components/Dashboard/DashboardLayout'
import { ordersAxiosInstance } from '../axios/axios'


export const dashboardContext = React.createContext();
const Dashboard = () => {
  const [state, setState] = useState({
    recentOrders: [],
    currentPage: 0,
    totalOrders: 0,
    completedOrders: 0,
    pendingOrders: 0,
    totalRevenue: 0,
  })

  const {recentOrders, currentPage} = state;

  const handleOrdersChange = (orders) => {
    console.log('changing orders ...')
    setState(state => ({
      ...state, 
      recentOrders: orders === null ? [] : orders,
    }))
  }

  const handleCurrentPageChange = (page) => {
    setState(state => ({
      ...state,
      currentPage: page > 0 ? page : 1,
    }))
  } 

  const getOrders = async (action) => {
    try {
      let nextPage = action === "next" ? currentPage + 1 : currentPage - 1;
      const res  = await ordersAxiosInstance.get(`/page/${nextPage}`);
      handleOrdersChange(res.data)
      handleCurrentPageChange(nextPage)
    }catch(error){
      console.log(error)
      console.log('no more orders')
      alert('no more orders')
    }
  }

  useEffect(() => {
    getOrders('next');
  }, [])

  return (
    <Layout>
      <dashboardContext.Provider value={{
        recentOrders,
        handleOrdersChange,
        currentPage,
        handleCurrentPageChange,
        getOrders
      }}>
        <DashboardLayout />
      </dashboardContext.Provider>
    </Layout>
  )
}

export default Dashboard