import React from 'react'
import Banner from '../Components/Banner'
import BannerButtom from '../Components/BannerButtom'
import ProductCompare from '../Components/ProductCompare'

const About = () => {
    return (
        <div>
            <Banner title='Product Comparision' />
            <ProductCompare />
            <BannerButtom />
        </div >
    )
}

export default About
