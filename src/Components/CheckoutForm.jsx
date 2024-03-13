import React from 'react'
import InputField from './InputField'

const countries = [
    { value: 'Nepal', option: 'Nepal' },
    { value: 'India', option: 'India' },
    { value: 'Srilanka', option: 'Srilanka' },
]
const provinces = [
    { value: 'Koshi', option: 'Koshi' },
    { value: 'Madhesh', option: 'Madhesh' },
    { value: 'Bagmati', option: 'Bagmati' },
    { value: 'Gandaki', option: 'Gandaki' },
    { value: 'Lumbini', option: 'Lumbini' },
    { value: 'Karnali', option: 'Karnali' },
    { value: 'Sudurpashchim', option: 'Sudurpashchim' },
]

const CheckoutForm = () => {
    return (
        <div className='px-32 py-10'>
            <h2 className='text-xl font-medium'>Billing details</h2>
            <form action="">
                <div className='flex gap-44'>
                    <div>
                        <div className='flex gap-2'>
                            <InputField label='First Name' htmlfor='fname' id='fname' type='text' required className='border border-[#9F9F9F] p-2 text-sm w-36 rounded-md' />
                            <InputField label='Last Name' htmlfor='lname' id='lname' type='text' required className='border border-[#9F9F9F] p-2 text-sm w-36 rounded-md' />
                        </div>
                        <InputField label='Company Name (Optional)' htmlfor='cname' id='cname' type='text' />
                        <div className='flex flex-col gap-2 py-3'>
                            <label className='text-xs font-medium'>Country</label>
                            <select className='border border-[#9F9F9F] p-2 text-sm w-72 rounded-md'>
                                {countries.map((country) => (
                                    <option value={country.value}>{country.option}</option>

                                ))}
                            </select>
                        </div>
                        <InputField label='Street Address' htmlfor='saddress' id='saddress' type='text' required />
                        <InputField label='Town / City' htmlfor='city' id='city' type='text' required />
                        <div className='flex flex-col gap-2 py-3'>
                            <label className='text-xs font-medium'>Province</label>
                            <select className='border border-[#9F9F9F] p-2 text-sm w-72 rounded-md'>
                                {provinces.map((province) => (
                                    <option value={province.value}>{province.option}</option>

                                ))}
                            </select>
                        </div>
                        <InputField label='Zip Code' htmlfor='zcode' id='zcode' type='number' required />
                        <InputField label='Phone' htmlfor='phone' id='phone' type='tel' required />
                        <InputField label='Email' htmlfor='email' id='email' type='email' required />
                        <InputField htmlfor='info' id='info' type='text' placeholder='Additional information' />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex gap-44'>
                            <div className='flex flex-col gap-4'>
                                <h4 className='text-lg font-medium'>Product</h4>
                                <div className='flex items-center gap-2 text-xs'>
                                    <p className='text-[#9F9F9F]'>Asgaard sofa</p>
                                    <p>x</p>
                                    <p>1</p>
                                </div>
                                <p className='text-sm font-medium'>SubTotal</p>
                                <p className='text-sm font-medium'>Total</p>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <h4 className='text-lg font-medium'>Subtotal</h4>
                                <p className='text-sm font-normal'>Rs. 250,000.00</p>
                                <p className='text-sm font-normal'>Rs. 250,000.00</p>
                                <p className='text-xl text-[#B88E2F] font-semibold'>Rs. 250,000.00</p>
                            </div>
                        </div>
                        <hr />
                        <p className='text-xs font-normal'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='font-bold'>privacy policy.</span></p>
                        <button type='submit' className='border border-black rounded w-40 p-1'>Place Order</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm
