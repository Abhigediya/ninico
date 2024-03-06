import './App.css'
import HomePage from './HomePage/HomePage'
import TestNavbar from './Components/Navbar/TextNavbar'

// import Shop from './Components/Navbar/Shop/ShopOne'
import Shop from './Components/Navbar/Shop/ShopOne'
import ShopTwo from './Components/Navbar/Shop/ShopTwo'
import ShopDetailsOne from './Components/Navbar/Shop/ShopDetailsOne'
import ShopDetailsTwo from './Components/Navbar/Shop/ShopDetailsTwo'
import ShopLocation from './Components/Navbar/Shop/ShopLocation'
import Cart from './Components/Navbar/Shop/Cart'
import SignIn from './Components/Navbar/Shop/SignIn' 
import CheckOut from './Components/Navbar/Shop/CheckOut'
import WishList from './Components/Navbar/Shop/WishList'
import ProductTrack from './Components/Navbar/Shop/ProductTrack'
import About from './Components/Navbar/Pages/About'
import Error from './Components/Navbar/Pages/Error'
import ComingSoon from './Components/Navbar/Pages/ComingSoon'
import Blog from './Components/Navbar/Blog/Blog'

import PopularProductTwo from './Components/PopularProduct/PopularProductTwo'
import StickyNavbar from './Components/Navbar/StickyNavbar'
// import SignIn from './Components/Navbar/Shop/SignIn'
// import WishList from './Components/Navbar/Shop/WishList'
// import ProductTrack from './Components/Navbar/Shop/ProductTrack'
// import Blog from './Components/Navbar/Blog/Blog'
import Contact from './Components/Navbar/Contact'
import FooterTwo from './Components/Footer/FooterTwo'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
// import ShopTwo from './Components/Navbar/Shop/ShopTwo'
// import Cart from './Components/Navbar/Shop/Cart'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/Shop" element={<Shop/>} > </Route>
          <Route path='/ShopTwo' element={<ShopTwo/>}></Route>
          <Route path='/shopdetails' element={<ShopDetailsOne/>}></Route>
          <Route path='/ShopDetailsTwo' element={<ShopDetailsTwo/>}></Route>
          <Route path='/ShopDetailsTwo' element={<ShopDetailsTwo/>}></Route>
          <Route path='/ShopLocation' element={<ShopLocation/>}></Route>
          <Route path='/Cart' element={<Cart/>}></Route>
          <Route path='/SignIn' element={<SignIn/>}></Route>
          <Route path='/Checkout' element={<CheckOut/>} ></Route>
          <Route path='/Wishlist' element={<WishList/>}></Route>
          <Route path='/ProductTrack' element={<ProductTrack/>}></Route>
          <Route path='/About' element={<About/>}></Route>
          <Route path='/Checkout' element={<CheckOut/>} ></Route>
          <Route path='/Wishlist' element={<WishList/>} ></Route>
          <Route path='/Error' element={<Error/>} ></Route>
          <Route path='/ComingSoon' element={<ComingSoon/>} ></Route>
          <Route path='/Blog' element={<Blog/>} ></Route>

          
          {/* <Route path='/' element={} ></Route> */}
          {/* <Route path='/' element={} ></Route> */}
        </Routes>
      </BrowserRouter>

      {/* <TestNavbar/> */}
      {/* <StickyNavbar/> */}
      {/* <PopularProductTwo/> */}
      {/* <ShopDetailsOne/>  */}
      {/* <ShopTwo/> */}
      {/* <Cart/> */}
      {/* <WishList/> */}
      {/* <CheckOut/> */}
      {/* <About/>     */}
      {/* <Error/> */}
      {/* <Blog/> */}
      {/* <FooterTwo/>       */}
      {/* <Contact/> */}
      {/* <ProductTrack/> */}
      {/* <SignIn/> */}
      {/* <ShopLocation/> */}
    </>
  )
}

export default App


