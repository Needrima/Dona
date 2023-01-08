import React from 'react'
import Menubar from '../Menubar/Menubar'
import Body from '../Body/Body'
import './layout.scss'

const Layout = ({children}) => {
  return (
    <div className='layout'>
      <Menubar />

      <Body>
        {children}
      </Body>
    </div>
  )
}

export default Layout