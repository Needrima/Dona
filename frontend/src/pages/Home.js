import React from 'react'
import HomeLayout from '../components/HomeComponents/HomeLayout'
import Layout from '../components/Layout/Layout'

export const HomeContext = React.createContext();
const Home = () => {
  return (
    <Layout>
      <HomeContext.Provider value={{
        
      }}>
        <HomeLayout />
      </HomeContext.Provider>
    </Layout>
  )
}

export default Home