import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";


const Testimonials = () => {
  return (
    <div className='my-32 w-full h-[610px] bg-orange-200 bg-opacity-50'>
        <div className='w-6/12 mx-auto'>
            <h1 className='text-5xl font-semibold text-center py-12'>Don't take our word take their's!</h1>
            <div className='border-2 border-black border-opacity-40 rounded-3xl  bg-white h-[160px]'>
                <div className='flex m-4 px-2'>
                    <div className='rounded-full bg-purple-300 w-12 h-12'></div>
                    <h1 className='px-4 font-semibold'>Name</h1>
                    <div className='flex-1'></div>
                    <FaQuoteLeft size={'2rem'} style={{
                    opacity:0.6
                    }}/>
                </div>
                <p className='px-7 text-gray-600'>I’ve always had this junk lying around and I was gonna throw it away, but you know what they say. Brown ppl come flocking whenever they hear it’s free. I now love indians!</p>
            </div>
            <div className='border-2 border-black border-opacity-40 my-8 rounded-3xl bg-white h-[160px]'>
            <div className='flex m-4 px-2'>
                    <div className='rounded-full bg-red-300 w-12 h-12'></div>
                    <h1 className='px-4 font-semibold'>Name</h1>
                    <div className='flex-1'></div>
                    <FaQuoteLeft size={'2rem'} style={{
                    opacity:0.6
                    }}/>
                </div>
                <p className='px-7 text-gray-600'>Who woulda guessed that someone would’ve wanted my used condom! </p>
            </div>
        </div>
    </div>
  )
}

export default Testimonials