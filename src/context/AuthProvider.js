import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';
// import usePhone from '../hooks/usePhone';

export const AuthContext = createContext();
// export const UserContext = createContext();

const AuthProvider = ({ children }) => {
    const allContext = useFirebase();
    // const {userPhone} = usePhone();


    return (
        <AuthContext.Provider value={allContext}>
            {/* <UserContext.Provider value={userPhone}> */}
                {children}
            {/* </UserContext.Provider> */}
        </AuthContext.Provider>
    );
};

export default AuthProvider;