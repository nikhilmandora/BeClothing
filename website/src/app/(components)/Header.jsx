import React from 'react'
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GrSearch } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";
import Link from 'next/link';
import "../globals.css";

function Header() {
  return (
    <>
      <div className='w-[100%] m-[auto]'>
        <div className='flex items-center justify-between w-[75%] m-auto relative'>
            <div className='flex pl-4 bg-white h-[90px] w-[73%]'>
              <div className='flex items-center'>
                <Link href="#">
                  <div>
                    <img src='https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/retina-clothing2.png' width={160} className=' m-1'/>
                  </div>
                </Link>
                <div className='ml-6'>
                  <ul className='font-light flex'>
                    <Link href='#' className='h-[60px] flex items-center text-[#747474] hover:text-black hover:border-b-[1px] border-black'>
                      <li className='px-[20px]'>
                        Home
                      </li>
                    </Link>
                    <Link href='#' className='h-[60px] flex items-center text-[#747474] hover:text-black hover:border-b-[1px] border-black'>
                      <li className='px-[20px]'>
                        About us
                      </li>
                    </Link>
                    <Link href='#' className='h-[60px] flex items-center text-[#747474] hover:text-black hover:border-b-[1px] border-black'>
                      <li className='px-[20px]'>
                        Shop
                      </li>
                    </Link>
                    <Link href='#' className='h-[60px] flex items-center text-[#747474] hover:text-black hover:border-b-[1px] border-black'>
                      <li className='px-[20px]'>
                        Contact
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>

            <div className='bg-[#e3e3e3] h-[90px] w-[1%] skew-x-[0deg] skew-y-[-25deg] absolute left-[788px] top-[-2.2px]'></div>

            <div className='bg-[#f5f5f5] h-[90px] w-[26%] flex items-center justify-end pr-2 absolute top-[-4.3px] left-[799px]'>
              <div className='flex items-center h-[100%]'>
                  <div className='relative'>
                    <HiOutlineShoppingBag className='cursor-pointer m-3 p-[2px]' size={27}/>
                    <div className='bg-black absolute top-2 text-xs left-7 text-white font-light px-1 rounded'><span>0</span></div>
                  </div>
                  <div>
                    <GrSearch className=' m-3 p-[3px] cursor-pointer' size={27} />
                  </div>
                  <button className='bg-[#f5f5f5] text-[#747474] hover:bg-[#E2E2E2] h-[40px] p-[8px_15px] font-light flex'>
                    My Account <IoIosArrowForward className='m-1'/>
                  </button>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Header