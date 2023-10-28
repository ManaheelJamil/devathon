import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BiHide } from "react-icons/bi"
import { FcGoogle } from "react-icons/fc"
const Login = () => {
    return (

        <div className=' lg:flex 2xl:gap-44 xl:gap-32   h-screen '>
            <div className='left-side '>
                {/* <Image src="/ez-rent-logo.png" alt="login-image" width={387} height={200} className='ez-rent-logo' /> */}
                <Image src="/signup.png" alt="login-image" width={527.04} height={498.58} className='ez-rent-image' />
                {/* <p className='left-side-bottom-text'>“Rent with Ease, Anytime, Anywhere”</p> */}
            </div>
            <div className='right-side-main-box'>
                <Image src="/logo-1.png" alt="logo" width={122} height={122} className='lg:hidden block' />
                <div className='right-side-sub-box '>
                    <div className='mx-7 '>
                        <h1 className='2xl:text-[48px] text-[40px] font-semibold text-center'>Login</h1>
                        <div className=' grid md:grid-cols-3 grid-cols-4 items-center w-[100%]   lg:mt-16 mt-8 bg-[#F0F9FF]  2xl:h-[66px]  h-[54px] px-5 rounded-2xl'>
                            <FcGoogle className="2xl:text-3xl text-2xl" />
                            <h1 className='2xl:text-[0.8vw] md:col-span-1 col-span-3  xl:text-[10px] text-[9px] '>&nbsp;&nbsp;Continue with Google</h1>
                            <h1 className='text-[#F0F9FF] md:block hidden'>jh</h1>
                        </div>
                        <div className='flex  items-center 2xl:my-10 my-5'>
                            <hr className='text-[#DCDCDC] border border-1 w-[259px]' />
                            <h1 className='2xl:text-[20px] text-[16px] px-5'>OR</h1>
                            <hr className='text-[#DCDCDC] border border-1 w-[259px]' />
                        </div>
                        <label className='text-start 2xl:text-[20px] text-[16px]'>Email address</label>
                        <div className='2xl:mt-5 mt-3  2xl:rounded-3xl rounded-[17px] flex items-center '>
                            <input type='text' placeholder='example@example.com' className='2xl:text-[18px] text-[14px] 2xl:h-[65px] h-[48px] px-5 focus:border-[#404EED] border-2  2xl:rounded-3xl rounded-[17px]  w-[100%] outline-none' />
                        </div>
                        <div className='flex justify-between  2xl:mt-8 mt-8' >
                            <label className=' 2xl:text-[20px] text-[16px]'>Password</label>
                            <label className=' 2xl:text-[18px] text-[14px] bg-white text-[#404EED]'>
                                <Link href="/forgotPassword">Forgot password?</Link>
                            </label>
                        </div>
                        <div className=' relative 2xl:mt-5 mt-3   flex justify-between  items-center'>
                            <input type='password' className='2xl:h-[66px] h-[46px] focus:border-[#404EED] 2xl:rounded-3xl rounded-[17px] border-2 px-5 outline-none w 2xl:text-[18px] w-[100%] text-[14px]' />
                            <BiHide className="text-xl text-[#404EED] 2xl:text-[28px] lg:text-[14px] absolute right-5    " />
                        </div>
                        <button className='w-full 2xl:mt-6 mt-5 2xl:h-[65px] h-[45px] rounded-full text-center text-white 2xl:text-[20px] text-[14px] bg-[#0F172A]'><Link href={"/homepage"}>Login</Link></button>
                        <p className='2xl:text-[20px] text-[12px] text-center 2xl:mt-10 mt-3'>New User?
                            <Link href={"./Signup"} className='text-[#404EED] 2xl:text-[20px] text-[12px] ml-3'>Create an account</Link></p>
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

export default Login