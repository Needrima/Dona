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
    netProfit: 0,
  })

  const {recentOrders, currentPage, totalOrders, completedOrders, pendingOrders, totalRevenue, netProfit} = state;

  const handleOrdersChange = (orders) => {
    console.log('changing orders ...')
    setState(state => ({
      ...state, 
      recentOrders: orders === null ? [] : orders,
    }))
  }

  const handleCurrentPageChange = (page) => {
    if (recentOrders !== []) setState(state => ({
      ...state,
      currentPage: page > 0 ? page : 1,
    }))
  } 

  const setDashvalues = (values) => {
    setState(state => ({
      ...state,
      totalOrders: values["totalOrders"],
      completedOrders: values["completedOrders"],
      pendingOrders: values["pendingOrders"],
      totalRevenue: values["totalRevenue"],
      netProfit: values["netProfit"],
    }))
  }

  const getOrders = async (action) => {
    try {
      let nextPage = action === "next" ? currentPage + 1 : currentPage - 1;
      const res  = await ordersAxiosInstance.get(`/order/page/${nextPage}`);
      handleOrdersChange(res.data)
      handleCurrentPageChange(nextPage)
    }catch(error){
      console.log(error)
      alert('no more orders')
    }
  }

  const getDashboardValues = async () => {
    try {
      const res  = await ordersAxiosInstance.get(`/order/get_dashboard_values`);
      setDashvalues(res.data);
    }catch(error){
      console.log(error.response)
    }
  }

  useEffect(() => {
    getOrders('next');
    getDashboardValues();
  }, [])

  return (
    <Layout>
      <dashboardContext.Provider value={{
        recentOrders,
        handleOrdersChange,
        currentPage,
        handleCurrentPageChange,
        getOrders,
        totalOrders,
        pendingOrders,
        completedOrders,
        totalRevenue,
        netProfit,
      }}>
        <DashboardLayout />
      </dashboardContext.Provider>
    </Layout>
  )
}

export default Dashboard