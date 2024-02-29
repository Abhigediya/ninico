import React from 'react'
import Logo from '../../assets/logo.png'
import Cart from '../../assets/Cart.svg'
import User from '../../assets/User.svg'
import Heart from '../../assets/Heart.svg'
import Search from '../../assets/Search.svg'
import Dropdown from '../../assets/Dropdown.svg'

const StickyNavbar = () => {
  return (
    <>
      <nav className='container mx-auto  mt-2 py-3 flex items-center justify-between mb-28 bg-white sticky top-0  z-[10] ' >
        <img src={Logo} alt="" />
        <ul className="  flex xl:flex lg:hidden md:hidden ">
            <li className="ms-2 dropdown ">
              <div className="flex p-3 ">
                <div className="">
                  <span className='font-medium' >Home</span>
                  <span className='border 2xl 2xl:hidden xl:hidden '>+</span>
                </div>
                <img src={Dropdown} width={30} alt="123" />
              </div>
              <div className="dropdown-cnt  ">
                <ul className='w-52'>
                  <li className='li-move ' >Wooden Home</li>
                  <li className='li-move ' >Fashion Home</li>
                  <li className='li-move' >Furniture Home</li>
                  <li className='li-move' >Cosmetics Home</li>
                  <li className='li-move'>Food Grocery</li>
                </ul>
              </div>
            </li>

            <li className=" dropdown">
              <div className="flex p-3">
                <span className='font-medium'>Shop</span>
                <img src={Dropdown} width={30} alt="123" />
              </div>
              <div className="dropdown-cnt ">
                <ul className='w-52'>
                  <li className='li-move' > <a href="/">Shop</a> </li>
                  <li className='li-move' >Shop 2</li>
                  <li className='li-move' >Shop Details</li>
                  <li className='li-move' >Shop Details 2</li>
                  <li className='li-move' >Shop Location</li>
                  <li className='li-move' >Cart</li>
                  <li className='li-move' >Sign in </li>
                  <li className='li-move' >Checkout</li>
                  <li className='li-move' >Wishlist</li>
                  <li className='li-move' >Product Track</li>
                  <li className='li-move' ></li>
                </ul>
              </div>
            </li>

            <li className=" dropdown">
              <div className="flex p-3">
                <span className='font-medium' >Pages</span>
                <img src={Dropdown} width={30} alt="123" />
              </div>
              <div className="dropdown-cnt  ">
                <div className="flex ">
                  <ul className='w-52'>
                    <h3 className='font-semibold'>PAGE LAYOUT </h3>
                    <li className='li-move' >Shop Filters V1</li>
                    <li className='li-move' >Shop Filters V2</li>
                    <li className='li-move' >Shop SideBar</li>
                    <li className='li-move' >Shop Right Sidebar</li>
                    <li className='li-move' >Shop List View</li>
                    <li className='li-move' ></li>
                  </ul>
                  <ul className='w-52'>
                    <h3 className='font-semibold'>  PAGE LAYOUT  </h3>
                    <li className='li-move' >About</li>
                    <li className='li-move' >Cart</li>
                    <li className='li-move' >Checkout</li>
                    <li className='li-move' >Sign In</li>
                    <li className='li-move' >Log In</li>
                  </ul>
                  <ul className='w-52'>
                    <h3 className='font-semibold'>PAGE LAYOUT</h3>
                    <li className='li-move' >Product Track</li>
                    <li className='li-move' >Wishlist</li>
                    <li className='li-move' >404 / Error</li>
                    <li className='li-move' >Coming Soon</li>
                  </ul>
                </div>
              </div>
            </li>

            <li className=" dropdown">
              <div className="flex p-3 ">
                <span className='font-medium'>Blog</span>
                <img src={Dropdown} width={30} alt="123" />
              </div>
              <div className="dropdown-cnt ">
                <ul className='w-32'>
                  <li className='li-move' >Blog</li>
                  <li className='li-move' >Blog Details</li>
                </ul>
              </div>
            </li>

            <li className="  ">
              <div className="p-3 font-medium">Contact</div>
            </li>
          </ul>

        <ul className='flex items-center '>
            <li className="relative">
              <img src={Cart} width={25} alt="" />
              <div className="absolute -top-3 -right-1 bg-ninico w-4 text-sm text-white text-center rounded-full">0</div>
            </li>
            
            <li className='mx-3 ms-4 '>
              <img src={User} width={25} alt="" />
            </li>
            
            <li className="relative">
              <img src={Heart} width={32} className='-mt-1' alt="" />
              <div className="absolute -top-2 -right-1 bg-ninico w-4 text-sm text-white text-center rounded-full">0</div>
            </li>

            <li className='ms-10 flex border mt-0 border-bdr-color rounded-md '>
                <div className=" p-3 flex">
                  <img src={Search} width={30} alt="123" />
                  <input type="text" className='h-8  ms-2' placeholder=' Search products...' />
              </div>
            </li>
        </ul>
      </nav>
    </>
  )
}

export default StickyNavbar
