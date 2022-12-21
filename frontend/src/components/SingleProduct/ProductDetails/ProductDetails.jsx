import React, { useContext, useRef, useState } from 'react'
import { AppContext } from '../../../App';
import { SingleProductContext } from '../../../pages/SingleProduct';
import './productdetails.scss'

const ProductDetails = () => {
    const {singleProduct} = useContext(SingleProductContext)
    const {AddToCart} = useContext(AppContext);

    const mainImgRef = useRef();
    const changeImg = (e) => {
        mainImgRef.current.src = e.target.src
    }

    const [state, setState] = useState({
        qty: 1,
        size: 'S'
    })
    const {qty, size} = state;

  return (
    <>
        {singleProduct !== null ? <section id="prodetails" className="section-p1">
            <div className="single-pro-image">
                <img 
                src={require(`../../../assets/images/products/${singleProduct['img_names'][0]}`)}
                alt=""
                width='100%'
                ref={mainImgRef} />

                <div className="small-img-group">

                    {singleProduct['img_names'].map((img_name, index) => <div className="small-img-col">
                        <img
                        key={index}
                        src={require(`../../../assets/images/products/${img_name}`)}
                        alt="" 
                        className="small-img"
                        width='100%'
                        onClick={changeImg} />
                    </div>)}

                    {/* <div className="small-img-col">
                        <img
                        src={require("../../../assets/images/products/black-t-shirt.jpg")}
                        alt="" 
                        className="small-img"
                        width='100%'
                        onClick={changeImg} />
                    </div> */}
                </div>
            </div>

            <div className="single-pro-details">
                <h6>Home / {singleProduct.category}</h6>
                <h4>{singleProduct.name}</h4>
                <h2>NGN {singleProduct.price}</h2>

                <span>Select Size:</span>
                <select value={size} onChange={(e) => setState(state => ({
                    ...state,
                    size: e.target.value !== 'select size' ? e.target.value : 'S' 
                }))}>
                    {singleProduct.sizes.map((size, index) => <option key={index} value={size}>{size}</option>)}
                </select>

                <input type="number" value={qty} onChange={(e) => setState(state => ({
                    ...state,
                    qty: e.target.value > 0 ? parseInt(e.target.value) : 1
                }))} />
                <button onClick={() => AddToCart(singleProduct.id, qty, size)}>Add To Cart</button>
                <h4>Product Details</h4>
                <span>{singleProduct.desc}</span>
            </div>
        </section> : null}
    </>
  )
}

export default ProductDetails