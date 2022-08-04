import React
// , {useEffect} 
from 'react';
// import { useParams } from 'react-router-dom';

const User = () => {
    
    // const username = useParams();
    // console.log(username);

    // useEffect(() => {
    //     fetch(`https://skillshikhun.herokuapp.com/users/phone/${phone}`)
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // },[phone])

    return (
        <div 
        // style={{margin:'8rem'}}
        >
            <h1>EFTYKHAR RAHMAN</h1>
            {/* <h1>User's phone is {phone}</h1> */}
        </div>
    );
};

export default User;