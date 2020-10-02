import React from 'react';
import './globalStyles';
import {Loader} from './common/Loader';

export const App = () => {
    return (
        <>
            <Loader />
            <h3 className="hover">hover me</h3>
        </>
    );
};
