import React from 'react';
// import FreeClassRegistration from '../FreeClassRegistration/FreeClassRegistration';
// import MultiStepForm from '../MultiStepForm/MultiStepForm';
// import { useForm } from "react-hook-form";
const Navbar = React.lazy(() => import('../Shared/Navbar/Navbar'));

const Admission = () => {

    // const { register, handleSubmit } = useForm();
    // const onSubmit = data =>;
    return (
        <div style={{ minHeight: '100vh', backgroundColor: 'rgb(243, 245, 249)' }}>
            <Navbar />
            <h2 style={{ marginTop: '5rem' }} className='text-center'>Admission</h2>
            {/* <MultiStepForm /> */}

            {/* <FreeClassRegistration /> */}

        </div>
    );
};

export default Admission;