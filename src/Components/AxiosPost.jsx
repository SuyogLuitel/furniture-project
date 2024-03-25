import React from 'react'
import { useForm } from 'react-hook-form'
import Input from './Input';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AxiosPost = () => {
    const { handleSubmit, register, reset } = useForm()
    const navigate = useNavigate()

    const onSubmit = (data) => {
        axios.post('http://159.223.33.101:9005/auth/v3/register/', data).then((response) => {
            console.log(response.status, response.data);
        })
        reset()
        navigate("/otp", {
            state: {
                phone: data?.phone
            }
        })
    }
    return (
        <div className='m-10'>
            <h2 className='font-semibold'>User Details</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    type='text'
                    register={register}
                    registerName='firstName'
                    placeholder='first name'
                    required
                />
                <Input
                    type='text'
                    register={register}
                    registerName='middleName'
                    placeholder='middle name'
                />
                <Input
                    type='text'
                    register={register}
                    registerName='lastName'
                    placeholder='last name'
                />
                <Input
                    type='email'
                    register={register}
                    registerName='email'
                    placeholder='Your email'
                    required
                />
                <Input
                    type='tel'
                    register={register}
                    registerName='phone'
                    placeholder='Phone'
                    required
                />
                <Input
                    type='password'
                    register={register}
                    registerName='password'
                    placeholder='password'
                    required
                />
                <button type='submit' className='bg-black text-white p-2 rounded'>Submit</button>
            </form>
        </div>
    )
}

export default AxiosPost
// onClick={handleSubmitClick}
// 159.223.33.101:9005/auth/v3/register/
