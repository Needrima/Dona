import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../../../App'

const CartItem = ({data}) => {
  const {RemoveFromCart, setItemProp} = useContext(AppContext)

  return (
    <tr>
        <td onClick={() => RemoveFromCart(data['id'])}><span><i className="fa fa-times-circle" aria-hidden="true"></i></span></td>
        <td>{data['img_names'] && <img src={require(`../../../assets/images/products/${data['img_names'][0]}`)} alt="product image" />}</td>
        <td>{data['name']}</td>
        <td>NGN {data['price']}</td>
        <td>
            <select value={data['size']} onChange={(e) => setItemProp(data['id'], 'size', e.target.value)}>
                {data['sizes'] && data['sizes'].map((size, index) => <option key={index} value={size}>{size}</option>)}
            </select>
        </td>
        <td>
            <select value={data['colour']} onChange={(e) => setItemProp(data['id'], 'colour', e.target.value)}>
                {data['colours'] && data['colours'].map((colour, index) => <option key={index} value={colour}>{colour}</option>)}
            </select>
        </td>
        <td><input type="number" value={parseInt(data['quantity'])} onChange={(e) => setItemProp(data['id'], 'quantity', e.target.value)} /></td>
        <td>NGN {data['subtotal']}</td>
    </tr>
  )
}

export default CartItem