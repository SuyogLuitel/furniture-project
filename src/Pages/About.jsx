import React from 'react'
import { useForm } from "react-hook-form"
import HookForm from '../Components/HookForm';

// const Input = ({ label, register, required }) => (
//     <>
//         <label>{label}</label>
//         <input {...register(label, { required })} />
//     </>
// )
//     < Input label = "First Name" register = { register } required />

// const Input = ({ label, register, required }) => {
//     <div>
//         <label>{label}</label>
//         <input{...register(label, { required })} />
//     </div>
// }

const About = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        // <div>
        //     <form onSubmit={handleSubmit(onSubmit)}>
        //         <label>First Name</label>
        //         {/* //     < Input label="First Name" register={register} required /> */}
        //         <input
        //             {...register("firstName", {
        //                 required: true,
        //                 maxLength: 20,
        //                 pattern: /^[A-Za-z]+$/i
        //             })}
        //             className='border'
        //         />
        //         {errors?.firstName?.type === "required" && <p>This field is required</p>}

        //         {errors?.firstName?.type === "maxLength" && (<p>First name cannot exceed 20 characters</p>)}


        //         {errors?.firstName?.type === "pattern" && (<p>Alphabetical characters only</p>)}
        //         <label>Last Name</label>
        //         <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} className='border' />
        //         {errors?.lastName?.type === "pattern" && (
        //             <p>Alphabetical characters only</p>
        //         )}
        //         <label>Age</label>
        //         <input {...register("age", { min: 18, max: 99 })} className='border' />
        //         {errors.age && (
        //             <p>You Must be older then 18 and younger then 99 years old</p>
        //         )}
        //         <input type="submit" />
        //     </form>
        //     {/* </div>
        <div>
            <HookForm />
        </div>
    );
}
export default About
