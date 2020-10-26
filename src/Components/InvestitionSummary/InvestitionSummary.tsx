import React from 'react';
import {RiskGraph} from './InvestitionSummaryRiskGraph';
import {DoughnutGraph} from './InvestitionSummaryDoughnutGraph';
import {investitionSummaryStyle} from './InvestitionSummary.styles';
interface InvestitionSummaryProps {
    riskFactor: number;
    total: number;
    capital: number;
}

export const InvestitionSummary: React.FC<InvestitionSummaryProps> = ({riskFactor, total, capital}) => {
    return (
        <div className={investitionSummaryStyle}>
            <RiskGraph riskFactor={riskFactor} />
            <DoughnutGraph total={total} capital={capital} />
        </div>
    );
};
