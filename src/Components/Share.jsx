import React from 'react'
import shareImg from '../assets/share-image.png'

const Share = () => {
    return (
        <div className='my-8 text-center'>
            <p className='text-sm font-medium'>Share your setup with</p>
            <h2 className='text-2xl	font-bold'>#FuniroFurniture</h2>
            <img src={shareImg} alt="share img" className='w-screen h-[80vh]' />
        </div>
    )
}

export default Share
