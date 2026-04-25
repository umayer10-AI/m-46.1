import Context from '@/context/Context';
import React from 'react';

const ProvidersPage = ({children}) => {
    return (
        <div>
            <Context>
                {children}
            </Context>
        </div>
    );
};

export default ProvidersPage;