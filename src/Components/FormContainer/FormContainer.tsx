import React, {useEffect} from 'react';
import {BasicForm} from '../BasicForm/BasicForm';
import {useBasicInvestReturnRate} from '../../hooks/useBasicInvestReturnRate';
import {containerStyle, displayValueStyle, backgroundStyle} from './FormContainer.styles';

export const FormContainer: React.FC = () => {
    const {investition, setNewInvestistion} = useBasicInvestReturnRate();

    //for now -> next step make display value and graph
    useEffect(() => {
        console.log(investition);
    });

    return (
        <div className={containerStyle}>
            <div className={backgroundStyle}>
                <BasicForm onSubmit={setNewInvestistion} />
            </div>
            <div className={displayValueStyle}>
                <div className={backgroundStyle}></div>
                <div className={backgroundStyle}>Placeholder for graph</div>
            </div>
        </div>
    );
};
