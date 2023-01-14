import React, {useEffect, useState} from 'react'
import Layout from '../components/Layout/Layout'
import DashboardLayout from '../components/Dashboard/DashboardLayout'
import { ordersAxiosInstance } from '../axios/axios'


export const dashboardContext = React.createContext();
const Dashboard = () => {
  const [state, setState] = useState({
    recentOrders: [],
    currentPage: 1,
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

  const handleCurrentPageChange = (action) => {
    switch (action) {
      case 'next':
        console.log('incrementing current page')
        setState(state => ({
          ...state,
          currentPage: state.currentPage + 1,
        }))
      break;

      case 'prev':
        console.log('decrementing current page')
        setState(state => ({
          ...state,
          currentPage: state.currentPage > 1 && state.currentPage - 1,
        }))
        break;

      default:
    }
  } 

  const getOrders = async (action) => {
    console.log(currentPage);
    try {
      const res  = await ordersAxiosInstance.get(`/page/${currentPage}`)
      handleOrdersChange(res.data)
      handleCurrentPageChange(action)
    }catch(error){
      console.log(error)
      alert('cannot load recent orders')
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