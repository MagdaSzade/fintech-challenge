import React from 'react';
import {cssColors} from '../../helpers/cssConsants';
//import { returnRate } from '../../helpers/returnRateOFBasicInvest';
import {AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts';

interface DisplayInvestitionProps {
    data: Array<any>;
}

export const DisplayInvestition: React.FC<DisplayInvestitionProps> = ({data}) => {
    return (
        <AreaChart width={500} height={250} data={data} margin={{top: 10, right: 30, left: 0, bottom: 0}}>
            <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={cssColors.capital} stopOpacity={0.8} />
                    <stop offset="95%" stopColor={cssColors.capital} stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={cssColors.profit} stopOpacity={0.8} />
                    <stop offset="95%" stopColor={cssColors.profit} stopOpacity={0} />
                </linearGradient>
            </defs>
            <XAxis dataKey="name" stroke={cssColors.scale} />
            <YAxis stroke={cssColors.scale} />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="totalProfit" stroke={cssColors.profit} fillOpacity={1} fill="url(#colorPv)" />
            <Area type="monotone" dataKey="depositValue" stroke={cssColors.capital} fillOpacity={1} fill="url(#colorUv)" />
        </AreaChart>
    );
};
