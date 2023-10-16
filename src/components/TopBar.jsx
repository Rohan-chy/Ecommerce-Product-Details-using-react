import React from 'react'

const TopBar = () => {
  return (
    <header className='flex justify-between p-5 font-[700]'>
        <div className='flex gap-5  text-[#4E3D67]'>
            <p>Connect with us</p>
            <p>|</p>
            <p>Call us +910234567</p>
        </div>

        <div className='flex gap-5'>
            <p className='text-[#2C86B2]'>Become a supplier</p>
            <p>|</p>
            <p className='text-[#5C4D68]'>Download App</p>
            <p >|</p>
            <p className='text-[#5C4D68]'>TRACK ORDER</p>
        </div>
    </header>
  )
}

export default TopBar;