import React from 'react'
import TopBarTwo from '../../TopBar/TopBarTwo'
import Navbar from '../Navbar'
import Footer from '../../Footer/Footer'

import ShopImage from '../../../assets/ShopImage.jpg'
import BlogOne from '../../../assets/BlogOne.jpg'
import Search from '../../../assets/Search.svg'
import UserNinico from '../../../assets/UserNiinico.svg'
import ClockNinico from '../../../assets/ClockNinico.svg'
import CommentNinico from '../../../assets/commentNinico.svg'
import BlogTwo from '../../../assets/BlogTwo.jpeg'
import BlogThree from '../../../assets/BlogThree.jpeg'
import Arrow from '../../../assets/Arrow.svg'

const Blog = () => {
    return (
        <>
            <TopBarTwo />
            <div className="container mx-auto">
                <Navbar />
            </div>

            <div className="-mt-1 ">
                <div className="relative">
                    <img src={ShopImage} className="h-48" alt="" />
                    <div className="absolute top-10 left-32  ">
                        <div className="flex items-center text-lg  ">
                            <div className="me-3">Home</div>
                            <div className="border-b w-8 border-footer-3"></div>
                            <div className="ms-3 text-footer-3  "> Blog </div>
                        </div>
                        <div className="text-5xl mt-4 font-semibold"> Blog </div>
                    </div>
                </div>
            </div>

            <section className='mt-20 container mx-auto lg:grid lg:grid-cols-12 gap-20 '>
                <div className="col-span-8  ">
                    <img src={BlogOne} className='rounded-xl' alt="" />
                    <div className="mt-5 flex ">
                        <div className="flex">
                            <img src={UserNinico} width={20} alt="" />
                            <span className='ms-2 text-[#5b5757] font-semibold'>ALEXTINA</span>
                        </div>
                        <div className="ms-10 flex">
                            <img src={ClockNinico} width={15} alt="" />
                            <span className='ms-2 text-[#5b5757] font-semibold'>Dec 28, 2022</span>
                        </div>
                        <div className="ms-10 flex">
                            <img src={CommentNinico} width={20} alt="" />
                            <span className='ms-2 text-[#5b5757] font-semibold'>(04) COMMENTS</span>
                        </div>
                    </div>
                    <h1 className='mt-5 text-4xl font-semibold hover:text-ninico'>Scientists  speculate that ours might not be held </h1>
                    <div className="mt-7">Laboratories used for scientific research take many forms because of the differing
                        requirements of specialists in the various fields of science and engineering. A physics laboratory
                    </div>
                    <button className='mt-7 py-3 px-8 rounded-lg text-white font-semibold bg-ninico'>Read more</button>
                    <img src={BlogTwo} className='mt-16 rounded-lg' alt="" />
                    <div className="mt-5 flex ">
                        <div className="flex">
                            <img src={UserNinico} width={20} alt="" />
                            <span className='ms-2 text-[#5b5757] font-semibold'>ALEXTINA</span>
                        </div>
                        <div className="ms-10 flex">
                            <img src={ClockNinico} width={15} alt="" />
                            <span className='ms-2 text-[#5b5757] font-semibold'>Dec 28, 2022</span>
                        </div>
                        <div className="ms-10 flex">
                            <img src={CommentNinico} width={20} alt="" />
                            <span className='ms-2 text-[#5b5757] font-semibold'>(04) COMMENTS</span>
                        </div>
                    </div>
                    <h1 className='mt-5 pe-10 text-4xl font-semibold hover:text-ninico '>The Multiverse is the collection of alternate universe</h1>
                    <div className="mt-7">Laboratories used for scientific research take many forms because of the differing
                        requirements of specialists in the various fields of science and engineering. A physics laboratory
                    </div>
                    <button className='mt-7 py-3 px-8 rounded-lg text-white font-semibold bg-ninico'>Read more</button>
                    <img src={BlogThree} className='mt-16 rounded-lg' alt="" />
                    <div className="mt-5 flex ">
                        <div className="flex">
                            <img src={UserNinico} width={20} alt="" />
                            <span className='ms-2 text-[#5b5757] font-semibold'>ALEXTINA</span>
                        </div>
                        <div className="ms-10 flex">
                            <img src={ClockNinico} width={15} alt="" />
                            <span className='ms-2 text-[#5b5757] font-semibold'>Dec 28, 2022</span>
                        </div>
                        <div className="ms-10 flex">
                            <img src={CommentNinico} width={20} alt="" />
                            <span className='ms-2 text-[#5b5757] font-semibold'>(04) COMMENTS</span>
                        </div>
                    </div>
                    <h1 className='mt-5 pe-10 text-4xl font-semibold hover:text-ninico '>
                        That share a universal hierarchy a large variety of these
                    </h1>
                    <div className="mt-7">Laboratories used for scientific research take many forms because of the differing
                        requirements of specialists in the various fields of science and engineering. A physics laboratory
                    </div>
                    <button className='mt-7 py-3 px-8 rounded-lg text-white font-semibold bg-ninico'>Read more</button>
                    <img src={BlogOne} className='mt-16 rounded-lg' alt="" />
                    <div className="mt-5 flex ">
                        <div className="flex">
                            <img src={UserNinico} width={20} alt="" />
                            <span className='ms-2 text-[#5b5757] font-semibold'>ALEXTINA</span>
                        </div>
                        <div className="ms-10 flex">
                            <img src={ClockNinico} width={15} alt="" />
                            <span className='ms-2 text-[#5b5757] font-semibold'>Dec 28, 2022</span>
                        </div>
                        <div className="ms-10 flex">
                            <img src={CommentNinico} width={20} alt="" />
                            <span className='ms-2 text-[#5b5757] font-semibold'>(04) COMMENTS</span>
                        </div>
                    </div>
                    <h1 className='mt-5 pe-10 text-4xl font-semibold hover:text-ninico '>
                        Universal were originated from another due to a major
                    </h1>
                    <div className="mt-7">Laboratories used for scientific research take many forms because of the differing
                        requirements of specialists in the various fields of science and engineering. A physics laboratory
                    </div>
                    <button className='mt-7 py-3 px-8 rounded-lg text-white font-semibold bg-ninico'>Read more</button>
                    <img src={BlogTwo} className='mt-16 rounded-lg' alt="" />
                    <div className="mt-5 flex ">
                        <div className="flex">
                            <img src={UserNinico} width={20} alt="" />
                            <span className='ms-2 text-[#5b5757] font-semibold'>ALEXTINA</span>
                        </div>
                        <div className="ms-10 flex">
                            <img src={ClockNinico} width={15} alt="" />
                            <span className='ms-2 text-[#5b5757] font-semibold'>Dec 28, 2022</span>
                        </div>
                        <div className="ms-10 flex">
                            <img src={CommentNinico} width={20} alt="" />
                            <span className='ms-2 text-[#5b5757] font-semibold'>(04) COMMENTS</span>
                        </div>
                    </div>
                    <h1 className='mt-5 pe-10 text-4xl font-semibold hover:text-ninico '>
                        A hypothetical collection of potentially diverse
                    </h1>
                    <div className="mt-7">Laboratories used for scientific research take many forms because of the differing
                        requirements of specialists in the various fields of science and engineering. A physics laboratory
                    </div>
                    <button className='mt-7 py-3 px-8 rounded-lg text-white font-semibold bg-ninico'>Read more</button>
                    <img src={BlogTwo} className='mt-16 rounded-lg' alt="" />
                    <div className="mt-5 flex ">
                        <div className="flex">
                            <img src={UserNinico} width={20} alt="" />
                            <span className='ms-2 text-[#5b5757] font-semibold'>ALEXTINA</span>
                        </div>
                        <div className="ms-10 flex">
                            <img src={ClockNinico} width={15} alt="" />
                            <span className='ms-2 text-[#5b5757] font-semibold'>Dec 28, 2022</span>
                        </div>
                        <div className="ms-10 flex">
                            <img src={CommentNinico} width={20} alt="" />
                            <span className='ms-2 text-[#5b5757] font-semibold'>(04) COMMENTS</span>
                        </div>
                    </div>
                    <h1 className='mt-5 pe-10 text-4xl font-semibold hover:text-ninico '>
                        Stanford physicists Andrei Linde In a new Study
                    </h1>
                    <div className="mt-7">Laboratories used for scientific research take many forms because of the differing
                        requirements of specialists in the various fields of science and engineering. A physics laboratory
                    </div>
                    <button className='mt-7 py-3 px-8 rounded-lg text-white font-semibold bg-ninico'>Read more</button>

                    <div className="flex mt-20">
                        <button className='py-3 ps-6 pe-6 rounded-lg text-white bg-ninico'>1</button>
                        <button className='mx-5  py-3 px-5 rounded-lg border border-[#EDEDED] '>2</button>
                        <div className='py-3 px-4 rounded-lg flex items-center border border-[#EDEDED] '>
                            <img src={Arrow} width={18} alt="" />
                        </div>
                    </div>
                </div>




                <div className="col-span-4  ">
                    <div className="p-10 border border-bdr-color rounded-lg ">
                        <h1 className='text-2xl font-semibold'>Search</h1>
                        <div className="mt-5 py-2 px-5 flex bg-sign-in  justify-between">
                            <input type="text" className='h-10 bg-sign-in text-xs' placeholder='SEARCH POST' />
                            <img src={Search} width={25} alt="" />
                        </div>
                    </div>
                    <div className="mt-16 p-10 border border-bdr-color rounded-lg">
                        <h1 className='text-2xl font-semibold'>Category</h1>
                        <div className="mt-5 p-3 flex justify-between border border-[#F2F5FA]  text-xs">
                            <span className='text-footer-3'>CHEMISTRY</span>
                            <span className='text-footer-3'>03</span>
                        </div>
                        <div className="mt-5 p-3 flex justify-between border border-[#F2F5FA] text-xs">
                            <span className='text-footer-3'>FORENSIC SCINCE</span>
                            <span className='text-footer-3'>07</span>
                        </div>
                        <div className="mt-5 p-3 flex justify-between border border-[#F2F5FA] text-xs">
                            <span className='text-footer-3'>GEMOLOGICAL</span>
                            <span className='text-footer-3'>06</span>
                        </div>
                        <div className="mt-5 p-3 flex justify-between border border-[#F2F5FA] text-xs">
                            <span className='text-footer-3'>COVID ANALYSIS</span>
                            <span className='text-footer-3'>01</span>
                        </div>
                        <div className="mt-5 p-3 flex justify-between border border-[#F2F5FA] text-xs">
                            <span className='text-footer-3'>BECTERIOLOGY</span>
                            <span className='text-footer-3'>00</span>
                        </div>
                        <div className="mt-5 p-3 flex justify-between border border-[#F2F5FA] text-xs">
                            <span className='text-footer-3'>ANGIOSPERM</span>
                            <span className='text-footer-3'>26</span>
                        </div>
                    </div>

                    <div className="mt-16 p-10 border border-bdr-color rounded-lg">
                        <h1 className='text-xl font-semibold'>Recent Post</h1>
                        <div className="flex mt-5">
                            <img src={BlogOne} width={90} alt="" />
                            <div className="ps-2">
                                <div className="">4 March. 2022</div>
                                <div className="">Don't Underestiment Tree for Furniture</div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 p-10 border border-bdr-color rounded-lg">
                        <h1 className='text-2xl font-semibold'>Popular Tag</h1>
                        <div className="mt-5">
                            <span className="py-1 px-6 text-xs border border-[#F2F4F6] text-footer-3 font-semibold">FURNITURE </span>
                            <span className="ms-3 py-1 px-6 text-xs border border-[#F2F4F6] text-footer-3  font-semibold">TABLE</span>
                        </div>
                        <div className="mt-5">
                            <span className="py-1 px-6 text-xs border border-[#F2F4F6] text-footer-3 font-semibold">CHAIR </span>
                            <span className="ms-3 py-1 px-6 text-xs border border-[#F2F4F6] text-footer-3 font-semibold">TABLE</span>
                        </div>
                        <div className="mt-5">
                            <span className="py-1 px-6 text-xs border border-[#F2F4F6] text-footer-3 font-semibold">TOY </span>
                            <span className="ms-3 py-1 px-6 text-xs border border-[#F2F4F6] text-footer-3 font-semibold">SUIT</span>
                        </div>
                        <div className="mt-5">
                            <span className="py-1 px-6 text-xs border border-[#F2F4F6] text-footer-3 font-semibold">T-SHIRT </span>
                            <span className="ms-3 py-1 px-6 text-xs border border-[#F2F4F6] text-footer-3 font-semibold">DRESS</span>
                        </div>
                        <div className="mt-5">
                            <span className="py-1 px-6 text-xs border border-[#F2F4F6] text-footer-3 font-semibold">WOODEN</span>
                            <span className="ms-3 py-1 px-6 text-xs border border-[#F2F4F6] text-footer-3 font-semibold">CLOCK</span>
                        </div>
                        <div className="mt-5">
                            <span className="py-1 px-6 text-xs border border-[#F2F4F6] text-footer-3 font-semibold">CRAFT</span>
                            <span className="ms-3 py-1 px-6 text-xs border border-[#F2F4F6] text-footer-3 font-semibold">GIFT</span>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

        </>
    )
}

export default Blog
