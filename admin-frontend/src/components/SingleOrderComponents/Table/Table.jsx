import React from 'react'
import { useContext } from 'react'
import { singleOrderContext } from '../../../pages/SingleOrder'
import './table.scss'

const Table = ({cartItems}) => {
    console.log("cartItems:", cartItems);

  return (
    <div className="board">
        <table>
        <thead>
            <tr>
                <td>Product ID</td>
                <td>Colour</td>
                <td>Size</td>
                <td>Price</td>
                <td>Quantity</td>
                <td>Subtotal</td>
                <td></td>
            </tr>
        </thead>

        <tbody>
            {cartItems.map(item =>  (
                <tr key={item['id']}>
                    <td>{item['id']}</td>
                    <td>{item['colour']}</td>
                    <td>{item['size']}</td>
                    <td>{item['price']}</td>
                    <td>{item['quantity']}</td>
                    <td>{item['subtotal']}</td>
                    <td><span className='view-product'>View Product</span></td>
                </tr>
            ))
            }

            {/* <tr>
                <td>Product ID 2</td>
                <td>Colour 2</td>
                <td>Size 2</td>
                <td>Price 2</td>
                <td>Quantity 2</td>
                <td>Subtotal 2</td>
                <td><a href='#'>View Product</a></td>
            </tr> */}
        </tbody>
        </table>
    </div>
  )
}

export default Table