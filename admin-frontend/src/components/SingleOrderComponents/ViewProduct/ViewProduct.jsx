import React from 'react'
import { useRef } from 'react'
import './style.scss'

const ViewProduct = ({showProductModal, product}) => {
  console.log('product from view product modal:', product)
  const mainImgRef = useRef();

  const changeImg = (e) => {
    mainImgRef.current.src = e.target.src;
  }

  const arrayToString = (arr) => {
    return arr.join(', ')
  }

  return (
    <div className='view-product-modal' id='view-product-modal'>
      <h3 onClick={() => showProductModal(false)}>X</h3>

      {product !== null && <div className="info">
      <div className='images'>
            <img className='current-image' src={require(`../../../assets/images/products/${product['img_names'][0]}`)} alt=""  ref={mainImgRef}/>
            
            <div className='small-img'>
              {product['img_names'].map((img_name, index) =>
                <img src={require(`../../../assets/images/products/${img_name}`)} key={index} onClick={changeImg}  alt="" />
              )}
            </div>
        </div>

        <div className="details">
          <table border={2}>
            <tr>
              <th>Id</th>
              <td>{product['id']}</td>
            </tr>

            <tr>
              <th>Name</th>
              <td>{product['name']}</td>
            </tr>

            <tr>
              <th>Price</th>
              <td>{product['price']}</td>
            </tr>

            <tr>
              <th>Sizes</th>
              <td>{arrayToString(product['sizes'])}</td>
            </tr>

            <tr>
              <th>Rating</th>
              <td>{product['rating']}</td>
            </tr>

            <tr>
              <th>Brand</th>
              <td>{product['brand']}</td>
            </tr>

            <tr>
              <th>Colours</th>
              <td>{arrayToString(product['colours'])}</td>
            </tr>

            <tr>
              <th>Category</th>
              <td>{product['category']}</td>
            </tr>
          </table>
        </div>
      </div>}
        
    </div>
  )
}

export default ViewProduct