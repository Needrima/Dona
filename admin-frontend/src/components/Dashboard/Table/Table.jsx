import React from 'react'
import './table.scss'
import { useContext } from 'react'
import { dashboardContext } from '../../../pages/Dashboard'

const Table = () => {
  const {recentOrders} = useContext(dashboardContext);

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
                        <td><a href={`/view/${order['id']}`}>View order</a></td>
                    </tr>
                )) : <div>loading orders ......</div>
            }
        </tbody>
        </table>
    </div>
  )
}

export default Table