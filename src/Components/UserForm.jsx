import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import Input from './Input';

const UserForm = () => {
    const [editData, setEditData] = useState()
    const { handleSubmit, register, reset } = useForm()
    const [localData, setLocalData] = useState()
    const [hasEventChanged, setHasEventChanged] = useState(false)

    const onsubmit = (data) => {
        let info = JSON.parse(localStorage.getItem('data')) ?? []
        info.push(data)
        localStorage.setItem('data', JSON.stringify(info))
        setHasEventChanged(!hasEventChanged)
        reset()
    }
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('data'))
        setLocalData(data)
    }, [hasEventChanged])

    const deleteItems = (index) => {
        localData.splice(index, 1)
        localStorage.setItem('data', JSON.stringify(localData))
        setHasEventChanged(!hasEventChanged)
    }

    const onEditData = (data) => {
        const postData = {
            name: data?.name === '' ? editData?.name : data?.name,
            email: data?.email === '' ? editData?.email : data?.email
        }
        let info = []
        info.push(postData)
        localStorage.setItem('data', JSON.stringify(info))
        reset()
        setEditData()
        setHasEventChanged(!hasEventChanged)
    }
    return (
        <div>
            <h2>User Detail</h2>
            <form onSubmit={handleSubmit(editData ? onEditData : onsubmit)}>
                <Input type='text' register={register} defaultValue={editData?.name} registerName='name' placeholder='Your name' required />
                <Input type='email' register={register} defaultValue={editData?.email} registerName='email' placeholder='Email' required />
                <br />
                <button type="submit" className='bg-black text-white text-sm p-2 rounded'>Submit</button>
            </form>
            <div>
                {localData?.map((data, index) => {
                    return <div key={index} className='grid grid-cols-4'>
                        <div>{data?.name}</div>
                        <div>{data?.email}</div>
                        <button onClick={() => setEditData(data)}>Edit</button>
                        <button onClick={() => deleteItems(index)}>Delete</button>
                    </div>
                })}
            </div>
        </div>
    )
}
export default UserForm

{/* <Input type='tel' register={register} registerName='phone' placeholder='Phone Number' required />
<Input type='text' register={register} registerName='company' placeholder='Company Name' required />
<Input type='text' register={register} registerName='address' placeholder='Address' required /> */}
{/* <div>{info?.phone}</div>
<div>{info?.company}</div>
<div>{info?.address}</div> */}
