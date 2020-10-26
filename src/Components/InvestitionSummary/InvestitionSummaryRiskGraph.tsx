import React from 'react';
import {Slider} from '@material-ui/core';
import {marks} from './InvestitionSummary.helpers';
import {dangerGraphStyle} from './InvestitionSummary.styles';

interface RiskGraphProps {
    riskFactor: number;
}

export const RiskGraph: React.FC<RiskGraphProps> = ({riskFactor}) => {
    return (
        <div className={dangerGraphStyle}>
            <p>Poziom ryzyka dla twojej inwestycji wynosi:</p>
            <Slider value={riskFactor} marks={marks} min={1} max={7} />
        </div>
    );
};
