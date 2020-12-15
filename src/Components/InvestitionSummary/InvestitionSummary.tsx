import React from 'react';
import {PieChart, Pie, Cell} from 'recharts';
import {CSS_COLORS} from '../../helpers/cssConsants';
import {doughnutGraphStyle, textStyle, graphStyle, pStyle} from './InvestitionSummary.styles';

interface InvestitionSummaryProps {
    riskFactor: number;
    total: number;
    capital: number;
}

export const InvestitionSummary: React.FC<InvestitionSummaryProps> = ({total, capital}) => {
    const data = [
        {
            name: 'Twoje wpłaty',
            value: capital,
        },
        {
            name: 'Zysk',
            value: total - capital,
        },
    ];

    return (
        <div className={doughnutGraphStyle}>
            <div className={textStyle}>
                <p className={pStyle}>Do wypłaty:</p>
                <p className={pStyle}>
                    <b>{total.toLocaleString('pl-PL', {style: 'currency', currency: 'PLN'})}</b>
                </p>
                <p className={pStyle}>Przewidywany zysk:</p>
                <p className={pStyle}>
                    <b>{(total - capital).toLocaleString('pl-PL', {style: 'currency', currency: 'PLN'})}</b>
                </p>
                <p className={pStyle}>Twoje wpłaty:</p>
                <p className={pStyle}>
                    <b>{capital.toLocaleString('pl-PL', {style: 'currency', currency: 'PLN'})}</b>
                </p>
            </div>
            <PieChart width={200} height={200} className={graphStyle}>
                <Pie data={data} dataKey="value" innerRadius={80} outerRadius={100}>
                    <Cell key={data[0].name} fill={CSS_COLORS.CAPITAL} />
                    <Cell key={data[1].name} fill={CSS_COLORS.PROFIT} />
                </Pie>
            </PieChart>
        </div>
    );
};
