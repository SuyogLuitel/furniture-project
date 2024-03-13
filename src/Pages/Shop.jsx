import React from 'react';
import product from '../assets/all_product'
import ProductItem from '../Components/ProductItem';
import Banner from '../Components/Banner';
import shopBanner from '../assets/shop-banner.png';
import ShopFilter from '../Components/ShopFilter';
import BannerButtom from '../Components/BannerButtom';
import { useNavigate } from 'react-router-dom';

const Shop = () => {
    const navigate = useNavigate()
    const handleProductClick = () => {
        navigate('/product')
    }
    return (
        <div>
            <Banner title="Shop" img={shopBanner} />
            <ShopFilter />
            <div className='m-20'>
                <div className='grid grid-cols-4 gap-6 justify-center'>
                    {product.map((item, i) => {
                        return <ProductItem handleClick={handleProductClick} key={i} id={item.id} coverImg={item.coverImg} title={item.title} discount={item.discount} description={item.description} newPrice={item.newPrice} oldPrice={item.oldPrice} />
                    })}
                </div>
                <div className='flex justify-center my-10 gap-5'>
                    <div className='bg-[#B88E2F] text-white px-4 py-2 rounded-xl text-sm'>1</div>
                    <div className='bg-[#F9F1E7] px-4 py-2 rounded-xl text-sm'>2</div>
                    <div className='bg-[#F9F1E7] px-4 py-2 rounded-xl text-sm'>3</div>
                    <div className='bg-[#F9F1E7] px-4 py-2 rounded-xl text-sm'>Next</div>
                </div>
            </div>
            <BannerButtom />
        </div>
    );
};

export default Shop;
