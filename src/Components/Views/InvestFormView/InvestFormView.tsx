import {cx} from 'emotion';
import React from 'react';
import {useBasicInvestReturnRate} from '../../../hooks/investitions/useBasicInvestReturnRate';
import {BasicForm} from '../../BasicForm/BasicForm';
import {DisplayInvestition} from '../../DisplayInvestition/DisplayInvestition';
import {componentBackgroundStyle} from '../../globalStyles';
import {InvestitionSummary} from '../../InvestitionSummary/InvestitionSummary';
import {containerStyle, flex, graphStyle, span2} from './InvestFormView.styles';

export const InvestFormView: React.FC = () => {
    const {
        investitionRetunData: {total, capital, riskFactor, data},
        setNewInvestistion,
    } = useBasicInvestReturnRate();

    return (
        <div className={containerStyle}>
            <div className={componentBackgroundStyle}>
                <BasicForm onSubmit={setNewInvestistion} />
            </div>
            <div className={cx(componentBackgroundStyle, flex)}>
                <InvestitionSummary total={total} capital={capital} riskFactor={riskFactor} />
            </div>
            <div className={cx(componentBackgroundStyle, span2, graphStyle)}>
                <DisplayInvestition data={data} />
            </div>
        </div>
    );
};
