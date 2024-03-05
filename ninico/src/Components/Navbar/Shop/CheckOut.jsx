import React from 'react'
import TopBarTwo from '../../TopBar/TopBarTwo'
import Navbar from '../Navbar'
import Footer from '../../Footer/Footer'

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
                    <div className="md:flex justify-between pt-7">
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

                    <div className="md:flex justify-between pt-7">
                        <div className="">
                            <span className='text-checkoutText text-lg'>State / County  </span>
                            <span className='text-red-500'>*</span>
                            <div className=" border border-bdr-color w-64 ">
                                <input type="text " className='ps-4 w-full h-10 focus:outline-red-600  ' />
                            </div>
                        </div>
                        <div className="">
                            <span className='text-checkoutText text-lg'>Postcode / Zip </span>
                            <span className='text-red-500'>*</span>
                            <div className=" border border border-bdr-color w-64 ">
                                <input type="text" className='ps-4 w-full h-10 focus:outline-red-600 ' placeholder='Postcode / Zip' />
                            </div>
                        </div>
                    </div>
                    <div className="md:flex justify-between pt-7">
                        <div className="">
                            <span className='text-checkoutText text-lg'>Email Address  </span>
                            <span className='text-red-500'>*</span>
                            <div className=" border border-bdr-color w-64 ">
                                <input type="text " className='ps-4 w-full h-10 focus:outline-red-600  ' />
                            </div>
                        </div>
                        <div className="">
                            <span className='text-checkoutText text-lg'>Phone </span>
                            <span className='text-red-500'>*</span>
                            <div className=" border border border-bdr-color w-64 ">
                                <input type="text" className='ps-4 w-full h-10 focus:outline-red-600 ' placeholder='Postcode / Zip' />
                            </div>
                        </div>
                    </div>
                    <div className="pt-7">
                        <input type="checkbox" />
                        <span className='ms-2 text-checkoutText'>Create an Account?</span>
                    </div>
                    <div className="flex items-center pt-7 border-b border-bdr-color">
                        <span className='text-2xl text-checkoutText pe-5 pb-2'>Ship to a different address?  </span>
                        <input type="checkbox" />
                    </div>

                    <div className="pt-7">
                        <div className="text-checkoutText pb-2">Order Notes</div>
                        <textarea name="" id="" className=' border border-bdr-color p-5 text-lg' cols="60" rows="3"
                            placeholder='Notes about your rder, e.g. special notes for delivery.'></textarea>
                    </div>
                </div>
                <div className="">
                    <div className="border-4 border-checkoutBorder p-10">
                        <div className="text-3xl pb-3 border-b border-bdr-color">Your Order</div>
                        <div className="grid grid-cols-2 text-sm  ">
                            <div className="text-checkoutText py-4 border-b border-bdr-color">Product </div>
                            <div className="text-checkoutText py-4 border-b border-bdr-color">Total </div>
                            <div className="text-checkoutText py-4 border-b border-bdr-color">Vestibulum suscipit × 1 </div>
                            <div className="text-checkoutText py-4 border-b border-bdr-color">$165.00 </div>
                            <div className="text-checkoutText py-4 border-b border-bdr-color">Vestibulum dictum magna × 1 </div>
                            <div className="text-checkoutText py-4 border-b border-bdr-color">$50.00</div>
                            <div className="text-checkoutText py-4 border-b border-bdr-color">Cart Subtotal </div>
                            <div className="text-checkoutText py-4 border-b border-bdr-color">$215.00 </div>
                            <div className="text-checkoutText py-4 border-b border-bdr-color"> Shipping</div>
                            <div className="text-checkoutText py-4 border-b border-bdr-color">
                                <div className="flex items-center">
                                    <input type="radio" />
                                    <span className='ms-2 text-checkoutText'>Flat Rate: $7.00</span>
                                </div>
                                <div className="flex items-center">
                                    <input type="radio" />
                                    <span className='ms-2 text-checkoutText'>Free Shipping</span>
                                </div>
                            </div>
                            <div className="text-checkoutText py-4 border-b border-bdr-color"> Order Total </div>
                            <div className="text-checkoutText py-4 border-b border-bdr-color">$215.00</div>
                        </div>
                        <div className=" py-5 pt-10 flex text-xl font-medium justify-between">
                            <div className="">Direct Bank Transfer</div>
                            <div className="">+</div>
                        </div>
                        <div className=" py-5 flex text-xl font-medium justify-between">
                            <div className="">Cheque Payment</div>
                            <div className="">+</div>
                        </div>
                        <div className=" py-5 flex text-xl font-medium justify-between">
                            <div className="">PayPal</div>
                            <div className="">+</div>
                        </div>

                        <div className="mt-3 bg-ninico py-3 text-white  text-center font-medium">Place Order</div>
                    </div>
                </div>
            </section>

            <Footer/>
        </>
    )
}

export default CheckOut
