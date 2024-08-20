import "./globals.css";
import Header from "./(components)/Header";
import { IoMdCall } from "react-icons/io";
import { IoIosMailUnread } from "react-icons/io";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import Footer from "./(components)/Footer";

export default function Home() {
  return (
    <>
      {/* <div className="bg-[url('https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-slider-pic1-1.jpg')] w-[100%] h-[100vh] bg-center bg-cover">
        <div className="h-[60px] flex items-center">
          <div className="flex h-[auto] mx-[auto] w-[75%] font-light text-sm text-white tracking-wider">
            <p>Help Desk 24/7</p>
            <div className="flex items-center gap-2 ml-5">
              <IoMdCall />
              <a href="tel:+91-987654321">+91-987654321</a>
            </div>
            <div className="flex items-center gap-2 ml-5">
              <IoIosMailUnread />
              <a href="mailto:noreply@envato.com">noreply@envato.com</a>
            </div>
          </div>
        </div>
        <Header />
        <div className="flex w-[100%] h-[80%]">
          <div className="w-[50%] flex justify-end">
            <div className="w-[75%] flex">
              <div className="w-[20%]">
                <div className="h-[185px]"> </div>
                <div className="text-2xl flex-wrap">
                  <FaArrowLeftLong className="my-4 mx-auto" />
                  <FaArrowRightLong className="my-4 mx-auto" />
                </div>
              </div>
              <div className="w-[80%] p-3">
                <div className="text-3xl font-light mt-[85px]">
                  2020 -------
                </div>
                <div className="text-7xl font-light mt-3">
                  Spring collection
                </div>
                <div className=" text-sm tracking-widest my-9">
                  SPRING SALES | UP TO 50% OFF
                </div>
                <button className="bg-black p-[15px_25px] text-white text-xs rounded-br-3xl hover:bg-white hover:text-black">Our collection</button>
              </div>
            </div>
          </div> 
          <div className="w-[50%] relative">
            <div className="w-[160px] h-[160px] absolute top-[100px] left-[290px]">
              <div className="bg-[url('https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-slider-pic4.png')] w-[100%] h-[100%] bg-cover bg-no-repeat">
              </div>
            </div>
            <div className="w-[230px] h-[320px] absolute top-[210px] left-[395px]">
              <div className="bg-[url('https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-slider-pic3.jpg')] w-[100%] h-[100%] bg-cover font-light text-2xl underline underline-offset-8 text-white p-6 flex items-end">
                Men
              </div>
            </div>
            <div className="w-[230px] h-[320px] absolute top-[275px] left-[140px]">
              <div className="bg-[url('https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-slider-pic2.jpg')] w-[100%] h-[100%] bg-cover font-light text-2xl underline underline-offset-8 text-white p-6 flex items-end">
                Women
              </div>
            </div>
          </div>  
        </div>
      </div> */}
      <Footer/>
    </>
  );
}
