import React from 'react';
import {BasicForm} from '../BasicForm/BasicForm';
import {DisplayInvestition} from '../DisplayInvestition/DisplayInvestition';
import {InvestitionSummary} from '../InvestitionSummary/InvestitionSummary';
import {useBasicInvestReturnRate} from '../../hooks/investitions/useBasicInvestReturnRate';
import {containerStyle, backgroundStyle, graphStyle, flex} from './FormContainer.styles';
import {Button} from '@material-ui/core';

export const FormContainer: React.FC = () => {
    const {
        investitionRetunData: {total, capital, riskFactory, data},
        setNewInvestistion,
    } = useBasicInvestReturnRate();

    return (
        <div className={containerStyle}>
            <div className={backgroundStyle}>
                <BasicForm onSubmit={setNewInvestistion} />
            </div>
            <div className={`${backgroundStyle} ${flex}`}>
                <InvestitionSummary total={total} capital={capital} dangerMark={riskFactory} />
                <Button type="button" variant="contained">
                    Przejdź do inwestycji
                </Button>
            </div>
            <div className={`${backgroundStyle} ${graphStyle}`}>
                <DisplayInvestition data={data} />
            </div>
        </div>
    );
};
