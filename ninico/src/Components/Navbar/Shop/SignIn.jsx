import React from 'react'
import TopBarTwo from '../../TopBar/TopBarTwo'
import Navbar from '../Navbar'

import ShopImage from '../../../assets/ShopImage.jpg'
import Login from '../../../assets/Login-bg.jpg'
import Lock from '../../../assets/LockNinico.svg'
import User from '../../../assets/User.svg'
import Key from '../../../assets/Key.svg'
import Signin from '../../../assets/Sign-bg.jpg'
import SigninIcon from '../../../assets/Sign-up.png'
import Email from '../../../assets/Email.svg'
import ArrowWhite from '../../../assets/ArrowWhite.svg'
import Arrow from '../../../assets/Arrow.svg'
import Footer from '../../Footer/Footer'

const SignIn = () => {
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
                            <div className="ms-3 text-footer-3  "> Sign In  </div>
                        </div>
                        <div className="text-5xl mt-4 font-semibold"> Sign In </div>
                    </div>
                </div>
            </div>

            <section className='container mx-auto grid lg:grid-cols-2 gap-10 mt-20 mb-20 '>
                <div className="bg-sign-in rounded-lg ">
                    <img src={Login} className='rounded-tl-lg rounded-tr-lg' alt="123" />
                    <div className=" px-5 py-5">
                        <div className="flex">
                            <div className="bg-white h-10 p-3">
                                <img src={Lock} width={30} alt="" />
                            </div>
                            <div className="px-5">
                                <h1 className='text-lg font-semibold'>Login Here</h1>
                                <div className="text-sm text-footer-3">
                                    Your personal data will be used experience throughout this website,
                                    to manage access to your account.
                                </div>
                            </div>
                        </div>
                        <div className="bg-white flex py-5 px-6 mt-5 ">
                            <img src={User} width={20} alt="" />
                            <input type="text" className='px-5 w-full  focus:outline-none' placeholder='Username / email address' />
                        </div>
                        <div className="bg-white flex py-5 px-6 mt-5 ">
                            <img src={Key} width={20} alt="" />
                            <input type="text" className='px-5 w-full  focus:outline-none' placeholder='Password' />
                        </div>

                        <div className="flex justify-between mt-4">
                            <div className="flex items-center">
                                <input type="checkbox" className='border-0' />
                                <span className='ms-2 text-sm text-footer-3'>Remember me </span>
                            </div>
                            <div className="underline">Forget Password</div>
                        </div>

                        <div className=" py-4 mt-5 rounded-lg bg-ninico flex justify-center ">
                            <div className="font-semibold text-white px-2    ">Login Now</div>
                            <img src={ArrowWhite} width={25} className='px-1' alt="" />
                        </div>
                    </div>
                </div>
                <div className="bg-sign-in">
                    <img src={Signin} className="rounded-tr-lg rounded-tl-lg" alt="" />
                    <div className="bg-sign-in px-5 py-5">
                        <div className="flex">
                            <div className="p-3 h-11 bg-white">
                                <img src={SigninIcon} width={45} alt="" />
                            </div>
                            <div className="px-5">
                                <div className="text-lg font-semibold">Sign Up</div>
                                <div className="text-sm text-footer-3">
                                    Your personal data will be used to support your experience throughout this website,
                                    to manage access to your account.
                                </div>
                            </div>
                        </div>
                        <div className="flex bg-white px-6 py-5 mt-5">
                            <img src={Email} width={20} alt="" />
                            <input type="text" className='px-5 w-full focus:outline-none' placeholder='Email address' />
                        </div>
                        <div className="flex bg-white px-6 py-5 mt-5">
                            <img src={Key} width={20} alt="" />
                            <input type="text" className='px-5 w-full focus:outline-none' placeholder='Password' />
                        </div>
                        <div className="underline mt-4">Already Have Account?</div>
                        <div className=" py-4 mt-5 rounded-lg bg-register flex justify-center group hover:bg-black ">
                            <div className="font-semibold  px-2 group-hover:text-white   ">Register Now</div>
                            <img src={Arrow} width={25} className='px-1 relative group-hover:hidden' alt="" />
                            <img src={ArrowWhite} width={25} className='hidden group-hover:block px-1 ' alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default SignIn
