import React from 'react';
// import MultiStepForm from '../MultiStepForm/MultiStepForm';
import { useForm } from "react-hook-form";
const Navbar = React.lazy(() => import('../Shared/Navbar/Navbar'));

const Admission = () => {

    const api_key = 'H8w2sI5oD8vDoZ153ET6FCP05X7pEYU7ydMZapzu';
    const sender_id = 'S.Shikhun';
    const message = `For Skill Shikhun, your verification code is: `;
    const sender = `01611404405`;
    const url = `https://api.sms.net.bd/sendsms?api_key=${api_key}&sender_id=${sender_id}&msg=${message}&to=88${sender}`;

    console.log(url);

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);


    return (
        <div>
            <Navbar />
            <h2 style={{ marginTop: '5rem' }} className='text-center'>Admission</h2>
            {/* <MultiStepForm /> */}

            <form onSubmit={handleSubmit(onSubmit)}>
                
                <input {...register("exampleRequired", { required: true })} />
                
                

                <input type="submit" />
            </form>

        </div>
    );
};

export default Admission;