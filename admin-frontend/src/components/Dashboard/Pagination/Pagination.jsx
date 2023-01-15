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

  const changeOrders = (action) => {
    setBtnDisabled({
      next: true,
      prev: true,
    })

    getOrders(action)

    setBtnDisabled({
      next: false,
      prev: false,
    })
  }
  
  return (
    <section id='pagination' className='section-p1'>
        {currentPage > 1 && <button 
          disabled={prev}
          onClick={() => changeOrders('prev')}
        ><i className="fal fa-long-arrow-alt-left"></i></button>}

        <button 
          disabled={next}
          onClick={() => changeOrders('next')}
        ><i className="fal fa-long-arrow-alt-right"></i></button>
    </section>
  )
}

export default Pagination