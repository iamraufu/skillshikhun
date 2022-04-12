import React from 'react';

const UserForm = () => {

    let state = {
        currentStep: 1,
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        otp: '',
        otp_sent: false,
        otp_verified: false
    }

    // Proceed to next step
    const nextStep = () => {
        const { currentStep } = state;
        state.currentStep = currentStep + 1;
    }

    // Go back to prev step
    const prevStep = () => {
        const { currentStep } = state;
        state.currentStep = currentStep - 1;
    }

    // Handle fields change
    const handleChange = input => e => {
        state[input] = e.target.value;
    }

    const {step} = state;
    const {firstName, lastName, email, phoneNumber, password, confirmPassword, otp, otp_sent, otp_verified} = state;
    const values = {firstName, lastName, email, phoneNumber, password, confirmPassword, otp, otp_sent, otp_verified};

    switch(step){
        case 1:
            return (
                <div>
                    <h1>User Form</h1>
                    <form>
                        <input
                            placeholder="First Name"
                            value={firstName}
                            onChange={handleChange('firstName')}
                        />
                        <input
                            placeholder="Last Name"
                            value={lastName}
                            onChange={handleChange('lastName')}
                        />
                        <input
                            placeholder="Email"
                            value={email}
                            onChange={handleChange('email')}
                        />
                        <input
                            placeholder="Phone Number"
                            value={phoneNumber}
                            onChange={handleChange('phoneNumber')}
                        />
                        <input
                            placeholder="Password"
                            value={password}
                            onChange={handleChange('password')}
                        />
                        <input
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={handleChange('confirmPassword')}
                        />
                        <button onClick={nextStep}>Next</button>
                    </form>
                </div>
            )
        case 2:
            return (
                <div>
                    <h1>User Form</h1>
                    <form>
                        <input
                            placeholder="OTP"
                            value={otp}
                            onChange={handleChange('otp')}
                        />
                        <button onClick={nextStep}>Next</button>
                    </form>
                </div>
            )
        case 3:
            return (
                <div>
                    <h1>Sucessfully Completed</h1>
                </div>
            )
            default:
                return (
                    

    }
};

export default UserForm;