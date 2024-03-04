import React from "react";
import TopBarTwo from "../../TopBar/TopBarTwo";
import Navbar from '../../Navbar/Navbar'
import Footer from "../../Footer/Footer";

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


const ShopDetailsOne = () => {
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
              <div className="ms-3 text-footer-3  ">Shop</div>
            </div>
            <div className="text-5xl mt-4 font-semibold">Shop</div>
          </div>
        </div>
      </div>

      <section className="container mx-auto mt-28 ">

        <div className="lg:flex">
          <div className="flex ">
            <div className="">
              <div className="">
                <img src={BradleyBurgessOne} width={80} alt="123" />
              </div>
              <div className="mt-3">
                <img src={BradleyBurgessTwo} width={80} alt="123" />
              </div>
              <div className="mt-3">
                <img src={AllieSharpOne} width={80} alt="123" />
              </div>
            </div>
            <div className="ms-4 lg:w-72 ">
              <img src={BradleyBurgessOne} alt="123" />
            </div>
          </div>

          <div className="md:flex  lg:mt-0 mt-16">
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

            <div className="w-64 ms-4">
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
        </div>

        <div className="mt-10">
          <div className="flex justify-center font-semibold xs:text-sm md:text-base ">
            <div className="">Description</div>
            <div className="md:mx-24 xs:mx-4 ">Additional infromation  </div>
            <div className="">Review (2)</div>
          </div>
          <div className="mt-5 border-b border-bdr-color"></div>
          <div className="">
            <p className="text-footer-3 my-7">
              In marketing a product is an object or system made available for consumer use it is anything
              that can be    offered to a market to satisfy the desire or need of a customer. In retailing, products are often
              referred to as merchandise, and in manufacturing, products are bought as raw materials and then sold as finished
              goods. A service is also regarded to as a type of product. Commodities are usually raw materials such as metals and
              agricultural products, but a commodity can also be anything widely available in the open market. In project management,
              products are the formal definition of the project deliverables that make up contribute to delivering the objectives
              of the project.
            </p>
            <p className="text-footer-3 ">
              A product can be classified as tangible or intangible. A tangible product is a physical object that can be perceived
              by touch such as a building, vehicle, gadget, or clothing. An intangible product is a product that can only be perceived
              indirectly such as an insurance policy. Services can be broadly classified under intangible products which can be
              durable or non durable. A product line is "a group of products that are closely related, either because they function
              in a similar manner, are sold to the same customer groups, are marketed through the same types of outlets, or fall
              within given price ranges."Many businesses offer a range of product lines which may be unique to a single organisation
              or may be common across the business's industry. In 2002 the US Census compiled revenue figures for the finance and
              insurance industry by various product lines such as "accident, health and medical insurance premiums" and "income
              from secured consumer loans.
            </p>
          </div>
        </div>
      </section>
      <div className="mt-20 border-b border-bdr-color"></div>

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
      <Footer />
    </>
  );
};

export default ShopDetailsOne;
