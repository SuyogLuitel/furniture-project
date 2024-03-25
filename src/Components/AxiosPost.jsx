import React from 'react'
import { useForm } from 'react-hook-form'
import Input from './Input';
import axios from 'axios';

const AxiosPost = () => {
    const { handleSubmit, register, reset } = useForm()
    const postData = {
        firstName: "Niroj",
        middleName: "",
        lastName: "Pariyar",
        email: "niroj@gmail.com",
        phone: "9815345762",
        password: "Niroj@123"
    }
    const onSubmit = (data) => {
        axios.post('http://159.223.33.101:9005/auth/v3/register/', data).then((response) => {
            console.log(response.status, response.data);
        })
        reset()
    }
    return (
        <div>
            <h2>User Details</h2>
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
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default AxiosPost

// 159.223.33.101:9005/auth/v3/register/
