import React from 'react';
import {PieChart, Pie, Cell} from 'recharts';
import {doughnutGraphStyle, textStyle, graphStyle} from './InvestitionSummary.styles';

interface DoughnutGraphProps {
    total: number;
    capital: number;
}

export const DoughnutGraph: React.FC<DoughnutGraphProps> = ({total, capital}) => {
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
                <p>Przewidywany zysk:</p>
                <p>{(total - capital).toFixed(2)} PLN</p>
                <p>Twoje wpłaty:</p>
                <p>{capital} PLN</p>
            </div>
            <PieChart width={200} height={200} className={graphStyle}>
                <Pie data={data} dataKey="value" innerRadius={80} outerRadius={100}>
                    <Cell key={data[0].name} fill="red" />
                    <Cell key={data[1].name} fill="green" />
                </Pie>
            </PieChart>
        </div>
    );
};
