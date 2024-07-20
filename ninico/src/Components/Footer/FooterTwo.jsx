import React from 'react'
import LogoWhite from "../../assets/Logo-white.png";
import FacebookWhite from "../../assets/FacebookWhite.svg";
import DribbbleWhite from "../../assets/DribbleWhite.svg";
import TwitterWhite from "../../assets/TwitterWhite.svg";
import BehanceWhite from "../../assets/BehanceWhite.svg";
import YoutubeWhite from "../../assets/YoutubeWhite.svg";
import ArrowWhite from "../../assets/ArrowWhite.svg";
import Call from "../../assets/Call.svg";
import GooglePlay from "../../assets/GooglePlay.jpeg";
import AppStore from "../../assets/AppStore.jpeg";
import FooterFourImg from "../../assets/FooterFourImg.png";

const FooterTwo = () => {
  return (
    <>
      <footer className="mt-10 pb-7  pt-16 md:px-0 xs:px-10    bg-[#040404] text-white ">
        <div className="container mx-auto ">
          <div className="sm:flex lg:justify-between md:justify-start xs:block flex-wrap">
            <div className="w-64">
              <img src={LogoWhite} alt="" />
              <div className="mt-5 text-white ">
                Elegant pink origami design three dimensional view and decoration
                co-exist. Great for adding a decorative touch to any room's decor.
              </div>
            </div>

            <ul className="lg:w-auto text-white md:w-40 text-white">
              <li className="font-semibold underline text-white ">Information </li>
              <li className='text-[#a0a0a0]'>Custom Service</li>
              <li className='text-[#a0a0a0]'>FAQs</li>
              <li className='text-[#a0a0a0]'>Ordering Tracking </li>
              <li className='text-[#a0a0a0]'>Contacts</li>
              <li className='text-[#a0a0a0]'>Events</li>
            </ul>

            <ul className="lg:w-auto text-white md:w-40">
              <li className="font-semibold text-white underline ">My Account </li>
              <li className='text-[#a0a0a0]'>Delivery Information </li>
              <li className='text-[#a0a0a0]'>Privecy Policy </li>
              <li className='text-[#a0a0a0]'>Discount</li>
              <li className='text-[#a0a0a0]'>Custom Service</li>
              <li className='text-[#a0a0a0]'>Terms Condition</li>
            </ul>

            <ul className="lg:w-auto md:w-40">
              <li className="font-semibold text-white underline">Social Network</li>
              <li className=" flex items-center ">
                <img src={FacebookWhite} width={35} alt="" />
                <span className=" ms-1 text-[#a0a0a0]">Facebook</span>
              </li>
              <li className="ms-2 flex items-center">
                <img src={DribbbleWhite} width={20} alt="123" />
                <span className=" ms-3 text-[#a0a0a0]">Dribbble</span>
              </li>
              <li className="ms-2 flex items-center">
                <img src={TwitterWhite} width={20} alt="123" />
                <span className=" ms-3 text-[#a0a0a0]">Twitter</span>
              </li>
              <li className="ms-3 flex items-center">
                <img src={BehanceWhite} width={20} alt="123" /> 
                <span className=" ms-3 text-[#a0a0a0]">Behance</span>
              </li>
              <li className="ms-3 flex items-center">
                <img src={YoutubeWhite} width={20} alt="123" />
                <span className=" ms-3 text-[#a0a0a0]">YouTube</span>
              </li>
            </ul>

            <div className="w-72 mt-3">
              <h1 className="font-bold text-white underline ">Popular Keywords</h1>
              <div className="mt-2 flex ">
                <span className='text-[#a0a0a0] '>Makeup</span>
                <span className='ms-2 text-[#a0a0a0] border-s border-[#303030] ps-2 '>Dressses For Girls </span>
                <span className='ms-2 text-[#a0a0a0] border-s px-2 border-e border-[#303030] '>T-Shirts </span>
              </div>
              <div className="mt-4 flex ">
                <span className="text-[#a0a0a0]">Sandals</span>
                <span className="ms-2 mx-3 ps-1   border-s border-[#303030] text-[#a0a0a0]">Headphones</span>
                <span className="ps-1 pe-3 border-s border-e border-[#303030] text-[#a0a0a0]">Baby dolls</span>
              </div>
              <div className="mt-4 flex ">
                <span className="text-[#a0a0a0]">Blazers </span>
                <span className="ms-2 mx-3 ps-1   border-s border-[#303030] text-[#a0a0a0]">For Men</span>
                <span className="ps-1 pe-3 border-s border-e border-[#303030] text-[#a0a0a0]">Handbags</span>
              </div>
              <div className="mt-4 flex ">
                <span className="text-[#a0a0a0]">Ladies Wathces </span>
                <span className="ms-2 mx-3 ps-1   border-s border-[#303030] text-[#a0a0a0]">Bags</span>
                <span className="ps-1 pe-3 border-s border-e border-[#303030] text-[#a0a0a0]">Sport Shoes</span>
              </div>
              <div className="mt-4 flex ">
                <span className="text-[#a0a0a0]">Reebok Shoes </span>
                <span className="ms-2 mx-3 ps-1   border-s border-[#303030] text-[#a0a0a0]">Puma Shoes</span>
                <span className="ps-1 pe-3 border-s border-e border-[#303030] text-[#a0a0a0]">Boxers</span>
              </div>
              <div className="mt-4 flex ">
                <span className="text-[#a0a0a0]">Wallets</span>
                <span className="ms-2 mx-3 ps-1 pe-3   border-s border-e border-[#303030] text-[#a0a0a0]">Tops</span>
              </div>
            </div>
          </div>

          <div className="border-b border-slate-300 my-10 px-24"></div>

          <div className="sm:flex xs:block justify-between">
            <div className="  xs:px-0  flex ">
              <div className="bg-white w-12 h-12 flex justify-center items-center rounded-full">
                <img src={Call} width={30} alt="123" />
              </div>
              <div className="sm:ms-3 xs:ms-2 ">
                <div className="font-bold text-white">980. 029 .666 .99</div>
                <div className="lg:text-base xs:text-sm text-white">Working 8:00 - 22:00</div>
              </div>
            </div>
            <div className="md:flex sm:block  items-center ">
              <div className="">
                <div className="font-bold text-white underline-offset-2 text-black sm:mt-0 xs:mt-2 ">
                  Download App on Mobile
                </div>
                <div className="lg:text-base xs:text-sm text-white">15% discount on your first purchase</div>
              </div>
              <div className="flex md:ms-5 xs:ms-0 xs:mt-3 ">
                <img src={GooglePlay} height={20} alt="123" />
                <img src={AppStore} className="ms-1" height={20} alt="123" />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className=" xs:block justify-between bg-[#040404]  py-7 xs:py-4 px-20 md:px-0 xs:px-5">
        <div className="container mx-auto md:flex md:justify-between   ">
          <div className="lg:w-full md:w-64 text-white">
            Copyright 2024 &#169;
            <span className="font-bold text-white">Ninico.</span>
            &nbsp; All rights reserved. Developed by
            <span className="font-bold">AliThemes.</span>
          </div>
          <div className="  xs:flex xs:justify-center ">
            <img src={FooterFourImg} alt="123" />
          </div>
        </div>
      </div>

    </>
  )
}

export default FooterTwo
