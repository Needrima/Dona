import React, {useContext, useState} from 'react'
import './pagination.scss'
import { ShopContext } from '../../../pages/Shop'

const Pagination = () => {
  const {getProducts} = useContext(ShopContext)
  const [disabled, setDisabled] = useState(false)
  
  return (
    <section id='pagination' className='section-p1'>
        {/* <span>1</span>
        <span>2</span> */}
        <button 
        disabled={disabled}
        onClick={() => {
            setDisabled(true)
            getProducts('8')
            setDisabled(false)
            document.body.scrollTop = 300; // FOR SAFARI
            document.documentElement.scrollTop = 300; // FOR CHROME, FIREFOZ, IE, OPERA
        }}
        ><i className="fal fa-long-arrow-alt-right"></i></button>
    </section>
  )
}

export default Pagination