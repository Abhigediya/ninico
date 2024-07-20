import React from 'react'
import StarBorder from '../../assets/StarBorder.svg'
import StarBg from '../../assets/StarBG.svg'

const CircleAndStar = () => {
    return (
        <>
            <div className="flex ">

                <div className="  hidden group-hover:block hover:h-4 border-cyan-300 border hover:w-4  rounded-full hover:flex hover:items-center hover:justify-center  hover:border-cyan-300 duration-100 ease-in-out ">
                    <div className=" bg-cyan-300  w-3 h-3 rounded-full hover:w-2   hover:h-2"></div>
                </div>

                <div className=" mx-1 hidden group-hover:block  hover:h-4 border-red-600 border hover:w-4  rounded-full flex justify-center items-center hover:border-red-600 duration-100 ease-in-out ">
                    <div className=" bg-red-600  w-3 h-3 rounded-full hover:w-2   hover:h-2"></div>
                </div>

                <div className=" hidden group-hover:block hover:h-4 border-amber-600 border hover:w-4  rounded-full flex justify-center items-center hover:border-amber-500 duration-100 ease-in-out ">
                    <div className=" bg-amber-600  w-3 h-3 rounded-full hover:w-2   hover:h-2"></div>
                </div>

                <div className=" hidden group-hover:block mx-1  hover:h-4 border-violet-400 border hover:w-4  rounded-full flex justify-center items-center hover:border-violet-400 duration-100 ease-in-out ">
                    <div className=" bg-violet-400  w-3 h-3 rounded-full hover:w-2   hover:h-2"></div>
                </div>
            </div>

            <div className="flex hidden group-hover:flex">
                <img src={StarBg} width={12} alt="123" />
                <img src={StarBg} width={12} alt="123" />
                <img src={StarBg} width={12} alt="123" />
                <img src={StarBg} width={12} alt="123" />
                <img src={StarBorder} width={12} alt="123" />
            </div>
        </>
    )
}

export default CircleAndStar
