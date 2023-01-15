import React, {useContext, useState} from 'react'
import { dashboardContext } from '../../../pages/Dashboard'
import './pagination.scss'

const Pagination = () => {

  const {getOrders, currentPage} = useContext(dashboardContext);

  const [btnDisabled, setBtnDisabled] = useState({
    next: false,
    prev: false,
  })
  const {next, prev} = btnDisabled;
  
  return (
    <section id='pagination' className='section-p1'>
        {currentPage > 1 && <button 
          disabled={prev}
          onClick={() => getOrders('prev')}
        ><i className="fal fa-long-arrow-alt-left"></i></button>}

        <button 
          disabled={next}
          onClick={() => getOrders('next')}
        ><i className="fal fa-long-arrow-alt-right"></i></button>
    </section>
  )
}

export default Pagination