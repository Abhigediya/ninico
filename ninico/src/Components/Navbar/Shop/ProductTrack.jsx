import React from 'react'
import TopBarTwo from '../../TopBar/TopBarTwo'
import Navbar from '../Navbar'

import ShopImage from '../../../assets/ShopImage.jpg'
import Track from '../../../assets/Track.jpg'
import Truck from '../../../assets/Truck.svg'
import AddressCard from '../../../assets/AddressCard.svg'
import Email from '../../../assets/Email.svg'
import ArrowWhite from '../../../assets/ArrowWhite.svg'
import Footer from '../../Footer/Footer'

const ProductTrack = () => {
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
                            <div className="ms-3 text-footer-3  "> Track </div>
                        </div>
                        <div className="text-5xl mt-4 font-semibold"> Track </div>
                    </div>
                </div>
            </div>

            <section className='mt-20 container mx-auto flex justify-center  xl:w-[800px] lg:w-[700px] md:w-[450px] '>
                <div className="bg-sign-in rounded-lg">
                    <img src={Track}  className='rounded-tl-lg rounded-tr-lg' />
                    <div className="p-10 ">
                        <div className="flex">
                            <div className="bg-white h-12 px-3 py-2 flex items-center">
                                <img src={Truck} width={90} alt="" />
                            </div>
                            <div className="ms-4">
                                <h1 className='text-lg font-semibold'>Track Your Order </h1>
                                <div className="py-3 text-sm text-footer-3">
                                    To track your order please enter your Order ID in the box below and press the "Track" button.
                                    This was given to you on your receipt and in the confirmation email you should have received.
                                </div>
                            </div>
                        </div>

                        <div className="p-4 bg-white flex rounded-md ">
                            <img src={AddressCard} width={30} alt="" />
                            <input type="text" className='ms-3 focus:outline-none' placeholder='Order ID' />
                        </div>
                        <div className="p-4 mt-2 bg-white flex rounded-md">
                            <img src={Email} width={30} alt="" />
                            <input type="text" className='ms-3 focus:outline-none' placeholder='Billing email'  />
                        </div>

                        <div className="p-4 mt-3 rounded-lg  flex justify-center bg-ninico ">
                            <div className="text-white font-semibold">Track Now</div>
                            <img src={ArrowWhite} className='ms-3' width={20} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </>
    )
}

export default ProductTrack
