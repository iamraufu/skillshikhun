import React from 'react';
import useAuth from '../../hooks/useAuth';
import {Navigate, Outlet, useLocation} from 'react-router-dom';

const PrivateOutlet = () => {
    const {user} = useAuth();
    const location = useLocation();

    return  user.email || localStorage.getItem('token') ? <Outlet /> : <Navigate to= "/login-checkout-selected-course"  state={{ from: location }} replace />;
};

export default PrivateOutlet;