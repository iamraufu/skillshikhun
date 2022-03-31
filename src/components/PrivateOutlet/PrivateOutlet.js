import React from 'react';
import useAuth from '../../hooks/useAuth';
import {Navigate, Outlet} from 'react-router-dom';

const PrivateOutlet = () => {
    const {user} = useAuth();

    return user.email ? <Outlet /> : <Navigate to= "/" />;
};

export default PrivateOutlet;