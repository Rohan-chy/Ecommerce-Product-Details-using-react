import React from 'react'
// import fullImg from "../assets/image 46.png"
import back from '../assets/image 47.png'
import front from "../assets/image 49.png"
import pose from "../assets/image 50.png"
import half from "../assets/image 51 (1).png"
import side from "../assets/image 48.png"
import love from "../assets/Wishlist Web.png"
import {RiShoppingBag3Line} from "react-icons/ri"
import {AiOutlineStar} from "react-icons/ai"
import {FiShare2} from "react-icons/fi"
import "../styles/background.css"

const Details = () => {
  return (
    <section className='w-full flex justify-between p-10'>
        <main  className='w-[60%]'>
            <div className='flex gap-2'>
            <div className='flex flex-col gap-2'>
                <img src={side} alt="" />
                <img src={back} alt="" />
                <img src={front} alt="" />
                <img src={pose} alt="" />
                <img src={half} alt="" />
    
            </div>
            {/* <img src={fullImg} alt="" /> */}
            <div >
            <div className='details'>
                <img src={love} alt="" />
            </div><br />
            <button className='bg-[#2C86B2] w-[550px]  text-white p-3  rounded-md font-[700] mb-5 flex justify-center items-center gap-2'>
                <RiShoppingBag3Line className='text-2xl'/>Add to bag</button><br />
            <button className='p-3 w-[550px] border border-[#4E3D67] rounded-md font-[700]'>Customize</button>

            </div>
            </div>

                 </main>
        <main>
            <div className='font-[700] '>
                <p className='text-[#776B8A]'>Deep-V Neckline Wide Band Waist Top</p>

                <div className='flex gap-3 my-2'>
                <p className='text-[#4E3D67] text-xl'>₹652.00</p>
                <p className='text-[#776B8A] text-lg'>₹800.00</p>
                <hr className=' w-[70px] ml-[-81px] mt-[14px] border border-[#776B8A] '/>
                <p className='text-[green]'>18% 0ff</p>
                </div>

               {/* rating */}
               <div className='flex gap-2'>
               <div className='flex items-center bg-[green] w-[60px] p-1 rounded-2xl text-white font-[700]'>
                    <AiOutlineStar className=' text-xl'/>
                    <p>4.2</p>
                </div>
                
                    <p className='text-[#776B8A]'>500+ Ratings, 240 Reviews</p>
                
               </div>
            </div>

            {/* size */}
            <div className='my-5'>
                <h1 className='text-[#4E3D67] font-[700] text-xl'>Select Size*</h1><br />
                <button className='bg-[#CDEEFE] px-3 py-1 rounded-2xl mr-2'>XS</button>
                <button className='bg-[#CDEEFE] px-3 py-1 rounded-2xl mr-2'>S</button>
                <button className='bg-[#CDEEFE] px-3 py-1 rounded-2xl mr-2'>M</button>
                <button className='bg-[#CDEEFE] px-3 py-1 rounded-2xl mr-2'>XL</button>
                <button className='bg-[#CDEEFE] px-3 py-1 rounded-2xl mr-2'>XXL</button>
            </div>

            {/* product details */}

            <div>
                <h1 className='text-[#4E3D67] font-[700] text-xl mb-2'>Product Details</h1>
                <p className='text-[#776B8A] font-[500]'>Name : Round Neck Puff Half Sleeves <br />
                    Hosiery Pista Top (23"Inches) <br />
                    Fabric : Cotton Blend <br />
                    Sleeve Length : Short Sleeves <br />
                    Pattern : Solid <br />
                    Net Quantity (N) : 1 <br /><br />

                    Sizes : 
                    XS, S (Bust Size : 34 in, Length Size: 23 in)<br />
                    M (Bust Size : 36 in, Length Size: 23 in)<br />
                    L (Bust Size : 38 in, Length Size: 23 in)<br />
                    XL (Bust Size : 40 in, Length Size: 23 in)<br />
                    Country of Origin : India
                </p>
            </div><br />
        
            <div className="border-dotted border-2 border-[#776B8A] ..."></div>

            {/* overseas rating */}
            <div className='mt-5'>
                <h1 className='font-[700] text-xl'>Overseas Mall Shipping To Mumbai <br />States</h1> <br />
                {/* 500 ratings */}
                <div className='flex items-center justify-around'>
                <div>
                <div className='flex items-center bg-[green] w-[60px] p-1 rounded-2xl text-white font-[700]'>
                    <AiOutlineStar className=' text-xl'/>
                    <p>4.2 </p>
                </div>
                <p className='text-[#4E3D67] font-[500]'>500+ Ratings</p>
                </div>
                <p className='text-[#4E3D67] font-[500]'>3000+ <br />Products</p>
                <button className='text-[#2C86B2] border border-[#4E3D67] px-4 py-1 rounded-md font-[500]'>View Shop</button>
                </div>
            </div>
        </main>
        <main>
            <FiShare2 className='mr-10 text-2xl font-[500] text-[#4E3D67]'/>
        </main>
    </section>
  )
}

export default Details;