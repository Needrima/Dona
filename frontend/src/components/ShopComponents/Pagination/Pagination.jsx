import React, {useContext} from 'react'
import './pagination.scss'
import { ShopContext } from '../../../pages/Shop'

const Pagination = () => {
  const {getProducts} = useContext(ShopContext)
  
  return (
    <section id='pagination' className='section-p1'>
        {/* <span>1</span>
        <span>2</span> */}
        <span 
        onClick={() => {
            getProducts('8')
            document.body.scrollTop = 300; // FOR SAFARI
            document.documentElement.scrollTop = 300; // FOR CHROME, FIREFOZ, IE, OPERA
        }}
        ><i className="fal fa-long-arrow-alt-right"></i></span>
    </section>
  )
}

export default Pagination