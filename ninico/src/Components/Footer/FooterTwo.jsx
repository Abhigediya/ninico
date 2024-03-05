import React from 'react'
import Logo from "../../assets/Logo.png";
import Facebook from "../../assets/Facebook.svg";
import Dribbble from "../../assets/Dribbble.svg";
import Twitter from "../../assets/Twitter.svg";
import Behance from "../../assets/Behance.svg";
import Youtube from "../../assets/Youtube.svg";
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
              <img src={Logo} alt="" />
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
                <img src={Facebook} width={15} alt="" />
                <span className=" ms-5 text-white">Facebook</span>
              </li>
              <li className=" flex items-center">
                <img src={Dribbble} width={20} alt="123" />
                <span className=" ms-4 text-white">Dribbble</span>
              </li>
              <li className=" flex items-center">
                <img src={Twitter} width={20} alt="123" />
                <span className=" ms-4 text-white">Twitter</span>
              </li>
              <li className=" flex items-center">
                <img src={Behance} width={20} alt="123" />
                <span className=" ms-4 text-white">Behance</span>
              </li>
              <li className=" flex items-center">
                <img src={Youtube} width={20} alt="123" />
                <span className=" ms-4 text-white">YouTube</span>
              </li>
            </ul>

            <ul className="w-64">
              <li className="font-semibold text-black underline ">
                <a href="">Get NewSletter</a>
              </li>
              <li className='text-white'>Get on the list and get 10% off your first order!</li>
              <li>
                {" "}
                <input
                  type="text"
                  name=""
                  className="w-60 h-14 p-4"
                  placeholder="Enter amail address"
                  id=""
                />{" "}
              </li>
              <li className="mt-4 bg-ninico  flex justify-center items-center w-48  py-4 px-7 rounded-md text-white font-medium text-sm">
                {" "}
                <button className="flex">
                  Subscribe Now{" "}
                  <img src={ArrowWhite} className="ms-3" width={20} alt="" />{" "}
                </button>{" "}
              </li>
            </ul>
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
