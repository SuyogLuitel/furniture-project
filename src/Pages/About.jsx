import React from 'react'
import UserForm from '../Components/UserForm'

const About = () => {
    return (
        <div>
            <UserForm />
        </div>
    )
}
// let info = JSON.parse(localStorage.getItem('data')) ?? [];
// if (editData) {
//     const index = info.findIndex(item => item.email === editData.email);
//     if (index !== -1) {
//         info[index] = { ...info[index], ...data };
//     }
// } else {
//     info.push(data);
// }
// localStorage.setItem('data', JSON.stringify(info));
// setHasEventChanged(!hasEventChanged);
// reset();
export default About
