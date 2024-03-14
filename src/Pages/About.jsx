import React from 'react'
import Banner from '../Components/Banner'
import product1 from '../assets/product1.png'
import product2 from '../assets/product2.png'

const products = [
    { image: product1, title: 'Asgaard Sofa', price: 'Rs 250,000' },
    { image: product2, title: 'Outdoor Sofa Set', price: 'Rs. 224,000' },
]
const infos = [
    { title: 'General', p1: 'Sales Package', p2: '1 sectional sofa', p3: '1 Three Seater, 2 Single Seater' },
    { p1: 'Model Number', p2: 'TFCBLIGRBL6SRHS', p3: 'DTUBLIGRBL568' },
    { p1: 'Secondary Material', p2: 'Solid Wood', p3: 'Solid Wood' },
    { p1: 'Configuration', p2: 'L-shaped', p3: 'L-shaped' },
    { p1: 'Upholstery Material', p2: 'Fabric + Cotton', p3: 'Fabric + Cotton' },
    { p1: 'Upholstery Color', p2: 'Bright Grey & Lion', p3: 'Bright Grey & Lion' },
]

const About = () => {
    return (
        <div>
            <Banner title='Product Comparision' />
            <div className='flex flex-col gap-2 px-24 py-10'>
                <div className='grid grid-cols-4 gap-6'>
                    <div>
                        <h2 className='text-base font-medium'>Go to Product page for more Products</h2>
                        <button className='text-xs font-medium text-[#727272]'>View More</button>
                    </div>
                    {products.map((product) => (
                        <div>
                            <img src={product.image} alt="product 1" className='w-32 h-20' />
                            <h3 className='text-sm font-medium py-1'>{product.title}</h3>
                            <p className='text-xs font-medium'>{product.price}</p>
                        </div>
                    ))}
                    <div>
                        <h2 className='text-base font-medium'>Add A Product</h2>
                        <select className='bg-[#B88E2F] p-2 text-xs text-white rounded-md'>
                            <option>Choose a product</option>
                        </select>
                    </div>
                </div>
                {infos.map((info) => (
                    <div>
                        <h2 className='text-base font-medium py-2'>{info.title}</h2>
                        <div className='grid grid-cols-4'>
                            <p className='text-sm font-normal'>{info.p1}</p>
                            <p className='text-sm font-normal'>{info.p2}</p>
                            <p className='text-sm font-normal'>{info.p3}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default About
