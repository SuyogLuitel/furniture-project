import React from 'react';
import ProductItem from '../Components/ProductItem';
import Banner from '../Components/Banner';
import shopBanner from '../assets/shop-banner.png';
import ShopFilter from '../Components/ShopFilter';
import BannerButtom from '../Components/BannerButtom';

const Shop = () => {
    return (
        <div>
            <Banner title="Shop" img={shopBanner} />
            <ShopFilter />
            <div className='m-20'>
                <ProductItem />
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
