import React from 'react'
import { useForm } from 'react-hook-form';
import Input from './Input';

const UserForm = () => {
    const { handleSubmit, register, reset } = useForm()

    const onsubmit = (data) => {
        let info = !!localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : []
        info.push(data)
        localStorage.setItem('data', JSON.stringify(info))
        reset()
    }

    const data = JSON.parse(localStorage.getItem('data'))

    const infos = []
    for (let i = 0; i < data.length; i++) {
        let value = data[i]
        infos.push(value)
    }
    // console.log(infos[0].name);
    return (
        <div>
            <h2>User Detail</h2>
            <form onSubmit={handleSubmit(onsubmit)}>
                <Input type='text' register={register} registerName='name' placeholder='Your name' required />
                <Input type='email' register={register} registerName='email' placeholder='Email' required />
                <Input type='tel' register={register} registerName='phone' placeholder='Phone Number' required />
                <Input type='text' register={register} registerName='company' placeholder='Company Name' required />
                <Input type='text' register={register} registerName='address' placeholder='Address' required />
                <br />
                <button type="submit" className='bg-black text-white text-sm p-2 rounded'>Submit</button>
            </form>
            <div>
                {infos.map((info) => {
                    console.log(info);
                    return <div className='flex gap-2'>
                        <div>{info.name}</div>
                        <div>{info.email}</div>
                        <div>{info.phone}</div>
                        <div>{info.company}</div>
                        <div>{info.address}</div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default UserForm
