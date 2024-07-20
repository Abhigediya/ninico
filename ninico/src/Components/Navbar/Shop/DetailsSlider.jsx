import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import ShopImage from '../../../assets/ShopImage.jpg'
import BradleyBurgessOne from "../../../assets/BradleyBurgessOne.jpeg";
import BradleyBurgessTwo from "../../../assets/BradleyBurgessTwo.jpeg";
import AllieSharpOne from "../../../assets/AllieSharpOne.jpeg";
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
import Heart from '../../../assets/Heart.svg'
import DoubleArrow from '../../../assets/DoubleArrow.svg'
import Eyes from '../../../assets/Eyes.svg'
import CartNinico from '../../../assets/CartNinico.svg'
import AllieSharpTwo from '../../../assets/AllieSharpTwo.jpeg'
import NathanielBaldwinOne from '../../../assets/NathanielBaldwinOne.jpeg'
import NathanielBaldwinTwo from '../../../assets/NathanielBaldwinTwo.jpeg'
import EffieRiosOne from '../../../assets/EffieRiosOne.jpeg'
import EffieRiosTwo from '../../../assets/EffieRiosTwo.jpeg'
import CarolynGoodwinOne from '../../../assets/CarolynGoodwinOne.jpeg'
import CarolynGoodwinTwo from '../../../assets/CarolynGoodwinTwo.jpeg'
import EvelynPattonOne from '../../../assets/EvelynPattonOne.jpeg'
import EvelynPattonTwo from '../../../assets/EvelynPattonTWo.jpeg'
import ElectricityBgWhite from '../../../assets/ElectricityBgWhite.svg'
import DetailsSectionOne from "./DetailsSectionOne";

