import React from 'react'
import { useContext } from 'react'
import { singleOrderContext } from '../../pages/SingleOrder'
import './singleOrder.scss'
import Table from './Table/Table'

const SingleOrderLayout = () => {
  const {order} = useContext(singleOrderContext);

  return (
    <>
        <h3 className='i-name'>
          Order ID: {order['id']}
        </h3>

        <div className='values'>
          <div className='val-box'>
            <div>
              <h3>Order Total</h3>
              <span>NGN {order['cartSubtotal']}</span>
            </div>
          </div>

          <div className='val-box'>
            <div>
              <h3>Delivery Status</h3>
              <span>{order['deliveryStatus']}</span>
            </div>
          </div>

          <div className='val-box'>
            <div>
              <h3>Payment Status</h3>
              <span>{order['paymentStatus']}</span>
            </div>
          </div>

          <div className='val-box'>
            <div>
              <h3>Recipient's Name</h3>
              <span>{order['deliveryInfo']['name']}</span>
            </div>
          </div>

          <div className='val-box'>
            <div>
              <h3>Recipient's Number</h3>
              <span>{order['deliveryInfo']['phone']}</span>
            </div>
          </div>

          <div className='val-box'>
            <div>
              <h3>Recipient's Email</h3>
              <span>{order['deliveryInfo']['email']}</span>
            </div>
          </div>

          <div className='val-box'>
            <div>
              <h3>Recipient's Address</h3>
              <span>{order['deliveryInfo']['address']}</span>
            </div>
          </div>

          <div className='val-box'>
            <div>
              <h3>Order Date & Time</h3>
              <span>{order['created_at']}</span>
            </div>
          </div>
        </div>

        <Table />
    </>
  )
}

export default SingleOrderLayout