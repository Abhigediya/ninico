import React from 'react'
import ArrowRight from '../../assets/ArrowRight.svg'

const TopBar = () => {
  return (
    <>
      <div className="p-2 font-bold"  style={{backgroundColor:'#F3EEE7' }}>
        <div className="container mx-auto flex welcome" >
          Welcome to our international shop! Enjoy free shipping on orders $100 up.
           <span className=' flex ms-2 text-ninico ' > Shop Now <img className='ms-3' src={ArrowRight} alt="" width={20} /> </span>
        </div>
      </div>
    </>
  )
}

export default TopBar
