import React from 'react';
import {BasicForm} from '../BasicForm/BasicForm';
import {containerStyle, displayValueStyle, backgroundStyle} from './FormContainer.styles';

export const FormContainer: React.FC = () => {
    return (
        <div className={containerStyle}>
            <div className={backgroundStyle}>
                <BasicForm />
            </div>
            <div className={displayValueStyle}>
                <div className={backgroundStyle}>Placeholder for display value</div>
                <div className={backgroundStyle}>Placeholder for graph</div>
            </div>
        </div>
    );
};
