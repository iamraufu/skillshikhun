import React from 'react';
// import MultiStepForm from '../MultiStepForm/MultiStepForm';
// import { useForm } from "react-hook-form";
const Navbar = React.lazy(() => import('../Shared/Navbar/Navbar'));

const Admission = () => {

    // const { register, handleSubmit } = useForm();
    // const onSubmit = data => console.log(data);


    return (
        <div>
            <Navbar />
            <h2 style={{ marginTop: '5rem' }} className='text-center'>Admission</h2>
            {/* <MultiStepForm /> */}

            {/* <form onSubmit={handleSubmit(onSubmit)}>
                
                <input {...register("exampleRequired", { required: true })} />
                
                

                <input type="submit" />
            </form> */}

        </div>
    );
};

export default Admission;