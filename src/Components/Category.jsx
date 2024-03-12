import React from 'react';
import category1 from '../assets/dining.png';
import category2 from '../assets/Image-living room.png';
import category3 from '../assets/bedroom.png';

const categories = [
    { image: category1, alt: "Dining", title: "Dining" },
    { image: category2, alt: "Living", title: "Living" },
    { image: category3, alt: "Bedroom", title: "Bedroom" }
];

const Category = () => {
    return (
        <div className='relative mt-96 mb-10'>
            <h2 className='text-center mt-12 text-3xl font-bold'>Browse The Range</h2>
            <p className='text-center my-1 text-lg font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className='flex mt-10 px-20 mx-12 gap-10'>
                {categories.map((category, index) => (
                    <div key={index}>
                        <img src={category.image} alt={category.alt} className='h-96' />
                        <p className='mt-4 text-lg font-semibold text-center'>{category.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
