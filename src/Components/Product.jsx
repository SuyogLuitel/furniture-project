import React from 'react';
import ProductItem from './ProductItem';
import product from '../assets/all_product'
import { useNavigate } from 'react-router-dom';

const Product = () => {
    const navigate = useNavigate()
    const handleProductClick = () => {
        navigate('/product')
    }
    return (
        <div className='m-20'>
            <h2 className='text-center text-3xl font-bold mb-10'>Our Products</h2>
            <div className='grid grid-cols-4 gap-6 justify-center'>
                {product.map((item, i) => {
                    return <ProductItem handleClick={handleProductClick} key={i} id={item.id} coverImg={item.coverImg} title={item.title} discount={item.discount} description={item.description} newPrice={item.newPrice} oldPrice={item.oldPrice} />
                })}
            </div>
            <div className='mt-8 flex justify-center'>
                <button className='text-[#B88E2F] border-[#B88E2F] border-solid border-2 py-2 px-4 whitespace-nowrap'>Show More</button>
            </div>
        </div>
    );
};

export default Product;
