import React from 'react';
import product1 from '../assets/product1.png';
import product2 from '../assets/product2.png';
import product3 from '../assets/product3.png';
import product4 from '../assets/product4.png';

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

const Product = () => {
    return (
        <div className='my-20'>
            <h2 className='text-center text-3xl font-bold mb-10'>Our Products</h2>
            <div className='flex justify-center gap-6'>
                {data.map((item) => (
                    <div key={item.id} className='bg-[#F4F5F7] w-60 relative hover:bg-[#3A3A3A] hover:bg-opacity-30'>
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
            <div className='mt-8 flex justify-center'>
                <button className='text-[#B88E2F] border-[#B88E2F] border-solid border-2 py-2 px-4  whitespace-nowrap'>Show More</button>
            </div>
        </div>
    );
};

export default Product;
