import React from 'react'
import {MdOutlineMailOutline} from "react-icons/md"
import {PiPhoneCallBold} from "react-icons/pi"
const Footer = () => {
    return (
        <div>

            <div className=' w-[80%] md:mx-auto mx-5 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 md:gap-20 gap-2 mt-60'>
                <div className='col-span-2'>
                    <h1 className='text-[40px] font-bold'>Ez Rent</h1>
                    <p className='md:w-96 text-[14px] mt-5'>Yorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Etiam eu turpis
                        consectetur adipiscing.</p>
                </div>
                <div>
                    <h1 className=' mt-3 text-[16px]'>Products</h1>
                    <ul className='space-y-2 mt-4 text-[14px]'>
                        <li>All products</li>
                        <li>All categories</li>
                        <li>Trending products</li>
                        <li>New arrivals</li>
                    </ul>
                </div>
                <div>
                <h1 className='mt-3 text-[16px]'>Important links </h1>
                    <ul className='space-y-2 mt-4 text-[14px]'>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Terms and Conditions</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div>
                    <h1 className='mt-2 text-[40px]'>Contact</h1>
                    <div className='flex items-center gap-2 '>
                        <MdOutlineMailOutline className="text-lg"/>
                        <p className='text-[12px]'>ezRent@gmail.com</p>
                    </div>
                    <div className='flex gap-2 mt-2 items-center'>
                        <PiPhoneCallBold className="text-lg"/>
                        <p className='text-[13px]'>123 - 456 - 789 -0</p>
                    </div>
                </div>
            </div>
            <div className='bg-[#404EED] text-[15px] text-center py-2 text-white mt-20'>Developed by <a href='https://mayonity.com/'>Mayonity</a></div>
        </div>
    )
}

export default Footer