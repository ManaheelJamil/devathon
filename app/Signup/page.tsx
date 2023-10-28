import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BiHide } from "react-icons/bi"
import { FcGoogle } from "react-icons/fc"
const Signup = () => {
    return (

        <div className=' lg:flex 2xl:gap-52 xl:gap-32   h-screen '>

            {/* left side */}
            <div className='left-side '>
                {/* <Image src="/ez-rent-logo.png" alt="login-image" width={387} height={211} className='ez-rent-logo' /> */}
                <Image src="/login.png" alt="login-image" width={507.04} height={498.58} className='ez-rent-image' />
                {/* <p className='left-side-bottom-text'>“Rent with Ease, Anytime, Anywhere”</p> */}
            </div>

            {/* right side */}

            
            <div className='right-side-main-box'>
            <Image src="/logo-1.png" alt="logo" width={122} height={122} className='lg:hidden block' />

                <div className=' mt-10 right-side-sub-box'>
                    <div className='mx-10'>
                        <h1 className='2xl:text-[48px] text-[36px] font-semibold text-center 2xl:-mt-5 xl:mt-0'>Signup</h1>
                        <div className=' grid md:grid-cols-3 grid-cols-4 items-center w-[100%]   2xl:mt-10 mt-5 bg-[#F0F9FF]  2xl:h-[66px]  h-[50px] px-5 rounded-2xl'>
                            <FcGoogle className="2xl:text-3xl text-2xl"  />
                            <h1 className='2xl:text-[13px] md:col-span-1 col-span-3  xl:text-[10px] text-[9px] '>Continue with Google</h1>
                            <h1 className='text-[#F0F9FF] md:block hidden'>jh</h1>
                        </div>
                        <div className='flex  items-center 2xl:my-10 my-2'>
                            <hr className='text-[#DCDCDC] border border-1 w-[259px]' />
                            <h1 className='2xl:text-[20px] text-[16px] px-5'>OR</h1>
                            <hr className='text-[#DCDCDC] border border-1 w-[259px]' />
                        </div>
                        <label className='text-start 2xl:text-[20px] text-[14px]'>Email address</label>
                        <div className='2xl:mt-3 2xl:mb-6 mb-2 mt-1 2xl:rounded-3xl rounded-[17px] flex items-center  '>
                            <input type='text' placeholder='example@example.com' className='2xl:text-[18px] text-[14px] 2xl:h-[65px] h-[44px] px-5 focus:border-[#404EED] border-2  2xl:rounded-3xl rounded-[17px]  w-[100%] outline-none' />
                        </div>
                        <label className='text-start 2xl:text-[20px] text-[14px]'>User Name</label>
                        <div className='2xl:mt-3 2xl:mb-6 mb-2 mt-1 2xl:rounded-3xl rounded-[17px] flex items-center '>
                            <input type='text' placeholder='example@example.com' className='2xl:text-[18px] text-[14px] 2xl:h-[65px] h-[44px] px-5 focus:border-[#404EED] border-2  2xl:rounded-3xl rounded-[17px]  w-[100%] outline-none' />
                        </div>
                        <label className='text-start 2xl:text-[20px] text-[14px]'>Create Password</label>
                        <div className=' 2xl:my-3 2xl:mb-6 mb-2 mt-1 flex justify-between relative items-center'>
                            <input type='password' className='2xl:h-[66px] h-[44px] focus:border-[#404EED] 2xl:rounded-3xl rounded-[17px] border-2 px-5 outline-none w 2xl:text-[18px] w-[100%] text-[14px]' />
                            <BiHide className="text-3xl text-[#404EED] lg:text-[18px] text-[14px] absolute right-5   " />
                        </div>
                     
                        <button className='w-full 2xl:mt-1 mt-5 2xl:h-[65px] h-[45px] rounded-full text-center text-white 2xl:text-[20px] text-[14px] bg-[#0F172A]'><Link href={"/dashboard"}>Signup</Link></button>
                        <p className='2xl:text-[20px] text-[12px] text-center 2xl:mt-2 mt-2'>Already have an account?
                            <Link href={"#"} className='text-[#404EED] 2xl:text-[20px] text-[12px] ml-3'>Login</Link></p>
                    </div>
                    <div className='bottom-bar'>Developed by
                        <a href='https://mayonity.com/'>Mayonity</a>
                        <hr className='w-36 border mx-auto' />
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Signup