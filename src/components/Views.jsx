import React from 'react'
import {FiShare2} from "react-icons/fi"
import love from "../assets/Wishlist Web.png"
import star from "../assets/Group 1711.png"
import "../styles/views.css"

const Views = () => {
    var size=[1,2,3,4,5,6,7,8,9,10,11,12]
  return (
    <section className='w-[1300px] mx-auto mt-10 '>
        <h1 className='text-[#4E3D67] font-[700] text-2xl'>Peoples also viewed</h1><br />
        <main className='grid grid-cols-4'>
            {
                size.map((index)=>(
                    <div className='w-[250px] mb-10'>
                        <div className='views'>
                            <img src={love} alt="" />
                        </div>
                        <div className='flex justify-between text-2xl font-[700] mb-3'>
                            <h1 className='text-[#4E3D67] '>Ladies Tops</h1>
                            <FiShare2 className='text-[#2C86B2]'/>
                        </div>
                        <p className='text-[#4E3D67] font-[500] text-xl'>₹350 onwards</p>

                        <div className='flex gap-3 text-xl my-2'>
                            <img src={star} alt="" />
                            <p className='text-[#4E3D67] font-[400]'>4.2 (50+)</p>
                            <p className='text-[#2C86B2] font-[500]'>Free delivery</p>
                        </div>

                        <button className='text-[#2C86B2] bg-[#CDEEFE] px-4 py-1 text-xl rounded-2xl '>Buy 2 get 10% Off</button>

                    </div>
                ))
            }
        </main>
    </section>
  )
}

export default Views;