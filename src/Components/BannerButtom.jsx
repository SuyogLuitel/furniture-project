import React from 'react'
import trophy from '../assets/trophy.png';
import guarantee from '../assets/guarantee.png';
import shipping from '../assets/shipping.png';
import customerSupport from '../assets/customer-support.png';

const BannerButtom = () => {
    return (
        <div className='flex bg-[#F9F1E7] h-36 justify-between items-center px-20'>
            <div className='flex gap-1'>
                <img src={trophy} alt="Trophy" className='w-10 h-10' />
                <div>
                    <h3 className='text-base font-semibold'>High Quality</h3>
                    <p className='text-sm font-light text-[#898989]'>Crafted from top materials</p>
                </div>
            </div>
            <div className='flex gap-1'>
                <img src={guarantee} alt="Guarantee" className='w-10 h-10' />
                <div>
                    <h3 className='text-base font-semibold'>Warranty Protection</h3>
                    <p className='text-sm font-light text-[#898989]'>Over 2 years</p>
                </div>
            </div>
            <div className='flex gap-1'>
                <img src={shipping} alt="Shipping" className='w-10 h-10' />
                <div>
                    <h3 className='text-base font-semibold'>Free Shipping</h3>
                    <p className='text-sm font-light text-[#898989]'>Order over $150</p>
                </div>
            </div>
            <div className='flex gap-1'>
                <img src={customerSupport} alt="Customer Support" className='w-10 h-10' />
                <div>
                    <h3 className='text-base font-semibold'>24/7 Support</h3>
                    <p className='text-sm font-light text-[#898989]'>Dedicated support</p>
                </div>
            </div>
        </div>
    )
}

export default BannerButtom
