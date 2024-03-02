import React from "react";
import TopBarTwo from "../../TopBar/TopBarTwo";
import Navbar from "../Navbar";
import ShopImage from "../../../assets/ShopImage.jpg";
import PopularProductTwo from "../../PopularProduct/PopularProductTwo";

import BarDots from '../../../assets/BarDots.svg'
import Grid from '../../../assets/Grid.svg'

const ShopTwo = () => {
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


      <section className="container mx-auto mt-10 ">
        <div className="  xl:flex justify-between">
          <div className="">
            <div className="md:flex justify-between  ">
              <div className="">
                <span>10</span>
                <span>Item On List</span>
              </div>
              <div className="flex">
                <select
                  className="border border-shop-border focus:border focus:border-4 p-2 focus:border-sky-300 rounded-md"
                  name=""
                  id=""
                >
                  <option value="">Sort by (default)</option>
                  <option value="">Newest </option>
                  <option value="">Oldest</option>
                </select>

                <select
                  className="ms-3 border border-shop-border focus:border focus:border-4 p-2 focus:border-sky-300 rounded-md"
                  name=""
                  id=""
                >
                  <option value="">All</option>
                  <option value="">10 per page</option>
                  <option value="">20 per page</option>
                  <option value="">30 per page</option>
                </select>

                <div className="lg:flex">
                  <img src={BarDots} width={60} alt="" />
                  <img src={Grid} className="lg:ms-0 md:ms-4" width={30} alt="" />
                </div>
              </div>
            </div>
              <PopularProductTwo />
          </div>
          <div className="w-48 xl:ms-3   xs:mt-10">
            <div className="font-semibold">Category</div>
            <div className="border border-bdr-color"></div>
            <ul className="">
              <li className="flex items-center text-footer-3 mt-1 ">
                <input type="checkbox" className=" " />
                <span className="ms-2">Kids</span>
              </li>
              <li className="flex items-center text-footer-3 mt-1 ">
                <input type="checkbox" className="" />
                <span className="ms-2">Mens</span>
              </li>

              <li className="flex items-center text-footer-3 mt-1 ">
                <input type="checkbox" className="" />
                <span className="ms-2">Womens</span>
              </li>
            </ul>

            <div className="font-semibold mt-6">Filter</div>
            <div className=" mt-2 border border-bdr-color"></div>
            <div className="">$100</div>

            <div className="font-semibold mt-6">Color</div>
            <div className=" mt-4 border border-bdr-color"></div>

            <ul>
              <li className="flex items-center text-footer-3 mt-2 ">
                <input type="checkbox" />
                <span className="ms-2">Black</span>
              </li>

              <li className="flex items-center text-footer-3 mt-1 ">
                <input type="checkbox" />
                <span className="ms-2">Blue</span>
              </li>
              <li className="flex items-center text-footer-3 mt-1 ">
                <input type="checkbox" />
                <span className="ms-2">Gray</span>
              </li>
              <li className="flex items-center text-footer-3 mt-1 ">
                <input type="checkbox" />
                <span className="ms-2">Green</span>
              </li>
              <li className="flex items-center text-footer-3 mt-1 ">
                <input type="checkbox" />
                <span className="ms-2">Red</span>
              </li>
            </ul>
            <div className="font-semibold mt-6">Color</div>
            <div className=" mt-4 border border-bdr-color"></div>

            <ul>
              <li className="flex items-center text-footer-3 mt-1 ">
                <input type="checkbox" />
                <span className="ms-2">Adidas</span>
              </li>

              <li className="flex items-center text-footer-3 mt-1 ">
                <input type="checkbox" />
                <span className="ms-2">Balenciaga</span>
              </li>
              <li className="flex items-center text-footer-3 mt-1 ">
                <input type="checkbox" />
                <span className="ms-2">Burberry</span>
              </li>
              <li className="flex items-center text-footer-3 mt-1 ">
                <input type="checkbox" />
                <span className="ms-2">Chloe</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopTwo;
