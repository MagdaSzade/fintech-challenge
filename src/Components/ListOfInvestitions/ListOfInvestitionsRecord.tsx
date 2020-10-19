import {Button} from '@material-ui/core';
import React from 'react';
import {investition} from '../../helpers/types';
import {recordContainerStyle, logoStyle} from './ListOfInvestitions.styles';

interface RecordProps {
    data: investition;
}

export const Record: React.FC<RecordProps> = ({data}) => {
    return (
        <div className={recordContainerStyle}>
            <img className={logoStyle} src={data.logoUrl} alt={`${data.companyName} logo`} />
            <div>
                <p>{data.companyName}</p>
                <p>{data.type}</p>
            </div>
            <div>
                <p>Pierwsza wpłata: {data.initialCapital}PLN</p>
                <p>Wpłaty regularne co: {data.depositFrequency}</p>
                <p>Wartość regularnych wpłat: {data.additionalContribution}PLN</p>
            </div>
            <div>
                <p>Przewidywany zysk: {data.returnRate}%</p>
                <p>Czas trwania inwestycji: {data.duration} miesięcy</p>
            </div>
            <Button>Dodaj do koszyka</Button>
        </div>
    );
};
