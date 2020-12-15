import React, {useEffect, useState} from 'react';
import {AreaChart, Area, XAxis, YAxis, Tooltip} from 'recharts';
import {useWindowSize} from 'react-use-size';
import {CSS_COLORS} from '../../helpers/cssConsants';
import {chartStyle} from './DisplayInvestition.styles';

interface DisplayInvestitionProps {
    data: Array<any>;
}

export const DisplayInvestition: React.FC<DisplayInvestitionProps> = ({data}) => {
    const [graphWidth, setGraphWidth] = useState(0);
    const {width} = useWindowSize();

    useEffect(() => {
        if (width > 660) {
            setGraphWidth(600);
        } else {
            setGraphWidth(width - 18);
        }
        console.log(width);
    }, [width]);

    const displayAsCurrency = (inputValue: any): string => {
        return typeof inputValue === 'number' ? inputValue.toLocaleString('pl-PL', {style: 'currency', currency: 'PLN'}) : inputValue;
    };

    return (
        <div className={chartStyle}>
            <AreaChart width={graphWidth} height={graphWidth / 2} data={data} margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={CSS_COLORS.CAPITAL} stopOpacity={0.8} />
                        <stop offset="95%" stopColor={CSS_COLORS.CAPITAL} stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={CSS_COLORS.PROFIT} stopOpacity={0.8} />
                        <stop offset="95%" stopColor={CSS_COLORS.PROFIT} stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis interval="preserveEnd" dataKey="name" stroke={CSS_COLORS.SCALE} />
                <YAxis
                    mirror={true}
                    tickFormatter={tick => displayAsCurrency(Math.ceil(tick / 1000) * 1000)}
                    stroke={CSS_COLORS.SCALE}
                    domain={[data[0].depositValue / 2, data[data.length - 1].totalProfit + 1000]}
                />
                <Tooltip formatter={displayAsCurrency} />
                <Area
                    type="monotone"
                    name="wartość inwestycji"
                    dataKey="totalProfit"
                    stroke={CSS_COLORS.PROFIT}
                    fillOpacity={1}
                    fill="url(#colorPv)"
                />
                <Area
                    type="monotone"
                    name="wkład własny"
                    dataKey="depositValue"
                    stroke={CSS_COLORS.PROFIT}
                    fillOpacity={1}
                    fill="url(#colorUv)"
                />
            </AreaChart>
        </div>
    );
};
