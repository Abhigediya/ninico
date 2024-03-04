import React from 'react'
import ShopImage from '../../assets/ShopImage.jpg'
import ArrowNinico from '../../assets/ArrowNinico.svg'
import User from '../../assets/User.svg'
import Flight from '../../assets/Flight.svg'
import Facebook from '../../assets/Facebook.svg'
import Twitter from '../../assets/Twitter.svg'
import Behance from '../../assets/Behance.svg'
import Youtube from '../../assets/Youtube.svg'
import Linkedin from '../../assets/Linkedin.svg'

const TopBarTwo = () => {
    return (
        <>
            <div className="bg-topBar py-2 font-semibold ">
                <div className="container mx-auto flex justify-between">
                    <div className="xl:block lg:flex">
                        <div className="">
                            Welcome To our ionternational shop! Enjoy free shipping on orders $100 up.
                        </div>
                        <div className=" w-[105px] flex border-b border-ninico xl:ms-0 lg:ms-2 ">
                            <div className="me-2 text-ninico "> Shop Now</div>
                            <img src={ArrowNinico} width={20} alt="123" />
                        </div>
                    </div>
                    <div className="xl:flex items-center  hidden  text-sm ">
                        <div className="flex">
                            <img src={User} width={20} alt="" />
                            <div className=" ms-1">Account</div>
                        </div>
                        <div className="flex p-2 mx-5">
                            <img src={Flight} width={20} alt="" />
                            <div className="ms-2"> Track Your Order</div>
                        </div>
                        <div className="flex">
                            <img src={Facebook} width={8} alt="" />
                            <img src={Twitter} className='mx-2' width={15} alt="" />
                            <img src={Behance} width={15} alt="" />
                            <img src={Youtube} className='mx-3' width={15} alt="" />
                            <img src={Linkedin} width={15} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default TopBarTwo
