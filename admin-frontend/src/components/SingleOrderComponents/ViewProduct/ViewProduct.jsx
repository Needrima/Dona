import React from 'react'

const ViewProduct = () => {
  return (
    <div className='view-product'>
        <div className='images'>
            <img className='current-image' src={require('../../../assets/images/products/black-t-shirt.jpg')} alt="" />
            
            <div className='small-img'>
                <img src={require('../../../assets/images/products/black-t-shirt.jpg')} alt="" />
                <img src={require('../../../assets/images/products/black-t-shirt.jpg')} alt="" />
            </div>
        </div>
    </div>
  )
}

export default ViewProduct