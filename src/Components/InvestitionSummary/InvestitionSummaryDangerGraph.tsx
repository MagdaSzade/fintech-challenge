import React from 'react';
import {Slider} from '@material-ui/core';
import {marks} from './InvestitionSummary.helpers';
import {dangerGraphStyle} from './InvestitionSummary.styles';

interface DangerGraphProps {
    dangerMark: number;
}

export const DangerGraph: React.FC<DangerGraphProps> = ({dangerMark}) => {
    return (
        <div className={dangerGraphStyle}>
            <p>Poziom ryzyka dla twojej inwestycji wynosi:</p>
            <Slider value={dangerMark} marks={marks} min={1} max={7} />
        </div>
    );
};
