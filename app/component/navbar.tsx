"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState, useEffect } from 'react';

import { AiOutlineHeart } from "react-icons/ai"
import { FiMessageSquare } from "react-icons/fi"
import { BsPersonSquare } from "react-icons/bs"
import { AiOutlineMenu } from "react-icons/ai"
import { RxCross2 } from "react-icons/rx"
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false)
  const toggleDropdown = () => {
    setOpen(!open);
};
  const toggleToOpen = () => {
    setIsOpen(true);
  };

  const toggleToClose = () => {
    setIsOpen(false);
  };

  return (
    <>

      <div className='navbar text-[#313131]  z-10 border-y-[#CACACA] 2xl:h-[88px] h-[66px]'>

        {/* menu bar icon */}


        <div className="lg:hidden block" onClick={toggleToOpen}>
          <AiOutlineMenu className="w-[28px] h-[40px]  " />
        </div>


        {/* desktop-navbar */}


        <div>
          <Image src="/logo.png" width={174} height={30} alt="image-logo" className='w-[102px] md:ml-0 ml-10 h-[102px] 2xl:w-[174px] 2xl:h-[30px] ' />
        </div>
        <div className='flex items-center space-x-10 xl:text-[14px] 2xl:text-[16px]'>
          <Link href="/homepage" className='lg:block hidden '>Home</Link>
          <Link href="#" className='lg:block hidden '>About Us </Link>
          <Link href="/product" className='lg:block hidden '>Product</Link>
          <Link href="#" className='lg:block hidden '>Contact Us</Link>
          <Link href="#" className='lg:block hidden'>FAQ</Link>
        </div>
        <div className='flex items-center  2xl:space-x-10 space-x-6'>
          <Image src="/heart.png" alt="image" width={24} height={24} className='2xl:text-2xl xl:text-md text-lg'/>
          <Image src="/message-2.png" alt="image" width={24} height={24} className='2xl:text-2xl xl:text-md text-lg'/>
          <Image src="/user-square.png" alt="image" width={24} height={24} onClick={toggleDropdown}  className='2xl:text-2xl xl:text-md text-lg'/>

          
          {/* <AiOutlineHeart className="2xl:text-2xl xl:text-md text-lg" />
          <FiMessageSquare className="2xl:text-2xl xl:text-md text-lg" />
          <BsPersonSquare className="2xl:text-2xl xl:text-md text-lg" onClick={toggleDropdown} /> */}
        </div>
        {open && (
        <div className=' w-[232px] p-6 h-[385px] rounded-[24px] absolute top-10  right-5  flex flex-col justify-end bg-white box-shadow'>
          <div className='flex  gap-5 items-center'>
           <Link href="/account"><Image src="/icon.png" alt="icon" width={55} height={55} /></Link> 
            <div>
              <h1 className='font-bold text-[16px]'>JohnDoe</h1>
              <p className='text-[12px]'>Yishun, SG</p>
            </div>
          </div>
          <hr className='border border-[rgb(139,139,139)] mt-6 '/>
          <div className='flex gap-5 items-center mt-5'>
          <Image src="/icon-1.png" alt="icon" width={20} height={20} />
          <p className='text-[16px]'>My Listing</p>
          </div>
          <div  className='flex gap-5 items-center mt-5'>
          <Image src="/dollar-circle.png" alt="icon" width={24} height={24} />
          <p className='text-[16px]'>My Earnings</p>
          </div>
          <div  className='flex gap-5 items-center mt-5'>
          <Image src="/receipt-item.png" alt="icon" width={24} height={24} />
          <p className='text-[16px]'>My Rent</p>
          </div>
          <div  className='flex gap-5 items-center mt-5'>
          <Image src="/repeat-circle.png" alt="icon" width={24} height={24} />
          <p className='text-[16px]'>My Borrow</p>
          </div>
          <hr className='border border-[rgb(139,139,139)] my-7 '/>
          <div  className='flex gap-5 items-center'>
          <Image src="/export.png" alt="icon" width={20} height={20} />
          <p className='text-[16px]'>Log out</p>
          </div>
        </div>)}
        {/* mobile navbar */}


        {isOpen && (
          <div className='mobile-navbar h-[926px] top-[1px]  w-[100%] rounded-[10px]'>
            <div className='w-full px-[20px] flex justify-end' onClick={toggleToClose}>
              <RxCross2 className="text-2xl mt-10" />
            </div>

            <h1 className='font-semibold text-[40px] px-[20px]'>Ez Rent</h1>
            <p className='text-[12px] px-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis consectetur adipiscing.</p>
            <hr className='px-20 my-7 mx-[20px]' />
            <div className='text-black px-[20px] flex text-[16px] space-y-3 flex-col'>
              <Link href="/homepage" >Home</Link>
              <Link href="#" >About Us </Link>
              <Link href="/product" >Product</Link>
              <Link href="#" >Contact Us</Link>
              <Link href="#" >FAQ</Link>
            </div>
            <hr className='mt-10 mx-[20px]' />
            <div className='bg-[#404EED] text-center py-2 text-white mt-[456px] rounded-b-[40px]'>Developed by
              <a href='https://mayonity.com/'>Mayonity</a>
              <hr className='w-44 border-2 mx-auto' />
            </div>

          </div>
        )}

      </div>


    </>
  )
}
