import React, { useRef, useState } from "react"
import TopBarTwo from '../../TopBar/TopBarTwo'
import Navbar from '../Navbar'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from "swiper/modules"

import ShopImage from '../../../assets/ShopImage.jpg'
import AboutOne from '../../../assets/AboutOne.jpg'
import AboutTwo from '../../../assets/AboutTwo.jpg'
import AboutThree from '../../../assets/AboutThree.jpeg'
import AboutFour from '../../../assets/AboutFour.jpeg'
import WhiteNinico from '../../../assets/WhiteNinico.png'
import TrueColor from '../../../assets/TrueColor.svg'
import BoysOne from '../../../assets/BoysOne.jpeg'
import BoysTwo from '../../../assets/BoysTwo.jpeg'
import BoysThree from '../../../assets/BoysThree.jpeg'
import BoysFour from '../../../assets/BoysFour.jpeg'
import Arrow from '../../../assets/Arrow.svg'
import Footer from "../../Footer/Footer"


const About = () => {
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
                            <div className="ms-3 text-footer-3  "> About Us </div>
                        </div>
                        <div className="text-5xl mt-4 font-semibold"> About Us </div>
                    </div>
                </div>
            </div>

            <section className='container mx-auto flex pt-20 relative'>
                <div className="lg:flex">
                    <div className="">
                        <img src={AboutOne} className="" alt="" />
                    </div>
                    <div className="lg:ps-5 lg:mt-0 mt-10   ">
                        <img src={AboutTwo} className='' alt="" />
                    </div>-
                </div>

                <div className="absolute lg:start-1/4 sm:left-16 xs:left-0 sm:-bottom-7 bottom-3 ">
                    <img src={WhiteNinico} alt="" />
                </div>
            </section>
            <section className='container mx-auto pt-20'>
                <div className="">
                    <div className="text-footer-3">About Us</div>
                    <h1 className="text-4xl font-semibold">About Our Story</h1>
                    <div className="lg:flex mt-8">
                        <div className="lg:flex ">
                            <p className="text-footer-3">
                                Publish your eCommerce site quickly with our easy-to-use store builder— no coding required.
                                Migrate your items from your point of sale system or turn your Instagram feed into a shopping
                                site and start selling fast. Square Online works for all kinds of businesses—retail, restaurants,
                                services without costly customization or add ons. Get orders to your customers in lots of ways
                                by offering shipping, pickup, delivery, and even QR code ordering.
                            </p>
                            <p className='lg:px-6 lg:mt-0 mt-16 text-footer-3'>
                                Expand your reach and sell more using seamless integrations with Google, Instagram, Facebook,
                                and more. Built- in SEO tools make it easy for shoppers to find your business on search engines.
                                Get access to the entire suite of integrated Square solutions to help you run your business.
                                Integration between Square Online and all Square point of sale systems makes inventory management
                                easy. Subscribe to Square Marketing and easily send email promotions to your customers using the
                                contact information
                            </p>
                        </div>

                        <div className="lg:mt-0 mt-8">
                            <div className="mt-0 flex lg:w-72 ">
                                <img src={TrueColor} width={13} alt="" />
                                <p className='ms-3 '>Orders go right to your restaurant point of sale, KDS, and kitchen</p>
                            </div>
                            <div className="mt-5 flex lg:w-72 ">
                                <img src={TrueColor} width={13} alt="" />
                                <p className='ms-3 '>Provide in-person pickup, delivery by  professional couriers</p>
                            </div>
                            <div className="mt-5 flex lg:w-72  ">
                                <img src={TrueColor} width={13} alt="" />
                                <p className='ms-3 '>Offer in-person diners self-serve, contactless ordering via QR codes. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='my-16  bg-about'>
                <div className="container mx-auto py-16 ">
                    <div className="text-center">
                        <div className="">Team</div>
                        <div className="font-semibold text-3xl">Meet With Team</div>
                    </div>

                    <Swiper
                        spaceBetween={20}
                        // freeMode={true}
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
                        <SwiperSlide className="relative">
                            <img src={BoysOne} width={500} alt="" />
                            <div className="absolute left-5 bottom-0">
                                <span >Founder </span>
                                <h1 className="text-xl text-white font-bold">Rosalina D. Willson</h1>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="relative">
                            <img src={BoysOne} width={500} alt="" />
                            <div className="absolute left-5 bottom-0">
                                <span >Founder </span>
                                <h1 className="text-xl text-white font-bold">Rosalina D. Willson</h1>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="relative">
                            <img src={BoysOne} width={500} alt="" />
                            <div className="absolute left-5 bottom-0">
                                <span >Founder </span>
                                <h1 className="text-xl text-white font-bold">Rosalina D. Willson</h1>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>

            <section className="container mx-auto">
                <div className="grid lg:grid-cols-2 gap-10">
                    <img src={AboutThree} alt="" />
                    <div className="px-10">
                        <span className="text-footer-3">Features #01</span>
                        <h1 className="text-4xl font-bold">Solutions that work together</h1>
                        <div className="text-footer-3 mt-7">
                            Publish your eCommerce site quickly with our easy-to-use store builder— no coding required. Migrate
                            your items from your point of sale system or turn your Instagram feed into a shopping site and start
                            selling fast. Square Online works for all kinds of businesses—retail, restaurants, services.
                        </div>
                        <div className="mt-10 border border-bdr-color px-7 py-2 w-40 text-center font-semibold rounded-lg hover:bg-ninico hover:text-white ">
                            Get In Touch
                        </div>
                    </div>
                </div>
            </section>
            <section className="container mx-auto mt-10">
                <div className="grid lg:grid-cols-2 ">
                    <div className="pe-20">
                        <span className="text-footer-3">Features #01</span>
                        <h1 className="text-4xl font-bold">Solutions that work together</h1>
                        <div className="text-footer-3 mt-7">
                            Publish your eCommerce site quickly with our easy-to-use store builder— no coding required. Migrate
                            your items from your point of sale system or turn your Instagram feed into a shopping site and start
                            selling fast. Square Online works for all kinds of businesses—retail, restaurants, services.
                        </div>
                        <div className="mt-10 border border-bdr-color px-7 py-2 w-44 text-center font-semibold rounded-lg hover:bg-ninico hover:text-white">
                            Contact With Us
                        </div>
                    </div>
                    <img src={AboutFour} alt="" />
                </div>
            </section>
            <Footer />
        </>
    )
}

export default About
