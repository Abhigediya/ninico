import React from 'react'
import TopBarTwo from '../../TopBar/TopBarTwo'
import Navbar from '../Navbar'
import DetailsSectionOne from './DetailsSectionOne'

import ShopImage from '../../../assets/ShopImage.jpg'
import YellowStar from "../../../assets/YellowStar.svg";
import Cart from "../../../assets/CartWhite.svg";
import HeartColor from "../../../assets/HeartColor.svg";
import Facebook from "../../../assets/FacebookColor.svg";
import Twitter from "../../../assets/TwitterColor.svg";
import Behance from "../../../assets/BehanceColor.svg";
import Youtube from "../../../assets/YouTubeColor.svg";
import LinkedIn from "../../../assets/LinkedInColor.svg";
import Truck from "../../../assets/Truck.png";
import Organic from "../../../assets/Organic.png";
import Return from "../../../assets/Return.png";
import Covid from "../../../assets/Covid.png";
import Heart from '../../../assets/Heart.svg';
import AngelFront from '../../../assets/AngelFront.jpeg'
import AngelBack from '../../../assets/AngelBack.jpeg'
import GeorgieFront from '../../../assets/GeorgieFront.jpeg'
import DetailsContent from './DetailsContent'
import DetailsSlider from './DetailsSlider'
import FooterTwo from '../../Footer/FooterTwo'


