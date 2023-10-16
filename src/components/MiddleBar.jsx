import React from 'react'
import person from "../assets/person.png"
import box from "../assets/Group 705.png"
import love from "../assets/Vector (1).png"

const MiddleBar = () => {
  return (
    <header className=' mx-4 flex justify-between items-center bg-[#CDEEFE]'>
        <div className='flex items-center gap-10 text-xl font-[700]'>
            <p className='bg-[#2C86B2] text-white  p-2'>Women</p>
            <p className='text-[#4E3D67]'>Men</p>
            <p className='text-[#4E3D67]'>Kids</p>
            <p className='text-[#4E3D67]'>Beauty</p>
            <p className='text-[#2C86B2] text-3xl roboto italic ml-5'>ZIL Fashion</p>
        </div>

        <div className='flex gap-[50px] pr-2'>
            <img src={person} alt="" />
            <img src={box} alt="" />
            <img src={love} alt="" />
        </div>
    </header>
  )
}

export default MiddleBar;