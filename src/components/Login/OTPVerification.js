import React from 'react';
import { useForm } from "react-hook-form";

const OTPVerification = () => {

    const { register, handleSubmit, formState:{errors}} = useForm();

    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
      
      
      <input type='tel' maxLength='4' {...register("otp", { required: true })} />
      <br />
      {errors.otp && <span>This field is required</span>}
      <br />
      <input type="submit" />
    </form>
    );
};

export default OTPVerification;