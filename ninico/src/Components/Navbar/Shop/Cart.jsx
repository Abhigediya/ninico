import React from 'react'
import TopBarTwo from '../../TopBar/TopBarTwo'
import Navbar from '../Navbar'
import ShopImage from '../../../assets/ShopImage.jpg'
import Footer from '../../Footer/Footer'

const Cart = () => {
    return (
        <>
            <TopBarTwo />
            <div className="container mx-auto">
                <Navbar />
            </div>

            <div className="-mt ">
                <div className="relative">
                    <img src={ShopImage} className="h-48" alt="" />
                    <div className="absolute top-10 left-32  ">
                        <div className="flex items-center text-lg  ">
                            <div className="me-3">Home</div>
                            <div className="border-b w-8 border-footer-3"></div>
                            <div className="ms-3 text-footer-3  "> Cart </div>
                        </div>
                        <div className="text-5xl mt-4 font-semibold"> Cart </div>
                    </div>
                </div>
            </div>

            <section className='container mx-auto mt-10'>
                <div className="flex overflow-x-auto ">
                    <div className=" font-semibold border-bdr-color border xl:px-16 lg:px-14 md:px-8 xs:px-3 py-2">Images</div>
                    <div className=" font-semibold border-bdr-color border-t border-b xl:px-16 lg:px-14 md:px-8 xs:px-3 py-2">Courses</div>
                    <div className=" font-semibold border-bdr-color border xl:px-16 lg:px-14 md:px-7 xs:px-3 py-2">Unit Price</div>
                    <div className=" font-semibold border-bdr-color border-t border-b xl:px-16 lg:px-14 md:px-7 xs:px-3 py-2">Quantity</div>
                    <div className=" font-semibold border-bdr-color border xl:px-16 lg:px-14 md:px-9 xs:px-3 py-2">Total </div>
                    <div className=" font-semibold border-bdr-color border-t border-b border-e xl:px-16 lg:px-14 md:px-7 xs:px-3 py-2">Remove</div>
                </div>

                <div className="mt-10 md:flex justify-between">
                    <div className="">
                        <input type="text" className='h-14  ' placeholder='Coupon Code' />
                        <span className='bg-ninico text-white py-4 px-8 rounded-md font-semibold'>Apply Coupon    </span>
                    </div>
                    <div className="bg-ninico text-white py-4 px-8 rounded-md font-semibold">Update cart </div>
                </div>

                <div className="md:flex justify-end   ">
                    <div className="md:w-5/12">
                        <div className="text-2xl mt-9 ">Cart Totals</div>
                        <div className="flex mt-5 px-10 py-2 w-full justify-between border border-bdr-color ">
                            <span className='text-footer-3'>Subtotal </span>
                            <span className='text-footer-3'>$0.00</span>
                        </div>
                        <div className="flex px-10 py-2 w-full justify-between border border-bdr-color ">
                            <span className='text-footer-3'>Total </span>
                            <span className='text-footer-3'>$0.00</span>
                        </div>
                        <div className="text-white md:w-5/12 bg-ninico py-4 px-5 mt-4 rounded-md font-semibold"> Proceed to Checkout </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Cart
