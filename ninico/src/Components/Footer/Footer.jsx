import React from "react";
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

const Footer = () => {
  return (
    <>
      {/* <div className="/"> */}

      <footer className="mt-10 pb-7  pt-16 md:px-0 xs:px-10    bg-footer text-footer-3 ">
        <div className="container mx-auto ">
          <div className="sm:flex lg:justify-between md:justify-start xs:block flex-wrap">
            <div className="w-64">
              <img src={Logo} alt="" />
              <div className="mt-5  ">
                Elegant pink origami design three dimensional view and decoration
                co-exist. Great for adding a decorative touch to any room's decor.
              </div>
            </div>

            <ul className="lg:w-auto md:w-40">
              <li className="font-semibold text-black underline ">Information </li>
              <li>Custom Service</li>
              <li>FAQs</li>
              <li>Ordering Tracking </li>
              <li>Contacts</li>
              <li>Events</li>
            </ul>

            <ul className="lg:w-auto md:w-40">
              <li className="font-semibold text-black underline ">My Account </li>
              <li>Delivery Information </li>
              <li>Privecy Policy </li>
              <li>Discount</li>
              <li>Custom Service</li>
              <li>Terms Condition</li>
            </ul>

            <ul className="lg:w-auto md:w-40">
              <li className="font-semibold text-black underline">Social Network</li>
              <li className="flex items-center ">
                <img src={Facebook} width={15} alt="" />
                <span className="ms-5">Facebook</span>
              </li>
              <li className="flex items-center">
                <img src={Dribbble} width={20} alt="123" />
                <span className="ms-4">Dribbble</span>
              </li>
              <li className="flex items-center">
                <img src={Twitter} width={20} alt="123" />
                <span className="ms-4">Twitter</span>
              </li>
              <li className="flex items-center">
                <img src={Behance} width={20} alt="123" />
                <span className="ms-4">Behance</span>
              </li>
              <li className="flex items-center">
                <img src={Youtube} width={20} alt="123" />
                <span className="ms-4">YouTube</span>
              </li>
            </ul>

            <ul className="w-64">
              <li className="font-semibold text-black underline ">
                <a href="">Get NewSletter</a>
              </li>
              <li>Get on the list and get 10% off your first order!</li>
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
                <div className="font-bold text-black">980. 029 .666 .99</div>
                <div className="lg:text-base xs:text-sm">Working 8:00 - 22:00</div>
              </div>
            </div>
            <div className="md:flex sm:block  items-center ">
              <div className="">
                <div className="font-bold underline-offset-2 text-black sm:mt-0 xs:mt-2 ">
                  Download App on Mobile
                </div>
                <div className="lg:text-base xs:text-sm ">15% discount on your first purchase</div>
              </div>
              <div className="flex md:ms-5 xs:ms-0 xs:mt-3 ">
                <img src={GooglePlay} height={20} alt="123" />
                <img src={AppStore} className="ms-1" height={20} alt="123" />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className=" xs:block justify-between bg-footer-2  py-7 xs:py-4 px-20 md:px-0 xs:px-5">
        <div className="container mx-auto md:flex md:justify-between   ">
          <div className="lg:w-full md:w-64">
            Copyright 2024 &#169;
            <span className="font-bold">Ninico.</span>
            &nbsp; All rights reserved. Developed by
            <span className="font-bold">AliThemes.</span>
          </div>
          <div className="  xs:flex xs:justify-center ">
            <img src={FooterFourImg} alt="123" />
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Footer;
