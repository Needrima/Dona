import React from 'react'
import './table.scss'
import { useContext } from 'react'
import { AppContext } from '../../../App'

const Table = () => {
  const {recentOrders} = useContext(AppContext);

  return (
    <div className="board">
        <table>
        <thead>
            <tr>
            <td>Order ID</td>
            <td>Total Amount</td>
            <td>Phone Number</td>
            <td>Delivery Status</td>
            <td>Payment Status</td>
            <td></td>
            </tr>
        </thead>

        <tbody>
            {
                recentOrders !== [] ? recentOrders.map((order, index) => (
                    <tr key={index}>
                        <td>{order['id']}</td>
                        <td>{order['cartSubtotal']}</td>
                        <td>{order['deliveryInfo']['phone']}</td>
                        <td className={order['deliveryStatus'] === 'DELIVERED' ? 'del' : 'undel'}><span>{order['deliveryStatus']}</span></td>
                        <td className={order['paymentStatus'] === 'PAID' ? 'paid' : 'unpaid'}><span>{order['paymentStatus']} </span></td>
                        <td><a href={`/order/view/${order['id']}`}>View order</a></td>
                    </tr>
                )) : (
                    <tr>
                        <td></td>
                        <td></td>
                        <td>No more orders</td>
                        <td>No more orders</td>
                        <td></td>
                        <td></td>
                    </tr>
                )
            }
        </tbody>
        </table>
    </div>
  )
}

export default Table