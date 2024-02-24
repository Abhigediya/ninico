import '../Navbar/Navbar.css'
import Search from '../../assets/Search.svg'
import Ukflag from '../../assets/ukflag.png'
import Cart from '../../assets/Cart.svg'
import User from '../../assets/User.svg'
import Heart from '../../assets/Heart.svg'
import Dropdown from '../../assets/Dropdown.svg'
import Logo from '../../assets/Logo.png'
import Bar from '../../assets/Bars.svg'
import Call from '../../assets/Call.svg'
import Location from '../../assets/Location.svg'
import Handmade from '../../assets/Handmade.svg'
import ShoePrint from '../../assets/ShoePrints.png'
import HappyIcon from '../../assets/HappyIcon.svg'
import Futboll from '../../assets/Futboll.svg'
import King from '../../assets/King.svg'
import Gift from '../../assets/Gift.svg'
import UserColor from '../../assets/UserColor.svg'


const Navbar = () => {
  return (
    <>
      <nav className=' mx-12 mt-3   items-center md:flex md:justify-between sm:flex sm:justify-arond sm:container sm:mx-auto  '>

    {/* <button className='bg-red-300 px-3 p-2' onClick={toggle} >  CLick me</button> */}

    
        <div className="flex" >
          <div className="mx-4 mt-1 xl:hidden "><img src={Bar} width={30} alt="123" /></div>
          <div className=""><img src={Logo} alt="" /></div>
        </div>

        <div className=" px-4 rounded-lg h-12 bg-search hidden md:flex   " >
          <img src={Search} className="" alt="123  " width={25} />
          <input type="text" className=' lg:w-96 md:w-72 focus:outline-none   h-12 ps-4 text-lg  ' placeholder='Search Product.... ' style={{ backgroundColor: '#F3F4F7' }} />
        </div>

        <div className="flex xl:flex hidden   ">
          <button className='dropdown   '>
            <div className="">
              <span className='flex  align-center p-1 border border-slate-300 '>
                <img className=' ' src={Ukflag} alt="" width={40} />
                <span className='mx-1 mt-2 '>English</span>
                <img src={Dropdown} className="dropdown-toggle" alt="" width={30} />
              </span>

              <div className="dropdown-cnt">
                <ul className='ms-3 mt-1 w-[125px]  text-left  '>
                  <li className='mt-2' >Arabic</li>
                  <li className='mt-2'>Spanish</li>
                  <li className='my-2'>Mandarin</li>
                </ul>
              </div>
            </div>
          </button>

          <div className=" ">
            <select className="border border-slate-300  py-3 px-3   mx-3  ">
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

      <nav className='  mt-3 flex justify-between'>
        <div className="flex items-center ">

          <div className="p-3 px-5 dropdown flex rounded-md bg-ninico xl:flex  hidden   ">
            <div className="flex  ">
              <div className=" ">
                <img src={Bar} alt="" width={25} />
              </div>
              <div className="text-white ms-3">Categories</div>
            </div>
            <div className="dropdown-cnt   ">
              <ul className=''>
                <li className=''>
                  <div className="flex">
                    <img src={UserColor} width={20} alt="" />
                    <div className="ms-3 text-sm">Candles</div>
                  </div>
                </li>
                <li className=''>
                  <div className="flex">
                    <img src={Handmade} width={20} alt="" />
                    <div className="ms-3 text-sm   "> Handmade</div>
                  </div>
                </li>
                <li className=''>
                  <div className="flex">
                    <img src={ShoePrint} className="rotate-90" width={20} alt="" />
                    <div className="ms-3 text-sm  ">Gift Sets</div>
                  </div>
                </li>
                <li className=''>
                  <div className="flex">
                    <img src={HappyIcon} width={18} alt="" />
                    <div className="ms-3 text-sm  ">Plastic Gift</div>
                  </div>
                </li>
                <li className=''>
                  <div className="flex">
                    <img src={Futboll} width={18} alt="" />
                    <div className="ms-3 text-sm  "> Handly Cream</div>
                  </div>
                </li>
                <li className=''>
                  <div className="flex">
                    <img src={King} width={18} alt="" />
                    <div className="ms-3 text-sm  "> Handly Cream</div>
                  </div>
                </li>
                <li className=''>
                  <div className="flex">
                    <img src={Futboll} width={18} alt="" />
                    <div className="ms-3 text-sm  ">Silk Accessories</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>


          <ul className=" respo-nav flex xl:flex lg:hidden md:hidden ">
            {/* <ul className=" respo-nav flex xl:flex lg:hidden md:hidden "> */}
            <li className="ms-2 dropdown ">
              {/* <div className="dropdown "> */}
              <div className="flex p-3 ">
                <div className="">
                  <span >Home</span>
                  <span className='border 2xl 2xl:hidden xl:hidden '>+</span>
                </div>
                <img src={Dropdown} width={30} alt="123" />
              </div>
              <div className="dropdown-cnt  ">
                <ul className='w-52'>
                  <li>Wooden Home</li>
                  <li>Fashion Home</li>
                  <li>Furniture Home</li>
                  <li>Cosmetics Home</li>
                  <li>Food Grocery</li>
                </ul>
              </div>
              {/* </div> */}
            </li>

            {/* <div className=""> */}
            <li className=" dropdown">
              <div className="flex p-3">
                <span>Shop</span>
                <img src={Dropdown} width={30} alt="123" />
              </div>
              <div className="dropdown-cnt ">
                <ul className='w-52'>
                  <li>Shop</li>
                  <li>Shop 2</li>
                  <li>Shop Details</li>
                  <li>Shop Details 2</li>
                  <li>Shop Location</li>
                  <li>Cart</li>
                  <li>Sign in </li>
                  <li>Checkout</li>
                  <li>Wishlist</li>
                  <li>Product Track</li>
                  <li></li>
                </ul>
              </div>
            </li>
            {/* </div> */}

            {/* <div className="mx-3  "> */}
            <li className=" dropdown">
              <div className="flex p-3">
                <span>Pages</span>
                <img src={Dropdown} width={30} alt="123" />
              </div>
              <div className="dropdown-cnt  ">
                <div className="flex ">
                  <ul className='w-52'>
                    <h3 className='font-semibold'>PAGE LAYOUT </h3>
                    <li>Shop Filters V1</li>
                    <li>Shop Filters V2</li>
                    <li>Shop SideBar</li>
                    <li>Shop Right Sidebar</li>
                    <li>Shop List View</li>
                    <li></li>
                  </ul>
                  <ul className='w-52'>
                    <h3 className='font-semibold'>  PAGE LAYOUT  </h3>
                    <li>About</li>
                    <li>Cart</li>
                    <li>Checkout</li>
                    <li>Sign In</li>
                    <li>Log In</li>
                  </ul>
                  <ul className='w-52'>
                    <h3 className='font-semibold'>PAGE LAYOUT</h3>
                    <li>Product Track</li>
                    <li>Wishlist</li>
                    <li>404 / Error</li>
                    <li>Coming Soon</li>
                  </ul>
                </div>
              </div>
            </li>
            {/* </div> */}

            {/* <div className=""> */}
            <li className=" dropdown">
              <div className="flex p-3 ">
                <span>Blog</span>
                <img src={Dropdown} width={30} alt="123" />
              </div>
              <div className="dropdown-cnt ">
                <ul className='w-32'>
                  <li>Blog</li>
                  <li>Blog Details</li>
                </ul>
              </div>
            </li>
            {/* </div> */}

            <li className="  ">
              <div className="p-3">Contact</div>
            </li>
          </ul>
        </div>

        <div className="  items-center justify-around xl:flex hidden">
          <div className="flex items-center">
            <img src={Call} width={30} alt="" />
            <span className='font-bold  ms-1  '>908. 408. 504. 39</span>
          </div>
          <div className=" ms-3 flex">
            <img src={Location} width={20} alt="" />
            <span className='font-bold ms-1'>Find Store</span>
          </div>
        </div>
      </nav>


    </>
  )
}

export default Navbar

