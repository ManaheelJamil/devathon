import React from 'react'
import Image from 'next/image'
import { AiTwotoneStar } from "react-icons/ai"
import Link from 'next/link'
import ReviewData from "../../data/review.json"
const reviews = () => {
    return (
        <div>
            {ReviewData ? ReviewData.map((item) => {
                return (<>
                    <div className='lg:w-[714px] flex justify-between md:mt-20 mt-0 items-center lg:mx-auto mx-5'>
                        <div className='flex items-center gap-3'>
                            <Image alt="icon-image" src="/icon.png" width={45} height={45} />
                            <div>
                                <h1 className='flex font-bold 2xl:text-[14px] text-black gap-2 text-[12px]' >JohnDoe<h1 className='font-normal text-[10px] text-[#8B8B8B]'>(As Lessor)</h1></h1>
                                <p className='text-[10px] text-[#8B8B8B]'>May 20, 2021</p>
                            </div>
                        </div>
                        <div className='flex space-x-1'>
                            <AiTwotoneStar className="text-[#FFC107] text-[10px]" />
                            <AiTwotoneStar className="text-[#FFC107] text-[10px]" />
                            <AiTwotoneStar className="text-[#FFC107] text-[10px]" />
                            <AiTwotoneStar className="text-[#FFC107] text-[10px]" />
                            <AiTwotoneStar className="text-[#FFC107] text-[10px]" />
                        </div>
                    </div>
                    <div className='mt-6 lg:w-[714px] lg:mx-auto mx-5'>{item.review}</div>
                    <div className='lg:w-[712px] lg:mx-auto mx-5 items-center mt-10 rounded-2xl border-2 h-[68px] flex justify-between lg:px-4 px-2 bg-[#F1F5F9]'>
                        <div className='flex items-center gap-3'>
                            <Image src="/Mask group.png" alt="image" width={39.82} height={48.67} />
                            <h1 className='lg:text-lg text-[8px] text-black font-extrabold'>Sony Play Station 5</h1>
                        </div>
                        <p className='lg:text-lg text-[8px]'>10-10-2023 -To- 20-10-2023</p>
                    </div>
                    <hr className='mx-4 my-10 md:hidden block' />

                </>)
            }) : "loading...."}
            <div className="lg:w-[712px] lg:mx-auto mx-5">
                <button className='w-52 text-[13px] rounded-full h-[56px] md:mt-10 mt-5 border-2 text-center'><Link href="#">Show me all 13 reviews</Link></button>
            </div>
        </div>
    )
}

export default reviews