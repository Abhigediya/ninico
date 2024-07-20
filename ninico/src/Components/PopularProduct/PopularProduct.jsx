// import React from 'react'
import CircleAndStar from './CircleAndStar'

import Basket from '../../assets/Basket.svg'
import DoubleArrow from '../../assets/DoubleArrow.svg'
import Eyes from '../../assets/Eyes.svg'
import Heart from '../../assets/Heart.svg'
// import BradleyBurgessOne from '../../assets/BradleyBurgessOne.jpeg'
// import BradleyBurgessTwo from '../../assets/BradleyBurgessTwo.jpeg'
// import AllieSharpOne from '../../assets/AllieSharpOne.jpeg'
// import AllieSharpTwo from '../../assets/AllieSharpTwo.jpeg'
// import NathanielBaldwinOne from '../../assets/NathanielBaldwinOne.jpeg'
// import NathanielBaldwinTwo from '../../assets/NathanielBaldwinTwo.jpeg'
// import EffieRiosOne from '../../assets/EffieRiosOne.jpeg'
// import EffieRiosTwo from '../../assets/EffieRiosTwo.jpeg'
// import CarolynGoodwinOne from '../../assets/CarolynGoodwinOne.jpeg'
// import CarolynGoodwinTwo from '../../assets/CarolynGoodwinTwo.jpeg'
// import EvelynPattonOne from '../../assets/EvelynPattonOne.jpeg'
// import EvelynPattonTwo from '../../assets/EvelynPattonTwo.jpeg'
// import SallyRayOne from '../../assets/SallyRayOne.jpeg'
// import SallyRayTwo from '../../assets/SallyRayTwo.jpeg'
// import OraBowmanOne from '../../assets/OraBowmanOne.jpeg'
// import OraBowmanTwo from '../../assets/OraBowmanTwo.jpeg'
// import FrederickValdezOne from '../../assets/FrederickValdezOne.jpeg'
// import FrederickValdezTwo from '../../assets/FrederickValdezTwo.jpeg'
// import TerryByrdOne from '../../assets/TerryByrdOne.jpeg'
// import TerryByrdTwo from '../../assets/TerryByrdTwo.jpeg'

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productList } from '../../Redux/ProductRedux/productAction'
import { addToCart, removeToCart } from '../../Redux/CartReducer/CartAction'
import { Link, Outlet } from 'react-router-dom'




