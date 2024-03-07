import React from 'react'
import TopBar from '../../TopBar/TopBar'
import Navbar from '../Navbar'

import ShopImage from '../../../assets/ShopImage.jpg'
import BlogOne from '../../../assets/BlogOne.jpg'
import Search from '../../../assets/Search.svg'
import UserNinico from '../../../assets/UserNiinico.svg'
import ClockNinico from '../../../assets/ClockNinico.svg'
import CommentNinico from '../../../assets/commentNinico.svg'
import TrueNinico from '../../../assets/TrueNinico.svg'
import BlogTwo from '../../../assets/BlogTwo.jpeg'
import BlogThree from '../../../assets/BlogThree.jpeg'
import BlogFive from '../../../assets/BlogFive.jpeg'
import Arrow from '../../../assets/Arrow.svg'


const BlogDetails = () => {
    return (
        <>
            <TopBar />
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
                            <div className="ms-3 text-footer-3  "> Blog Details </div>
                        </div>
                        <div className="text-5xl mt-4 font-semibold"> Blog Details </div>
                    </div>
                </div>
            </div>

            <section className='mt-20 container mx-auto grid grid-cols-12 gap-20 '>
                <div className="col-span-8 ">
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
                    <h1 className='mt-5 text-4xl font-semibold hover:text-ninico'>
                        Lavoratories used for scientic reseach take many froms.
                    </h1>
                    <div className="mt-7">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, aperiam
                        ipsquae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                        voluptatem voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                        ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
                    </div>
                    <div className="mt-7">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, aperiam
                        ipsquae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </div>

                    <div className="row mt-10">
                        <div className="grid grid-cols-12">
                            <div className="col-span-6   pe-4 ">
                                <h1 className='text-3xl font-semibold'>Our Approach</h1>
                                <div className="mt-3">
                                    Must explain to you how all praising uts pain was born and I will gives you a itself completed
                                    account of the system, and sed expounds the ut actual teachings of that greater
                                </div>
                            </div>
                            <div className="col-span-6  ">
                                <img src={BlogTwo} className='rounded-lg' alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <img src={TrueNinico} width={20} alt="" />
                        <div className="ms-3">Extramural Funding</div>
                    </div>
                    <div className="flex">
                        <img src={TrueNinico} width={20} alt="" />
                        <div className="ms-3">Bacteria  Markers</div>
                    </div>
                    <div className="flex">
                        <img src={TrueNinico} width={20} alt="" />
                        <div className="ms-3">Nam Nec mi  euismod euismod</div>
                    </div>
                    <h1 className='mt-20 text-3xl font-semibold'>What is A Business Technology Roadmap? </h1>
                    <div className="mt-5">
                        Unlike detailed blueprints that lay out all tasks, deadlines, bug reports, and more along the way,
                        technology roadmaps are high-level visual summaries highlighting a company’s vision or plans.
                    </div>

                    <div className="mt-5">
                        In an Agile approach, a technology roadmap feeds the sprint and grooming processes, providing insight into
                        how the product will travel from start to finish. It makes it easier for development teams to:
                    </div>

                    <div className="row mt-10 ">
                        <div className="grid grid-cols-12 gap-10">
                            <div className="col-span-6">
                                <img src={BlogOne} className='rounded-xl' alt="" />
                            </div>
                            <div className="col-span-6">
                                <img src={BlogFive} className='rounded-xl' alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-16 border-b border-[#E7E7E7]"></div>
                    <div className="mt-5 flex justify-betweeen">
                        <div className=" flex items-center">
                            <h1 className='text-xl  font-bold'>Tag</h1>
                            <div className="ms-2 py-1 px-6 text-footer-3 text-xs font-semibold border border-[#E7E7E7]">FURNITURE</div>
                            <div className="ms-2 py-1 px-6 text-footer-3 text-xs font-semibold border border-[#E7E7E7]">TABLE</div>
                            <div className="ms-2 py-1 px-6 text-footer-3 text-xs font-semibold border border-[#E7E7E7]">FASHION</div>
                        </div>
                        <div className="">
                            
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

                    <div className="mt-16 p-8 border border-bdr-color rounded-lg">
                        <h1 className='text-xl font-semibold'>Recent Post</h1>
                        <div className="flex mt-5">
                            <img src={BlogOne} className='object-cover h-24 w-24'  alt="" />
                            <div className="ps-2">
                                <div className="text-footer-3 font-semmibold">4 March. 2022</div>
                                <div className="font-medium ">Don't Underestiment Tree for Furniture</div>
                            </div>
                        </div>
                        <div className="flex mt-5">
                            <img src={BlogTwo} className='object-cover w-24 h-24'   alt="" />
                            <div className="ps-2">
                                <div className="text-footer-3 font-semmibold">12 February. 2022</div>
                                <div className="font-medium ">Equiping Researchers in the Developing World</div>
                            </div>
                        </div>
                        <div className="flex mt-5">
                            <img src={BlogThree} className='object-cover w-24 h-24'   alt="" />
                            <div className="ps-2">
                                <div className="text-footer-3 font-semmibold">12 January. 2022</div>
                                <div className="font-medium ">Things to do before shoping</div>
                            </div>
                        </div>
                        <div className="flex mt-5">
                            <img src={BlogFive} className='object-cover w-24 h-24'   alt="" />
                            <div className="ps-2">
                                <div className="text-footer-3 font-semmibold">18 March 2021</div>
                                <div className="font-medium ">Research And Verify of a Quality Product</div>
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

                <div className="mt-96"></div>
            </section>

        </>
    )
}

export default BlogDetails
