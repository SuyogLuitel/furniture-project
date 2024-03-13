import React from 'react'
import trophy from '../assets/trophy.png';
import guarantee from '../assets/guarantee.png';
import shipping from '../assets/shipping.png';
import customerSupport from '../assets/customer-support.png';

const items = [
    { image: trophy, h3: 'High Quality', p: 'Crafted from top materials' },
    { image: guarantee, h3: 'Warranty Protection', p: 'Over 2 years' },
    { image: shipping, h3: 'Free Shipping', p: 'Order over $150' },
    { image: customerSupport, h3: '24/7 Support', p: 'Dedicated support' },
]

const BannerButtom = () => {
    return (
        <div className='flex bg-[#F9F1E7] h-36 justify-between items-center px-20'>
            {items.map((item) => (
                <div className='flex gap-1'>
                    <img src={item.image} alt="Trophy" className='w-10 h-10' />
                    <div>
                        <h3 className='text-base font-semibold'>{item.h3}</h3>
                        <p className='text-sm font-light text-[#898989]'>{item.p}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default BannerButtom
