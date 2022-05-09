import React from 'react';
import useAuth from '../../hooks/useAuth';
import {Navigate, Outlet, useLocation} from 'react-router-dom';
import usePhone from '../../hooks/usePhone';

const PrivateOutlet = () => {
    const {user} = useAuth();
    const {userPhone} = usePhone();
    const location = useLocation();

    return user.email || userPhone.phone ? <Outlet /> : <Navigate to= "/login" state={{ from: location }} replace />;
};

export default PrivateOutlet;