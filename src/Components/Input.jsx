import React from 'react'
import { useForm } from 'react-hook-form';


const Input = ({ registerName, type, placeholder, required, className = 'border border-[#9F9F9F] p-2 my-1 text-sm w-72 rounded-md' }) => {
    const { register } = useForm()

    return (
        <input
            {...register(registerName)}
            type={type}
            placeholder={placeholder}
            className={className}
            required={required}
        />
    )
}

export default Input