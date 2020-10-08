import React from 'react';
import {BasicForm} from '../BasicForm/BasicForm';
import {conteiner, displayValue, background} from './FormConteiner.styles';

export const FormConteiner: React.FC = () => {
    return (
        <div className={conteiner}>
            <div className={background}>
                <BasicForm />
            </div>
            <div className={displayValue}>
                <div className={background}>Placeholder for display value</div>
                <div className={background}>Placeholder for graph</div>
            </div>
        </div>
    );
};
