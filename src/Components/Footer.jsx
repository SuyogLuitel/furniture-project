import React from 'react'

const Footer = () => {
    return (
        <div>
            <hr />
            <div className='flex justify-around py-5'>
                <div>
                    <h3 className='text-base font-medium'>Funiro.</h3>
                    <p className='text-xs font-normal py-4 text-[#9F9F9F]'>400 University Drive Suite 200 Coral Gables, <br /> FL 33134 USA</p>
                </div>
                <div>
                    <h5 className='text-xs font-normal text-[#9F9F9F]'>Links</h5>
                    <li className='list-none py-4 text-xs font-medium'>Home</li>
                    <li className='list-none py-4 text-xs font-medium'>Shop</li>
                    <li className='list-none py-4 text-xs font-medium'>About</li>
                    <li className='list-none py-4 text-xs font-medium'>Contact</li>
                </div>
                <div>
                    <h5 className='text-xs font-normal text-[#9F9F9F]'>Help</h5>
                    <li className='list-none py-4 text-xs font-medium'>Payment Options</li>
                    <li className='list-none py-4 text-xs font-medium'>Returns</li>
                    <li className='list-none py-4 text-xs font-medium'>Privacy Policies</li>
                </div>
                <div>
                    <h5 className='text-xs font-normal text-[#9F9F9F] py-4'>Newsletter</h5>
                    <input type="text" placeholder='Enter Your Email Address' className='text-xs font-medium border-b-[1px] p-2 border-b-black' />
                    <button className='text-xs font-medium p-2'>Subscribe</button>
                </div>
            </div>
            <hr />
            <p className='p-10 text-xs font-medium'>2023 furino. All rights reverved</p>
        </div>
    )
}

export default Footer
