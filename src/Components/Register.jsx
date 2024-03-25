import React from 'react'
import loginImage from '../assets/loginImage.png';

const Register = () => {
    return (
        <div className='grid grid-cols-2 w-full'>
            <div className='bg-[#2C73EB] p-10'>
                <img
                    src={loginImage}
                    alt="login image"
                    className='mx-auto w-80 h-80'
                />
            </div>
            <div className='bg-[#E5E5E5]'>
                <div className='mx-32 my-20'>
                    <h2 className='text-xl font-semibold py-4'>User Login</h2>
                    <form>
                        <div className='flex flex-col gap-2 my-4'>
                            <label
                                className='text-xs text-[#696F79]'
                            >Email</label>
                            <input
                                type="text"
                                className='w-72 p-2 bg-[#E5E5E5] border border-[#8692A6] rounded'
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label
                                className='text-xs text-[#696F79]'
                            >Password</label>
                            <input
                                type="Password"
                                className='w-72 p-2 bg-[#E5E5E5] border border-[#8692A6] rounded'
                            />
                        </div>
                        <button type="submit"
                            className='text-white bg-[#2C73EB] w-72 my-5 py-2 rounded'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
