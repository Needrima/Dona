import React from 'react'
import { useContext } from 'react'
import { dashboardContext } from '../../pages/Dashboard'
import './dashboard.scss'
import Pagination from './Pagination/Pagination'
import Table from './Table/Table'

const DashboardLayout = () => {
  const {
    totalOrders,
    pendingOrders,
    completedOrders,
    totalRevenue,
    netProfit
  } = useContext(dashboardContext);

  return (
    <>
        <h3 className='i-name'>
          Dashboard
        </h3>

        <div className='values'>
          <div className='val-box'>
            <i className='fas fa-shopping-cart'></i>
            <div>
              <h3>{totalOrders}</h3>
              <span>Total Orders</span>
            </div>
          </div>

          <div className='val-box'>
            <i className='fas fa-shopping-cart'></i>
            <div>
              <h3>{completedOrders}</h3>
              <span>Completed Orders</span>
            </div>
          </div>

          <div className='val-box'>
            <i className='fas fa-shopping-cart'></i>
            <div>
              <h3>{pendingOrders}</h3>
              <span>Pending Orders</span>
            </div>
          </div>

          <div className='val-box'>
            <i className='fas fa-dollar-sign'></i>
            <div>
              <h3>NGN {totalRevenue}</h3>
              <span>Total revenue</span>
            </div>
          </div>

          <div className='val-box'>
            <i className='fas fa-dollar-sign'></i>
            <div>
              <h3>NGN {netProfit}</h3>
              <span>Net Profit</span>
            </div>
          </div>
        </div>

        <Table />
        <Pagination />
    </>
  )
}

export default DashboardLayout