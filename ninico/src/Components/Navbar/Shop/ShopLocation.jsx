import React from 'react'
import TopBarTwo from '../../TopBar/TopBarTwo'
import Navbar from '../Navbar'
import Footer from '../../Footer/Footer'

import ShopImage from '../../../assets/ShopImage.jpg'
import ArrowWhite from '../../../assets/ArrowWhite.svg'
import LocationOne from '../../../assets/location-1.jpg'
import LocationTwo from '../../../assets/location-2.jpg'
import LocationThree from '../../../assets/location-3.jpg'
import LocationFour from '../../../assets/location-4.jpg'
import Location from '../../../assets/LocationFooter-clr.svg'
import Call from '../../../assets/call.svg'
import Clock from '../../../assets/ClockColor.svg'


const ShopLocation = () => {
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
                            <div className="ms-3 text-footer-3  ">Shop Location </div>
                        </div>
                        <div className="text-5xl mt-4 font-semibold">Shop Location </div>
                    </div>
                </div>
            </div>

            <section className='container mx-auto mt-20'>
                <div className="flex justify-center   items-center">
                    <div className=" border border-bdr-color ">
                        <input type="text" className='h-14 focus:outline-none ps-5  ' placeholder='Search here' />
                    </div>
                    <div className="bg-ninico flex  items-center p-4 pt-5 rounded-tr-md rounded-br-md ">
                        <div className="text-white">Find Neraby Store</div>
                        <img src={ArrowWhite} className="ps-2" width={20} alt="" />
                    </div>
                </div>

                <div className="grid xl:grid-cols-2 xs:grid-cols-1 mt-20 gap-5 ">
                    <div className="lg:flex lg:justify-between border border-bdr-color rounded-tl-md rounded-bl-md ">
                        <div className=" xl:px-2 py-3 lg:px-10">
                            <h1 className='font-semibold px-4 xl:pt-0 lg:pt-10 '>Baldwin Hills Crenshaw Plaza</h1>
                            <div className="flex mt-3 px-3 ">
                                <img src={Location} width={20} alt="" />
                                <div className="ms-3 text-footer-3 hover:text-ninico    ">
                                    24/26 Strait Bargate, Boston, PE21, United KIngdom
                                </div>
                            </div>
                            <div className="flex mt-3 px-2 ">
                                <img src={Call} width={28} alt="" />
                                <div className="ms-2   ">
                                    <div className="text-footer-3 hover:text-ninico  text-base  ">
                                        +098 (905) 786 897 8
                                    </div>
                                    <div className="text-footer-3 hover:text-ninico   ">
                                        6 - 146 - 389 - 5748
                                    </div>
                                </div>
                            </div>

                            <div className="flex mt-3 px-3 ">
                                <img src={Clock} width={20} alt="" />
                                <div className="ms-3 text-footer-3 text-base "> Store Hours: 10am - 10pm EST, 7days a week </div>
                            </div>
                        </div>
                        <img src={LocationOne} className='xl:w-60 lg:w-72' alt="" />
                    </div>
                    <div className="lg:flex lg:justify-between   border border-bdr-color rounded-tl-md rounded-bl-md ">
                        <div className=" xl:px-2 py-3 lg:px-10 ">
                            <h1 className='font-semibold px-4 xl:pt-0 lg:pt-10 '>Ninico Hils Crenshaw Plaza </h1>
                            <div className="flex mt-3 px-3 ">
                                <img src={Location} width={20} alt="" />
                                <div className="ms-3 text-footer-3 hover:text-ninico    ">
                                    36/26 Strait Bargate, Boston, PE21, United Kingdom
                                </div>
                            </div>
                            <div className="flex mt-3 px-2 ">
                                <img src={Call} width={28} alt="" />
                                <div className="ms-2   ">
                                    <div className="text-footer-3 hover:text-ninico  text-base  ">
                                        +098 112 786 897 8
                                    </div>
                                    <div className="text-footer-3 hover:text-ninico   ">
                                        697 - 146 - 963 - 57
                                    </div>
                                </div>
                            </div>

                            <div className="flex mt-3 px-3 ">
                                <img src={Clock} width={20} alt="" />
                                <div className="ms-3 text-footer-3 text-base "> Store Hours: 9am - 10pm EST, 5days a week </div>
                            </div>
                        </div>
                        <img src={LocationTwo} className='xl:w-60 lg:w-72' alt="" />
                    </div>
                    <div className="lg:flex lg:justify-between  border border-bdr-color rounded-tl-md rounded-bl-md ">
                        <div className="xl:px-2 lg:px-10 px-2 py-3">
                            <h1 className='font-semibold px-4 xl:pt-0 lg:pt-10 '>Vagas BGM Crenshaw Plaza</h1>
                            <div className="flex mt-3 px-3 ">
                                <img src={Location} width={20} alt="" />
                                <div className="ms-3 text-footer-3 hover:text-ninico    ">
                                    40/26 Strait Bargate, Vegas, PE21, United KIngdom
                                </div>
                            </div>
                            <div className="flex mt-3 px-2 ">
                                <img src={Call} width={28} alt="" />
                                <div className="ms-2   ">
                                    <div className="text-footer-3 hover:text-ninico  text-base  ">
                                        +098 (905) 786 897 8
                                    </div>
                                    <div className="text-footer-3 hover:text-ninico   ">
                                        648 85952 - 555
                                    </div>
                                </div>
                            </div>

                            <div className="flex mt-3 px-3 ">
                                <img src={Clock} width={20} alt="" />
                                <div className="ms-3 text-footer-3 text-base "> Store Hours: 10am - 10pm EST, 7days a week </div>
                            </div>
                        </div>
                        <img src={LocationThree} className='xl:w-60 lg:w-72' alt="" />
                    </div>
                    <div className="lg:flex lg:justify-between border border-bdr-color rounded-tl-md rounded-bl-md ">
                        <div className="xl:px-2 lg:px-10 px-2 py-3">
                            <h1 className='font-semibold px-4 xl:pt-0 lg:pt-10 '>Baldwin Hills Crenshaw Plaza</h1>
                            <div className="flex mt-3 px-3 ">
                                <img src={Location} width={20} alt="" />
                                <div className="ms-3 text-footer-3 hover:text-ninico    ">
                                    38/26 Strait Bargate, Boston, PE21, United KIngdom
                                </div>
                            </div>
                            <div className="flex mt-3 px-2 ">
                                <img src={Call} width={28} alt="" />
                                <div className="ms-2   ">
                                    <div className="text-footer-3 hover:text-ninico  text-base  ">
                                        +098 (905) 786 897 8
                                    </div>
                                    <div className="text-footer-3 hover:text-ninico   ">
                                        6 - 146 - 389 - 5748
                                    </div>
                                </div>
                            </div>

                            <div className="flex mt-3 px-3 ">
                                <img src={Clock} width={20} alt="" />
                                <div className="ms-3 text-footer-3 text-base ">   Store Hours: 10am - 10pm EST, 7days a week </div>
                            </div>
                        </div>
                        <img src={LocationFour} className='xl:w-60 lg:w-72' alt="" />
                    </div>
                </div>

            </section>
            <Footer />
        </>
    )
}

export default ShopLocation
