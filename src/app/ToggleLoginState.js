'use client'
import React, { createContext, useState } from 'react';

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const [loginStatus, setLoginStatus] = useState(false);
    const [user, setUser] = useState('');

    return (
        <MyContext.Provider value={{ loginStatus, setLoginStatus, user, setUser }}>
            {children}
        </MyContext.Provider>
    );
};
