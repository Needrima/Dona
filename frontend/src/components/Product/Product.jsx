import React from 'react'

const Product = () => {
  return (    
    <div className="pro">
        <img src={require('../../assets/images/products/white-t-shirt.jpg')} alt="product-img" />

        <div className="des">
            <span>Dona</span>
            <h5>Plain Roundneck T-shirt</h5>
            <h5>White</h5>
            <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
            </div>
            <h4>NGN 3500</h4>
        </div>

        <span><i className="fal fa-shopping-cart cart"></i></span>
    </div>
  )
}

export default Product