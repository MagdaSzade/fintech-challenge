import React from 'react';
import {DangerGraph} from './InvestitionSummaryDangerGraph';
import {DoughnutGraph} from './InvestitionSummaryDoughnutGraph';
import {investitionSummaryStyle} from './InvestitionSummary.styles';
interface InvestitionSummaryProps {
    dangerMark: number;
    total: number;
    capital: number;
}

export const InvestitionSummary: React.FC<InvestitionSummaryProps> = ({dangerMark, total, capital}) => {
    return (
        <div className={investitionSummaryStyle}>
            <DangerGraph dangerMark={dangerMark} />
            <DoughnutGraph total={total} capital={capital} />
        </div>
    );
};
