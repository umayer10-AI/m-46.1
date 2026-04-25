import { Data } from '@/context/Context';
import React, { useContext } from 'react';

const DetailNews = ({data}) => {

    const {setA} = useContext(Data)

    return (
        <div>
            {setA(data)}
        </div>
    );
};

export default DetailNews;