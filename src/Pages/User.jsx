import React, { useEffect, useState } from 'react'

const User = () => {
    const [localData, setLocalData] = useState([]);
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('data'));
        setLocalData(data);
    }, []);
    return (
        <div>
            <p className='text-xl font-semibold'>User Details</p>
            {localData?.map((data) => (
                <div key={data?.id}>
                    <div>{data?.firstName} {data.middleName} {data.lastName}</div>
                    <div>{data?.email}</div>
                    <div>{data?.phone}</div>
                </div>
            ))}
            {/* <h3>{data.firstName}</h3> */}

        </div>
    )
}

export default User
