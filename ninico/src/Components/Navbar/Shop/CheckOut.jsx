import React from 'react'
import TopBarTwo from '../../TopBar/TopBarTwo'
import Navbar from '../Navbar'

import ShopImage from '../../../assets/ShopImage.jpg'
import Folder from '../../../assets/Folder.svg'
import FolderColor from '../../../assets/FolderColor.svg'

const CheckOut = () => {
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
                            <div className="ms-3 text-footer-3  "> CheckOut  </div>
                        </div>
                        <div className="text-5xl mt-4 font-semibold"> CheckOut </div>
                    </div>
                </div>
            </div>



            <section className='container mt-20 mx-auto grid grid-cols-2 gap-8 ' >
                <div className="p-3 bg-checkout flex items-center border-t-4 border-checkoutBorder">
                    <img src={FolderColor} width={20} alt="" />
                    <div className="text-sm">
                        <span>Returing customer? </span>
                        <span className='text-footer-3'>Click here to login </span>
                    </div>
                </div>
                <div className="p-3 bg-checkout flex items-center border-t-4 border-checkoutBorder">
                    <img src={FolderColor} width={20} alt="" />
                    <div className="text-sm">
                        <span>Have a coupon? </span>
                        <span className='text-footer-3'>Click here to enter your code </span>
                    </div>
                </div>
            </section>

            <section className='container mt-10 mx-auto grid lg:grid-cols-2 gap-8'>
                <div className="">
                    <div className="text-3xl border-b pb-2 border-bdr-color">Billing Details</div>
                    <div className="mt-7  pb-2 text-lg text-checkoutText ">Country <span className='text-red-500'>*</span></div>
                    <select className='w-full p-2 border border-bdr-color' name="" id="">
                        <option value="">United States</option>
                        <option value="">Algeria</option>
                        <option value="">Canada</option>
                        <option value="">Givenchyy</option>
                        <option value="">England</option>
                        <option value="">Qatar</option>
                        <option value="">Dominican Republic</option>
                    </select>
                    <div className="flex justify-between pt-7">
                        <div className="">
                            <span className='text-checkoutText text-lg'>First Name </span>
                            <span className='text-red-500'>*</span>
                            <div className=" border border-bdr-color w-64 ">
                                <input type="text " className='ps-4 w-full h-10 focus:outline-red-600  ' />
                            </div>
                        </div>
                        <div className="">
                            <span className='text-checkoutText text-lg'>Last Name </span>
                            <span className='text-red-500'>*</span>
                            <div className=" border border border-bdr-color w-64 ">
                                <input type="text" className='ps-4 w-full h-10 focus:outline-red-600 ' />
                            </div>
                        </div>
                    </div>

                    <div className="pt-7">
                        <div className="text-checkoutText text-lg">Company Name</div>
                        <div className=" border border border-bdr-color ">
                            <input type="text" className='ps-4 w-full h-10 focus:outline-red-600 ' />
                        </div>
                    </div>

                    <div className="pt-7">
                        <div className="">
                            <span className='text-checkoutText text-lg'>Address</span>
                            <span className='text-red-500'>*</span>
                        </div>
                        <div className=" border border border-bdr-color ">
                            <input type="text" className='ps-4 w-full h-10 focus:outline-red-600 ' placeholder='Street address' />
                        </div>
                    </div>
                    <div className="mt-7 border border border-bdr-color  ">
                        <input type="text" className='ps-4 w-full h-10 focus:outline-red-600 ' 
                        placeholder='Apartment, suite, unit etc. (optional)' />
                    </div>

                    <div className="pt-7">
                        <div className="">
                            <span className='text-checkoutText text-lg'>Town / City</span>
                            <span className='text-red-500'>*</span>
                        </div>
                        <div className=" border border border-bdr-color ">
                            <input type="text" className='ps-4 w-full h-10 focus:outline-red-600 ' placeholder='Town / City' />
                        </div>
                    </div>
                </div>
            </section>

            <div className="mt-96">
                sc
            </div>
        </>
    )
}

export default CheckOut
