import '../Navbar/Navbar.css'
import { useState } from 'react'

import Search from '../../assets/Search.svg'
import Ukflag from '../../assets/ukflag.png'
import Cart from '../../assets/Cart.svg'
import User from '../../assets/User.svg'
import Heart from '../../assets/Heart.svg'
import Dropdown from '../../assets/DropdownColor.svg'
import Logo from '../../assets/Logo.png'
import Bar from '../../assets/Bars.svg'
import BarColor from '../../assets/BarsColor.svg'
import Call from '../../assets/CallColor.svg'
import Location from '../../assets/LocationColor.svg'
import Handmade from '../../assets/Handmade.svg'
import ShoePrint from '../../assets/ShoePrints.svg'
import HappyIcon from '../../assets/HappyIcon.svg'
import Futboll from '../../assets/Futboll.svg'
import King from '../../assets/King.svg'
import Gift from '../../assets/Gift.svg'
import UserColor from '../../assets/UserColor.svg'



const Navbar = () => {

  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className=' mt-7 justify-between  items-center  flex justify-between    '>

        <div className="flex" >
          <div className="mx-4 mt-1 lg:hidden  " onClick={() => setOpen(!open) } ><img src={Bar} width={30} alt="123" /></div>
          <div className=""><img src={Logo} alt="" /></div>
        </div>

        <div className=" px-4 rounded-lg h-12 bg-search hidden md:flex   " >
          <img src={Search} className="bg-search" alt="123  " width={25} />
          <input type="text" className=' lg:w-96 md:w-72 focus:outline-none   h-12 ps-4 text-lg  ' placeholder='Search Product.... ' style={{ backgroundColor: '#F3F4F7' }} />
        </div>

        <div className="flex lg:flex hidden   ">
          <button className='dropdown     '>
            <div className="">
              <span className='flex  align-center p-1 border border-slate-300 rounded-md '>
                <img className=' ' src={Ukflag} alt="" width={40} />
                <span className='mx-1 mt-2  '>English</span>
                <img src={Dropdown} className="dropdown-toggle" alt="" width={20} />
              </span>

              <div className="dropdown-cnt z-[10] p-0 mt-5 ">
                <ul className='ms-3 mt-1 w-[115px]  text-left  '>
                  <li className='mt-2' >Arabic</li>
                  <li className='mt-2'>Spanish</li>
                  <li className='my-2'>Mandarin</li>
                </ul>
              </div>
            </div>
          </button>

          <div className=" ">
            <select className="border border-slate-300 rounded-md py-3 px-3   mx-3  ">
              <option value="" className='' >USD </option>
              <option value="">YEAN </option>
              <option value="">EURO</option>
            </select>
          </div>
        </div>

        <div className="flex  justify-between itemscenter  w-28">

          <div className=" relative "    >
            <img src={Cart} alt="" width={30} />
            <div className=" px-1 rounded-full text-sm text-white absolute top-[-12px] right-[-4px] bg-ninico"><span className='text-white'>0</span></div>
          </div>

          <div className="ms-2">
            <img src={User} alt="" width={30} />
          </div>

          <div className="-mt-1 relative "  >
            <img src={Heart} alt="" width={35} />
            <div className="px-1 rounded-full text-sm text-white absolute top-[-7px] right-[0] bg-ninico ">0</div>
          </div>

        </div>



      </nav>

      <nav className='  mt-3 flex justify-between '>
        <div className="flex  items-center mt-0 ">

          <div className="p-3 px-5 dropdown flex rounded-tl-md rounded-tr-md bg-ninico lg:flex  hidden   ">
            <div className="flex  ">
              <div className=" ">
                <img src={BarColor} alt="" width={25} />
              </div>
              <div className="text-white ms-3 font-medium ">Categories</div>
            </div>
            <div className="dropdown-cnt rounded-none border-none z-[10]   ">
              <ul className=''>
                <li className='flex'>
                  <img src={UserColor} width={20} alt="" />
                  <div className="ms-3 text-sm">Candles</div>
                </li>
                <li className='flex mt-5'>
                  <img src={Handmade} width={20} alt="" />
                  <div className="ms-3 text-sm   "> Handmade</div>
                </li>
                <li className='flex mt-5'>
                  <img src={ShoePrint} className="rotate-90" width={20} alt="" />
                  <div className="ms-3 text-sm  ">Gift Sets</div>
                </li>
                <li className='flex mt-5'>
                  <img src={HappyIcon} width={18} alt="" />
                  <div className="ms-3 text-sm  ">Plastic Gift</div>
                </li>
                <li className='flex mt-5'>
                  <img src={Futboll} width={18} alt="" />
                  <div className="ms-3 text-sm  "> Handly Cream</div>
                </li>
                <li className='flex mt-5'>
                  <img src={King} width={18} alt="" />
                  <div className="ms-3 text-sm  "> Handly Cream</div>
                </li>
                <li className='flex mt-5'>
                  <img src={Futboll} width={18} alt="" />
                  <div className="ms-3 text-sm  ">Silk Accessories</div>
                </li>
              </ul>
              <ul className='mt-6'>
                <li className='mt-1 hover:underline hover:underline-offset-2' >Value of the Day</li>
                <li className='mt-1 hover:underline hover:underline-offset-2' >Top 100 Offers</li>
                <li className='mt-1 hover:underline hover:underline-offset-2' >New Arrivals</li>
              </ul>
            </div>
          </div>


          <div className={`  hidden  lg:flex sm:inline-block sm:z-10 sm:bg-black lg:bg-white   sm:text-slate-100 sm:w-28  lg:items-center sm:pb-0 pb-12 absolute lg:static lg:z-auto z-20  w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-700 ease-in   mt-3 ${open ? 'top-20 left-0 text-white  ' : '-left-full top-20 bg-green-400 '} `}>
            
            <div className="ms-2 dropdown  ">
              <div className="flex px-3 py-2 text-sm ">
                <div className="">
                  <span className='font-semibold lg:text-[#040404] md:text-white' >Home</span>
                  <span className='border 2xl 2xl:hidden xl:hidden '>+</span>
                </div>
                <img src={Dropdown} width={20} alt="123" />
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
            </div>

            <div className=" dropdown ">
              <div className="flex py-2 px-2 text-sm">
                <span className='font-semibold'>Shop</span>
                <img src={Dropdown} width={20} alt="123" />
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
            </div>

            <div className=" dropdown  ">
              <div className="flex py-2 px-2">
                <span className='font-semibold text-sm ' >Pages</span>
                <img src={Dropdown} width={20} alt="123" />
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
            </div>

            <div className=" dropdown ">
              <div className="flex py-2 px-2 ">
                <span className='font-semibold text-sm '>Blog</span>
                <img src={Dropdown} width={20} alt="123" />
              </div>
              <div className="dropdown-cnt ">
                <ul className='w-32'>
                  <li className='li-move' >Blog</li>
                  <li className='li-move' >Blog Details</li>
                </ul>
              </div>
            </div>

            <div className="  ">
              <div className="p-3 font-medium">Contact</div>
            </div>
          </div>
        </div>

        <div className="  items-center justify-around xl:flex hidden">
          <div className="flex items-center">
            <img src={Call} width={30} alt="" />
            <span className='font-semibold  ms-1  '>908. 408. 504. 39</span>
          </div>
          <div className=" ms-3 flex">
            <img src={Location} width={20} alt="" />
            <span className='font-semibold ms-1'>Find Store</span>
          </div>
        </div>
      </nav>


    </>
  )
}

export default Navbar

