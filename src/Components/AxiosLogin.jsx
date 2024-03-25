import React, { useState } from 'react'
import Input from './Input'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const AxiosLogin = () => {
    const { handleSubmit, register, reset } = useForm()
    const [userData, setUserData] = useState()

    const onSubmit = (data) => {
        axios.post('http://159.223.33.101:9005/auth/v3/login/', data).then((response) => {
            setUserData(response.data.data.user)
        }).catch(function (error) {
            console.error(error);
        });
        reset()
        let info = JSON.parse(localStorage.getItem('data')) ?? [];
        info.push(userData);
        localStorage.setItem('data', JSON.stringify(info))
    }
    return (
        <div>
            <h2 className='text-xl font-medium'>User Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    type='text'
                    register={register}
                    registerName='identity'
                    placeholder='Enter your Email'
                    required
                />
                <Input
                    type='password'
                    register={register}
                    registerName='password'
                    placeholder='Enter your Password'
                    required
                />
                <button type='submit' className='bg-black text-white p-2 rounded'>Submit</button>
            </form>

        </div>
    )
}

export default AxiosLogin
