import React from 'react'
import Banner from '../Components/Banner';
import shopBanner from '../assets/shop-banner.png';
import BannerButtom from '../Components/BannerButtom';
import CartSection from '../Components/CartSection';

const Cart = () => {
    return (
        <div>
            <Banner title="Cart" img={shopBanner} />
            <CartSection />
            <BannerButtom />
        </div>
    )
}

export default Cart
