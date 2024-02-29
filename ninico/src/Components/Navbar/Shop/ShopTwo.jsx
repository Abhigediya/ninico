import React from "react";
import TopBar from "../../TopBar/TopBar";
import Navbar from "../Navbar";
import ShopImage from "../../../assets/ShopImage.jpg";
import PopularProductTwo from "../../PopularProduct/PopularProductTwo";

const ShopTwo = () => {
  return (
    <>
      <TopBar />
      <section className=" container mx-auto">
        <Navbar />
        <div className="relative -mt-3   ">
          <img src={ShopImage} className="h-52" alt="123" />
          <div className="container mx-auto px-24 absolute top-16">
            <div className="flex">
              <div className="">Home</div>
              <div className="border-b mb-3 border-bdr-color w-10"></div>
              <div className="">Shop</div>
            </div>
            <h2 className="text-5xl font-semibold mt-2 ">Shop</h2>
          </div>
        </div>
      </section>
      <section className="container mx-auto mt-10 ">
        <div className=" flex justify-between">
          <div className="">
            <div className="flex justify-between w-4/5 ">
              <div className="">
                <span>10</span>
                <span>Item On List</span>
              </div>
              <div className="">
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
              </div>
            </div>
              <PopularProductTwo />
          </div>
          <div className="w-48">
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
