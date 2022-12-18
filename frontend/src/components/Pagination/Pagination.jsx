import React from 'react'
import './pagination.scss'

const Pagination = ({clickFunc}) => {
  return (
    <section id='pagination' className='section-p1'>
        {/* <span>1</span>
        <span>2</span> */}
        <span 
        onClick={() => {
            clickFunc('8')
            document.body.scrollTop = 300; // FOR SAFARI
            document.documentElement.scrollTop = 300; // FOR CHROME, FIREFOZ, IE, OPERA
        }}
        ><i className="fal fa-long-arrow-alt-right"></i></span>
    </section>
  )
}

export default Pagination