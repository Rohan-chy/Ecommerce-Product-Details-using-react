import React from 'react'
import {AiFillStar} from "react-icons/ai"
import ex from "../assets/Frame 240211.png"
import vg from "../assets/Frame 240212.png"
import g from "../assets/Frame 240213.png"
import avg from "../assets/Frame 240214.png"
import po from "../assets/Frame 240215.png"

const Reviews = () => {
  return (
    <section className='bg-[#CDEEFE] w-[1300px] mx-auto p-10'>
        <h1 className='text-[#4E3D67] font-[700] text-xl'>Product Rating & Reviews</h1><br />
        <main className='flex justify-between'>
            <div>
                <div className='flex text-[#2C86B2] font-[700] gap-2'>
                <p className='  text-3xl'>4.0 </p>
                <AiFillStar className='text-xl' />
                </div>
                <p className='text-[#4E3D67] font-[500]'>28138 Ratings, <br />4938 Reviews</p>
            </div>
            <div className='text-[#4E3D67] font-[500]'>
                <div className='flex items-center gap-2'>
                    <p className='w-[100px]'>Excellent</p>
                    <img src={ex} alt="" className='h-[10px]'/>
                    <p>1596</p>
                </div>
                <div className='flex items-center gap-2'>
                    <p className='w-[100px]'>Very Good</p>
                    <img src={vg} alt="" className='h-[10px]'/>
                    <p>1596</p>
                </div>
                <div className='flex items-center gap-2'>
                    <p className='w-[100px]'>Good</p>
                    <img src={g} alt="" className='h-[10px]'/>
                    <p>1596</p>
                </div>
                <div className='flex items-center gap-2'>
                    <p className='w-[100px]'>Average</p>
                    <img src={avg} alt="" className='h-[10px]'/>
                    <p>1596</p>
                </div>
                <div className='flex items-center gap-2'>
                    <p className='w-[100px]'>Poor</p>
                    <img src={po} alt="" className='h-[10px]'/>
                    <p>1596</p>
                </div>
                

            </div>
        </main>
    </section>
  )
}

export default Reviews;