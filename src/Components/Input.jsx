import React from 'react'

const Input = ({ register, registerName, type, placeholder, defaultValue, required,
    className = 'border border-[#9F9F9F] p-2 my-1 text-sm w-72 rounded-md block' }) => {
    return (
        <input
            {...register(registerName)}
            type={type}
            defaultValue={defaultValue}
            placeholder={placeholder}
            className={className}
            required={required}
        />
    )
}

export default Input
