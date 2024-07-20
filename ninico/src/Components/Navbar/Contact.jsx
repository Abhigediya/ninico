import React from 'react'
import TopBarTwo from '../TopBar/TopBarTwo'
import Navbar from './Navbar'
import Footer from '../Footer/Footer'

import Location from '../../assets/Location.svg'
import Call from '../../assets/call.svg'
import Clock from '../../assets/Clock.svg'
import LocationNinico from '../../assets/LocationColor.svg'

const Contact = () => {
    return (
        <>
            <TopBarTwo />
            <div className="container mx-auto">
                <Navbar />
                <div className="mt-20 grid  lg:grid-cols-12 gap-10 ">
                    {/* <div className="rows"> */}
                    <div className=" lg:col-span-4  ">
                        <div className="p-10 border border-[#E7E7E7] rounded-lg">
                            <h1 className='text-2xl font-medium'> Get In Touch </h1>
                            <div className="mt-8 flex">
                                <img src={Location} width={15} alt="" />
                                <div className="ps-3 text-footer-3">24/26 Strait Bargate,Boston,PE21, United Kingdom</div>
                            </div>
                            <div className="mt-2 flex">
                                <img src={Call} width={20} alt="" />
                                <div className="ps-2">
                                    <div className="text-footer-3">+098 (905) 786 897 8 </div>
                                    <div className="text-footer-3">6 - 146 - 389 - 5748 </div>
                                </div>
                            </div>
                            <div className="mt-3 flex">
                                <img src={Clock} width={13} alt="" />
                                <div className="ps-3">
                                    <div className="text-footer-3">Store Hours:</div>
                                    <div className="text-footer-3">10 am - 10 pm EST, 7 days a week</div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 p-3 flex border border-[#E7E7E7] rounded-lg justify-center ">Get Support On Call</div>
                        <div className="mt-3 p-3 flex border border-[#E7E7E7] rounded-lg justify-center">
                            <div className="">Get Direction</div>
                            <img src={LocationNinico} className='ms-2' width={15} alt="" />
                        </div>
                    </div>

                    <div className=" lg:col-span-8  p-5">
                        <h1 className='text-2xl font-semibold '>Make Custom Request  </h1>
                        <span className='text-sm text-footer-3'>
                            Must-have pieces selected every month want style Ideas and Treats?
                        </span>
                        <div className="rows mt-10 ">
                            <div className="grid grid-cols-12 gap-5">
                                <div className="col-span-6 ">
                                    <input type="text" className=' p-3 px-5 border border-[#E7E7E7] rounded-md w-full' placeholder='Full name' />
                                </div>
                                <div className="col-span-6 ">
                                    <input type="text" className=' p-3 px-5 border border-[#E7E7E7] rounded-md w-full' placeholder='Email address ' />
                                </div>
                                <div className="col-span-6 ">
                                    <input type="text" className=' p-3 px-5 border border-[#E7E7E7] rounded-md w-full' placeholder='Phone number ' />
                                </div>
                                <div className="col-span-6 ">
                                    <input type="text" className=' p-3 px-5 border border-[#E7E7E7] rounded-md w-full' placeholder='Subject' />
                                </div>
                            </div>
                        </div>
                        <div className="mt-5">
                            <textarea name="" id="" cols="30" rows="5" placeholder='Enter message'
                                className='  p-7 border texts-xs  w-full border-[#E7E7E7] rounded-lg ' />
                        </div>
                        <button className='py-4 px-10 font-semibold  text-white rounded-md   bg-ninico'>Get A Quote</button>
                    </div>
                    {/* </div> */}

                </div>
            </div>
            <div className="mt-20">
                <iframe className='w-full h-[500px] ' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.0361442392!2d-74.30933974441683!3d40.69753995048309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1712314811546!5m2!1sen!2sin" ></iframe>
            </div>
            <div className="mt-0">
                <Footer />
            </div>
        </>
    )
}

export default Contact
