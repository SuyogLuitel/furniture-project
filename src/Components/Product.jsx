import React from 'react';
import ProductItem from './ProductItem';

const Product = () => {
    return (
        <div className='m-20'>
            <h2 className='text-center text-3xl font-bold mb-10'>Our Products</h2>
            <ProductItem />
            <div className='mt-8 flex justify-center'>
                <button className='text-[#B88E2F] border-[#B88E2F] border-solid border-2 py-2 px-4 whitespace-nowrap'>Show More</button>
            </div>
        </div>
    );
};

export default Product;
