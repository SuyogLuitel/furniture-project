import React from 'react'
import img1 from '../assets/Rectangle24.png'
import img2 from '../assets/Rectangle25.png'
import img3 from '../assets/Rectangle26.png'

const Inspiration = () => {
    return (
        <div className='bg-[#FCF8F3] flex justify-center items-center px-6 py-6 gap-20'>
            <div className='w-80'>
                <h2 className='text-3xl font-bold'>50+ Beautiful rooms inspiration</h2>
                <p className='text-xs font-normal py-4'>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                <button className="text-sm font-medium bg-[#B88E2F] px-8 py-2 text-white">Explore More</button>
            </div>
            <div className='flex gap-6'>
                <div className='relative'>
                    <img src={img1} alt="Image" className='h-96' />
                    <div className='absolute bottom-8 left-7 bg-white text-black p-6 opacity-80'>
                        <p className='text-xs font-light pb-2'>01 - Bed Room</p>
                        <h5 className='font-medium'>Inner Peace</h5>
                    </div>
                    <button className='absolute bottom-8 left-40 bg-[#B88E2F] px-2 text-white text-xl'>&#8594;</button>
                </div>
                <div className='relative'>
                    <img src={img2} alt="Image" className='h-80' />
                    <button className='absolute top-[40%] -right-4 h-10 w-10 bg-white-smoke px-4 text-[#B88E2F] text-xl rounded-full shadow-md'>&#8594;</button>
                </div>
                <div className='relative'>
                    <img src={img3} alt="Image" className='h-80' />
                </div>
            </div>
        </div>
    )
}

export default Inspiration
