import React from 'react'
import Input from './Input'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const AxiosLogin = () => {
    const { handleSubmit, register, reset } = useForm()
    const onSubmit = (data) => {
        axios.post('http://159.223.33.101:9005/auth/v3/login/', data).then((response) => {
            console.log(response.status, response.data)
        }).catch(function (error) {
            console.error(error);
        });
        reset()
    }
    return (
        <div>
            <h2>User Login</h2>
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
                <button type='submit'>Submit</button>
            </form>

        </div>
    )
}

export default AxiosLogin
