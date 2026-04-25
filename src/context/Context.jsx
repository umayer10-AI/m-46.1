"use client"
import React, { createContext, useState } from 'react';

export const Data = createContext()

const Context = ({children}) => {

    const [c, setC] = useState('')
    const [a, setA] = useState([])

    return (
        <Data.Provider value={{c,setC,a,setA}}>
            {children}
        </Data.Provider>
    );
};

export default Context;