import TopBar from "../Components/TopBar/TopBar";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import PopularProduct from "../Components/PopularProduct/PopularProduct";

// import all  images
import Arrow from "../assets/Arrow.svg";
import SliderImgOne from "../assets/SliderImgONe.jpeg";
import SliderImgTwo from "../assets/SliderImgTwo.jpeg";
import SliderImgThree from "../assets/SliderImgThree.jpeg";
import HandmadeImg from "../assets/HandmadeImg.jpeg";
import PopularImg from "../assets/PopularImg.jpeg";
import Table from "../assets/Table.svg";
import FloorDriftwood from "../assets/FloorDriftwood.svg";
import ChristmanTree from "../assets/ChristmanTree.svg";
import BluetoothSpeaker from "../assets/BluetoothSpeaker.svg";
import Receivers from "../assets/Receivers.svg";
import Appetizer from "../assets/Appetizer.svg";

// import product image
// import Basket from "../assets/Basket.svg";
// import DoubleArrow from "../assets/DoubleArrow.svg";
// import Eyes from "../assets/Eyes.svg";
// import Heart from "../assets/Heart.svg";
// import StarBorder from "../assets/StarBorder.svg";
// import StarBg from "../assets/StarBG.svg";
import TimeImage from "../assets/TimeImage.png";
// import BradleyBurgressOne from "../assets/BradleyBurgessOne.jpeg";
// import BradleyBurgressTwo from "../assets/BradleyBurgessTwo.jpeg";
// import AllieSharpOne from "../assets/AllieSharpOne.jpeg";
// import AllieSharpTwo from "../assets/AllieSharpTwo.jpeg";

