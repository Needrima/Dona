import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { singleOrderContext } from '../../pages/SingleOrder'
import './singleOrder.scss'
import Table from './Table/Table'
import ViewProduct from './ViewProduct/ViewProduct'

const SingleOrderLayout = () => {
  const {order} = useContext(singleOrderContext);
  const [state, setState] = useState({
    productModalShown: false,
    product: null,
  })

  const {productModalShown, product} = state;

  const showProductModal = (val) => {
    setState(state =>({
      ...state,
      productModalShown: val,
    }))
  }

  const setProduct = (product) => {
    setState(state =>({
      ...state,
      product: product,
    }))
  }

  return (
    <>
       {order !== null && 
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

          <Table cartItems={order["cartItems"]} showProductModal={showProductModal} setProduct={setProduct} />
        </>
        }
        {productModalShown && <ViewProduct showProductModal={showProductModal}  product={product} />}
    </>
  )
}

export default SingleOrderLayout