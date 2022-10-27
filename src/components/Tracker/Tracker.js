import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Tracker = ({props}) => {
    const location = useLocation();

    const token = localStorage?.getItem('token');
    const phone = localStorage?.getItem('phone');

    const trackingDetails = {
        phone: phone,
        course: props?.name,
        visited_route: location?.pathname
    }

    useEffect(()=>{ 
        if(token){
            fetch('https://backend-skill-shikhun.herokuapp.com/trackLoggedInUsers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(trackingDetails)
            })
            .then(res => res.json())
        }
        else{
            fetch('https://backend-skill-shikhun.herokuapp.com/trackLoggedOutUsers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(trackingDetails)
            })
            .then(res => res.json())
        }
        // eslint-disable-next-line
    },[location.pathname])

    return (
        <>
        </>
    );
};

export default Tracker;