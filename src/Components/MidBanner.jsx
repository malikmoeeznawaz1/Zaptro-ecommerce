import React from 'react'
import banner from '../assets/banner1.jpg'

const MidBanner = () => {
  return (
    <div className='w-full p-16'>
      <div className="relative rounded-2xl bg-cover h-[550px]" style={{backgroundImage: `url(${banner})`, backgroundAttachment: `fixed`}}>
        <div className='absolute inset-0 bg-black/50 rounded-2xl flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center'>
                <p className=' text-3xl text-white font-bold items-center'>Next-Gen Electronics at Your Fingertips</p>
                <p className='text-xl text-white items-center jus'>Discover the latest tech innovations with unbeatable prices and free shipping on all orders</p>
                <button className='text-white text-xl font-semibold bg-red-500 hover:bg-red-400 rounded-md mt-4 cursor-pointer px-4 py-2'>Shop Now</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MidBanner