const DetailsSlider = () => {
    return (
        <>
            <section className="container mx-auto mt-10">
                <Swiper

                    spaceBetween={30}
                    freeMode={true}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}

                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },

                        1280: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                        }
                    }}

                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}

                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide >
                        <div className="group">
                            <div className="relative">
                                <img src={BradleyBurgessOne} alt="" />
                                <div className="absolute group-hover:block hidden top-0">
                                    <img src={BradleyBurgessTwo} alt="" />

                                    <div className="">
                                        <div className="absolute flex items-center justify-center px-4 group-hover:top-24 group-hover: ">
                                            <div className="bg-white p-3 rounded-md">
                                                <img src={DoubleArrow} className='rotate-90' width={30} alt="" />
                                            </div>
                                            <div className="bg-white mx-2 p-3 rounded-md">
                                                <img src={Eyes} width={30} alt="" />
                                            </div>
                                            <div className="bg-white p-2 rounded-md">
                                                <img src={Heart} width={40} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="  mt-5">
                                <div className="text-footer-3">Miko Wooden Bluetooth Speaker</div>
                                <h1 className="font-semibold group-hover:hidden ">$31.00</h1>
                                <div className="hidden group-hover:flex">
                                    <img src={CartNinico} width={20} alt="" />
                                    <div className="font-semibold underline ms-1"> Add to Cart</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className=" group">
                        <div className="relative">
                            <img src={AllieSharpOne} alt="" />
                            <div className="absolute group-hover:block hidden top-0">
                                <img src={AllieSharpTwo} alt="" />

                                <div className="absolute flex items-center px-4 group-hover:top-24 group-hover: ">
                                    <div className="bg-white p-3 rounded-md">
                                        <img src={DoubleArrow} className='rotate-90' width={30} alt="" />
                                    </div>
                                    <div className="bg-white mx-2 p-3 rounded-md">
                                        <img src={Eyes} width={30} alt="" />
                                    </div>
                                    <div className="bg-white p-2 rounded-md">
                                        <img src={Heart} width={40} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-5">
                            <div className="text-footer-3 ">Gorgeous Wooden Gloves</div>
                            <h1 className="font-semibold group-hover:hidden ">$31.00</h1>
                            <div className="hidden group-hover:flex">
                                <img src={CartNinico} width={20} alt="" />
                                <div className="font-semibold underline ms-1"> Add to Cart</div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className=" group">
                        <div className="relative">
                            <img src={NathanielBaldwinOne} alt="" />
                            <div className="absolute group-hover:block hidden top-0">
                                <img src={NathanielBaldwinTwo} alt="" />

                                <div className="absolute flex items-center px-4 group-hover:top-24 group-hover: ">
                                    <div className="bg-white p-3 rounded-md">
                                        <img src={DoubleArrow} className='rotate-90' width={30} alt="" />
                                    </div>
                                    <div className="bg-white mx-2 p-3 rounded-md">
                                        <img src={Eyes} width={30} alt="" />
                                    </div>
                                    <div className="bg-white p-2 rounded-md">
                                        <img src={Heart} width={40} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-5">
                            <div className="text-footer-3 ">Pinkol Enormous Granite Bottle</div>
                            <h1 className="font-semibold group-hover:hidden ">$31.00</h1>
                            <div className="hidden group-hover:flex">
                                <img src={CartNinico} width={20} alt="" />
                                <div className="font-semibold underline ms-1"> Add to Cart</div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className=" group">
                        <div className="relative">
                            <img src={EffieRiosOne} alt="" />
                            <div className="absolute top-8 left-8 bg-ninico text-white px-2 rounded-md animate-pulse ">On Sale </div>
                            <div className="absolute group-hover:block hidden top-0">
                                <img src={EffieRiosTwo} alt="" />

                                <div className="absolute flex items-center px-4 group-hover:top-24 group-hover: ">
                                    <div className="bg-white p-3 rounded-md">
                                        <img src={DoubleArrow} className='rotate-90' width={30} alt="" />
                                    </div>
                                    <div className="bg-white mx-2 p-3 rounded-md">
                                        <img src={Eyes} width={30} alt="" />
                                    </div>
                                    <div className="bg-white p-2 rounded-md">
                                        <img src={Heart} width={40} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-5">
                            <div className="text-footer-3">Gorgeous Aluminum Table</div>
                            <h1 className="font-semibold group-hover:hidden ">$31.00</h1>
                            <div className="hidden group-hover:flex">
                                <img src={CartNinico} width={20} alt="" />
                                <div className="font-semibold underline ms-1"> Add to Cart</div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className=" group">
                        <div className="relative">
                            <img src={CarolynGoodwinOne} alt="" />
                            <div className="absolute group-hover:block hidden top-0">
                                <img src={CarolynGoodwinTwo} alt="" />

                                <div className="absolute flex items-center px-4 group-hover:top-24 group-hover: ">
                                    <div className="bg-white p-3 rounded-md">
                                        <img src={DoubleArrow} className='rotate-90' width={30} alt="" />
                                    </div>
                                    <div className="bg-white mx-2 p-3 rounded-md">
                                        <img src={Eyes} width={30} alt="" />
                                    </div>
                                    <div className="bg-white p-2 rounded-md">
                                        <img src={Heart} width={40} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-5">
                            <div className="text-footer-3">Evo Lightweight Granite Shirt </div>
                            <h1 className="font-semibold group-hover:hidden ">$31.00 <del className="text-footer-3">$39.00</del> </h1>
                            <div className="hidden group-hover:flex">
                                <img src={CartNinico} width={20} alt="" />
                                <div className="font-semibold underline ms-1"> Add to Cart</div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className=" group">
                        <div className="relative">
                            <img src={EvelynPattonOne} alt="" />
                            <div className="absolute top-8 left-8 bg-zinc-500  pt-0.5 rounded-md animate-pulse ">
                                <img src={ElectricityBgWhite} width={20} alt="123" />
                            </div>
                            <div className="absolute group-hover:block hidden top-0">
                                <img src={EvelynPattonTwo} alt="" />

                                <div className="absolute flex items-center px-4 group-hover:top-24 group-hover: ">
                                    <div className="bg-white p-3 rounded-md">
                                        <img src={DoubleArrow} className='rotate-90' width={30} alt="" />
                                    </div>
                                    <div className="bg-white mx-2 p-3 rounded-md">
                                        <img src={Eyes} width={30} alt="" />
                                    </div>
                                    <div className="bg-white p-2 rounded-md">
                                        <img src={Heart} width={40} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-5">
                            <div className="text-footer-3">ClCo. Incredible Pepar Car </div>
                            <h1 className="font-semibold group-hover:hidden ">$31.00  </h1>
                            <div className="hidden group-hover:flex">
                                <img src={CartNinico} width={20} alt="" />
                                <div className="font-semibold underline ms-1"> Add to Cart</div>
                            </div>
                        </div>
                    </SwiperSlide>



                    {/* <SwiperSlide> <img className="rounded-md" src={NinicoShopImgOne} alt="" /></SwiperSlide>
          <SwiperSlide> <img className="rounded-md" src={NinicoShopImgThree} alt="" /></SwiperSlide>
          <SwiperSlide> <img className="rounded-md" src={NinicoShopImgFour} alt="" /></SwiperSlide>
          <SwiperSlide> <img className="rounded-md" src={NinicoShopImgFive} alt="" /></SwiperSlide>
          <SwiperSlide> <img className="rounded-md" src={NinicoShopImgSix} alt="" /></SwiperSlide> */}
                </Swiper>
            </section>
        </>
    )
}

export default DetailsSlider
