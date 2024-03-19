import React from 'react'
import { useForm } from 'react-hook-form';
import Input from './Input';

const onsubmit = (data) => {
    console.log(data);
}

const UserForm = () => {
    const { handleSubmit, register } = useForm()
    return (
        <div>
            <h2>User Detail</h2>
            <form onSubmit={handleSubmit(onsubmit)}>
                <Input type='text' register={register} placeholder='Your name' registerName='name' required />
                {/* <Input type='email' placeholder='Your email' />
                <Input type='number' placeholder='phone' />
                <Input type='text' placeholder='Company name' />
                <Input type='text' placeholder='Address' /> */}
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default UserForm
