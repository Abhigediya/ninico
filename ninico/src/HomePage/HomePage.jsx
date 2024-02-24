import Navbar from "../Components/Navbar/Navbar"
import TopBar from "../Components/TopBar/TopBar"

// import all  images
import SliderImgONe from '../assets/SliderImgONe.jpeg'
import HandmadeImg from '../assets/HandmadeImg.jpeg'
import PopularImg from '../assets/PopularImg.jpeg'
import Table from '../assets/Table.svg'
import FloorDriftwood from '../assets/FloorDriftwood.svg'
import ChristmanTree from '../assets/ChristmanTree.svg'
import BluetoothSpeaker from '../assets/BluetoothSpeaker.svg'
import Receivers from '../assets/Receivers.svg'
import Appetizer from '../assets/Appetizer.svg'

// import product image
import Basket from '../assets/Basket.svg'
import DoubleArrow from '../assets/DoubleArrow.svg'
import Eyes from '../assets/Eyes.svg'
import Heart from '../assets/Heart.svg'
import StarBorder from '../assets/StarBorder.svg'
import StarBg from '../assets/StarBG.svg'
import TimeImage from '../assets/TimeImage.png'
import BradleyBurgressOne from '../assets/BradleyBurgessOne.jpeg'
import BradleyBurgressTwo from '../assets/BradleyBurgessTwo.jpeg'



