import React from 'react';
import {Investition} from '../../helpers/types';
import {recordStyle, logoStyle} from './ListOfInvestitions.styles';
import {displayFrequency} from './ListOfInvestitions.helpers';

interface RecordProps {
    data: Investition;
}

export const Record: React.FC<RecordProps> = ({data}) => {
    return (
        <div className={recordStyle}>
            <img className={logoStyle} src={data.logoUrl} alt={`${data.companyName} logo`} />
            <div>
                <p>
                    <b>{data.companyName}</b>
                </p>
                <p>{data.type}</p>
            </div>
            <div>
                <p>Pierwsza wpłata:</p>
                <p>
                    <b>{data.initialCapital.toLocaleString('pl-PL', {style: 'currency', currency: 'PLN'})}</b>
                </p>
            </div>
            <div>
                <p>
                    Zysk: <b>{data.returnRate}%</b>
                </p>
                <p>Czas: {data.duration} miesięcy</p>
            </div>
            <div>
                <p>{displayFrequency(data.depositFrequency, data.additionalContribution)}</p>
            </div>
        </div>
    );
};
