import React from 'react'
import { useForm } from 'react-hook-form'

const Input = ({ label, register, required }) => (
    <div className='flex flex-col gap-2 py-3'>
        <label className='text-xs font-medium'>{label}</label>
        <input {...register(label, { required })} className='border border-[#9F9F9F] p-2 text-sm w-72 rounded-md' />
    </div>
)

const HookForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data) => { console.log(data) }
    return (
        <div className='m-10'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col gap-2 py-3'>
                    <label className='text-xs font-medium'>Your Name</label>
                    <input
                        {...register('yourName', {
                            required: true,
                            maxLength: 30,
                            pattern: /^[A-Za-z]+$/i
                        })}
                        className='border border-[#9F9F9F] p-2 text-sm w-72 rounded-md'
                    />
                    {errors?.yourName?.type === "required" && <p className='text-xs text-red-500'>Enter your name</p>}
                    {errors?.yourName?.type === "maxLength" && (<p className='text-xs text-red-500'>Your name cannot exceed 20 characters</p>)}
                    {errors?.yourName?.type === "pattern" && (<p className='text-xs text-red-500'>Alphabetical characters only</p>)}
                </div>
                <input type="submit" className='text-white text-xs bg-[#B88E2F] px-10 py-2 rounded' />
            </form>
        </div>
    )
}

export default HookForm
