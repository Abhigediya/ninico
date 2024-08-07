import React from 'react'
import TopBarTwo from '../../TopBar/TopBarTwo'
import Navbar from '../Navbar'
import PopularProduct from '../../PopularProduct/PopularProduct'
import Footer from '../../Footer/Footer'

import ShopImage from '../../../assets/ShopImage.jpg'
import BarDots from '../../../assets/BarDots.svg'
import Grid from '../../../assets/Grid.svg'
const ShopOne = () => {
  return (
    <>
      <TopBarTwo />
      <div className="container mx-auto">
        <Navbar />
      </div>
      <div className="-mt-1 ">
        <div className="relative">
          <img src={ShopImage} className="h-48" alt="" />
          <div className="absolute top-10 left-28  ">
            <div className="flex items-center text-lg  ">
              <div className="me-3">Home</div>
              <div className="border-b w-8 border-footer-3"></div>
              <div className="ms-3 text-footer-3  ">Shop</div>
            </div>
            <div className="text-5xl mt-4 font-semibold">Shop</div>
          </div>
        </div>
      </div>

      <section className='container mx-auto mt-10 '>
        <div className="md:flex justify-between ">
          <div className="">
            <span className='font-semibold'>10</span>
            <span className='ms-1'>Item On List</span>
          </div>
          <div className="flex  ">
            <select className='border border-shop-border focus:border focus:border-4 p-2 focus:border-sky-300 rounded-md' name="" id="">
              <option value="">Sort by (default)</option>
              <option value="">Newest </option>
              <option value="">Oldest</option>
            </select>

            <select className='ms-3 border border-shop-border focus:border focus:border-4 p-2 focus:border-sky-300 rounded-md' name="" id="">
              <option value="">All</option>
              <option value="">10 per page</option>
              <option value="">20 per page</option>
              <option value="">30 per page</option>

            </select>
            <div className="lg:flex ">

              <img src={BarDots} width={60} alt="123" />
              <img src={Grid} className=" lg:ms-0 md:ms-4" width={30} alt="123" />
            </div>
          </div>
        </div>

        <PopularProduct />
      </section>
      <div className="mt-10 ">
        <Footer />
      </div>
    </>
  )
}

export default ShopOne
