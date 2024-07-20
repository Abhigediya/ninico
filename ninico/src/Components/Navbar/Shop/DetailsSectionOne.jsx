import React from 'react'


import ShopImage from '../../../assets/ShopImage.jpg'
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
import Heart from '../../../assets/Heart.svg';
import AngelFront from '../../../assets/AngelFront.jpeg'
import AngelBack from '../../../assets/AngelBack.jpeg'
import GeorgieFront from '../../../assets/GeorgieFront.jpeg'

const DetailsSectionOne = () => {
    return (
        <>
            <div className="md:flex sticky top-0 lg:mt-0 mt-16">
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
                        <h2 className="xl:text-3xl md:text-[26px]  xl:font-semibold md:font-bold ">
                            Wide Cooton Tunic Dress
                        </h2>
                        <span className="border lg:ms-3 md:ms-1 px-1 text-ninico font-semibold border-bdr-color ">
                            In Stock
                        </span>
                    </div>
                    <div className="mt-1">
                        <del className="font-semibold text-xl text-footer-3">$9.35</del>
                        <span className=" ms-2 font-semibold text-4xl text-ninico">$7.25</span>
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

                        <div className="   group-hover:block hover:h-4 border-cyan-300 border hover:w-4  rounded-full 
                        flex justify-center items-center hover:border-cyan-300 duration-100 ease-in-out ">
                            <div className=" bg-cyan-300  w-3 h-3 rounded-full hover:w-2   hover:h-2"></div>
                        </div>

                        <div className=" mx-1  group-hover:block  hover:h-4 border-red-600 border hover:w-4  rounded-full
                         flex justify-center items-center hover:border-red-600 duration-100 ease-in-out ">
                            <div className=" bg-red-600  w-3 h-3 rounded-full hover:w-2   hover:h-2"></div>
                        </div>

                        <div className="  group-hover:block hover:h-4 border-amber-600 border hover:w-4  rounded-full 
                        flex justify-center items-center hover:border-amber-500 duration-100 ease-in-out ">
                            <div className=" bg-amber-600  w-3 h-3 rounded-full hover:w-2   hover:h-2"></div>
                        </div>

                        <div className="  group-hover:block mx-1  hover:h-4 border-violet-400 border hover:w-4  rounded-full 
                        flex justify-center items-center hover:border-violet-400 duration-100 ease-in-out ">
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

            </div>
        </>
    )
}

export default DetailsSectionOne
