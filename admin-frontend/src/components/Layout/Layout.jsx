import React from 'react'
import Menubar from '../Menubar/Menubar'
import './layout.scss'

const Layout = ({children}) => {
  return (
    <div className='layout'>
      <Menubar />

      {children}
    </div>
  )
}

export default Layout