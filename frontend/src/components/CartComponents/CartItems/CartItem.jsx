import React from 'react'

const CartItem = () => {
  return (
    <tr>
        <td><span><i className='far fa-times-cicle'></i></span></td>
        <td><img src={require('../../../assets/images/products/white-t-shirt.jpg')} alt="" /></td>
        <td>Plain Roundneck T-shirt</td>
        <td>NGN 3000</td>
        <td>
            <select name="" id="">
                <option value="S">S</option>
            </select>
        </td>
        <td><input type="number" value={1}/></td>
        <td>NGN 3000</td>
    </tr>
  )
}

export default CartItem