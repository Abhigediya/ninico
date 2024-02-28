import React from 'react'
import CircleAndStar from './CircleAndStar'

// import Basket from '../../assets/Basket.svg'
import Basket from '../../assets/Basket.svg'
import DoubleArrow from '../../assets/DoubleArrow.svg'
import Eyes from '../../assets/Eyes.svg'
import Heart from '../../assets/Heart.svg'
import StarBorder from '../../assets/StarBorder.svg'
import StarBg from '../../assets/StarBG.svg'
// import TimeImage from '../../assets/TimeImage.png'
import BradleyBurgressOne from '../../assets/BradleyBurgessOne.jpeg'
import BradleyBurgressTwo from '../../assets/BradleyBurgessTwo.jpeg'
// import AllieSharpOne from '../../assets/AllieSharpOne.jpeg'
// import AllieSharpTwo from '../../assets/AlliSharpTwo.jpeg'
import NathanielBaldwinOne from '../../assets/NathanielBaldwinOne.jpeg'
import NathanielBaldwinTwo from '../../assets/NathanielBaldwinTwo.jpeg'
import EffieRiosOne from '../../assets/EffieRiosOne.jpeg'
import EffieRiosTwo from '../../assets/EffieRiosTwo.jpeg'
import CarolynGoodwinOne from '../../assets/CarolynGoodwinOne.jpeg'
import CarolynGoodwinTwo from '../../assets/CarolynGoodwinTwo.jpeg'
import EvelynPattonOne from '../../assets/EvelynPattonOne.jpeg'
import EvelynPattonTwo from '../../assets/EvelynPattonTwo.jpeg'
import SallyRayOne from '../../assets/SallyRayOne.jpeg'
import SallyRayTwo from '../../assets/SallyRayTwo.jpeg'
import OraBowmanOne from '../../assets/OraBowmanOne.jpeg'
import OraBowmanTwo from '../../assets/OraBowmanTwo.jpeg'
import FrederickValdezOne from '../../assets/FrederickValdezOne.jpeg'
import FrederickValdezTwo from '../../assets/FrederickValdezTwo.jpeg'
import TerryByrdOne from '../../assets/TerryByrdOne.jpeg'
import TerryByrdTwo from '../../assets/TerryByrdTwo.jpeg'



const PopularPRoduct = () => {
    return (
        <>
            <section className="mt-14">
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
                    {/* Bradley BUrgress 2 -----> product 1 */}
                    <div className="">
                        <div className=" group group-hover:p-2  ">
                            <div className=" outer relative     ">
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

                            </div>
                            <div className="group  hover-w-80 hover:z-[1]">
                                <div className="group-hover:text-ninico">Bradley Burgess 2 </div>
                                <div className="font-bold">$20.00</div>

                                <div className="mt-3 flex justify-between  ">
                                    <CircleAndStar />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Allie Sharp -----> Product 2 */}
                    <div className="">
                        <div className=" group group-hover:p-2  ">
                            <div className=" relative  outer   ">
                                <img src={BradleyBurgressOne} className=' ' width={250} alt="123" />

                                {/* <div className=" group inner absolute top-0 left-0 hidden "> */}
                                {/* <img src={BradleyBurgressTwo} width={250} alt="123" /> */}

                                <div className=" flex justify-center   ">
                                    <div className="   absolute  flex justify-center top-32     group-hover:block hidden group-hover:bg-white   ">
                                        <div className="flex justify-around    py-2 px-3">
                                            <img src={Basket} width={30} alt="" />
                                            <img src={DoubleArrow} className="rotate-90 mx-3 " width={25} alt="" />
                                            <img src={Eyes} width={30} alt="" />
                                            <img src={Heart} className="ms-3" width={35} alt="" />
                                        </div>
                                    </div>
                                    {/* </div> */}
                                </div>

                            </div>
                            <div className="group  hover-w-80 hover:z-[1]">
                                <div className="group-hover:text-ninico">Bradley Burgess 2 </div>
                                <div className="font-bold">$20.00</div>

                                <div className="mt-3 flex justify-between  ">
                                    <CircleAndStar />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className=" group group-hover:p-2  ">
                            <div className=" relative  outer   ">
                                <img src={BradleyBurgressOne} className=' ' width={250} alt="123" />

                                {/* <div className=" group inner absolute top-0 left-0 hidden "> */}
                                {/* <img src={BradleyBurgressTwo} width={250} alt="123" /> */}

                                <div className=" flex justify-center   ">
                                    <div className="   absolute  flex justify-center top-32     group-hover:block hidden group-hover:bg-white   ">
                                        <div className="flex justify-around    py-2 px-3">
                                            <img src={Basket} width={30} alt="" />
                                            <img src={DoubleArrow} className="rotate-90 mx-3 " width={25} alt="" />
                                            <img src={Eyes} width={30} alt="" />
                                            <img src={Heart} className="ms-3" width={35} alt="" />
                                        </div>
                                    </div>
                                    {/* </div> */}
                                </div>

                            </div>
                            <div className="group  hover-w-80 hover:z-[1]">
                                <div className="group-hover:text-ninico">Bradley Burgess 2 </div>
                                <div className="font-bold">$20.00</div>

                                <div className="mt-3 flex justify-between  ">
                                    <CircleAndStar />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className=" group group-hover:p-2  ">
                            <div className=" relative  outer   ">
                                <img src={BradleyBurgressOne} className=' ' width={250} alt="123" />

                                {/* <div className=" group inner absolute top-0 left-0 hidden "> */}
                                {/* <img src={BradleyBurgressTwo} width={250} alt="123" /> */}

                                <div className=" flex justify-center   ">
                                    <div className="   absolute  flex justify-center top-32     group-hover:block hidden group-hover:bg-white   ">
                                        <div className="flex justify-around    py-2 px-3">
                                            <img src={Basket} width={30} alt="" />
                                            <img src={DoubleArrow} className="rotate-90 mx-3 " width={25} alt="" />
                                            <img src={Eyes} width={30} alt="" />
                                            <img src={Heart} className="ms-3" width={35} alt="" />
                                        </div>
                                    </div>
                                    {/* </div> */}
                                </div>

                            </div>
                            <div className="group  hover-w-80 hover:z-[1]">
                                <div className="group-hover:text-ninico">Bradley Burgess 2 </div>
                                <div className="font-bold">$20.00</div>

                                <div className="mt-3 flex justify-between  ">
                                    <CircleAndStar />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            </section>
        </>
    )
}

export default PopularPRoduct
