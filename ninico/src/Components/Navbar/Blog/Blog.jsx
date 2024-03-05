import React from 'react'
import TopBarTwo from '../../TopBar/TopBarTwo'
import Navbar from '../Navbar'

import ShopImage from '../../../assets/ShopImage.jpg'
import BlogOne from '../../../assets/BlogOne.jpg'
import BlogTwo from '../../../assets/BlogTwo.jpeg'
import BlogThree from '../../../assets/BlogThree.jpeg'
import BlogFour from '../../../assets/BlogFour.jpeg'

const Blog = () => {
    return (
        <>
            <TopBarTwo />
            <div className="container mx-auto">
                <Navbar/>
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

            <section className='container mx-auto grid grid-4 '>
                <div className="border"> uygfvdch</div>
            </section>

        </>
    )
}

export default Blog
