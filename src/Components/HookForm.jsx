import React from 'react'
import { useForm } from 'react-hook-form';

const HookForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        localStorage.setItem('data', JSON.stringify(data));
        input.value = '';
    };

    const data = JSON.parse(localStorage.getItem('data'));
    // console.log('data', data)
    let email = data?.email
    let password = data?.password

    const handleReset = () => {
        localStorage.removeItem('data');
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register('email', {
                        required: true,
                        message: 'is required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "Invalid Email"
                        }
                    })}
                    type="email"
                    req
                    placeholder='Email'
                    className='p-2 w-60 border'
                />
                {errors?.email && <div className='text-red-500'>{errors?.email?.message}</div>}
                <br />

                <input
                    {...register('password', {
                        required: "Password is required",
                        minLength: {
                            value: 8,
                            message: "Password must be at least 8 characters long"
                        }
                    })}
                    type="password"
                    placeholder='Password'
                    className='p-2 w-60 border'
                />
                {errors.password && <div className='text-red-500'>{errors.password.message}</div>}
                <br />

                <button type='submit'>Submit</button>
                <br />
                <button onClick={handleReset}>Reset</button>
            </form>
            <div>mail: {email} pass: {password}</div>
        </div>
    )
}

export default HookForm
