import React from 'react'
import { useContext } from 'react'
import { singleOrderContext } from '../../../pages/SingleOrder'
import './table.scss'

const Table = () => {

    const {order} = useContext(singleOrderContext);

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
            <tr>
                <td>Product ID 1</td>
                <td>Colour 1</td>
                <td>Size 1</td>
                <td>Price 1</td>
                <td>Quantity 1</td>
                <td>Subtotal 1</td>
                <td><a href='#'>View Product</a></td>
            </tr>

            <tr>
                <td>Product ID 2</td>
                <td>Colour 2</td>
                <td>Size 2</td>
                <td>Price 2</td>
                <td>Quantity 2</td>
                <td>Subtotal 2</td>
                <td><a href='#'>View Product</a></td>
            </tr>

            <tr>
                <td>Product ID 3</td>
                <td>Colour 3</td>
                <td>Size 3</td>
                <td>Price 3</td>
                <td>Quantity 3</td>
                <td>Subtotal 3</td>
                <td><a href='#'>View Product</a></td>
            </tr>

            <tr>
                <td>Product ID 4</td>
                <td>Colour 4</td>
                <td>Size 4</td>
                <td>Price 4</td>
                <td>Quantity 4</td>
                <td>Subtotal 4</td>
                <td><a href='#'>View Product</a></td>
            </tr>
        </tbody>
        </table>
    </div>
  )
}

export default Table