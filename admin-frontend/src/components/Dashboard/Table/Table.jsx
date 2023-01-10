import React from 'react'
import './table.scss'

const Table = () => {
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
                <tr>
                    <td>Order ID 1</td>
                    <td>Total Amount 1</td>
                    <td>Phone Number 1</td>
                    <td className='del'><span>Delivered</span></td>
                    <td className='unpaid'><span>Not paid</span></td>
                    <td><a href="#">View 1</a></td>
                </tr>

                <tr>
                    <td>Order ID 2</td>
                    <td>Total Amount 2</td>
                    <td>Phone Number 2</td>
                    <td className='undel'><span>Undelivered</span></td>
                    <td className='paid'><span>Paid</span></td>
                    <td><a href="#">View 2</a></td>
                </tr>

                <tr>
                    <td>Order ID 3</td>
                    <td>Total Amount 3</td>
                    <td>Phone Number 3</td>
                    <td className='del'><span>Delivered</span></td>
                    <td className='unpaid'><span>Not paid</span></td>
                    <td><a href="#">View 3</a></td>
                </tr>

                <tr>
                    <td>Order ID 4</td>
                    <td>Total Amount 4</td>
                    <td>Phone Number 4</td>
                    <td className='undel'><span>Undelivered</span></td>
                    <td className='unpaid'><span>Not paid</span></td>
                    <td><a href="#">View 4</a></td>
                </tr>

                <tr>
                    <td>Order ID 5</td>
                    <td>Total Amount 5</td>
                    <td>Phone Number 5</td>
                    <td className='del'><span>Delivered</span></td>
                    <td className='paid'><span>Paid</span></td>
                    <td><a href="#">View 5</a></td>
                </tr>

                <tr>
                    <td>Order ID 1</td>
                    <td>Total Amount 1</td>
                    <td>Phone Number 1</td>
                    <td className='del'><span>Delivered</span></td>
                    <td className='unpaid'><span>Not paid</span></td>
                    <td><a href="#">View 1</a></td>
                </tr>

                <tr>
                    <td>Order ID 2</td>
                    <td>Total Amount 2</td>
                    <td>Phone Number 2</td>
                    <td className='undel'><span>Undelivered</span></td>
                    <td className='paid'><span>Paid</span></td>
                    <td><a href="#">View 2</a></td>
                </tr>

                <tr>
                    <td>Order ID 3</td>
                    <td>Total Amount 3</td>
                    <td>Phone Number 3</td>
                    <td className='del'><span>Delivered</span></td>
                    <td className='unpaid'><span>Not paid</span></td>
                    <td><a href="#">View 3</a></td>
                </tr>

                <tr>
                    <td>Order ID 4</td>
                    <td>Total Amount 4</td>
                    <td>Phone Number 4</td>
                    <td className='undel'><span>Undelivered</span></td>
                    <td className='unpaid'><span>Not paid</span></td>
                    <td><a href="#">View 4</a></td>
                </tr>

                <tr>
                    <td>Order ID 5</td>
                    <td>Total Amount 5</td>
                    <td>Phone Number 5</td>
                    <td className='del'><span>Delivered</span></td>
                    <td className='paid'><span>Paid</span></td>
                    <td><a href="#">View 5</a></td>
                </tr>
            </tbody>
          </table>
        </div>
  )
}

export default Table