const HomePage = () => {
  return (
    <>
      <TopBar />
      <div className="container mx-12">
        <Navbar />
        <div className="container flex mx-auto mt-1">
          <div className="">
            <img src={SliderImgONe} alt="" />
          </div>
          <div className="ms-10">
            <div className="relative" >
              <div className="overflow-hidden rounded-md">
                <div className="hover:scale-105 duration-75 ease-in hover:overflow-hidden  ">
                  <img src={HandmadeImg} alt="" width={300} />
                </div>
              </div>

              <div className="absolute top-[5px] left-[10px]  "  >
                <span className="text-ninico text-lg" >Hand made</span>
                <h2 className="font-medium text-xl pe-14" >New Mordern Stylist Craft </h2>
              </div>
            </div>
            <div className="mt-2">
              <div className="relative"  >
                <div className="overflow-hidden  rounded-md">
                  <div className="hover:scale-105 duration-75 ease-in hover:overflow-hidden  ">
                    <img src={PopularImg} alt="" width={300} className="" />
                  </div>
                </div>
                <div className="absolute top-[10px] left-[10px]" >
                  <span className="text-ninico">Popular</span>
                  <h2 className="font-medium text-xl pe-14 " >Energy with our newest collection</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="height"></div>
        s
        {/* Top Categories  & product section */}

        {/* ctgimg = 6 image it's class created */}
        {/* ctgnum = 6 number it's class created */}
        <section className="mt-10">
          <div className="">
            <span className="text-2xl font-bold ">Top</span>
            <span className="ms-3 text-ninico text-xl border-b-4 border-ninico " >Categories</span>
          </div>

          <div className="mt-10 flex justify-around  ">

            <div className="">

              <div className=" w-36 group">
                <div className="ctgimg">
                  <img src={Table} alt="123" />
                  <div className=" ctgnum   ">20</div>
                </div>
                <div className="text-center">Driftwood Table Deco </div>
              </div>
            </div>

            <div className="border-s border-slate-200 h-48 "></div>

            <div className=" ">
              <div className="w-36 group ">
                <div className="ctgimg">
                  <img src={FloorDriftwood} alt="123" />
                  <div className="  ctgnum  ">12</div>
                </div>
                <div className="top-14 text-center">Floor Driftwood Sculputer</div>
              </div>
            </div>

            <div className="border-s border-slate-200 h-48 "></div>

              <div className="w-36 group">
                <div className="ctgimg">
                  <img src={ChristmanTree} alt="123" />
                  <div className="  ctgnum   ">03</div>
                </div>
                <div className=" text-center">Driftwood Christmas Tree </div>
              </div>

            <div className="border-s border-slate-200 h-48 "></div>

            <div className=" ">
              <div className="w-36 group">
                <div className="ctgimg">
                  <img src={BluetoothSpeaker} alt="123" />
                  <div className=" ctgnum   ">09</div>
                </div>
                <div className=" text-center">Wooden Bluetooth Speaker </div>
              </div>
            </div>

            <div className="border-s  border-slate-200 h-48 "></div>

            <div className=" ">
              <div className="w-36 group">
                <div className="bg-slate-100 relative p-10  rounded-full w-32  mx-auto">
                  <img src={Receivers} alt="123" />
                  <div className="  ctgnum  ">10</div>

                </div>
                <div className=" text-center">Floor Driftwood Sculputer</div>
              </div>
            </div>

            <div className="border-s border-slate-200 h-48 "></div>

            <div className="">
              <div className="w-36 group">
                <div className="ctgimg">
                  <img src={Appetizer} alt="123" />
                  <div className="  ctgnum  ">05</div>

                </div>
                <div className=" text-center">Floor Driftwood Sculputer</div>
              </div>
            </div>

          </div>

        </section>

        <div className=" mt-12 border-b border-slate-200"></div>

        {/* Popular Products  */}

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

          <div className="mt-10 ">
            <div className="  ">
              <div className=" relative group ">

                <img src={BradleyBurgressOne} className=' ' width={250} alt="123" />

                <div className=" absolute top-12 group-hover:visible  group-hover:bg-ninico group-hover:border-red-300 border  ">
                  <img src={Basket} width={30} alt="" />
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam explicabo id pariatur temporibus quibusdam! Assumenda aperiam, unde aliquam, nulla dolorum autem reprehenderit laborum iusto ea sint, illum nobis rem eveniet.
                </div>

              </div>
              <div className="">
                <div className="hover:text-ninico">Bradley Burgess 2 </div>
                <div className="font-bold">$20.00</div>

                <div className="mt-3 flex ">
                  <div className="flex">

                    <div className="  hover:h-4 border-cyan-300 border hover:w-4  rounded-full flex justify-center items-center hover:border-cyan-300 duration-100 ease-in-out ">
                      <div className=" bg-cyan-300  w-3 h-3 rounded-full hover:w-2   hover:h-2"></div>
                    </div>

                    <div className=" mx-1  hover:h-4 border-red-600 border hover:w-4  rounded-full flex justify-center items-center hover:border-red-600 duration-100 ease-in-out ">
                      <div className=" bg-red-600  w-3 h-3 rounded-full hover:w-2   hover:h-2"></div>
                    </div>

                    <div className=" hover:h-4 border-amber-600 border hover:w-4  rounded-full flex justify-center items-center hover:border-amber-500 duration-100 ease-in-out ">
                      <div className=" bg-amber-600  w-3 h-3 rounded-full hover:w-2   hover:h-2"></div>
                    </div>

                    <div className=" mx-1  hover:h-4 border-violet-400 border hover:w-4  rounded-full flex justify-center items-center hover:border-violet-400 duration-100 ease-in-out ">
                      <div className=" bg-violet-400  w-3 h-3 rounded-full hover:w-2   hover:h-2"></div>
                    </div>
                  </div>

                  <div className="flex">
                    <img src={StarBg} width={12} alt="123" />
                    <img src={StarBg} width={12} alt="123" />
                    <img src={StarBg} width={12} alt="123" />
                    <img src={StarBg} width={12} alt="123" />
                    <img src={StarBorder} width={12} alt="123" />
                  </div>


                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-100 flex justify-between mx-auto p-10 mt-10">
          <div className="relative ">
            <img src={TimeImage} alt="" />
            <div className="absolute top-20 right-36 animate-pulse  bg-ninico w-20 h-20 p-3  rounded-full text-center text-white  ">
              <div className="">From</div>
              <div className="text-2xl font-bold  ">$49</div>
            </div>
          </div>
          <div className=" w-6/12 p-1">
            <span className="text-ninico text-xl font-medium">$49.00 <del className="text-slate-400 ">$59.00</del> </span>
            <h1 className="font-bold text-5xl">Pro2 Abstract Folded Pots</h1>
            <div className="mt-3 text-slate-400 text-lg  ">
              Elegant pink origami design three-dimensional view and decoration co-exist. Great for adding a  decorative touchto any room's decor. Wonderful accenet piece for coffee tables or side table or side tables.
            </div>
            <div className="my-10 flex">
              <div className="border-b rounded-full border-4  border-ninico  w-4/5 "></div>
              {/* <div className="border-b rounded-full border-4   "></div> */}
            </div>

            <div className="flex mt-5 justify-between items-center ">
              <div className="flex  ">
                <div className="py-3 px-4  bg-white text-3xl font-bold text-center">
                  <div className="">-66</div>
                  <div className=" text-base font-normal">Days</div>
                </div>
                <div className="p-3 px-4 mx-3  bg-white text-3xl font-bold text-center">
                  <div className="">-12</div>
                  <div className=" text-base font-normal">Days</div>
                </div>
                <div className="p-3 px-4  bg-white text-3xl font-bold text-center">
                  <div className="">-39</div>
                  <div className=" text-base font-normal">Days</div>
                </div>
                <div className="p-3 px-4 mx-3  bg-white text-3xl font-bold text-center">
                  <div className="">-01</div>
                  <div className=" text-base font-normal">Days</div>
                </div>
              </div>
              <div className="w-32 text-slate-400">
                Remains until the end of the offer
              </div>
            </div>
          </div>

        </section>

        <div className="mb-96"></div>
        
      </div>

    </>
  )
}

export default HomePage