const PopularProduct = () => {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.ProductReducer)

    console.warn('productMain', data);

    useEffect(() => {
        dispatch(productList())
    }, [])

    return (
        <>
            <section className="mt-14">
                <div className="sm:flex  justify-between ">
                    <div className="">
                        <span className="text-2xl font-bold">Popular</span>
                        <span className="ms-3 text-ninico text-xl font-medium">Products</span>
                    </div>
                    <ul className="flex  font-medium">
                        <li className="lg:mx-4 xs:mx-2"  > <button className="text-ninico font-bold border-b border-ninico ">All</button>  </li>
                        <li className="lg:mx-4 xs:mx-2" >Popular</li>
                        <li className="lg:mx-4 xs:mx-2" >On Sale</li>
                        <li className="lg:mx-4 xs:mx-2" >Best Rated</li>
                        <li></li>
                    </ul>
                </div>

                <div className='flex flex-wrap p-4 '>
                    {
                        data.flat().map((item) => {
                            return (
                                <>
                                    <div key={item} className="lg:w-64 md:w-80 xs:w-96 mx-2 ">
                                        <div className=" group  ">
                                            <div className="relative flex justify-center   ">
                                                <img src={item.thumbnail} alt="123" />
                                                <div className="  group-hover:block top-0 absolute  h-full ">
                                                    {/* <img src={BradleyBurgessTwo} alt="123" /> */}
                                                    <div className="flex justify-center items-center h-full">
                                                        <div className="bg-green-300  group-hover:block hidden group-hover:bg-white ">
                                                            <div className="flex p-2 bg-white">
                                                                <button className="" onClick={()=> dispatch(addToCart(item))} >
                                                                   {/* ihello */}
                                                                    <img src={Basket} width={30} className='inline' alt="" />
                                                                </button>
                                                                <img src={DoubleArrow} className="rotate-90 mx-3 inline" width={25} alt="" />
                                                                <img src={Eyes} width={30} alt="" className='inline' />
                                                                <img src={Heart} className="ms-3 inline" width={35} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="my-5 group  hover-w-80 hover:z-[1] ">
                                                <div className="hover:text-ninico text-footer-3">Bradley Burgess 2 </div>
                                                <div className="font-semibold">$20.00</div>

                                                <div className="mt-3 flex justify-between  ">
                                                    <CircleAndStar />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                </div>


                <div className="">




                    {/* <div className="mt-10 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 xs:w-full gap-5  "> */}

                    {/* Bradley Burgress 2 -----> product 1 */}
                    {/* <div className="lg:w-64 md:w-80 xs:w-96  ">
                            <div className=" group  ">
                                <div className="relative flex justify-center   ">
                                    <img src={BradleyBurgessOne} alt="123" />

                                    <div className=" hidden group-hover:block top-0 absolute  ">
                                        <img src={BradleyBurgessTwo} alt="123" />

                                        <div className=" flex justify-center">
                                            <div className="absolute flex justify-center top-32 group-hover:block hidden group-hover:bg-white   ">
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
                                <div className="mt-5 group  hover-w-80 hover:z-[1] ">
                                    <div className="hover:text-ninico text-footer-3">Bradley Burgess 2 </div>
                                    <div className="font-semibold">$20.00</div>

                                    <div className="mt-3 flex justify-between  ">
                                        <CircleAndStar />
                                    </div>
                                </div>
                            </div>
                        </div> */}

                    {/* Allie Sharp -----> Product 2 */}
                    {/* <div className="lg:w-64 md:w-80 xs:w-96">
                            <div className=" group group-hover:p-2  ">
                                <div className=" relative flex justify-center    ">
                                    <img src={AllieSharpOne} className=' ' width={450} alt="123" />

                                    <div className=" group absolute top-0 left-0 hidden group-hover:block ">
                                        <img src={AllieSharpTwo} width={450} alt="123" />

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
                                <div className=" mt-5 group  hover-w-80 hover:z-[1] ">
                                    <div className="hover:text-ninico text-footer-3">Allie Sharp </div>
                                    <div className="font-semibold">$30.00</div>

                                    <div className="mt-3 flex justify-between  ">
                                        <CircleAndStar />
                                    </div>
                                </div>
                            </div>
                        </div> */}

                    {/* Nathaniel Baldwin -----> Product 3 */}
                    {/* <div className="lg:w-64 md:w-80 xs:w-96">
                            <div className=" group group-hover:p-2  ">
                                <div className=" relative flex justify-center    ">
                                    <img src={NathanielBaldwinOne} className=' ' width={450} alt="123" />

                                    <div className=" group absolute top-0 left-0 hidden group-hover:block ">
                                        <img src={NathanielBaldwinTwo} width={450} alt="123" />

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
                                <div className="group  hover-w-80 hover:z-[1] mt-5 ">
                                    <div className="hover:text-ninico text-footer-3 ">Nathaniel Bladwin </div>
                                    <div className="font-semibold">$40.00</div>

                                    <div className="mt-3 flex justify-between  ">
                                        <CircleAndStar />
                                    </div>
                                </div>
                            </div>
                        </div> */}

                    {/* Effie Rios -----> Product 4 */}
                    {/* <div className="lg:w-64 md:w-80 xs:w-96">
                            <div className=" group group-hover:p-2  ">
                                <div className=" relative flex justify-center     ">
                                    <img src={EffieRiosOne} className=' ' alt="123" />

                                    <div className=" group absolute top-0 left-0 hidden group-hover:block ">
                                        <img src={EffieRiosTwo} alt="123" />

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
                                <div className="mt-5 group  hover-w-80 hover:z-[1]">
                                    <div className=" text-footer-3 hover:text-ninico">Bradley Burgess 2 </div>
                                    <div className="font-semibold">$40.00</div>

                                    <div className="mt-3 flex justify-between  ">
                                        <CircleAndStar />
                                    </div>
                                </div>
                            </div>
                        </div> */}

                    {/* Carolyn Goodwin -----> Product 5 */}
                    {/* <div className="lg:w-64 md:w-80 xs:w-96">
                            <div className=" group group-hover:p-2  ">
                                <div className=" relative flex justify-center  ">
                                    <img src={CarolynGoodwinOne} className=' ' alt="123" />

                                    <div className=" group absolute top-0 left-0 hidden group-hover:block ">
                                        <img src={CarolynGoodwinTwo} alt="123" />

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
                                <div className="mt-5 group  hover-w-80 hover:z-[1]">
                                    <div className="text-footer-3 hover:text-ninico">Carloyn Goodwin</div>
                                    <div className="font-semibold">$20.00</div>

                                    <div className="mt-3 flex justify-between  ">
                                        <CircleAndStar />
                                    </div>
                                </div>
                            </div>
                        </div> */}

                    {/* Evelyn Patton -----> Product 6 */}
                    {/* <div className="lg:w-64 md:w-80 xs:w-96">
                            <div className=" group group-hover:p-2  ">
                                <div className=" relative flex justify-center    ">
                                    <img src={EvelynPattonOne} className=' ' alt="123" />

                                    <div className=" group absolute top-0 left-0 hidden group-hover:block ">
                                        <img src={EvelynPattonTwo} alt="123" />

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
                                <div className="mt-5 group  hover-w-80 hover:z-[1]">
                                    <div className="text-footer-3 hover:text-ninico">Evelyn Patton </div>
                                    <div className="font-semibold">$60.00</div>

                                    <div className="mt-3 flex justify-between  ">
                                        <CircleAndStar />
                                    </div>
                                </div>
                            </div>
                        </div> */}

                    {/* Sally Ray -----> Product 7 */}
                    {/* <div className="lg:w-64 md:w-80 xs:w-96">
                            <div className=" group group-hover:p-2  ">
                                <div className=" relative  flex justify-center   ">
                                    <img src={SallyRayOne} className=' ' alt="123" />

                                    <div className=" group absolute top-0 left-0 hidden group-hover:block ">
                                        <img src={SallyRayTwo} alt="123" />

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
                                <div className="mt-5 group  hover-w-80 hover:z-[1]">
                                    <div className="text-footer-3 hover:text-ninico">Sally Ray </div>
                                    <div className="font-semibold">$20.00</div>

                                    <div className="mt-3 flex justify-between  ">
                                        <CircleAndStar />
                                    </div>
                                </div>
                            </div>
                        </div> */}

                    {/* Ora Bowman -----> Product 8 */}
                    {/* <div className="lg:w-64 md:w-80 xs:w-96">
                            <div className=" group group-hover:p-2  ">
                                <div className=" relative flex justify-center    ">
                                    <img src={OraBowmanOne} className=' ' alt="123" />

                                    <div className=" group absolute top-0 left-0 hidden group-hover:block ">
                                        <img src={OraBowmanTwo} alt="123" />

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
                                <div className="mt-5 group  hover-w-80 hover:z-[1]">
                                    <div className="text-footer-3 hover:text-ninico">Ora Bownman </div>
                                    <div className="font-semibold">$80.00</div>

                                    <div className="mt-3 flex justify-between  ">
                                        <CircleAndStar />
                                    </div>
                                </div>
                            </div>
                        </div> */}

                    {/* Frederick Valdez  -----> Product 9 */}
                    {/* <div className="lg:w-64 md:w-80 xs:w-96">
                            <div className=" group group-hover:p-2  ">
                                <div className=" relative flex justify-center    ">
                                    <img src={FrederickValdezOne} className=' ' alt="123" />

                                    <div className=" group absolute top-0 left-0 hidden group-hover:block ">
                                        <img src={FrederickValdezTwo} alt="123" />

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
                                <div className="mt-5 group  hover-w-80 hover:z-[1]">
                                    <div className="text-footer-3 hover:text-ninico">Frederick Valdez </div>
                                    <div className="font-semibold">$90.00</div>

                                    <div className="mt-3 flex justify-between  ">
                                        <CircleAndStar />
                                    </div>
                                </div>
                            </div>
                        </div> */}

                    {/* Terry Byrd -----> Product 10 */}
                    {/* <div className="lg:w-64 md:w-80 xs:w-96">
                            <div className=" group group-hover:p-2  ">
                                <div className=" relative flex justify-center    ">
                                    <img src={TerryByrdOne} className=' ' alt="123" />

                                    <div className=" group absolute top-0 left-0 hidden group-hover:block ">
                                        <img src={TerryByrdTwo} alt="123" />

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
                                <div className="mt-5 group  hover-w-80 hover:z-[1]">
                                    <div className="text-footer-3 hover:text-ninico">Bradley Burgess 2 </div>
                                    <div className="font-semibold">$100.00</div>

                                    <div className="mt-3 flex justify-between  ">
                                        <CircleAndStar />
                                    </div>
                                </div>
                            </div>
                        </div> */}



                    {/* </div> */}
                </div>

            </section>
        </>
    )
}

export default PopularProduct
