"use client"
import React from 'react'
import { Navbar } from '../component/navbar'
import { RxDashboard } from "react-icons/rx"
import { BiLogoJquery } from "react-icons/bi"
import { BsPerson } from "react-icons/bs"
import { CgBorderTop } from "react-icons/cg"
import { SiStaffbase } from "react-icons/si"
import { AiOutlineSetting } from "react-icons/ai"
import { TbRestore } from "react-icons/tb"
import { SiRotaryinternational } from "react-icons/si"
import { SiPowerpages } from "react-icons/si"
import { BiLogOut } from "react-icons/bi"
import { IoLayersSharp } from "react-icons/io5"
import { FiShoppingCart } from "react-icons/fi"
import { GiRecycle } from "react-icons/gi"
import { MdOutlineDone } from "react-icons/md"
import { GiProcessor } from "react-icons/gi"
import Chat from "../component/chat"
import Intercome from "../component/intercome"
import { BsFillBellFill } from "react-icons/bs"
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react';
import { BsFillPersonFill } from "react-icons/bs"
const page = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(false)
    const toggleDropdown = () => {
        setOpen(!open);
    };
    return (
        <>
            <Navbar />
            <div className='flex'>

                <div className='mt-32 px-10   space-y-7 w-80 '>
                    <div className='flex gap-3 items-center'>
                        <RxDashboard className="text-3xl" />
                        <h1 className='text-xl'>Dashboard</h1>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <BiLogoJquery className="text-3xl" />
                        <h1 className='text-xl'>Cattlog</h1>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <BsPerson className="text-3xl" />
                        <h1 className='text-xl'>Customers</h1>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <CgBorderTop className="text-3xl" />
                        <h1 className='text-xl'>Order</h1>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <SiStaffbase className="text-3xl" />
                        <h1 className='text-xl'>Our Staff</h1>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <AiOutlineSetting className="text-3xl" />
                        <h1 className='text-xl'>Setting</h1>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <SiRotaryinternational className="text-3xl" />
                        <h1 className='text-xl'>International</h1>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <TbRestore className="text-3xl" />
                        <h1 className='text-xl'>Online Store</h1>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <SiPowerpages className="text-3xl" />
                        <h1 className='text-xl'>Pages</h1>
                    </div>
                    <button className='py-4 w-full px-4 items-center gap-5 text-xl rounded-xl bg-blue-600 flex'><BiLogOut />Logout</button>
                </div>
                <div className=' w-full mt-20 bg-gray-100  mb-10'>
                    <div className='bg-white py-7 w-full flex justify-end gap-10 pr-20 '>
                        <BsFillBellFill className="text-3xl" onClick={toggleDropdown} />
                        <BsFillPersonFill className="text-3xl" />
                    </div>
                    {open && (
                        <div className=' w-[332px] p-6 h-[385px] rounded-[24px] absolute top-32  right-5  flex flex-col justify-end bg-white box-shadow'>
                            
                          
                            <div className='flex gap-5 items-center mt-5'>
                                <Image src="/icon-1.png" alt="icon" width={20} height={20} />
                                <p className='text-[16px]'>New Notification from emili</p>
                            </div>
                            <div className='flex gap-5 items-center mt-5'>
                                <Image src="/dollar-circle.png" alt="icon" width={24} height={24} />
                                <p className='text-[16px]'>New Notification from john</p>
                            </div>
                            <div className='flex gap-5 items-center mt-5'>
                                <Image src="/receipt-item.png" alt="icon" width={24} height={24} />
                                <p className='text-[16px]'>New Notification from user</p>
                            </div>
                            <div className='flex gap-5 items-center mt-5'>
                                <Image src="/repeat-circle.png" alt="icon" width={24} height={24} />
                                <p className='text-[16px]'>My Borrow</p>
                            </div>
                            <hr className='border border-[rgb(139,139,139)] my-7 ' />
                            <div className='flex gap-5 items-center'>
                                <Image src="/export.png" alt="icon" width={20} height={20} />
                                <p className='text-[16px]'>Log out</p>
                            </div>
                        </div>)}
                    <h1 className='text-3xl ml-10 pt-10 mb-7 font-bold'>Dashboard Overview
                    </h1>
                    <div className=' flex justify-evenly'>
                        <div className='rounded-xl w-64  space-y-3 py-10  text-white bg-green-500 text-center justify-center '>
                            <IoLayersSharp className="text-4xl mx-auto" />
                            <h1 className='text-xl font-bold'>Today Orders</h1>
                            <h1 className='text-2xl font-extrabold'>$0.00</h1>
                            <div className='flex justify-center gap-4 '>
                                <div>
                                    <p>Cash :</p>
                                    <p>$0.00</p>
                                </div>
                                <div>
                                    <p>Card :</p>
                                    <p>$0.00</p>
                                </div>
                                <div>
                                    <p>Credit :</p>
                                    <p>$0.00</p>
                                </div>
                            </div>
                        </div>
                        <div className='rounded-xl w-64  space-y-3 py-10  text-white bg-orange-400 text-center justify-center '>
                            <IoLayersSharp className="text-4xl mx-auto" />
                            <h1 className='text-xl font-bold'>Yesterday Orders

                            </h1>
                            <h1 className='text-2xl font-extrabold'>$7007.21

                            </h1>
                            <div className='flex justify-center gap-4 '>
                                <div>
                                    <p>Cash :</p>
                                    <p>$0.00</p>
                                </div>
                                <div>
                                    <p>Card :</p>
                                    <p>$0.00</p>
                                </div>
                                <div>
                                    <p>Credit :</p>
                                    <p>$0.00</p>
                                </div>
                            </div>
                        </div>
                        <div className='rounded-xl w-64  space-y-3 py-10  text-white bg-blue-300 text-center justify-center '>
                            <IoLayersSharp className="text-4xl mx-auto" />
                            <h1 className='text-xl font-bold'>This Month</h1>
                            <h1 className='text-2xl font-extrabold'>$151424.74</h1>

                        </div>
                        <div className='rounded-xl w-64  space-y-3 py-10  text-white bg-blue-900 text-center justify-center '>
                            <IoLayersSharp className="text-4xl mx-auto" />
                            <h1 className='text-xl font-bold'>Last Month</h1>
                            <h1 className='text-2xl font-extrabold'>$37324.16</h1>

                        </div>
                        <div className='rounded-xl w-64  space-y-3 py-10  text-white bg-green-900 text-center justify-center '>
                            <IoLayersSharp className="text-4xl mx-auto" />
                            <h1 className='text-xl font-bold'>All-Time Sales</h1>
                            <h1 className='text-2xl font-extrabold'>$413927.79</h1>
                        </div>
                    </div>
                    <div className='flex justify-around mb-20 mt-10'>
                        <div className=' flex rounded-xl px-10 gap-5 items-center border-2 bg-white w-80 py-5'>
                            <div className='w-16 h-16 flex items-center justify-center rounded-full bg-blue-100'><FiShoppingCart className='text-3xl' /></div>
                            <div>
                                <h1 className='text-xl font-bold'>Total Orders</h1>
                                <p>476</p>
                            </div>
                        </div>
                        <div className=' flex rounded-xl px-10 gap-5 items-center border-2 bg-white w-80 py-5'>
                            <div className='w-24 h-16 flex items-center justify-center rounded-full bg-red-100'><GiRecycle className='text-3xl' /></div>
                            <div>
                                <h1 className='text-lg font-bold'>Orders Pending (82656.16)</h1>
                                <p>476</p>
                            </div>
                        </div>
                        <div className=' flex rounded-xl px-10 gap-5 items-center border-2 bg-white w-80 py-5'>
                            <div className='w-16 h-16 flex items-center justify-center rounded-full bg-blue-500'><GiProcessor className='text-3xl' /></div>
                            <div>
                                <h1 className='text-lg font-bold'>Orders Processing
                                </h1>
                                <p>476</p>
                            </div>
                        </div>
                        <div className=' flex rounded-xl px-10 gap-5 items-center border-2 bg-white w-80 py-5'>
                            <div className='w-16 h-16 flex items-center justify-center rounded-full bg-pink-100'><MdOutlineDone className='text-3xl' /></div>
                            <div>
                                <h1 className='text-xl font-bold'>Orders Delivered
                                </h1>
                                <p>476</p>
                            </div>
                        </div>
                    </div>
                    <Chat />
                    <Intercome />
                    {/* <Piechart/> */}
                </div>
            </div>

        </>
    )
}

export default page