const ShopDetailsTwo = () => {
    return (
        <>
            <TopBarTwo />
            <div className="container mx-auto">
                <Navbar />
            </div>
            <div className="-mt-1 ">
                <div className="relative">
                    <img src={ShopImage} className="h-48" alt="" />
                    <div className="absolute top-10 left-28  ">
                        <div className="flex items-center text-lg  ">
                            <div className="me-3">Home</div>
                            <div className="border-b w-8 border-footer-3"></div>
                            <div className="ms-3 text-footer-3  ">Shop Details 2</div>
                        </div>
                        <div className="text-5xl mt-4 font-semibold">Shop Details 2</div>
                    </div>
                </div>
            </div>
            <section className="mt-10 container mx-auto grid  grid-cols-12 gap-5">
                <div className="xl:col-span-4 md:col-span-12">
                    <img src={AngelFront} className='rounded-xl' alt="" />
                    <img src={AngelBack} className='mt-5 rounded-xl' alt="" />
                    <img src={GeorgieFront} className='mt-5 rounded-xl' alt="" />
                </div>
                <div className="xl:col-span-5 md:col-span-7  ">
                    {/* <div className="md:flex sticky top-0 lg:mt-0 mt-16">
                        <div className="ms-6">
                            <div className="flex">
                                <span className="bg-red-100 font-semibold px-2 text-ninico">
                                    Dress
                                </span>
                                <span className="flex ms-4">
                                    <img src={YellowStar} width={20} alt="123" />
                                    <img src={YellowStar} width={20} alt="123" />
                                    <img src={YellowStar} width={20} alt="123" />
                                </span>
                                <span className="text-footer-3 ms-3">10 Reviews </span>
                            </div>
                            <div className="flex items-center">
                                <h2 className="text-3xl font-semibold">
                                    Wide Cooton Tunic Dress
                                </h2>
                                <span className="border ms-3 px-2 border-bdr-color ">
                                    In Stock
                                </span>
                            </div>
                            <div className="mt-1">
                                <del className="font-semibold text-xl text-footer-3">$9.35</del>
                                <span className="font-semibold text-4xl text-ninico">
                                    $7.25
                                </span>
                            </div>
                            <div className="text-footer-3 text-base mt-7 ">
                                <div>
                                    Priyoshop has brought to you the Hijab 3 Pieces Combo Pack
                                    PS23. It is a
                                </div>
                                <div>
                                    completely modern design and you feel comfortable to put on
                                    this hijab.
                                </div>
                                <span>Buy it at the best price</span>
                            </div>
                            <div className="flex mt-4 justify-between">
                                <div className=" border border-bdr-color rounded-md  text-center  py-2 px-8">
                                    <span className="text-3xl text-footer-3"> - </span>
                                    <span className="text-2xl font-medium"> 1 </span>
                                    <span className="text-3xl text-footer-3"> + </span>
                                </div>
                                <div className="bg-ninico flex items-center py-3 px-7 rounded-md hover:bg-black ">
                                    <img src={Cart} width={25} alt="123" />
                                    <span className="text-white ms-3"> Add To Cart</span>
                                </div>

                                <div className="rounded-md border border-bdr-color flex items-center p-3 hover:bg-ninico ">
                                    <img src={Heart} width={30} alt="123" />
                                </div>
                            </div>

                            <div className="flex mt-7 ">

                                <div className="   group-hover:block hover:h-4 border-cyan-300 border hover:w-4  rounded-full flex justify-center items-center hover:border-cyan-300 duration-100 ease-in-out ">
                                    <div className=" bg-cyan-300  w-3 h-3 rounded-full hover:w-2   hover:h-2"></div>
                                </div>

                                <div className=" mx-1  group-hover:block  hover:h-4 border-red-600 border hover:w-4  rounded-full flex justify-center items-center hover:border-red-600 duration-100 ease-in-out ">
                                    <div className=" bg-red-600  w-3 h-3 rounded-full hover:w-2   hover:h-2"></div>
                                </div>

                                <div className="  group-hover:block hover:h-4 border-amber-600 border hover:w-4  rounded-full flex justify-center items-center hover:border-amber-500 duration-100 ease-in-out ">
                                    <div className=" bg-amber-600  w-3 h-3 rounded-full hover:w-2   hover:h-2"></div>
                                </div>

                                <div className="  group-hover:block mx-1  hover:h-4 border-violet-400 border hover:w-4  rounded-full flex justify-center items-center hover:border-violet-400 duration-100 ease-in-out ">
                                    <div className=" bg-violet-400  w-3 h-3 rounded-full hover:w-2   hover:h-2"></div>
                                </div>
                            </div>

                            <div className="mt-7">
                                <div className="flex">
                                    <h2 className=" font-semibold">SKU:</h2>
                                    <div className="ms-1 text-footer-3"> BO1DOMX85J</div>
                                </div>
                                <div className="flex mt-3">
                                    <h2 className="font-semibold">Categories: </h2>
                                    <div className="ms-1 text-footer-3">
                                        T-Shirts, Tops, Womens
                                    </div>
                                </div>
                                <div className="flex mt-3">
                                    <h2 className="font-semibold">Tags:</h2>
                                    <div className="ms-1">Fashion, t-shirts, women</div>
                                </div>
                                <div className="flex mt-3">
                                    <h2 className="font-semibold">Share:</h2>
                                    <div className="flex ">
                                        <img src={Facebook} className="ms-3" width={10} alt="" />
                                        <img src={Twitter} className="mx-3" width={20} alt="" />
                                        <img src={Behance} width={20} alt="" />
                                        <img src={Youtube} className="mx-3" width={20} alt="" />
                                        <img src={LinkedIn} width={20} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div> */}
                    <DetailsSectionOne />

                </div>
                <div className="xl:col-span-3 md:col-span-4 ">
                    <div className="w-64 ms-1">
                        <div className="border flex py-4 px-6 items-center border-bdr-color rounded-lg group  ">
                            <div className="me-5 group-hover:-mt-5 duration-1000 ">
                                <img src={Truck} width={70} alt="123" />
                            </div>
                            <div className="">
                                Free Shipping Apply to all orders over $100
                            </div>
                        </div>
                        <div className="mt-3 border flex py-3 px-6 items-center border-bdr-color rounded-lg group ">
                            <div className="me-5 group-hover:-mt-5 duration-1000 ">
                                <img src={Organic} width={70} alt="123" />
                            </div>
                            <div className="">
                                Guranteed 100% Organic from natural farmas
                            </div>
                        </div>
                        <div className="mt-3 border flex py-6 px-6 items-center border-bdr-color rounded-lg group ">
                            <div className="me-5 group-hover:-mt-5 duration-1000 ">
                                <img src={Return} width={70} alt="123" />
                            </div>
                            <div className="">1 Day Returns if you change your mind</div>
                        </div>
                        <div className="mt-3 border flex py-6 px-6 items-center border-bdr-color rounded-lg group ">
                            <div className="me-5 group-hover:-mt-5 duration-700 ">
                                <img src={Covid} width={70} alt="123" />
                            </div>
                            <div className="">Covid-19 Info: We keep delivering.</div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="container mx-auto">
                <DetailsContent />
            </section>

            <section className=''>
                <DetailsSlider />
            </section>
            <FooterTwo />


            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52572.90864276223!2d76.09332770060642!3d34.558447017789454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e323b1c052debb%3A0xa73f2023eb4fccae!2sKargil%20194103!5e0!3m2!1sen!2sin!4v1712314032369!5m2!1sen!2sin" className='w-full' height={500} ></iframe> */}

        </>
    )
}

export default ShopDetailsTwo
