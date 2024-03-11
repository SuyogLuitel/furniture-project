import React from 'react'
import shopBanner from '../assets/shop-banner.png'
import filter from '../assets/filter.png'
import round from '../assets/round.png'
import viewList from '../assets/view-list.png'
import product1 from '../assets/product1.png';
import product2 from '../assets/product2.png';
import product3 from '../assets/product3.png';
import product4 from '../assets/product4.png';
import trophy from '../assets/trophy.png'
import guarantee from '../assets/guarantee.png'
import shipping from '../assets/shipping.png'
import customerSupport from '../assets/customer-support.png'

const data = [
    {
        id: 1,
        title: "Syltherine",
        description: "Stylish cafe chair",
        newPrice: "2.500.000",
        oldPrice: "3.500.000",
        coverImg: product1,
        discount: 30,
    },
    {
        id: 2,
        title: "Lolito",
        description: "Luxury big sofa",
        newPrice: "7.000.000",
        oldPrice: "14.000.000",
        coverImg: product2,
        discount: 0,
    },
    {
        id: 3,
        title: "Respira",
        description: "Outdoor bar table and stool",
        newPrice: "500.000",
        oldPrice: "",
        coverImg: product3,
        discount: 50,
    },
    {
        id: 4,
        title: "Grifo",
        description: "Night lamp",
        newPrice: "1.500.000",
        oldPrice: "",
        coverImg: product4,
        discount: 0,
    },

];

const Shop = () => {
    return (
        <div>
            <div className='relative'>
                <img src={shopBanner} alt="" />
                <div className='absolute top-[50%] left-[50%]'>
                    <h2 className='text-3xl font-medium'>Shop</h2>
                    <p className='text-sm font-normal mt-2'><span className='font-medium'>Home - </span> Shop</p>
                </div>
            </div>
            <div className='bg-[#F9F1E7] h-24 flex items-center px-20 text-sm justify-between'>
                <div className='flex gap-2'>
                    <img src={filter} alt="filter" className='w-5' />
                    <p>Filter</p>
                    <div className='pl-4 flex gap-6'>
                        <img src={round} alt="round" className='w-5' />
                        <img src={viewList} alt="view list" className='w-5 ' />

                    </div>
                    <p className='text-xs pl-10'>Showing 1–16 of 32 results</p>
                </div>

                <div className='flex gap-10'>
                    <div className='flex items-center gap-2'>
                        <p className='font-medium text-xs'>Show</p>
                        <div className='bg-white text-[#9F9F9F] text-xs p-2'>16</div>
                    </div>
                    <div className='flex items-center gap-1'>
                        <p className='font-medium text-xs'>Sort by</p>
                        <div className='bg-white text-[#9F9F9F] text-xs px-4 py-2'>Default</div>
                    </div>
                </div>
            </div>
            <div className='mt-20'>
                <div className='flex justify-center gap-6'>
                    {data.map((item) => (
                        <div key={item.id} className='bg-[#F4F5F7] w-60 relative hover:opacity-40'>
                            <img src={item.coverImg} alt="product" className='w-full h-60 object-cover' />
                            {item.discount > 0 && <div className='bg-red-500 h-12 w-12 rounded-full p-2 text-center text-white absolute top-2 right-2'>-{item.discount}%</div>}
                            <div className='p-4'>
                                <h4 className='text-lg font-semibold'>{item.title}</h4>
                                <p className='text-sm font-normal text-[#898989]'>{item.description}</p>
                                <div className='flex justify-between items-center mt-2'>
                                    <span className='text-sm font-bold text-[#3A3A3A]'>Rp{item.newPrice}</span>
                                    {item.oldPrice && <span className='text-sm font-normal text-[#B0B0B0] line-through'>Rp{item.oldPrice}</span>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex justify-center my-10 gap-5'>
                    <div className='bg-[#B88E2F] text-white px-4 py-2 rounded-xl text-sm'>1</div>
                    <div className='bg-[#F9F1E7] px-4 py-2 rounded-xl text-sm'>2</div>
                    <div className='bg-[#F9F1E7] px-4 py-2 rounded-xl text-sm'>3</div>
                    <div className='bg-[#F9F1E7] px-4 py-2 rounded-xl text-sm'>Next</div>
                </div>
            </div>
            <div className='flex bg-[#F9F1E7] h-36 justify-between items-center px-20'>
                <div className='flex gap-1'>
                    <img src={trophy} alt="trophy" className='w-10 h-10' />
                    <div>
                        <h3 className='text-base font-semibold'>High Quality</h3>
                        <p className='text-sm font-light text-[#898989]'>crafted from top materials</p>
                    </div>
                </div>
                <div className='flex gap-1'>
                    <img src={guarantee} alt="trophy" className='w-10 h-10' />
                    <div>
                        <h3 className='text-base font-semibold'>Warranty Protection</h3>
                        <p className='text-sm font-light text-[#898989]'>Over 2 years</p>
                    </div>
                </div>
                <div className='flex gap-1'>
                    <img src={shipping} alt="trophy" className='w-10 h-10' />
                    <div>
                        <h3 className='text-base font-semibold'>Free Shipping</h3>
                        <p className='text-sm font-light text-[#898989]'>Order over 150 $</p>
                    </div>
                </div>
                <div className='flex gap-1'>
                    <img src={customerSupport} alt="trophy" className='w-10 h-10' />
                    <div>
                        <h3 className='text-base font-semibold'>24 / 7 Support</h3>
                        <p className='text-sm font-light text-[#898989]'>Dedicated support</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop
