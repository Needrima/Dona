import React from 'react'
import Body from '../Body/Body'
import './layout.scss'

const Layout = ({children}) => {
  return (
    <div className='layout'>
      <Body>
        {children}
      </Body>
    </div>
  )
}

export default Layout