import Instagram from '../assets/Instagram.svg'
import NinicoShopImgOne from '../assets/NinicoShopImgOne.jpeg'
import NinicoShopImgTwo from '../assets/NinicoShopImgTwo.jpeg'
import NinicoShopImgThree from '../assets/NinicoShopImgThree.jpeg'
import NinicoShopImgFour from '../assets/NinicoShopImgFour.jpeg'
import NinicoShopImgFive from '../assets/NinicoShopImgFive.jpeg'
import NinicoShopImgSix from '../assets/NinicoShopImgSix.jpeg'

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const HomePage = () => {
  return (
    <>
      {/* <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='bg-red-300 h-40'>
          <img src={SliderImgOne} alt="" />
          <div className="absolute top-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, consequatur?</div>
        </SwiperSlide>
        <SwiperSlide className='bg-red-400 h-40'>Slide 2</SwiperSlide>
        <SwiperSlide className='bg-yellow-400 h-40 '>Slide 3</SwiperSlide>
        <SwiperSlide className='bg-cyan-500 h-40 '>Slide 4</SwiperSlide>
        <SwiperSlide className='bg-slate-400 h-40 '>Slide 5</SwiperSlide>
        </Swiper> */}

      <TopBar />
      <div className="container mx-auto  ">
        <Navbar />
        <section className=" lg:flex sm:block  -mt-1">
          {/* <div className="">
            <img src={SliderImgOne} alt="" />
          </div> */}
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper xl:w-[1100px] lg:w-[1000px] md:w-[720px] sm:w-[650px] sm:h-[450px] xs:h-[220px] xs:w-[300px]   "
          >
            <SwiperSlide className="bg-red-300 h-40   ">
              <img
                src={SliderImgOne}
                width={1200}
                className="md:h-[400px] lg:h-[430px] xs:h-[200px]"
                alt=""
              />
              <div className="absolute sm:top-24 left-10 xs:top-10  ">
                <div className="text-ninico text-2xl xs:text-md">Accessories</div>
                <h1 className="sm:text-5xl font-bold xs:text-md  ">
                  Up to <span className="text-ninico">40% Off </span> latest
                  <br /> Creations{" "}
                </h1>
                <button className="bg-white flex items-center mt-5 px-8 py-3 rounded-md ">
                  <div className="text-sm font-semibold">Shop Now</div>
                  <img src={Arrow} className='ms-4' width={10} alt="" />
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-red-400 h-40">
              <img
                src={SliderImgTwo}
                width={1200}
                className="md:h-[400px] lg:h-[430px] xs:h-[200px]"
                alt=""
              />
              <div className="absolute sm:top-24 left-10 xs:top-10 ">
                <div className="text-ninico text-2xl xs:text-md ">Accessories</div>
                <h1 className="sm:text-6xl font-bold xs:text-md ">
                  Up to <span className="text-ninico">35% Off </span> latest
                  Creations{" "}
                </h1>
                <button className="bg-white flex items-center mt-5 px-8 py-3 rounded-md ">
                  <div className="text-sm font-semibold">Shop Now</div>
                  <img src={Arrow} className='ms-4' width={10} alt="" />
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-yellow-400 h-40 ">
              <img
                src={SliderImgThree}
                width={1200}
                className="md:h-[400px] lg:h-[430px] xs:h-[200px]"
                alt=""
              />
              <div className="absolute sm:top-24 left-10 xs:top-10   ">
                <div className="text-ninico text-2xl xs:text-md">Accessories</div>
                <h1 className="sm:text-5xl font-bold  xs:text-md ">
                  Up to <span className="text-ninico">45% Off </span> latest
                  <br /> Creations
                </h1>
                <button className="bg-white flex items-center mt-5 px-8 py-3 rounded-md ">
                  <div className="text-sm font-semibold">Shop Now</div>
                  <img src={Arrow} className='ms-4' width={10} alt="" />
                </button>
              </div>
            </SwiperSlide>
          </Swiper>

          <div className="xl:ms-3 md:ms-0  -mt-2 md:flex lg:block md:justify-between">
            <div className="relative xl:me-0 lg:ms-2 lg:me-0   md:me-2 ">
              <div className="overflow-hidden rounded-lg">
                <div className="hover:scale-105 duration-75 ease-in         ">
                  <img
                    src={HandmadeImg}
                    className=" md:h-[210px] sm:w-full mt-2 ms-0 p-0 "
                    alt=""
                  />
                </div>
              </div>

              <div className="absolute lg:top-[15px] lg:left-[15px] md:left-[30px] md:top-[40px] xs:top-[20px] xs:left-[20px] ">
                <span className="text-ninico ">Hand made</span>
                <h2 className="font-semibold text-xl pe-14">
                  New Mordern Stylist Craft
                </h2>
              </div>
            </div>

            <div className="mt-2 ">
              <div className="relative  lg:ms-2 md:ms-2 ">
                <div className="overflow-hidden  rounded-md">
                  <div className="hover:scale-105 duration-75 ease-in   ">
                    <img
                      src={PopularImg}
                      alt="123"
                      className=" md:h-[210px] sm:w-full  ms-0 p-0"
                    />
                  </div>
                </div>
                <div className="absolute lg:top-[15px] lg:left-[15px] md:left-[30px] md:top-[30px] xs:top-[20px] xs:left-[20px] ">
                  <span className="text-ninico">Popular</span>
                  <h2 className="font-semibold text-xl pe-14 ">
                    Energy with our newest collection
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Top Categories  & product section */}

        {/* ctgimg = 6 image it's class created */}
        {/* ctgnum = 6 number it's class created */}
        {/* ctgtxt = 6 text it's class created */}
        <section className="mt-10">
          <div className="flex">
            <div className="text-2xl font-bold ">Top</div>
            <div className="relative">
              <div className="ms-3  text-ninico text-xl  ">
                Categories
              </div>
              <div className="h-3 ms-3 animate-pulse absolute top-4 z-[-1] w-24 bg-[#FFE6EC]"></div>
            </div>
          </div>

          <div className="mt-10 flex xl:justify-between md:justify-start flex-wrap lg:flex-wrap md:flex-wrap  ">
            
            <div className=" w-36 group xs:mt-10 lg:mt-0 xl:ms-0 md:ms-5 ">
              <div className="ctg-img">
                <img src={Table} alt="123" />
                <div className=" ctg-num   ">20</div>
              </div>
              <div className="ctg-txt">Driftwood Table Decor </div>
            </div>

            <div className="border-s border-slate-200 h-48 hidden xl:block "></div>

            <div className="w-36 group xs:mt-10 lg:mt-0 xl:ms-0 md:ms-5 ">
              <div className="ctg-img">
                <img src={FloorDriftwood} alt="123" />
                <div className="  ctg-num  ">12</div>
              </div>
              <div className="ctg-txt">Floor Driftwood Sculputer</div>
            </div>

            <div className="border-s border-slate-200 h-48 hidden xl:block "></div>

            <div className="w-36 group xs:mt-10 lg:mt-0 xl:ms-0 md:ms-5">
              <div className="ctg-img">
                <img src={ChristmanTree} alt="123" />
                <div className="  ctg-num   ">03</div>
              </div>
              <div className=" ctg-txt ">Driftwood Christmas Tree </div>
            </div>

            <div className="border-s border-slate-200 h-48 hidden xl:block "></div>

            <div className="w-36 group xs:mt-10 lg:mt-0 xl:ms-0 md:ms-5">
              <div className="ctg-img">
                <img src={BluetoothSpeaker} alt="123" />
                <div className=" ctg-num   ">09</div>
              </div>
              <div className=" ctg-txt ">Wooden Bluetooth Speaker </div>
            </div>

            <div className="border-s  border-slate-200 h-48 hidden xl:block "></div>

            <div className="w-36 group xs:mt-10 lg:mt-0 xl:ms-0 md:ms-5  ">
              <div className="bg-slate-100 relative p-10  rounded-full w-32  mx-auto">
                <img src={Receivers} alt="123" />
                <div className="  ctg-num  ">10</div>
              </div>
              <div className=" ctg-txt">Reciivers Amplifiers</div>
            </div>

            <div className="border-s border-slate-200 h-48 hidden xl:block "></div>

            <div className="w-36 group xs:mt-10 lg:mt-0 xl:ms-0 md:ms-5 ">
              <div className="ctg-img">
                <img src={Appetizer} alt="123" />
                <div className="  ctg-num  ">05</div>
              </div>
              <div className=" ctg-txt">Appetizer Plate Set</div>
            </div>
          </div>
        </section>

        <div className=" mt-12 border-b border-slate-200"></div>

        {/* Popular Products  */}

        {/* <section className="mt-14">
          <div className="flex justify-between ">
            <div className="">
              <span className="text-2xl font-bold">Popular</span>
              <span className="ms-3 text-ninico text-xl font-medium">Products</span>
            </div>
            <ul className="flex  font-medium">
              <li className="mx-4" > <button className="text-ninico font-bold border-b border-ninico ">All</button>  </li>
              <li className="mx-4">Popular</li>
              <li className="mx-4">On Sale</li>
              <li className="mx-4">Best Rated</li>
              <li></li>
            </ul>

          </div>

          <div className="mt-10 flex justify-between ">
            <div className="">
              <div className=" group group-hover:p-2  ">
                <div className=" relative  outer   ">
                  <img src={BradleyBurgressOne} className=' ' width={250} alt="123" />
                  <div className=" group inner absolute top-0 left-0 hidden ">
                    <img src={BradleyBurgressTwo} width={250} alt="123" />
                    <div className=" flex justify-center   ">
                      <div className="   absolute  flex justify-center top-32     group-hover:block hidden group-hover:bg-white   ">
                        <div className="flex justify-around    py-2 px-3">
                          <img src={Basket} width={30} alt="" />
                          <img src={DoubleArrow} className="rotate-90 mx-3 " width={25} alt="" />
                          <img src={Eyes} width={30} alt="" />
                          <img src={Heart} className="ms-3" width={35} alt="" />
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  <div className="group  hover-w-80 hover:z-[1]">
                    <div className="group-hover:text-ninico">Bradley Burgess 2 </div>
                    <div className="font-bold">$20.00</div>
                    <div className="mt-3 flex justify-between  ">
                      <div className="flex">
                        <div className="  hidden group-hover:block hover:h-4 border-cyan-300 border hover:w-4  rounded-full flex justify-center items-center hover:border-cyan-300 duration-100 ease-in-out ">
                          <div className=" bg-cyan-300  w-3 h-3 rounded-full hover:w-2   hover:h-2"></div>
                        </div>
                        <div className=" mx-1 hidden group-hover:block  hover:h-4 border-red-600 border hover:w-4  rounded-full flex justify-center items-center hover:border-red-600 duration-100 ease-in-out ">
                          <div className=" bg-red-600  w-3 h-3 rounded-full hover:w-2   hover:h-2"></div>
                        </div>
                        <div className=" hidden group-hover:block hover:h-4 border-amber-600 border hover:w-4  rounded-full flex justify-center items-center hover:border-amber-500 duration-100 ease-in-out ">
                          <div className=" bg-amber-600  w-3 h-3 rounded-full hover:w-2   hover:h-2"></div>
                        </div>
                        <div className=" hidden group-hover:block mx-1  hover:h-4 border-violet-400 border hover:w-4  rounded-full flex justify-center items-center hover:border-violet-400 duration-100 ease-in-out ">
                          <div className=" bg-violet-400  w-3 h-3 rounded-full hover:w-2   hover:h-2"></div>
                        </div>
                      </div>
                      <div className="flex hidden group-hover:flex">
                        <img src={StarBg} width={12} alt="123" />
                        <img src={StarBg} width={12} alt="123" />
                        <img src={StarBg} width={12} alt="123" />
                        <img src={StarBg} width={12} alt="123" />
                        <img src={StarBorder} width={12} alt="123" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="relative group">
                  <img src={AllieSharpOne} width={250} alt="" />

                  <div className="absolute flex justify-center border top-28 group-hover:block hidden group-hover:bg-white">
                    <div className="flex w-full py-2 px-3">
                      <img src={Basket} width={30} alt="123" />
                      <img src={DoubleArrow} className="rotate-90 mx-4" width={30} alt="123" />
                      <img src={Eyes} width={30} alt="123" />
                      <img src={Heart} className="ms-4" width={35} alt="123" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <PopularProduct />

        <section className="bg-slate-100 lg:flex  justify-between mx-auto p-10 mt-10">
          <div className="relative">
            <img src={TimeImage} alt="" />
            <div className="absolute top-20 right-36 animate-pulse  bg-ninico w-20 h-20 p-3  rounded-full text-center text-white  ">
              <div className="">From</div>
              <div className="text-2xl font-bold  ">$49</div>
            </div>
          </div>
          <div className=" lg:w-6/12 p-1">
            <span className="text-ninico text-xl font-medium">
              $49.00 <del className="text-slate-400 ">$59.00</del>{" "}
            </span>
            <h1 className="font-bold text-5xl">Pro2 Abstract Folded Pots</h1>
            <div className="mt-3 text-slate-400 text-lg  ">
              Elegant pink origami design three-dimensional view and decoration
              co-exist. Great for adding a decorative touchto any room's decor.
              Wonderful accenet piece for coffee tables or side table or side
              tables.
            </div>
            <div className="my-10 flex relative">
              <div className="border-b rounded-full border-4  border-white w-full  "></div>
              <div className="border-b rounded-full border-4  w-9/12  absolute top-0 border-red-500 "></div>
            </div>

            <div className="flex flex-wrap mt-5 justify-between items-center ">
              <div className="flex flex-wrap">
                <div className="py-3 px-4  bg-white text-3xl font-bold text-center">
                  <div className="">-66</div>
                  <div className=" text-base font-normal">Days</div>
                </div>
                <div className="p-3 px-4 mx-3  bg-white text-3xl font-bold text-center">
                  <div className="">-12</div>
                  <div className=" text-base font-normal">Days</div>
                </div>
                <div className="p-3 px-4  bg-white text-3xl font-bold text-center">
                  <div className="">-39</div>
                  <div className=" text-base font-normal">Days</div>
                </div>
                <div className="p-3 px-4 mx-3  bg-white text-3xl font-bold text-center">
                  <div className="">-01</div>
                  <div className=" text-base font-normal">Days</div>
                </div>
              </div>
              <div className="w-32 text-slate-400 sm:mt-0 xs:mt-3">
                Remains until the end of the offer
              </div>
            </div>
          </div>
        </section>

        <section className="my-28   ">

          <div className="pb-10 text-center ">
            <div className="text-xl text-ninico">Follow On</div >
            <div className="flex justify-center">
              <img src={Instagram} width={40} alt="" />
              <div className="text-5xl font-semibold ms-4">ninico-shop</div>
            </div>
          </div>

          <div className="">
            <Swiper

              spaceBetween={30}
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
                1024:{
                  slidesPerView: 4,
                  spaceBetween:20,
                },

                1280:{
                  slidesPerView:5,
                  spaceBetween:20,
                }
              }}

              pagination={{
                clickable: true,
              }}
              navigation={true}

              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide> <img className="rounded-md" src={NinicoShopImgOne} alt="" /></SwiperSlide>
              <SwiperSlide> <img className="rounded-md" src={NinicoShopImgTwo} alt="" /></SwiperSlide>
              <SwiperSlide> <img className="rounded-md" src={NinicoShopImgThree} alt="" /></SwiperSlide>
              <SwiperSlide> <img className="rounded-md" src={NinicoShopImgFour} alt="" /></SwiperSlide>
              <SwiperSlide> <img className="rounded-md" src={NinicoShopImgFive} alt="" /></SwiperSlide>
              <SwiperSlide> <img className="rounded-md" src={NinicoShopImgSix} alt="" /></SwiperSlide>
            </Swiper>

          </div>
        </section>
      </div>


      <Footer />
    </>
  );
};

export default HomePage;
