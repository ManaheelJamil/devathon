"use client"
import React from 'react'
import { Navbar } from '../component/navbar'
import Footer from '../component/footer'
import Image from 'next/image'
import { MdVerified } from "react-icons/md"
import { useState } from "react";
import { AiTwotoneStar } from "react-icons/ai"
import { BsChevronDown } from "react-icons/bs"
import Review from "../component/reviews"
const page = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [activeTab, setActiveTab] = useState("a");

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };
    return (
        <div>
            <Navbar />

            <div className="2xl:w-[1000px] xl:w-[800px] lg:w-[700px] md:w-[600px] w-full mx-auto md:mt-44 mt-24 xl:text-sm text-[11px] font-bold md:font-medium  text-gray-500 ">
                <div className="flex  md:justify-between justify-around -mb-px">
                    <button
                        className={`className="inline-block text-blue-600 border-b-2 border-blue-600 rounded-t-xl active dark:text-blue-500 dark:border-blue-500" aria-current="page"
          `}
                        onClick={() => handleTabClick("a")}
                    >
                        Account info
                    </button>
                    <button
                        className={`className="inline-block  border-b-2 border-transparent rounded-t-xl hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" `}
                        onClick={() => handleTabClick("b")}
                    >
                        My reviews                    </button>
                    <button
                        className={`className="inline-block  border-b-2 border-transparent rounded-t-xl hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" `}
                        onClick={() => handleTabClick("c")}
                    >
                        Change password                    </button>
                </div>
                <hr className='mx-4 my-6 md:hidden block' />
                <div className="bg-white rounded-b-lg">
                    {activeTab === "a" &&
                        <p>
                            <div id="account" className='2xl:w-[1000px]  xl:w-[800px] lg:w-[710px] md:w-[600px] md:mx-auto mx-6 mt-14  font-bold'>
                                <h1 className='2xl:text-[36px] xl:text-[25px] text-[20px] text-black my-5'>Account information</h1>
                                <div className='md:flex 2xl:gap-20 gap-10 md:mt-10 mt-3'>
                                    <div className='2xl:w-36 md:w-28 w-28'>
                                        <Image src="/profile.png" alt="icon" width={150} height={150} className='2xl:w-[150px] 2xl:h-[150px] xl:w-[100px] xl:h-[100px] lg:w-[80px] lg:h-[80px] md:w-[80px] md:h-[80px] h-[100px] w-[100px] ' />
                                        <p className='flex items-center gap-2 justify-center text-[#787878] mt-2'>Verified<MdVerified className="text-[#404EED]" /></p>
                                    </div>
                                    <div className='xl:w-[650px] lg:w-[600px] md:w-[550px] md:mt-0 mt-10  text-[#313131]'>
                                        <div>
                                            <label className='2xl:text-[20px] md:font-normal xl:text-[16px] text-[14px]'>Full name</label>
                                            <div className=' items-center mt-3 flex border-2 border-[#DEDEDE] 2xl:rounded-[25px] md:rounded-[20px] rounded-[13px] 2xl:h-[66px] h-[40px] xl:h-[57px]'>
                                                <div className='2xl:w-[85px] xl:w-[75px] w-[60px]  2xl:h-[63px] xl:h-[50px] h-[36px] 2xl:rounded-l-[25px] md:rounded-l-[20px] rounded-l-[13px] flex items-center justify-center bg-[#F8F8F8]'>
                                                    <Image src="/user.png" alt='user' width={30} height={30} className='xl:w-[30px] xl:h-[30px] w-[25px] h-[25px]' />
                                                </div>
                                                <input type="text" placeholder='your name' className=' 2xl:h-[60px] xl:h-[50px] h-[35px] w-full 2xl:px-7 px-5 2xl:text-[18px] xl:text-[14px]  2xl:rounded-r-[25px]  md:rounded-r-[20px] rounded-r-[10px]' />

                                            </div>
                                        </div>
                                        <div className='2xl:mt-10 mt-6'>
                                            <label className='2xl:text-[20px] md:font-normal xl:text-[16px] text-[14px]'>Email</label>
                                            <div className=' items-center mt-3 flex border-2 border-[#DEDEDE] 2xl:rounded-[25px] md:rounded-[20px] rounded-[13px] 2xl:h-[66px] h-[40px] xl:h-[57px]'>
                                                <div className='2xl:w-[85px] xl:w-[75px] w-[60px]  2xl:h-[63px] xl:h-[50px] h-[35px] 2xl:rounded-l-[25px] md:rounded-l-[20px] rounded-l-[13px] flex items-center justify-center bg-[#F8F8F8]'>
                                                    <Image src="/sms.png" alt='user' width={30} height={30} className='xl:w-[30px] xl:h-[30px] w-[20px] h-[20px]' />
                                                </div>
                                                <input type="email" placeholder='example@example.com' className=' 2xl:h-[64px] xl:h-[50px] h-[35px] w-full 2xl:px-7 px-5 2xl:text-[18px] xl:text-[14px]  2xl:rounded-r-[25px]  md:rounded-r-[20px] rounded-r-[10px]' />

                                            </div>
                                        </div>
                                        <div className='2xl:mt-10 mt-6'>
                                            <label className='2xl:text-[20px] md:font-normal xl:text-[16px] text-[14px]'>Date of birth</label>
                                            <div className=' items-center mt-3 flex border-2 border-[#DEDEDE] 2xl:rounded-[25px] md:rounded-[20px] rounded-[13px] 2xl:h-[66px] h-[40px] xl:h-[57px]'>
                                                <div className='2xl:w-[85px] xl:w-[75px] w-[60px]  2xl:h-[63px] xl:h-[50px] h-[36px] 2xl:rounded-l-[25px] md:rounded-l-[20px] rounded-l-[13px] flex items-center justify-center bg-[#F8F8F8]'>
                                                    <Image src="/calendar.png" alt='user' width={30} height={30} className='xl:w-[30px] xl:h-[30px] w-[20px] h-[20px]' />
                                                </div>
                                                <input type="datetime-local" className=' 2xl:h-[64px] xl:h-[50px] h-[35px] w-full 2xl:px-7 px-5 2xl:text-[18px] xl:text-[14px]  2xl:rounded-r-[25px]  md:rounded-r-[20px] rounded-r-[10px]' />

                                            </div>
                                        </div>
                                        <div className='2xl:mt-10 mt-6'>
                                            <label className='2xl:text-[20px] md:font-normal xl:text-[16px] text-[14px]'>Address</label>
                                            <div className=' items-center mt-3 flex border-2 border-[#DEDEDE] 2xl:rounded-[25px] md:rounded-[20px] rounded-[13px] 2xl:h-[66px] h-[40px] xl:h-[57px]'>
                                                <div className='2xl:w-[85px] xl:w-[75px] w-[60px]  2xl:h-[63px] xl:h-[50px] h-[35px] 2xl:rounded-l-[25px] md:rounded-l-[20px] rounded-l-[13px] flex items-center justify-center bg-[#F8F8F8]'>
                                                    <Image src="/location.png" alt='user' width={30} height={30} className='xl:w-[30px] xl:h-[30px] w-[20px] h-[20px]' />
                                                </div>
                                                <input type="text" placeholder='address.....' className=' 2xl:h-[64px] xl:h-[50px] h-[35px] w-full 2xl:px-7 px-5 2xl:text-[18px] xl:text-[14px]  2xl:rounded-r-[25px]  md:rounded-r-[20px] rounded-r-[10px]' />

                                            </div>
                                        </div>
                                        <div className='2xl:mt-10 mt-6'>
                                            <label className='2xl:text-[20px] md:font-normal xl:text-[16px] text-[14px]'>Gender</label>
                                            <div className=' items-center  flex gap-16  h-[66px]'>
                                                <div className='flex items-center gap-2'><input type="radio" className='2xl:h-[30px] 2xl:w-[30px] xl:w-[20px] xl:h-[20px]  px-7 text-[18px] rounded-r-[25px]' />Male </div>
                                                <div className='flex items-center gap-2'><input type="radio" className='2xl:h-[30px] 2xl:w-[30px] xl:w-[20px] xl:h-[20px]  px-7 text-[18px] rounded-r-[25px]' />Female </div>

                                            </div>
                                        </div>
                                        <div className='2xl:mt-10 xl:mt-6 lg:mt-6 mt-2'>
                                            <label className='2xl:text-[20px] md:font-normal xl:text-[16px] text-[14px]'>Phone number</label>
                                            <div className=' items-center mt-3 flex border-2 border-[#DEDEDE] 2xl:rounded-[25px] md:rounded-[20px] rounded-[13px] 2xl:h-[66px] h-[40px] xl:h-[57px]'>
                                                <div className='2xl:w-[85px] xl:w-[75px] w-[60px]  2xl:h-[62px] xl:h-[50px] h-[36px] 2xl:rounded-l-[25px] md:rounded-l-[20px] rounded-l-[13px] flex items-center justify-center bg-[#F8F8F8]'>
                                                    <Image src="/call-calling.png" alt='user' width={25} height={25} className='xl:w-[30px] xl:h-[30px] w-[20px] h-[20px]' />
                                                </div>
                                                <input type="number" placeholder="+65 123 456 78" className=' 2xl:h-[64px] xl:h-[50px] h-[35px] w-full 2xl:px-7 px-5 2xl:text-[18px] xl:text-[14px]  2xl:rounded-r-[25px]  md:rounded-r-[20px] rounded-r-[10px]' />

                                            </div>
                                        </div>
                                        <div className='2xl:mt-10 mt-6'>
                                            <label className='2xl:text-[20px] md:font-normal xl:text-[16px] text-[14px]'>About you</label>
                                            <div className=' w-full md:h-[175px] h-[100px] mt-3  border-2 border-[#DEDEDE] 2xl:rounded-[25px] md:rounded-[20px] rounded-[13px]  text-[18px]  '>
                                                <textarea placeholder="...." className='w-full md:h-[170px] h-[95px]  px-7 rounded-[25px]  text-[18px] ' />
                                            </div>
                                        </div>
                                        <button className='md:w-52 w-32 2xl:h-16 h-12 2xl:mt-16 mt-12 md:text-[14px] text-[11px] rounded-full text-center bg-[#111827] text-white'>Update account</button>
                                    </div>
                                </div>
                            </div>
                        </p>}
                    {activeTab === "b" &&
                        <p>
                            <div className='flex justify-between mx-5 md:mt-10 mt-0 mb-5'>
                                <div className='flex items-center lg:space-x-1'>
                                    <h1 className='2xl:text-[12px] text-[10px] text-[#22C55E]'>4.97</h1>
                                    <AiTwotoneStar className="text-[#FFC107] text-[10px]" />
                                    <AiTwotoneStar className="text-[#FFC107] text-[10px]" />
                                    <AiTwotoneStar className="text-[#FFC107] text-[10px]" />
                                    <AiTwotoneStar className="text-[#FFC107] text-[10px]" />
                                    <AiTwotoneStar className="text-[#FFC107] text-[10px]" />

                                    <h1 className='2xl:text-[12px] text-[10px] text-[#787878]'>(128 Reviews)</h1>
                                </div>
                                <div className='lg:w-32 w-24 flex justify-evenly items-center py-2 rounded-full border-2'>
                                    <Image src="/filter.png" alt="image" width="16" height="16" />
                                    <p>Sort by</p>
                                    <BsChevronDown />
                                </div>
                            </div>
                            <hr className='mb-20'/>
                           <Review/>
                        </p>}
                    {activeTab === "c" &&
                        <p>
                            <div className='md:w-[600px] md:mx-0 mx-5 '>
                                <h1 className='2xl:text-[32px] xl:text-[25px] font-extrabold text-[20px] text-black my-5 mt-16 mb-20'>Update your password</h1>
                                <div>
                                    <label className='2xl:text-[20px] md:font-normal text-black xl:text-[16px] text-[14px]'>Current password</label>
                                    <div className=' items-center mt-3 flex border-2 border-[#DEDEDE] 2xl:rounded-[25px] md:rounded-[20px] rounded-[13px] 2xl:h-[55px] h-[40px] xl:h-[57px]'>
                                      
                                        <input type="password" className=' 2xl:h-[50px] xl:h-[50px] h-[30px] w-full 2xl:px-7 px-5 2xl:text-[18px] xl:text-[14px]  2xl:rounded-[25px]  rounded-[25px] ' />

                                    </div>
                                </div>
                                <div className='2xl:mt-10 mt-6'>
                                    <label className='2xl:text-[20px] md:font-normal text-black xl:text-[16px] text-[14px]'>New password</label>
                                    <div className=' items-center mt-3 flex border-2 border-[#DEDEDE] 2xl:rounded-[25px] md:rounded-[20px] rounded-[13px] 2xl:h-[55px] h-[40px] xl:h-[57px]'>
                                       
                                        <input type="password"  className=' 2xl:h-[50px] xl:h-[50px] h-[30px] w-full 2xl:px-7 px-5 2xl:text-[18px] xl:text-[14px]  2xl:rounded-[25px]  rounded-[25px] ' />

                                    </div>
                                </div>
                                <div className='2xl:mt-10 mt-6'>
                                    <label className='2xl:text-[20px] md:font-normal text-black xl:text-[16px] text-[14px]'>Confirm password</label>
                                    <div className=' items-center mt-3 flex border-2 border-[#DEDEDE] 2xl:rounded-[25px] md:rounded-[20px] rounded-[13px] 2xl:h-[55px] h-[40px] xl:h-[57px]'>
                                       
                                        <input type="password"  className=' 2xl:h-[50px] xl:h-[50px] h-[30px] w-full 2xl:px-7 px-5 2xl:text-[18px] xl:text-[14px]  2xl:rounded-[25px]  rounded-[25px] ' />

                                    </div>
                                </div>
                                <button className='md:w-52 w-32 2xl:h-16 h-12 2xl:mt-16 mt-12 md:text-[14px] text-[11px] rounded-full text-center bg-[#111827] text-white'>Update password</button>
                            </div>
                        </p>}
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default page