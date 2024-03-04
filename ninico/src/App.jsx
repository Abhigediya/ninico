import './App.css'
  import HomePage from './HomePage/HomePage'
import TestNavbar from './Components/Navbar/TextNavbar'

// import Shop from './Components/Navbar/Shop/ShopOne'
import ShopTwo from './Components/Navbar/Shop/ShopTwo'
import Shop from './Components/Navbar/Shop/ShopOne'
import ShopDetailsOne from './Components/Navbar/Shop/ShopDetailsOne'
import PopularProductTwo from './Components/PopularProduct/PopularProductTwo'
import StickyNavbar from './Components/Navbar/StickyNavbar'
import ShopLocation from './Components/Navbar/Shop/ShopLocation'
import Cart from './Components/Navbar/Shop/Cart'
import SignIn from './Components/Navbar/Shop/SignIn'
import WishList from './Components/Navbar/Shop/WishList'
import CheckOut from './Components/Navbar/Shop/CheckOut'
function App() {

  return (
    <>
      {/* <TestNavbar/> */}
      {/* <StickyNavbar/> */}
      {/* <HomePage/> */}
      {/* <PopularProductTwo/> */}
      {/* <ShopDetailsOne/>  */}
      {/* <ShopTwo/> */}
      {/* <Cart/> */}
      {/* <WishList/> */}
      <CheckOut/>

      {/* <SignIn/> */}
      {/* <ShopLocation/> */}
    </>
  )
}

export default App


