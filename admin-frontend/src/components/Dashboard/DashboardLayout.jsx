import React from 'react'
import './dashboard.scss'

const DashboardLayout = () => {
  return (
    <>
        <h3 className='i-name'>
          Dashboard
        </h3>

        <div className='values'>
          <div className='val-box'>
            <i className='fas fa-users'></i>
            <div>
              <h3>8,267</h3>
              <span>New users</span>
            </div>
          </div>

          <div className='val-box'>
            <i className='fas fa-shopping-cart'></i>
            <div>
              <h3>200,521</h3>
              <span>Total Orders</span>
            </div>
          </div>

          <div className='val-box'>
            <i className='fas fa-acorn'></i>
            <div>
              <h3>215,542</h3>
              <span>Product Sold</span>
            </div>
          </div>

          <div className='val-box'>
            <i className='fas fa-users'></i>
            <div>
              <h3>NGN 500,000</h3>
              <span>This Month</span>
            </div>
          </div>
        </div>
    </>
  )
}

export default DashboardLayout