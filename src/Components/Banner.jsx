import React from 'react'
import banner from '../assets/shop-banner.png'

const Banner = (props) => {
    return (
        <div>
            <div className='relative'>
                < img src={banner} alt="Shop Banner" />
                <div className='absolute top-[50%] left-[50%] transform translate-x-[-50%]'>
                    <h2 className='text-3xl font-medium'>{props.title}</h2>
                    <p className='text-sm font-normal mt-2'><span className='font-medium'>Home - </span> {props.title}</p>
                </div>
            </div>

        </div>
    )
}

export default Banner
