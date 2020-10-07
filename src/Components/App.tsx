import React from 'react';
import './globalStyles';
import {Header} from './Header/Header';
import {FormConteiner} from './FormContainer/FormConteiner';

export const App = () => {
    return (
        <div className="conteiner">
            <div className="content-conteiner">
                <Header />
                <FormConteiner />
            </div>
        </div>
    );
};
