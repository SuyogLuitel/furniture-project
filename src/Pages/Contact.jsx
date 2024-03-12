import React from 'react'
import Banner from '../Components/Banner'
import shopBanner from '../assets/shop-banner.png';
import ContactForm from '../Components/ContactForm';
import BannerButtom from '../Components/BannerButtom';

const Contact = () => {
    return (
        <div>
            <Banner title="Contact" img={shopBanner} />
            <ContactForm />
            <BannerButtom />
        </div>
    )
}

export default Contact
