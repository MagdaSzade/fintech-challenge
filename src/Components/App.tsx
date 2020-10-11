import React from 'react';
import './globalStyles';
import {Header} from './Header/Header';
import {FormContainer} from './FormContainer/FormContainer';

export const App = () => {
    return (
        <div className="conteiner">
            <div className="content-conteiner">
                <Header />
                <FormContainer />
            </div>
        </div>
    );
};
