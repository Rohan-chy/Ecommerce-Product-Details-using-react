import React from 'react'
import {BiSearchAlt2} from "react-icons/bi"

const ThirdBar = () => {
  return (
    <header className='flex justify-between p-5  shadow-xl'>
        <div className='flex gap-10 text-[#4E3D67] font-[500] text-xl'>
            <p>Sale</p>
            <p>New In</p>
            <p>Clothing</p>
            <p>Dresses</p>
            <p>Tops</p>
        </div>
        <div className='relative '>
            <BiSearchAlt2 className='absolute text-2xl left-2 top-2 '/>
            <input type="text" placeholder='Search for products...' className='w-[300px] border border-gray-400 pl-10 py-2 outline-none rounded-md '/>
        </div>
    </header>
  )
}

export default ThirdBar;