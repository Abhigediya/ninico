import React from "react";
import BradleyBurgessOne from "../../../assets/BradleyBurgessOne.jpeg";
import BradleyBurgessTwo from "../../../assets/BradleyBurgessTwo.jpeg";
// import AllieSharpOne from '../../../assets/AllieSharpOne.jpeg'
import AllieSharpOne from "../../../assets/AllieSharpOne.jpeg";
import YellowStar from "../../../assets/YellowStar.svg";
import Cart from "../../../assets/CartWhite.svg";
import Heart from "../../../assets/HeartColor.svg";
import Facebook from "../../../assets/FacebookColor.svg";
import Twitter from "../../../assets/TwitterColor.svg";
import Behance from "../../../assets/BehanceColor.svg";
import Youtube from "../../../assets/YouTubeColor.svg";
import LinkedIn from "../../../assets/LinkedInColor.svg";
import Truck from "../../../assets/Truck.png";
import Organic from "../../../assets/Organic.png";
import Return from "../../../assets/Return.png";
import Covid from "../../../assets/Covid.png";

const ShopDetailsOne = () => {
  return (
    <>
      <section className="container mx-auto mt-10 ">
        <div className="flex">
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
            <div className="ms-4">
              <img src={BradleyBurgessOne} width={300} alt="123" />
            </div>
          </div>

          <div className="flex">
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

        <div className="">
            <div className=""></div>
        </div>
      </section>
    </>
  );
};

export default ShopDetailsOne;
