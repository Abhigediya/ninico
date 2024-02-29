import React from 'react'
import ArrowNinico from '../../assets/ArrowNinico.svg'

const TopBar = () => {
  return (
    <>
      <div className="p-2 font-semibold bg-topBar"  >
        <div className="container mx-auto flex sm:block md:flex welcome" >
          Welcome to our international shop! Enjoy free shipping on orders $100 up.
          <span className=' flex text-ninico  border-0 border-b-2  ' >
            <span className='text-ninico'>Shop Now</span>
            <img className='ms-3' src={ArrowNinico} alt="" width={20} />
          </span>
        </div>
      </div>
    </>
  )
}

export default TopBar
