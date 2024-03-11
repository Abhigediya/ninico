import React from 'react'
import TopBar from '../../TopBar/TopBar'
import Navbar from '../Navbar'
import Footer from '../../Footer/Footer'

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
import Pinterest from '../../../assets/Pinterest.svg'
import Facebook from '../../../assets/Facebook.svg'
import Twitter from '../../../assets/Twitter.svg'
import BlogSix from '../../../assets/BlogSix.png'
import BlogSeven from '../../../assets/BlogSeven.png'
import BackArrowNinico from '../../../assets/BackArrowNinico.svg'
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

            <section className='mt-20 container mx-auto lg:grid lg:grid-cols-12 gap-20 '>
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
                        <div className="md:grid md:grid-cols-12">
                            <div className="col-span-6   pe-4 ">
                                <h1 className='text-3xl font-semibold'>Our Approach</h1>
                                <div className="mt-3">
                                    Must explain to you how all praising uts pain was born and I will gives you a itself completed
                                    account of the system, and sed expounds the ut actual teachings of that greater
                                </div>
                                <div className="mt-5">
                                    <div className="flex">
                                        <img src={TrueNinico} width={20} alt="" />
                                        <div className="ms-3">Extramural Funding</div>
                                    </div>
                                    <div className=" mt-2 flex">
                                        <img src={TrueNinico} width={20} alt="" />
                                        <div className="ms-3">Bacteria  Markers</div>
                                    </div>
                                    <div className="mt-3 flex">
                                        <img src={TrueNinico} width={20} alt="" />
                                        <div className="ms-3 font-medium">Nam Nec mi  euismod euismod</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-6  ">
                                <img src={BlogTwo} className='rounded-lg' alt="" />
                            </div>
                        </div>
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
                    <div className="mt-10 flex justify-between">
                        <div className=" flex items-center">
                            <h1 className='text-xl  font-bold'>Tag</h1>
                            <div className="ms-2 py-1 px-6 text-footer-3 text-xs font-semibold border border-[#E7E7E7]">FURNITURE</div>
                            <div className="ms-2 py-1 px-6 text-footer-3 text-xs font-semibold border border-[#E7E7E7]">TABLE</div>
                            <div className="ms-2 py-1 px-6 text-footer-3 text-xs font-semibold border border-[#E7E7E7]">FASHION</div>
                        </div>
                        <div className="flex">
                            <h1 className='text-2xl font-bold'>Share</h1>
                            <h1 className='mx-2 text-2xl font-bold'>in</h1>
                            <img src={Pinterest} className='ms-2' width={15} alt="" />
                            <img src={Facebook} className='mx-3' width={10} alt="" />
                            <img src={Twitter} width={20} alt="" />
                        </div>
                    </div>
                    <div className="mt-10 border-b border-[#E7E7E7]"></div>
                    <h1 className='mt-10 text-xl font-semibold'>(04) Comment </h1>

                    <div className="mt-5 flex   ">
                        <img src={BlogSix} className='rounded-full h-[80px]' alt="" />
                        <div className="ms-5">
                            <div className="mt-10 border-b border-[#E7E7E7]"></div>
                            <div className="">Kristin Watson</div>
                            <div className="mt-2 text-sm text-footer-3">MARCH 10, 2020</div>
                            <div className="mt-5 text-footer-3">
                                Patient Comments are a collection of comments submitted by viewers in response to
                                a question posed by a MedicineNet doctor.
                            </div>
                            <img src={BackArrowNinico} className='mt-5 ms-2 ps-1 ' width={20} alt="" />
                        </div>
                    </div>
                    <div className="mt-14 ps-28 flex   ">
                        <img src={BlogSeven} className='rounded-full h-[80px]' alt="" />
                        <div className="ms-5">
                            <div className="">Kristin Watson</div>
                            <div className="mt-2 text-sm text-footer-3">MARCH 10, 2020</div>
                            <div className="mt-5 text-footer-3">
                                Include anecdotal examples of your experience, or things you took notice of that you
                            </div>
                            <div className="text-footer-3">feel others would find useful.</div>
                            <img src={BackArrowNinico} className='mt-5 ms-2 ps-1 ' width={20} alt="" />
                        </div>
                    </div>
                    <div className="mt-20 border-b border-[#E7E7E7]"></div>
                    <h1 className='mt-14 text-xl font-semibold '>Leave a Reply </h1>
                    <div className='mt-5 text-footer-3'>Your email address will not be published. Required fields are marked * </div>
                    <div className="row ">
                        <div className="mt-10 grid grid-cols-12 gap-8">
                            <div className="col-span-6 w-full" >
                                <input type="text" className='ps-3 border border-[#E7E7E7] h-14 rounded-lg w-full  text-sm'
                                    placeholder='Enter your Name ' />
                            </div>
                            <div className="col-span-6">
                                <input type="text" className='ps-3 border border-[#E7E7E7] h-14 rounded-lg w-full  text-sm'
                                    placeholder='Enter your email ' />

                            </div>
                            <div className="col-span-6 " >
                                <input type="text" className='ps-3 border border-[#E7E7E7] h-14 rounded-lg w-full  text-sm'
                                    placeholder='Enter your Number ' />
                            </div>
                            <div className="col-span-6">
                                <input type="text" className='ps-3 border border-[#E7E7E7] h-14 rounded-lg w-full  text-sm'
                                    placeholder='Enter your website ' />
                            </div>
                        </div>
                    </div>
                    <div className="mt-7">
                        <textarea name="" id="" cols="30" rows="5" placeholder='Type your comment'
                            className=' p-5 border texts-xs  w-full border-[#E7E7E7] rounded-lg ' />
                    </div>

                    <button className='mt-4 py-4 px-8 bg-ninico text-sm text-white font-medium rounded-md '>Post Comment</button>

                    <div className=""></div>
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
                            <img src={BlogOne} className='object-cover h-24 w-24' alt="" />
                            <div className="ps-2">
                                <div className="text-footer-3 font-semmibold">4 March. 2022</div>
                                <div className="font-medium ">Don't Underestiment Tree for Furniture</div>
                            </div>
                        </div>
                        <div className="flex mt-5">
                            <img src={BlogTwo} className='object-cover w-24 h-24' alt="" />
                            <div className="ps-2">
                                <div className="text-footer-3 font-semmibold">12 February. 2022</div>
                                <div className="font-medium ">Equiping Researchers in the Developing World</div>
                            </div>
                        </div>
                        <div className="flex mt-5">
                            <img src={BlogThree} className='object-cover w-24 h-24' alt="" />
                            <div className="ps-2">
                                <div className="text-footer-3 font-semmibold">12 January. 2022</div>
                                <div className="font-medium ">Things to do before shoping</div>
                            </div>
                        </div>
                        <div className="flex mt-5">
                            <img src={BlogFive} className='object-cover w-24 h-24' alt="" />
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

            </section>
            <Footer />
        </>
    )
}

export default BlogDetails
