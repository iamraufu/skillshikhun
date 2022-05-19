import React, {useEffect} from 'react';

const User = () => {
    
    const phone = localStorage.getItem('phone');

    useEffect(() => {
        fetch(`http://skillshikhun.herokuapp.com/users/phone/${phone}`)
            .then(res => res.json())
            .then(data => console.log(data))
    },[phone])

    return (
        <div style={{margin:'8rem'}}>
            <h1>User's phone is {phone}</h1>
        </div>
    );
};

export default User;