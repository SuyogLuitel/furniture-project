import React from 'react';
import backgroundImage from '../assets/scandinavian-interior-mockup-wall-decal-background 1.png';

const Hero = () => {
    return (
        <div className="hero relative">
            <div className="box bg-[#FFF3E3] px-7 py-4 w-96 rounded-sm relative top-40 left-2/3 z-10">
                <span className="text-sm font-semibold tracking-widest">New Arrival</span>
                <div className="text-3xl font-bold tracking-normal text-[#B88E2F] mt-px">Discover Our <br /> New Collection</div>
                <p className="text-sm font-medium mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                <button className="text-sm font-medium bg-[#B88E2F] px-7 py-4 text-white my-5">BUY NOW</button>
            </div>

            <img src={backgroundImage} alt="Hero Background" className="absolute top-0 h-[90vh] w-full" />
        </div>
    );
};

export default Hero;
