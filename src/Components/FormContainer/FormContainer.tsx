import React from 'react';
import {BasicForm} from '../BasicForm/BasicForm';
import {DisplayInvestition} from '../DisplayInvestition/DisplayInvestition';
import {InvestitionSummary} from '../InvestitionSummary/InvestitionSummary';
import {Button} from '@material-ui/core';
import {useBasicInvestReturnRate} from '../../hooks/investitions/useBasicInvestReturnRate';
import {containerStyle, graphStyle, flex} from './FormContainer.styles';
import {componentBackgroundStyle} from '../globalStyles';
import {cx} from 'emotion';

export const FormContainer: React.FC = () => {
    const {
        investitionRetunData: {total, capital, riskFactory, data},
        setNewInvestistion,
    } = useBasicInvestReturnRate();

    return (
        <div className={containerStyle}>
            <div className={componentBackgroundStyle}>
                <BasicForm onSubmit={setNewInvestistion} />
            </div>
            <div className={cx(componentBackgroundStyle, flex)}>
                <InvestitionSummary total={total} capital={capital} dangerMark={riskFactory} />
                <Button type="button" style={{textDecoration: 'underline'}}>
                    Przejdź do inwestycji
                </Button>
            </div>
            <div className={cx(componentBackgroundStyle, graphStyle)}>
                <DisplayInvestition data={data} />
            </div>
        </div>
    );
};
