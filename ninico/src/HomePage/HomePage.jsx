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


const HomePage = () => {
  return (
    <>
      <div className="container mx-auto">
        <TopBar/>
        <Navbar />
        <div className="container flex mx-auto mt-1">
          <div className="">
            <img src={SliderImgONe} alt="" />
          </div>
          <div className="ms-10">
            <div className="relative" >

              <img src={HandmadeImg} alt="" />
              <div className="absolute top-[5px] left-[10px]"  >
                <span>Hand made</span>
                <h2 >New Mordern Stylist Craft </h2>
              </div>
            </div>
            <div className="mt-2">
              <div className="relative"  >
                <img src={PopularImg} alt=""  />
                <div className="absolute top-[10px] left-[10px]" >
                  <span>Popular</span>
                  <h2>Energy with our newest collection</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="height"></div>


        <section className="mb-10 mt-[20px]">
          <div className="">Top Categories</div>
          <div className="flex justify-around">
            <div className="w-32 border ">
              <div className=" bg-slate-200   rounded-full p-10 flex justify-center">
                <img src={Table} alt="123" />
              </div>
              <div className="">
                <span>Driftwood Table Decor</span>
              </div>
            </div>
            
            <div className="border w-32">
              <div className=" bg-slate-200 rounded-full p-10 text-center">
                <img src={FloorDriftwood} alt="123" />
              </div>
              <div className="">
                <span>Floor Driftwood Sculputer</span>
              </div>
            </div>

            <div className="">

              <div className=" bg-slate-200 rounded-full p-10 text-center">
                <img src={ChristmanTree} alt="123" />
              </div>
              <div className="">
                <span>Driftwood Christmas Tree</span>
              </div>
            </div>

            <div className="border w-36 ">
              <div className=" bg-slate-200 w-32 rounded-full p-10 ">
                <img src={BluetoothSpeaker} alt="123" />
              </div>
              <div className="">
                <span>Wooden Bluetooth Speaker </span>
              </div>
            </div>

            <div className="w-32">
              <div className="bg-slate-200  rounded-full p-10 text-center">
                <img src={Receivers} alt="123" className="text-center" />
              </div>
              <div className="">
                <span>Receivers Amplifiers </span>
              </div>
            </div>

            <div className="w-32">
              <div className=" bg-slate-200 rounded-full p-10 text-center">
                <img src={Appetizer} alt="123" />
              </div>
              <div className="">
                <span>Appetizer Plate Set</span>
              </div>
            </div>
          </div>
        </section>


        <div className="h-52 w-52 mb-10 bg-ninico">123</div>

      </div>
    </>
  )
}

export default HomePage
