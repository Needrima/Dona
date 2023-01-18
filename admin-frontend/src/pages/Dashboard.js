import React from 'react'
import Layout from '../components/Layout/Layout'
import DashboardLayout from '../components/Dashboard/DashboardLayout'


export const dashboardContext = React.createContext();
const Dashboard = () => {

  return (
    <Layout>
      <dashboardContext.Provider value={{
        
      }}>
        <DashboardLayout />
      </dashboardContext.Provider>
    </Layout>
  )
}

export default Dashboard