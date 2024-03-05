import React from 'react'
import TopBarTwo from '../../TopBar/TopBarTwo'
import Navbar from '../Navbar'

import ShopImage from '../../../assets/ShopImage.jpg'
import Footer from '../../Footer/Footer'

const WishList = () => {
    return (
        <>
            <TopBarTwo />
            <div className="container mx-auto">
                <Navbar />
            </div>

            <div className="-mt-1 ">
                <div className="relative">
                    <img src={ShopImage} className="h-48" alt="" />
                    <div className="absolute top-10 left-32  ">
                        <div className="flex items-center text-lg  ">
                            <div className="me-3">Home</div>
                            <div className="border-b w-8 border-footer-3"></div>
                            <div className="ms-3 text-footer-3  "> Wishlist  </div>
                        </div>
                        <div className="text-5xl mt-4 font-semibold"> Wishlist </div>
                    </div>
                </div>
            </div>

            <section className='container mx-auto my-24'>
                <div className="flex overflow-x-auto ">
                    <div className=" font-semibold border-bdr-color border xl:px-16 lg:px-14 md:px-8 xs:px-3 py-2">Images</div>
                    <div className=" font-semibold border-bdr-color border-t border-b xl:px-16 lg:px-14 md:px-8 xs:px-3 py-2">Courses</div>
                    <div className=" font-semibold border-bdr-color border xl:px-16 lg:px-14 md:px-7 xs:px-3 py-2">Unit Price</div>
                    <div className=" font-semibold border-bdr-color border-t border-b xl:px-16 lg:px-14 md:px-7 xs:px-3 py-2">Quantity</div>
                    <div className=" font-semibold border-bdr-color border xl:px-16 lg:px-14 md:px-9 xs:px-3 py-2">Total </div>
                    <div className=" font-semibold border-bdr-color border-t border-b border-e xl:px-16 lg:px-14 md:px-7 xs:px-3 py-2">Remove</div>
                </div>
            </section>

            <Footer />

        </>
    )
}

export default WishList
