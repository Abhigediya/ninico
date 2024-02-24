import React from 'react'
import ArrowRight from '../../assets/ArrowRight.svg'

const TopBar = () => {
  return (
    <>
      <div className="p-2 font-bold bg-topBar"  >
        <div className="container mx-auto flex sm:block md:flex welcome" >
          Welcome to our international shop! Enjoy free shipping on orders $100 up.
          <span className=' flex ms-2 text-ninico border-0 border-b-2  ' >
            <span>Shop Now</span>
            <img className='ms-3' src={ArrowRight} alt="" width={20} />
          </span>
        </div>
      </div>
    </>
  )
}

export default TopBar
