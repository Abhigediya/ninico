import React from 'react'
import TopBarTwo from '../../TopBar/TopBarTwo'
import Navbar from '../Navbar'

import ShopImage from '../../../assets/ShopImage.jpg'
import ErrorImg from '../../../assets/Error.png'
import leftWhiteArrow from '../../../assets/leftWhiteArrow.svg'
import Footer from '../../Footer/Footer'
const Error = () => {
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
                            <div className="ms-3 text-footer-3  "> Error </div>
                        </div>
                        <div className="text-5xl mt-4 font-semibold"> Error </div>
                    </div>
                </div>
            </div>

            <section className=' container mx-auto mt-10 flex justify-center'>
                <div className="">
                    <div className="my-10 flex justify-center">
                        <img src={ErrorImg} classNames='' alt="" />
                    </div>

                    <h1 className='text-center text-5xl font-bold'>404. Page not found</h1>
                    <div className="my-10 flex justify-center ">
                        <span className='lg:w-96  '>

                            Sorry, we couldn't find the page you where looking for. We suggest that you return to homepage
                        </span>
                    </div>
                    <div className="flex justify-center">
                        <button className=' py-3 px-3 bg-ninico flex items-center  rounded-lg'>
                            <img src={leftWhiteArrow} width={30} alt="" />
                            <div className="ms-5    text-white font-semibold ">Back To Home</div>
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Error
