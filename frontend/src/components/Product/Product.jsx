import React from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router'
import { AppContext } from '../../App';

const Product = ({data}) => {
  const navigate = useNavigate();

  const {AddToCart} = useContext(AppContext);

  const getRating = (rating) => {
    const stars = []
    for (let i = 0; i < rating; i++) {
      const star = React.createElement('i', {className: 'fas fa-star', key: i})
      stars.push(star);
    };
    return React.createElement('div', {className:'star'}, stars);
  }

  return (    
    <>
    {data !== null ? <div className="pro">
        <img 
        src={require(`../../assets/images/products/${data.img_names[0]}`)} 
        alt="product-img" 
        onClick={() => navigate(`/single/${data.id}`)} />

        <div className="des">
            <span>{data.brand}</span>
            <h5 onClick={() => navigate(`/single/${data.id}`)}>{data.name}</h5>
            <h5 className='category'>{data.category}</h5>
            {/* <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
            </div> */}
            {getRating(data.rating)}
            <h4>NGN {data.price}</h4>
        </div>

        <span onClick={() => AddToCart(data.id, 1, "M", data.colours[0])}><i className="fal fa-shopping-cart cart"></i></span>
    </div> : "loading"}
    </>
  )
}

export default Product